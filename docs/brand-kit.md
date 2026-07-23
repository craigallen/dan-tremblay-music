# Dan Tremblay Music — Brand Strategy & Identity Brief

A brand strategy brief for Dan Tremblay Music, grounded entirely in what's already live on the site (`CLAUDE.md`, `tailwind.config.mjs`, current copy in `src/pages/`, and the existing mark at `public/images/dt-white.png`). This documents the system as it exists — it does not propose a new logo, mark, or color/type system.

## 1. Brand Strategy

**Category:** Independent music education + composition/production — a piano instructor who is also a working composer and producer.

**Audience:** Parents of young students, adult beginners, and teens in the Stittsville/Ottawa area choosing a piano teacher; secondarily, composers/audio brands who know Dan through YouTube/Twitch and his production work.

**Personality:** Warm but credentialed. Not a hobbyist teacher — an award-winning instructor (8× provincial awards, 30+ years) who also releases cinematic albums and licenses music worldwide. The brand has to hold two registers at once: approachable piano-lesson provider, and serious composer/producer.

**Trust level:** High. Parents are trusting Dan with their kids' development; the site already leans on badges (awards, years, published composer, YouTube creator) to establish credibility fast.

**Core metaphor:** *The score and the signal* — sheet music (structure, discipline, decades of teaching) resolving into performance and production (the cinematic/electronic work). Copy and content choices should read as both at once: a teacher parents trust, and a working musician whose ear you'd trust too.

**What the brand should avoid:** cutesy music-school clip art (treble clefs, piano-key borders, rainbow gradients), anything that reads as a hobby studio rather than a professional practice, and anything that skews too corporate/edtech (this is a person, not a platform).

## 2. Existing Mark

The site already has a mark: a serif **D + T** monogram (`public/images/dt-white.png`), rendered white, used at 44×44px in `Nav.astro` and `Footer.astro`, and as the site favicon (`BaseLayout.astro`). This brief does not propose a new logo — any new collateral (thumbnails, social avatars, email headers) should reuse this exact file.

**Using it:** it's a white-only asset, so it only works on a dark ground — navy or brand-blue, exactly as it already sits in the nav bar and footer. It doesn't work directly on the light `site-bg` canvas without a dark chip behind it. Don't recolor it, redraw it, vectorize it, or stretch it off its square proportion.

## 3. Visual Mode

Closest to **Luxury / Editorial**, adapted for a *light* canvas rather than dark, since the production site already commits to a pale, airy palette rather than a dark-tech one. Borrow the mode's restraint and serif-led typography; skip its ivory/paper-grain material cues in favor of the site's existing cool, glassy tone.

**Mood:** refined, calm, quietly accomplished — closer to a recital hall program than a startup deck.

## 4. Color System (existing tokens — do not introduce new colors)

| Token | Value | Role |
|---|---|---|
| `navy` | `#050B1B` | Ink — wordmark, body text on light, dark section backgrounds |
| `brand` | `#4B5E92` | Primary accent — the "signal" color; used for links, rules, active states, CTA buttons |
| `site-bg` | `#EFF5FC` | Base canvas — pale, cool, airy |
| White | `#FFFFFF` | Card surfaces, negative space |

No new accent color is needed. If a second accent is ever required (e.g. for a badge or CTA highlight), pull a warmer neutral rather than adding a new hue — the brand's discipline is in staying to a two-color system (navy + brand-blue) on a near-white field.

## 5. Typography

- **Display:** Cormorant Garamond — already used for names, headlines (`hero-name`, `section-h`). Keep large, generously spaced, sentence case. This is the "recital program" voice.
- **Sans:** DM Sans — body copy, eyebrows, badges, nav. Carries the credential/detail information (awards, dates, service names).
- **Pairing rule already established by the site:** serif for identity/emotion (name, headline), sans for proof/utility (badges, nav, buttons). Any new brand collateral should keep this split rather than mixing serif into UI chrome.

## 6. Tagline Direction

Short options in the site's existing voice (award-forward, craft-forward, not generic edtech):

- "Thirty years at the keys."
- "Where the score becomes the sound."
- "Taught by ear. Backed by decades."

Avoid generic "unlock your potential" edtech phrasing — the existing copy is specific and credential-led (awards, years, named collaborators), and the tagline should match that specificity rather than go abstract.

## 7. Applications

- **Favicon / app icon:** `dt-white.png` alone, no wordmark — already implemented.
- **Nav lockup:** `dt-white.png` + "Dan Tremblay" text links — already implemented in `Nav.astro`.
- **Badges/awards strip:** reuse the existing `.badge` component style — pill shape, sans, on `site-bg` or navy depending on section.
- **Social/YouTube/Twitch avatar:** `dt-white.png` on a navy ground — needs to read at 48px given Dan's existing YouTube/Twitch presence.
- **Email headers:** `dt-white.png` on a small navy chip (since the email body sits on the light canvas) alongside the "Dan Tremblay" wordmark.

## 8. Why this holds together

Every element ties back to the two-register brand truth: a piano teacher (structure, decades, awards) who is also a composer/producer (sound, licensing, cinematic work). The color system stays disciplined to the tokens already live on the site; the type pairing keeps the existing serif-for-identity / sans-for-proof split; the existing D+T mark carries forward unchanged. Nothing here requires new colors, new fonts, or a new mark — it's a documentation layer over what's already built.
