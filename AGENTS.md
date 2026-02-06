# Repository Guidelines

## Project Structure & Module Organization
- `src/` holds application code.
- `src/pages/` contains route-level views (`Home.tsx`, `Resume.tsx`, `Projects.tsx`).
- `src/components/` contains reusable UI pieces (e.g., `Navbar.tsx`, `Hero.tsx`).
- `src/App.tsx` defines routes; `src/main.tsx` is the entry point.
- `src/index.css` hosts Tailwind directives and minimal global styles.
- `public/` contains static assets served as-is (e.g., `vite.svg`).
- Config lives at repo root (`vite.config.ts`, `tailwind.config.js`, `tsconfig.json`, `amplify.yml`).

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run dev`: start the Vite dev server (defaults to port 3000).
- `npm run build`: run TypeScript checks and create a production build in `dist/`.
- `npm run preview`: serve the production build locally.
- `npm run lint`: run ESLint with zero warnings allowed.
- `npm run format`: format `src/**/*.{ts,tsx,css}` with Prettier.

## Coding Style & Naming Conventions
- TypeScript strict mode is enabled; prefer explicit types when helpful.
- Indentation is 2 spaces and line width is 100 characters (Prettier).
- Use single quotes and no semicolons (Prettier config).
- Style with Tailwind utility classes; avoid custom CSS unless necessary.
- Files use `PascalCase` for components (`Navbar.tsx`) and `camelCase` for hooks/vars.

## Testing Guidelines
- No test framework is currently configured. If you add tests, also add scripts and document how to run them.

## Commit & Pull Request Guidelines
- Commit messages are short, imperative summaries (e.g., “Update maker lab content”).
- Keep PRs focused; include a clear description of changes and any visual updates.
- If a change affects UI, include before/after screenshots or a short screen recording.

## Configuration & Deployment Notes
- Client-side env vars must be prefixed with `VITE_`; see `.env.example`.
- AWS Amplify deploys from `amplify.yml` and serves the `dist/` output.
