# Design rules

These hold whatever the direction. The look itself (ground, type, hero, framing, sections, components) is decided in `creative-direction.md`; this file is what every look must still get right.

## Legibility
- Body text meets 4.5:1 contrast against its ground, large text 3:1. Check the lightest ink on the lightest ground and the darkest on the darkest.
- Never pure white on pure black, or pure black on pure white: take the ink from the palette (Masrawy v3: ink #23282f on cream #f1ebe1, paper #fbf8f3).
- Body copy at 16px minimum on phones, measure 45–75 characters.
- Choose type pairings on purpose and load only the weights you use through the `fonts` URL in `src/site.config.ts`.

## Copy over photographs and film
- Copy over a photograph sits on a solid panel with a hairline edge (`.band-section.on-photo .beat-copy`, `.scrub-copy`), or on the page ground beside the image (square clips). Never on a translucent gradient: it reads as fog and the client will say "blurry".
- The header over the film has no background band. Brand and nav sit on pills in the ground colour; the header becomes a solid bar once the film releases.
- Headings in beats stay short (2 lines on desktop), bodies one or two sentences; a beat about a dish uses the dish's menu line and price.
- Square frames are placed to the right of the copy column by `bleedRect()`; the column width is `--film-text-col`. If you change one, change the other.
- Portrait (phones): copy above, frame in the bottom card; nothing overlaps the frame.

## Restaurant content on the page
- The client's current copy, verbatim, in the sections that correspond to theirs (welcome, story, quote, reviews, hours, about, contact). Mark the sources in `work/copy.md`.
- Prices and item names exactly as the client prints them; `confirm` notes where the PDF is ambiguous; dietary and halal/kosher claims in the client's words.
- Hours appear once as a readable table and once in the schema; the primary phone number is a link everywhere it appears.
- Menus are read, not admired: dense ruled rows, prices aligned, a sticky section nav, tags for vegan and spicy.
- Reviews are the client's own (their site, Google) with names as they publish them; never invented.
- Galleries have a designed shape for the number of images you have; on mobile, check the last row.

## Template hooks that JS relies on
Restyle these freely, but keep the class or attribute or the behaviour stops working:
- `form.form` (lead forms) and `form.news-form` (newsletter), each followed by a `.form-success` sibling; `data-form` names the form, `data-form-type` sets the tracked type. The handler adds subject, page, honeypot and captcha; keep the reCAPTCHA disclosure line under each lead form.
- `.reveal` (scroll-in), `.stat-number[data-value]` (count-up; `data-static` to skip), `.site-nav a` (current page), `.site-header.solid` (set by the film on release).
- `.band-section[data-seg]` and `.film-cut` inside `ScrollFilm`; `.scrub-runway`, `.scrub-hero`, `.scrub-copy`, `.dial li[data-at]` inside `ScrubHero`.
- `.action-bar` (mobile): decide its three or four actions per site.
- `.route-card[data-reason]` if you use the contact router.

## Motion etiquette
- Reduced motion: film, loops and scrubs show their poster. Already handled in the components; keep it when you change framing.
- Every autoplay video is muted, playsinline, has a poster and an `<img>` beneath it.
- Preload budget: the home shows after ~12–24 frames; keep the home film ≤ ~45 MB and ≤ 6 clips; a still hero costs nothing.
- One motion signature per site. If everything moves, nothing reads as premium; the v2 page with a loop, a marquee, a peek, a scrub and counters was called bloated.
- The mobile `.scrub-hero` grid uses `grid-template-columns: minmax(0, 1fr)` so dial labels wrapping can't widen the page.

## The reference builds (so you know what you are changing)
Template (Stallion): dark charcoal-green, Instrument Serif + Archivo, square film card right, statement → featured → cards → CTA band. Masrawy v3 (restaurant): cream #f1ebe1, Fraunces + Albert Sans + Amiri, full-bleed photo hero with a copy panel and the client's three buttons, five dish beats with rule cuts, then gallery → story (their words) → follow → reviews → hours; dark footer. Both work; neither is the next site.
