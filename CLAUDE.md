# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start Vite dev server on port 3000
npm run build    # TypeScript check + Vite production build to dist/
npm run preview  # Preview production build locally
npm run lint     # ESLint with strict settings (zero warnings allowed)
npm run format   # Format code with Prettier
```

## Architecture Overview

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS, deployed to AWS Amplify

**Project Structure:**
- `src/components/` - Reusable UI components (Navbar, Footer, Hero, Card, PlaceholderImage)
- `src/pages/` - Page-level components (Home, Resume, Projects)
- `src/App.tsx` - Main app with React Router v6 routing
- `src/main.tsx` - Entry point with BrowserRouter

**Routing:** React Router v6 with three routes: `/` (Home), `/resume`, `/projects`

**Styling:** Tailwind utility-first with custom `primary-*` color scale (sky blue gradient). Dark theme default (gray-900/gray-800 backgrounds).

## Code Style

- TypeScript strict mode enabled - explicit types required
- Prettier: 100-char lines, no semicolons, single quotes, trailing commas
- ESLint must pass with zero warnings before commits
- Tailwind classes for all styling - no custom CSS

## Environment Variables

Prefix with `VITE_` for client-side access. See `.env.example` for template.

## Deployment

AWS Amplify handles CI/CD. Build config in `amplify.yml` - runs `npm ci`, `npm run build`, deploys `dist/`.
