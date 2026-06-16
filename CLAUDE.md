# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
```

There is no test runner configured for this project.

## Architecture

This is a static marketing website for piano instructor Dan Tremblay, built with **Astro 4** and **Tailwind CSS 3**.

### Key patterns

- **File-based routing**: Pages in `src/pages/` map directly to URLs. Currently only `index.astro` exists; the nav and footer reference `/about`, `/contact`, `/production`, and `/live` which are not yet built.
- **Layout composition**: `BaseLayout.astro` wraps all pages. It accepts `title` and optional `description` props, loads Google Fonts (Cormorant Garamond + DM Sans), and mounts `Nav` and `Footer`.
- **Scoped CSS in `.astro` files**: Heavy page-level styling lives in `<style>` blocks inside each `.astro` file rather than in utility classes. `src/styles/global.css` only contains Tailwind directives.
- **Static content**: All copy, testimonials, and images are hardcoded — no CMS or data fetching.

### Design tokens (tailwind.config.mjs)

| Token | Value |
|---|---|
| `navy` | `#050B1B` |
| `brand` | `#4B5E92` |
| `site-bg` | `#EFF5FC` |
| `font-display` | Cormorant Garamond |
| `font-sans` | DM Sans |
| Max width | 1180px |

### Button classes (defined in `index.astro` scoped styles)

`.btn-filled`, `.btn-ghost`, `.btn-navy`, `.btn-outline-white` — reuse these when adding new sections rather than inventing new button styles.

### Responsive breakpoints

Pages use `@media (max-width: 960px)` and `@media (max-width: 640px)`. The Nav shows a hamburger menu below 640px (toggled via inline JS in `Nav.astro`).

### Static assets

Images live in `public/images/` and are referenced as `/images/filename`. The `project/` directory contains design mockups and is not part of the build.
