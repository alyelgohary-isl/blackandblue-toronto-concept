---
name: restaurant-website
description: Build and publish a premium, scroll-driven website for a restaurant, café, caterer or food business, from a URL or short brief to a live GitHub Pages URL, with the client's own photography turned into motion (Kling image-to-video), HTML menus with prices and Menu/Restaurant schema, dish glossary pages for AI search, reservation and catering forms, and every old URL redirected. Use whenever someone asks to create, redesign, rebuild or "make modern" a site for a restaurant, kitchen, bistro, café, bakery, caterer, food truck or hospitality venue, especially with words like cinematic, animated, premium, wow, "the site is the ad", or "like Masrawy"; when they hand over food photos, a PDF menu or a brand URL; or when they want a concept site for outreach to a restaurant. Each site gets its own creative direction. Not for real estate (real-estate-website), other industries (motion-website), single-component edits or ordering apps.
---

# Restaurant website

You are building a small, premium marketing site for a food business, and the one thing it must not be is another version of the last one. The engine (a scroll film made from the client's own photography, scrub heroes, forms, schema, redirects, a GitHub Pages deploy) is shared. The site people see is designed from this restaurant: its room, its dish, its hour of the day, its own words and colours. Masrawy Egyptian Kitchen (Mississauga) is the first finished build; it took three directions to land, and the two that failed both failed for the same reason: they were the template wearing a different coat.

The template is the Astro project at `~/Islands/motion-site-template` (`motion-website` is the parent skill and owns the engine). This skill is the judgment: what this restaurant is and who eats there, what the site should feel like, which moments deserve motion, what the copy says, and what the visuals must never claim.

## Fixed and free

**Fixed** on every site, because they are facts, engineering or the reason the site ranks:
- The facts: the client's menu, prices, hours, policies, story and photographs. No invented dish, ingredient, room, price, hour or promise.
- The engineering: `ScrollFilm` and `ScrubHero` mechanics, `url()` links, forms through the one handler with `data-form-type`, reduced-motion posters, frame budgets, the QA pass, `tools/check-clean.sh` before any build.
- The deliverables that beat the old site: HTML menus with prices and `Menu`/`Restaurant` schema, dish glossary pages, a reservation or ordering path, redirects for every old URL, a mobile action bar with the restaurant's primary actions.

**Free**, decided fresh per site, before any CSS: everything a visitor would call the look. Ground, palette inside the client's brand, type, script treatment, film concept and framing, hero construction, section list and order, components, image treatment, motion signature, copy register. Nothing in `references/` is a default for these; the lists there are ranges, not menus to pick a variant from. If two of your builds would be recognised as siblings from a screenshot, the second one is wrong.

## Ground rules that came from real client feedback

- **Their words, on the page.** When the client's current site has copy for a section (slider line, welcome, story, quote, reviews, hours, about), carry it verbatim into that section. The owner should recognise the site as theirs in two seconds. Write new copy only where they have none (menus with prices, dish pages, catering terms, reservations). Rewriting their words was called "I don't like the new copy".
- **Copy on a dish is about the dish.** A film beat captions what is on screen: the dish's own menu line and price, or one sentence about the action. A timeline paragraph over a koshary bowl was rejected the same day it shipped.
- **The hero carries the client's primary actions.** Whatever their current site puts under the slider (Main Menu, Breakfast Menu, Order Pick-up; or Book, Menu, Directions) sits in the hero panel. A visitor must not scroll through the film to find the menu.
- **Real photography first.** Download every photo the client publishes, review them on a contact sheet, and build the film from them: Kling takes a real photo as the start frame and adds one physical action (a pour, hands reaching, lunch turning to night). Generate stills only for what cannot be photographed. **Never generate a dish that isn't on the menu, never add an ingredient, never show a room the client doesn't have.**
- **One action per clip, never an assembly.** Giving Kling a start and an end frame and asking it to build the dish in between makes layers spawn in place (the first koshary clip). A ladle of sauce over the finished bowl, from the real photo with no end frame, is what reads as real.
- **Legibility by panel or ground, never by veil.** Copy over a photograph sits on a solid panel with a hairline edge, or on the page ground beside the image. Translucent gradients over photographs read as fog ("it looks blurry"); dark grounds with ivory text over bright photographs were unreadable. The photograph stays crisp everywhere outside the panel.
- **Cuts are separators, not transitions.** Between two clips the film drops to the ground and a rule draws across (`cut` segments in the timeline), so a change of image reads as a page turn. No cross-dissolves, no chapter captions on the rule (they duplicate the next beat's heading).
- **Prices and dishes are the client's.** Transcribe menus from their PDFs; keep their spellings; anything the PDF layout leaves ambiguous gets a `confirm` note in the data file and a CONFIRM comment in the HTML. Unsourced facts never ship as visible copy.
- **Wide and square, not outpainted.** Landscape photos full-bleed, portrait photos as 1:1 clips beside the copy column. Outpainting portrait photos leaves seams. Sharpen a small source into a 2K master before giving it to Kling, and upload masters as JPEG (an 8 MB PNG base64 upload times out).
- **Lean beats a long page.** Masrawy v2 had seven sections after the film and was called bloated. Each section on the home earns its place by doing something the client's current site does; the film is about seven scroll units, no more.
- **Concept builds ship `noindex`** and a visible "concept" line until they replace the live site.
- **Check with a browser before reporting.** Full-page captures of every page, desktop and mobile; the film at progress points; one form submit per form type. See `references/qa-checklist.md`.
- **Run `tools/check-clean.sh` before `npm run dev` or `build`** (it runs from the npm pre-scripts). The template was hit by a repo-poisoning campaign in 2026; the guard refuses a poisoned checkout.

## Process

### 0. Setup
```
tools/setup.sh                                  # once per machine
<template>/tools/new-site.sh <site-dir>          # scaffold; runs check-clean on the template and the copy
cp .env.example .env                            # KIE_API_KEY; GH_TOKEN if gh isn't logged in; PUBLIC_GTM_ID etc.
npm run dev                                     # read the URL the server prints; 8014 is often taken by another session
```
If the template folder is missing, `scripts/bootstrap.sh` clones it.

### 1. Intel and intake → copy doc and gap list
Read `references/intake.md`. Decide the business type, then mine: the client's site and sitemaps (every old URL becomes a redirect; every section's copy is captured verbatim), menu PDFs, ratings and what reviews praise or complain about, TikTok and Instagram (which dishes get filmed), press, and the photography. Write `work/intel.md` (dishes by mention, the room, the gap list, which doubles as the outreach pitch) and `work/copy.md` (sitemap, per-page copy with the client's own words marked as such, forms, CONFIRM list).

### 2. Creative direction
Read `references/creative-direction.md` and `references/past-directions.md`. Find what is true of this restaurant that no competitor can claim, pick an analogue from outside the web, set every axis, write `work/direction.md`, run the sameness check against every past row and against the worked examples. Load the frontend-design skill if available. Make a static hero mock in `work/` and screenshot it: a direction that only exists as a paragraph will drift back to the template in the CSS.

### 3. Film concept and beats
Read `references/animation-playbook.md`. Invent the film from the restaurant (its hour, its service, its signature action), tell it in 4–6 beats from the copy doc, and decide per clip: wide (landscape photo) or square (portrait photo), one action each. Write `work/beats.md` with start frames, prompts and credits. Run `python3 tools/kie.py credits` first and plan to the balance. Typical budget: 5–6 home clips + 3–6 inner-page scrubs + a few stills ≈ 900–1,300 credits; under 400, one wide clip and one square clip, real photos for the rest.

**Stop and show one message:** sitemap and CONFIRM list, direction (plus two alternates) with the hero mock, beat sheet with the credit total. The one gate. If the user has already said "use kie, go", generate, but still write the beat sheet first and report spend from `work/gen/kie.log`.

### 4. Generate
Read `references/prompt-cookbook.md`. Prepare frames; run stills first, review on a contact sheet; then clips three at a time in the background. Review every clip on a contact sheet (`ffmpeg … fps=2,tile=5x2`) and its last second at full size. Split with `tools/frames16.sh` (wide 1600/q62, square 1080/q68).

### 5. Build
Read `references/design-rules.md`. Fill `src/site.config.ts`, `public/js/config.js`, `src/data/menu.ts`, `src/data/dishes.ts`, `src/data/film.ts`, redirects. Then build the home page the direction calls for: `<ScrollFilm layout="bleed">` with the beats and `cut` segments, and after it only the sections that earn their place for this restaurant. The components in the template and in the Masrawy build (doors, marquee, signature list with peek, scrub section, photo band, proof line, gallery grid, review cards, hours block, story timeline, follow band) are parts, not an order; use the ones the direction needs, restyle them, write new ones. Inner pages: `<ScrubHero>` (wide or square) with the copy in a panel, then the page's job. Tag forms `data-form-type`. `npm run build` must pass.

### 6. QA
Read `references/qa-checklist.md`: film progress points, every page desktop and mobile, scrub heroes, forms, console errors, schema, redirect stubs, home weight, and the distinctness sheet against the previous builds.

### 7. Publish
Read `references/deploy.md`. `tools/deploy.sh <owner> <repo>`, or the `gh-pages` branch route if the token lacks the `workflow` scope. Hand over the launch checklist (`work/launch.md`), then append a row to `references/past-directions.md`.

## Reporting
Lead with the URL. Then the direction in two sentences, the film beat by beat, what was generated and its cost from `kie.log`, what is unconfirmed, the two or three flaws you know about, and the QA sheets. Never claim a check you didn't run. If asked "would the owner take this over their current site", answer honestly, and list what they would ask for before paying.

## Files
- `references/intake.md` — business types, intel step, menu extraction, forms, pages, compliance, copy doc, redirects
- `references/creative-direction.md` — finding the idea, the axes, six worked directions that show the range, the sameness check, what read as template
- `references/past-directions.md` — one row per build; read before choosing, append after publishing
- `references/animation-playbook.md` — the technique, concept seeds, the engine's film features (bleed, cuts, panels), frame budgets, what failed
- `references/prompt-cookbook.md` — the prompts that worked and the ones that failed, costs, timing
- `references/design-rules.md`, `references/qa-checklist.md`, `references/deploy.md`
- `scripts/bootstrap.sh` — fetch the template when it isn't on the machine
