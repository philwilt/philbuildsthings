import { chromium, devices } from 'playwright'
import path from 'node:path'
import fs from 'node:fs/promises'
import os from 'node:os'

const args = process.argv.slice(2)

const getArgValue = (flag, fallback) => {
  const match = args.find((arg) => arg.startsWith(`${flag}=`))
  return match ? match.split('=')[1] : fallback
}

const hasFlag = (flag) => args.includes(flag)

const baseUrl = process.env.SNAP_BASE_URL || 'http://localhost:3000'
const routesArg = getArgValue('--routes', '/,/projects,/printing')
const routes = routesArg
  .split(',')
  .map((route) => route.trim())
  .filter(Boolean)
const runName = getArgValue('--name', new Date().toISOString().replace(/[:.]/g, '-'))
const mobileMode = hasFlag('--mobile')
const outputDir = path.resolve('tmp', 'screenshots', runName)

const contexts = mobileMode
  ? [{ label: 'mobile', contextOptions: { ...devices['iPhone 13'] } }]
  : [
      { label: 'desktop', contextOptions: { viewport: { width: 1440, height: 1024 } } },
      { label: 'tablet', contextOptions: { viewport: { width: 1024, height: 1366 } } },
    ]

const sanitizeRoute = (route) => {
  if (route === '/') return 'home'
  return route.replace(/^\//, '').replace(/\//g, '-')
}

const waitForAppPaint = async (page) => {
  await page.waitForLoadState('networkidle')
  await page.waitForTimeout(500)
}

const getChromiumCandidates = async (baseDir) => {
  try {
    const entries = await fs.readdir(baseDir, { withFileTypes: true })
    const shellDirs = entries
      .filter((entry) => entry.isDirectory() && entry.name.startsWith('chromium_headless_shell-'))
      .map((entry) => path.join(baseDir, entry.name))

    return shellDirs.flatMap((dir) => [
      path.join(dir, 'chrome-headless-shell-mac-x64', 'chrome-headless-shell'),
      path.join(dir, 'chrome-headless-shell-mac-arm64', 'chrome-headless-shell'),
    ])
  } catch {
    return []
  }
}

const firstExistingPath = async (paths) => {
  for (const candidate of paths) {
    try {
      await fs.access(candidate)
      return candidate
    } catch {
      // Continue until we find the first existing executable path.
    }
  }

  return undefined
}

const resolveChromiumExecutable = async () => {
  if (process.env.PLAYWRIGHT_EXECUTABLE_PATH) {
    return process.env.PLAYWRIGHT_EXECUTABLE_PATH
  }

  const userCacheBase = path.join(os.homedir(), 'Library', 'Caches', 'ms-playwright')
  const localCacheBase = path.resolve('.playwright')

  const [userCandidates, localCandidates] = await Promise.all([
    getChromiumCandidates(userCacheBase),
    getChromiumCandidates(localCacheBase),
  ])

  return firstExistingPath([...userCandidates, ...localCandidates])
}

const run = async () => {
  await fs.mkdir(outputDir, { recursive: true })

  const executablePath = await resolveChromiumExecutable()
  const launchOptions = executablePath
    ? { headless: true, executablePath }
    : { headless: true }

  if (executablePath) {
    console.log(`Using Playwright browser executable: ${executablePath}`)
  }

  const browser = await chromium.launch(launchOptions)

  try {
    for (const ctx of contexts) {
      const context = await browser.newContext(ctx.contextOptions)
      const page = await context.newPage()

      for (const route of routes) {
        const url = `${baseUrl}${route}`
        await page.goto(url, { waitUntil: 'domcontentloaded' })
        await waitForAppPaint(page)

        const fileName = `${ctx.label}-${sanitizeRoute(route)}.png`
        const filePath = path.join(outputDir, fileName)

        await page.screenshot({ path: filePath, fullPage: true })
        console.log(`Saved ${filePath}`)
      }

      await context.close()
    }
  } finally {
    await browser.close()
  }
}

run().catch((err) => {
  console.error('Screenshot run failed:', err)
  process.exit(1)
})
