# Design rules

## Tokens (css/style.css :root)
- Ground is dark and drawn from the film's shadows (Stallion: charcoal-green `#161b14`). Raised surfaces one step lighter. Ink is warm off-white, never pure white.
- One accent from the imagery (pine green), one light accent for small marks (moss), one sparing secondary (roof blue). Hairlines at 14% ink.
- Display serif for headings (Instrument Serif), a wide-range sans for body (Archivo). Change both together or neither.

## Film layout
- Square card anchored right on landscape, under the fixed header, rounded 16px, no blur or feathering. Text lives on the solid ground to its left in a `--film-text-col` column. Portrait: card at the bottom, text on top.
- Beat copy: small italic serif index with a rule, heading 2.3–4rem balanced, body ≤ 2 sentences. Interludes: uppercase eyebrow instead of a number, smaller heading.
- Dark overlay only under the stats moment, and it must be at 0 before the film ends and hidden once the page flow covers it, or the footer reads dimmed.

## Page flow
- Home after the film: statement → featured → grid → CTA band → footer. Nothing else.
- Featured item: label, heading, one-line lede about place, then a 2-column spec list (`dl.spec-list`), then two CTAs.
- Cards: media (16:10) with the status badge on the image; body is a flex column with the link pinned to the bottom. Meta line never repeats the badge.
- Galleries: 3 equal columns, first figure spans 2x2, five squares around it (= 6 images). On mobile 2 columns with the first full width at 16:10. Don't add a seventh image without changing the grid.
- Inner-page heroes: plain, loop (poster img + muted video + two gradients, text left), or sticky scrub (runway 320vh desktop / 260vh mobile; on mobile hide breadcrumbs and badges, clamp the lede to 2 lines, buttons in a row, card ≤ 36vh so text, card and tabs fit one screen).
- Forms: `form.form` inside `.form-layout`; the handler adds subject, page, honeypot and captcha. A reCAPTCHA disclosure line goes under each lead form.

## Copy rules on the page
- Specs as pairs, not prose. Sizes exactly as the client writes them.
- Status once. Scarcity as "Limited stock available", not a count, unless the count is confirmed and wanted.
- Location ledes talk about walking distance and what's nearby, not the site's acreage.
- Footer: brand + blurb + tagline, a links column, a company column with email, newsletter. No badge strip.

## Motion etiquette
- Reduced motion: film shows the poster, loops show the poster, scrub shows the poster. Already handled in CSS/JS; keep it.
- Every autoplay video is muted, playsinline, has a poster and an `<img>` beneath it.
- Preload budget: home shows after ~40 frames; keep total home frames ≤ ~600 (≈ 70 MB).
