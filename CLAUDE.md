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

This is a static marketing website for piano instructor Dan Tremblay, built with **Astro 5** (5.18) and **Tailwind CSS 3** (via `@astrojs/tailwind`, the only integration). It is deployed to Netlify as fully static output (`output: 'static'`) — the contact form relies on Netlify Forms, which only parses static HTML.

When checking Astro docs, note that docs.astro.build documents the latest major version; some APIs differ in 5.x (e.g. the Fonts API is only `experimental.fonts` in 5.x). Verify against the installed types in `node_modules/astro` when in doubt.

### Key patterns

- **File-based routing**: Pages in `src/pages/` map directly to URLs: `index`, `about`, `contact`, `production`, `live` and `404`.
- **Layout composition**: `BaseLayout.astro` wraps all pages. It accepts `title`, optional `description` and optional `solidNav` props, emits the canonical link, self-hosted font faces and GA4, and mounts `Nav` and `Footer`.
- **Scoped CSS in `.astro` files**: Heavy page-level styling lives in `<style>` blocks inside each `.astro` file rather than in utility classes. `src/styles/global.css` holds the Tailwind directives plus a small `@layer base` (CSS custom properties and `html`/`body`/`img`/`a` resets).
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

### Button classes (defined in each page's scoped styles)

`.btn-filled`, `.btn-ghost`, `.btn-navy`, `.btn-outline-white` — reuse these when adding new sections rather than inventing new button styles. Because styles are scoped, a page must define the button classes it uses (see `index.astro` for the reference definitions).

### Responsive breakpoints

Pages use `@media (max-width: 960px)` and `@media (max-width: 640px)`. The Nav shows a hamburger menu below 640px (toggled via inline JS in `Nav.astro`).

## Performance (keep Lighthouse scores intact)

Accessibility, Best Practices and SEO are at 100 and must stay there. These choices were made for performance; don't undo them without measuring:

- **CSS is inlined** (`build.inlineStylesheets: 'always'` in `astro.config.mjs`), so no page has a render-blocking stylesheet.
- **Fonts are self-hosted**, not loaded from Google Fonts. `BaseLayout.astro` imports the woff2 files from `@fontsource-variable/cormorant-garamond` and `@fontsource-variable/dm-sans` (latin subset) and writes `@font-face` rules with fixed weights that mirror what Google Fonts served, so rendering matches the original design. Only faces actually used are declared (Cormorant 300/400/600 + italic 400; DM Sans 300/400/500). To use a new weight or style, add a face there. The two upright files are preloaded; removing the preloads caused layout shift (CLS) in testing.
- **GA4 is deferred**: the inline `gtag('config')` stub in `<head>` queues the page view, and `gtag.js` is injected only after the `load` event (via `requestIdleCallback`). Don't add it back as a `<script src>` in `<head>`.
- **Hero images**: `src/components/HeroImage.astro` renders the hero photo as an `astro:assets` `<Picture>` (AVIF/WebP, responsive widths, `loading="eager"`, `fetchpriority="high"`) inside each page's `*-hero-bg` div. It is the LCP element — never lazy-load it or turn it back into a CSS `background-image`.
- **Images need explicit dimensions or a CSS `aspect-ratio`** so CLS stays at 0. Below-the-fold photos should use `<Picture>`/`<Image>` with `loading="lazy"` and a `sizes` that matches the drawn width (with `object-fit: cover`, the drawn width can be larger than the box).

### Images

- Optimized images (processed by `astro:assets`) live in `src/assets/images/` and are imported in frontmatter.
- Other static images live in `public/images/` and are referenced as `/images/filename`. `piano.jpg` and `dan-tremblay.jpeg` are kept there too so old URLs keep working, but pages use the `src/assets/` copies.
