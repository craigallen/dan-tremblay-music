# Dan Tremblay Music

Static marketing website for piano instructor Dan Tremblay, built with [Astro 4](https://astro.build) and [Tailwind CSS 3](https://tailwindcss.com). Deployed on Vercel.

## Tech Stack

- **Framework**: Astro 4
- **Styling**: Tailwind CSS 3 + scoped component styles
- **Fonts**: Cormorant Garamond (display), DM Sans (body) via Google Fonts
- **Email**: Resend
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
```

Node 20.x is required.

## Project Structure

```
src/
  pages/
    index.astro       # Home page
    about.astro       # About page
    contact.astro     # Contact page
    live.astro        # Live performance page
    production.astro  # Production services page
    api/              # API routes (e.g. contact form)
  Footer.astro        # Site footer
  Nav.astro           # Navigation with mobile hamburger menu
  styles/
    global.css        # Tailwind directives
public/
  images/             # Static images
tailwind.config.mjs   # Design tokens
```

## Design Tokens

| Token | Value |
|---|---|
| `navy` | `#050B1B` |
| `brand` | `#4B5E92` |
| `site-bg` | `#EFF5FC` |
| Max width | 1180px |

## Responsive Breakpoints

- `@media (max-width: 960px)` — tablet
- `@media (max-width: 640px)` — mobile (hamburger nav activates)
