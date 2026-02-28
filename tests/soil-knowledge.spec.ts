import { test, expect, devices } from '@playwright/test'

// --- /systems ---

test.describe('/systems page', () => {
  test('renders and Soil Knowledge card links to /systems/soil-knowledge', async ({ page }) => {
    await page.goto('/systems')
    await expect(page.getByRole('heading', { name: /agentic systems/i })).toBeVisible()

    const card = page.getByRole('link', { name: /soil knowledge/i })
    await expect(card).toBeVisible()
    await card.click()
    await expect(page).toHaveURL('/systems/soil-knowledge')
  })
})

// --- /systems/soil-knowledge sections ---

test.describe('/systems/soil-knowledge page sections', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/systems/soil-knowledge')
  })

  test('renders the hero section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /soil knowledge/i }).first()).toBeVisible()
  })

  test('renders the How Soil Works section with graph', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /how soil works/i })).toBeVisible()
    // React Flow renders a canvas-like container with role="region" or a div with the rf class
    const ontologyGraph = page.locator('.react-flow').first()
    await expect(ontologyGraph).toBeVisible()
  })

  test('renders the How It Learns section with graph', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /how it learns/i })).toBeVisible()
    const pipelineGraph = page.locator('.react-flow').nth(1)
    await expect(pipelineGraph).toBeVisible()
  })

  test('renders the Features section', async ({ page }) => {
    // Scroll to bottom to ensure features section is in DOM
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    const features = page.locator('section').last()
    await expect(features).toBeVisible()
  })
})

// --- Graph hover interactions ---

test.describe('ontology graph hover interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/systems/soil-knowledge')
    // Wait for React Flow to finish rendering nodes
    await page.waitForSelector('[data-id="soil"]')
  })

  test('hovering the Soil System node shows a tooltip', async ({ page }) => {
    const coreNode = page.locator('[data-id="soil"]')
    await coreNode.hover()
    // Tooltip should appear with the node label
    await expect(page.getByText(/everything beneath your feet/i)).toBeVisible()
  })

  test('hovering a domain node shows its tooltip description', async ({ page }) => {
    const biologyNode = page.locator('[data-id="biology"]')
    await biologyNode.hover()
    await expect(page.getByText(/fungi|bacteria|worms/i)).toBeVisible()
  })

  test('hovering a concept node shows its tooltip', async ({ page }) => {
    const compactionNode = page.locator('[data-id="compaction"]')
    await compactionNode.hover()
    await expect(page.getByText(/squeezed too tight|heavy equipment/i)).toBeVisible()
  })

  test('hovering a connected node shows edge labels', async ({ page }) => {
    // pore_space connects to infiltration via "controls" — a causal edge
    const poreNode = page.locator('[data-id="pore_space"]')
    await poreNode.hover()
    // Target the HTML edge label overlay div specifically (not the tooltip connection span)
    const edgeLabel = page.locator('div.pointer-events-none.fixed').filter({ hasText: /^controls$/ })
    await expect(edgeLabel).toBeVisible()
  })

  test('hovering a node dims unrelated nodes', async ({ page }) => {
    const coreNode = page.locator('[data-id="soil"]')
    await coreNode.hover()

    // compaction is not directly connected to soil — its inner div should be dimmed to opacity 0.1
    const compactionInner = page.locator('[data-id="compaction"] > div').first()
    await expect(compactionInner).toHaveCSS('opacity', '0.1')
  })
})

// --- Pipeline graph hover interactions ---

test.describe('pipeline graph hover interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/systems/soil-knowledge')
    await page.waitForSelector('[data-id="vector_index"]')
  })

  test('hovering the Knowledge Index hub shows its tooltip', async ({ page }) => {
    const hub = page.locator('[data-id="vector_index"]')
    await hub.hover()
    await expect(page.getByText(/unified searchable soil knowledge/i)).toBeVisible()
  })

  test('hovering a source node shows an edge label', async ({ page }) => {
    const lectureNode = page.locator('[data-id="video_lecture"]')
    await lectureNode.hover()
    // Target the HTML edge label overlay div specifically
    const edgeLabel = page.locator('div.pointer-events-none.fixed').filter({ hasText: /^record$/ })
    await expect(edgeLabel).toBeVisible()
  })

  test('hovering a node shows its plain-language tooltip', async ({ page }) => {
    const retrieverNode = page.locator('[data-id="retriever"]')
    await retrieverNode.hover()
    await expect(page.getByText(/finds relevant soil knowledge/i)).toBeVisible()
  })
})

// --- Navbar responsive label ---

test.describe('navbar branding', () => {
  test('shows full brand name on desktop', async ({ page }) => {
    await page.goto('/')
    // Scope to the navbar span to avoid matching headings and footer
    await expect(page.locator('nav span.hidden.sm\\:inline')).toHaveText('Phil Builds Things')
  })

  test('shows abbreviated brand on mobile', async ({ browser }) => {
    const context = await browser.newContext({
      ...devices['Pixel 5'],
    })
    const page = await context.newPage()
    await page.goto('/')
    await expect(page.getByText('PBT')).toBeVisible()
    await expect(page.locator('span.sm\\:hidden')).toBeVisible()
    await context.close()
  })
})

// --- Mobile pinch-to-zoom ---

test.describe('mobile graph interactions', () => {
  test('ontology graph container is visible on mobile', async ({ browser }) => {
    const context = await browser.newContext({ ...devices['Pixel 5'] })
    const page = await context.newPage()
    await page.goto('/systems/soil-knowledge')
    const graph = page.locator('.react-flow').first()
    await expect(graph).toBeVisible()
    // Graph should have a meaningful height (not collapsed)
    const box = await graph.boundingBox()
    expect(box?.height).toBeGreaterThan(200)
    await context.close()
  })

  test('pipeline graph container is visible on mobile', async ({ browser }) => {
    const context = await browser.newContext({ ...devices['Pixel 5'] })
    const page = await context.newPage()
    await page.goto('/systems/soil-knowledge')
    const graph = page.locator('.react-flow').nth(1)
    await expect(graph).toBeVisible()
    const box = await graph.boundingBox()
    expect(box?.height).toBeGreaterThan(200)
    await context.close()
  })
})
