# Dan Tremblay Music — Brand Strategy & Identity Brief

A creative brief for the Dan Tremblay Music brand, grounded in the existing site (`CLAUDE.md`, `tailwind.config.mjs`, and current copy in `src/pages/`). Intended for a designer or future logo/identity work — no image-generation tool was available in this session, so this is the strategic brief that would normally accompany a generated brand-kit board.

## 1. Brand Strategy

**Category:** Independent music education + composition/production — a piano instructor who is also a working composer and producer.

**Audience:** Parents of young students, adult beginners, and teens in the Stittsville/Ottawa area choosing a piano teacher; secondarily, composers/audio brands who know Dan through YouTube/Twitch and his production work.

**Personality:** Warm but credentialed. Not a hobbyist teacher — an award-winning instructor (8× provincial awards, 30+ years) who also releases cinematic albums and licenses music worldwide. The brand has to hold two registers at once: approachable piano-lesson provider, and serious composer/producer.

**Trust level:** High. Parents are trusting Dan with their kids' development; the site already leans on badges (awards, years, published composer, YouTube creator) to establish credibility fast.

**Core metaphor:** *The score and the signal* — sheet music (structure, discipline, decades of teaching) resolving into a waveform (performance, production, the cinematic/electronic work). The brand mark should live at the point where a written note becomes a played sound.

**What the brand should avoid:** cutesy music-school clip art (treble clefs, piano-key borders, rainbow gradients), anything that reads as a hobby studio rather than a professional practice, and anything that skews too corporate/edtech (this is a person, not a platform).

## 2. Logo Concept

**Method:** Monogram + Meaning, using **Metaphor Fusion** as a secondary layer.

**Concept:** A monogram built from **D + T**, constructed so the horizontal stroke of the T doubles as a single sustained waveform line, and the negative space between the two letters reads as a piano key edge (a single black key silhouette, not a full keyboard). The mark should work at three sizes: a favicon-scale key/wave glyph alone, a monogram lockup, and a full wordmark ("Dan Tremblay" in the display serif with "Music" in the sans as a small subordinate line — mirroring the hero treatment already on the site: `hero-name` large serif over `hero-title` smaller sans).

**Construction logic:** Grid the monogram on the same proportions as the site's existing rule motif (`hero-rule` — a short horizontal divider under the name). The waveform stroke should be a single continuous line with no more than 3–4 peaks — restrained, not a literal audio-editor waveform.

**Avoid:** grand pianos, treble clefs, musical staff lines as decoration, generic "music note" glyphs.

## 3. Visual Mode

Closest to **Luxury / Editorial**, adapted for a *light* canvas rather than dark, since the production site already commits to a pale, airy palette rather than a dark-tech one. Borrow the mode's restraint and serif-led typography; skip its ivory/paper-grain material cues in favor of the site's existing cool, glassy tone.

**Mood:** refined, calm, quietly accomplished — closer to a recital hall program than a startup deck.

## 4. Color System (existing tokens — do not introduce new colors)

| Token | Value | Role |
|---|---|---|
| `navy` | `#050B1B` | Ink — wordmark, body text on light, dark section backgrounds |
| `brand` | `#4B5E92` | Primary accent — the "signal" color; used for the waveform stroke, links, active states |
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

## 7. Applications (for future logo rollout)

- **Favicon / app icon:** the D+T key/waveform glyph alone, no wordmark.
- **Nav lockup:** glyph + "Dan Tremblay" wordmark, matching current `Nav.astro` treatment.
- **Badges/awards strip:** reuse the existing `.badge` component style — pill shape, sans, on `site-bg` or navy depending on section.
- **Social/YouTube/Twitch avatar:** glyph on navy, single brand-blue stroke — needs to read at 48px given Dan's existing YouTube/Twitch presence.

## 8. Why this holds together

Every element ties back to the two-register brand truth: a piano teacher (structure, decades, awards) who is also a composer/producer (sound, licensing, cinematic work). The monogram literalizes that with key + waveform in one stroke; the color system stays disciplined to the two tokens already live on the site; the type pairing keeps the existing serif-for-identity / sans-for-proof split. Nothing here requires new colors, new fonts, or a redesign — it's an identity layer that slots onto the site as built.
