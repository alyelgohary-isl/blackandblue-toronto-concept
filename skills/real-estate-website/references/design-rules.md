# Design rules

These hold whatever the direction. The look itself (ground, type, grid, framing, sections, components) is decided in `creative-direction.md`; this file is what every look must still get right.

## Legibility
- Body text meets 4.5:1 contrast against its ground, large text 3:1. Check the lightest ink on the lightest ground and the darkest on the darkest, including text over images and film frames.
- Never pure white on pure black, or pure black on pure white: take the ink from the palette.
- Body copy at 16px minimum on phones, measure 45–75 characters.
- Choose type pairings on purpose and load only the weights you use through the `fonts` URL in `src/site.config.ts`.

## Film text
- Beat text sits on solid ground, a scrim, or a caption band: never raw over a busy frame. Check the busiest frame of each segment, not the first.
- Headings in beats stay short (balanced, 2 lines max on desktop), bodies ≤ 2 sentences.
- The dark overlay (stats moment) must be at 0 before the film ends and hidden once the page flow covers it, or the footer reads dimmed.
- Portrait (phones): frame and text both fit one screen; nothing overlaps the frame unless the framing is designed for overlay.

## Real estate content on the page
- Specs as pairs (whatever the styling: a `dl`, a table, a ruled list), sizes exactly as the client writes them.
- In any grid of items, links align on one row whatever the copy length (flex column with the link pinned to the bottom, or equal-height rows).
- Status once per item. A placeholder ("Renderings coming soon") is styled as a placeholder, never a stock image.
- Galleries have a designed shape for the number of images you have; don't let a seventh image wrap into an orphan row. On mobile, check the last row.
- Compliance lines (artist's concept, subject to change, licence and permit numbers) are present and readable, not 9px grey on grey.

## Template hooks that JS relies on
Restyle these freely, but keep the class or attribute or the behaviour stops working:
- `form.form` (lead forms) and `form.news-form` (newsletter), each followed by a `.form-success` sibling; `data-form` names the form, `data-form-type` sets the tracked type. The handler adds subject, page, honeypot and captcha; keep the reCAPTCHA disclosure line under each lead form.
- `.reveal` (scroll-in), `.stat-number[data-value]` (count-up; `data-static` to skip), `.site-nav a` (current page).
- `.filter` buttons with `.community-card[data-tags]`, and `.route-card[data-reason]`, if you use the filter or the contact router.
- Inner-page heroes: `<HeroLoop>` (poster img + muted video) and `<ScrollScrub>` (sticky hero; runway 320vh desktop / 260vh mobile). On mobile the scrub hero's text, frame and tabs must fit one screen.

## Motion etiquette
- Reduced motion: film, loops and scrubs show their poster. Already handled in the components; keep it when you change framing.
- Every autoplay video is muted, playsinline, has a poster and an `<img>` beneath it.
- Preload budget: home shows after ~40 frames; keep total home frames ≤ ~600 (≈ 70 MB at 960px square; less for larger frames).
- One motion signature per site. If everything moves, nothing reads as premium.

## The template's defaults (Stallion)
For reference, so you know what you are changing: dark charcoal-green ground, Instrument Serif + Archivo, square film card right with numbered italic beats left, stats over a darkened aerial, home flow statement → featured (media + spec list) → 2–4 column rounded cards with badges → pine CTA band, footer with brand, links, company column and newsletter. It works; it is also what every previous site looks like.
