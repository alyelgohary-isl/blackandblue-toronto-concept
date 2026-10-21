---
name: real-estate-website
description: Build and publish a premium, scroll-driven marketing website for a real estate business, from a URL or short brief to a live GitHub Pages URL. Covers developers and home builders who sell what they build (communities, townhomes, villas), condo and tower launches, branded residences, single-listing microsites, and brokerages or agents. Use whenever someone asks to create, redesign or "make modern" a site or landing page for a development, project, property, community, brokerage or agent, especially with words like animated, cinematic, scroll film, premium, Stallion-style or "like the one we did"; when they hand over renders, floor plans, a stock kit or a brand URL; or want AI property visuals (Nano Banana, Kling, kie.ai) made into a site. Each site gets its own creative direction. Not for other industries (contractors building on a client's land are construction; dealers and mechanics are automotive), single-component edits, listing portals or web apps.
---

# Real estate website

You are building a small, premium marketing site for a real estate business: a home page led by a scroll-driven film with generated cutaways, a handful of inner pages (projects, floor plans, location, invest, contact), wired lead forms, and a GitHub Pages deploy. Stallion Developments is the first finished build and the source of most rules below. It is one example, not the house style.

The template is an Astro project: one shared layout, the film as a `<ScrollFilm>` component fed by `src/data/film.ts`, every per-client setting in `src/site.config.ts`. It does the engineering. Your job is judgment: what this property is and who buys it, what the site should feel like, which moments deserve motion, what the copy says, and what the visuals must never claim.

## Fixed and free

Two kinds of decisions, and mixing them up is how every site ended up looking like Stallion in a different colour.

**Fixed** (same on every site): the ground rules below, the facts, the compliance lines, and the engineering: film mechanics (`timeline`, `data-seg`, `.band-section`, `.page-flow` release), the form handler, `url()` links, reduced-motion fallbacks, the frame and weight budgets, the QA pass.

**Free** (decided fresh per site in step 2): everything a visitor would describe as the look. Light or dark ground, type, grid, film framing, how beats are set, which sections the home page has and in what order, card and button shapes, image treatment, and the film's concept. The template's stylesheet and page markup are a working starting point you are expected to rewrite, not a theme to recolour. The client's own brand (logo, colours, typefaces) is the one limit on this freedom: work inside it.

## Ground rules that came from real client feedback

- **Never present stock photos of real homes as the client's project.** Stock is a mood reference inside a generation prompt, nothing more. Heroes and galleries come from the client's own render or photo. The client saw a stock estate on the communities hero and said "that's a castle, not us."
- **Generated visuals match the real scale.** A four-home project gets a four-home aerial, not a subdivision. State the exact count in the prompt ("EXACTLY two buildings, four homes, no other houses").
- **Floor plans, site plans, unit mixes, prices and deposit structures are only ever the client's.** Never generate or redraw a plan; an invented plan is a false fact a buyer will rely on. When missing: a "Floor plans on request" form plus a CONFIRM.
- **Facts are the client's.** Anything not in the source material (phone, address, dates, prices, sizes, counts, distances, licence numbers) becomes an HTML comment `<!-- CONFIRM: … -->` next to where it belongs, never visible copy (in `.astro` pages `<!-- -->` ships in the HTML so the client can grep it; `{/* */}` is for build notes). Don't invent per-unit numbers to make a card read better.
- **Renders are labelled as renders.** Generated and rendered imagery carries an "Artist's concept" disclaimer in the footer or legal page and next to galleries. See `references/intake.md` for the regional compliance lines to ask about.
- **Specs over prose.** Buyers scan. A featured home shows its specs as pairs (bedrooms, baths, size, lot), however the direction styles them. Write sizes the way the client does ("1,900 sq ft above ground").
- **Status appears once.** A "Coming soon" badge is not repeated in the meta line. In any grid of items, the links sit on the same row regardless of copy length.
- **The home page stays short.** The film, a few sections, a CTA serving both audiences, footer. Depth lives on inner pages. Which few sections, and in what order, is part of the direction.
- **Check with a browser before reporting.** Full-page captures of every changed page, desktop and mobile. A viewport crop once hid a broken gallery row. See `references/qa-checklist.md`.

## Process

Work through these in order. Each step names the reference to read when you get there; don't read them all up front.

### 0. Setup (once per machine, once per site)

```
tools/setup.sh                                  # ffmpeg, cwebp, Node 22.12+, python deps, headless Chromium
<template>/tools/new-site.sh <site-dir>          # scaffold + npm install; template lives at ~/Islands/motion-site-template
cp .env.example .env                            # KIE_API_KEY (kie.ai), GH_TOKEN if gh isn't logged in, PUBLIC_GTM_ID / PUBLIC_GA4_ID / PUBLIC_GSC_VERIFICATION if the user has them
npm run dev                                     # serves http://localhost:8014/ for QA (next free port if taken)
```
If the template folder is missing, `scripts/bootstrap.sh` clones it from GitHub.

### 1. Intake → brief + copy doc

Read `references/intake.md`. First decide which kind of real estate business this is (developer community, condo or tower launch, branded residences, single listing, brokerage); it sets the audiences, the lead forms, the pages and the compliance lines. From a URL: pull brand (logo, colours, type, tone), existing pages and copy, imagery, contact details, and what is sold to whom. From a kit or brief: the same fields from what you're given. Write `work/copy.md`: sitemap, per-page H1/lede/sections, SEO title and meta, lead forms, and a CONFIRM list.

### 2. Creative direction

Read `references/creative-direction.md` and `references/past-directions.md`. Find what is specific to this property and its buyer, pick an analogue from outside the web, and set every axis (ground, type, grid, film framing, beat style, home sections, components, image treatment, motion signature). Write `work/direction.md`, then run the sameness check against every past build. Load the frontend-design skill if it's available; impeccable or design-taste-frontend help too.

### 3. Film concept and beats

Read `references/animation-playbook.md`. Choose a film concept that serves the direction; the deconstruct/rebuild film is Stallion's, and only one option. Tell the story in 5 to 7 beats, each tied to a message from the copy doc. Write `work/beats.md` with, per beat: message, camera move, start and end frame, generation cost.

Before writing it, run `python3 tools/kie.py credits` and plan to the balance, not the brief: a brief may say "400 credits" while the account holds 40. Costs: Nano Banana 2 still at 2K ≈ 12 credits; Kling 3.0 5-second pro clip ≈ 90. Default budget when none is given and the balance allows: about 1,200 (≈10 clips + 12 stills). Under ~300: base film from one generated still plus one cutaway, no loops, no seasons. Every hero and gallery image must trace to a generated file or the client's own asset; write that provenance into the beat sheet.

**Stop here and show the user one message:** the sitemap and CONFIRM list, the direction (a short paragraph plus two alternates in a line each), and the beat sheet with its credit total. This is the only gate. Facts are cheap to fix now, a direction is cheap to change now, and generation costs real money.

### 4. Generate

Read `references/prompt-cookbook.md` for prompts that worked and ones that failed. Stills with `tools/kie.py image`, clips with `tools/kie.py video`. Pass both `--start` and `--end` when a clip must return to the film; the same image to both for a loop. The film framing decides the aspect ratio (square for a card, 16:9 for full-bleed; see the playbook). Review every still and a contact sheet of every clip (`ffmpeg … tile=10x1`) before splitting; regenerate rather than ship a smeared frame. Split with `tools/frames.sh`, loops with `tools/loop.sh`. If a request returns `402 Credits insufficient`, stop generating, build the remaining beats with `tools/synth.py` (push-ins and dissolves from the stills you have, reversed on the timeline for return legs) and say in the report which beats are synthesized.

### 5. Build

Read `references/design-rules.md` for the craft rules that hold whatever the look. Fill `src/site.config.ts` (name, brand lockup, production domain, email, nav, CTA, footer, favicon, schema, fonts URL) and `public/js/config.js` (`siteName` goes in form email subjects). Declare the film in `src/data/film.ts`: sources, a timeline of `{ from, to }` plays and `{ hold }` stills, overlay and marquee if used.

Then build the direction, not the placeholder page. Rewrite `src/styles/style.css` beyond `:root`, restructure `src/pages/index.astro` to the sections your direction chose, add components in `src/components/`, change the film framing in `scroll-film.js` if the direction calls for it (how: `references/creative-direction.md`). Keep the mechanism contracts: text beats reference timeline segments (`data-seg="clip1:0.15,clip1:0.95"`), stats that are years or codes get `data-static`, interlude captions reuse phrases from the copy doc. Inner pages: copy `src/pages/about/` to each page's folder (the folder is the URL) and shape each one to its job. Write links and asset paths with `url("contact/")` / `url("assets/img/x.webp")`, never `../`. Tag each lead form with `data-form-type` (see intake). `npm run build` must pass before QA.

### 6. QA

Read `references/qa-checklist.md` and run it: film progress points, every page full-page on desktop and mobile, video playback, one form submit against the mock endpoint, console errors, compliance lines present, and the side-by-side distinctness check. Fix, recapture, then report with the screenshots.

### 7. Publish

Read `references/deploy.md`. `tools/deploy.sh <owner> <repo>` checks the build, creates the repo if needed, pushes, enables Pages and prints the URL. Hand over the launch checklist: CONFIRM items, compliance lines, form recipient and captcha keys, custom domain, tracking IDs (GTM / GA4 / Search Console; no code needed), 404. Then append this site's row to `references/past-directions.md` so the next build knows what to steer away from.

## Reporting

Lead with the URL. Then the direction in two sentences, what the film does beat by beat in a numbered list, what was generated and its cost, what's unconfirmed, and the two or three flaws you know about. Show the QA sheets. Never claim a check you didn't run.

## Files

- `references/intake.md` — business types, audiences, lead forms, pages, compliance lines, copy doc format, CONFIRM handling, SEO and schema
- `references/creative-direction.md` — finding the idea, the axes, the sameness check, how to change framing and styles in the template
- `references/past-directions.md` — one row per shipped build; read before choosing, append after publishing
- `references/animation-playbook.md` — film concepts for real estate, framings, beat mapping, the three techniques, what to avoid
- `references/prompt-cookbook.md` — exact prompts that worked, failure modes, costs, timing
- `references/design-rules.md` — craft rules that hold whatever the direction: legibility, film text, galleries, mobile, motion etiquette
- `references/qa-checklist.md` — the commands and what "pass" looks like
- `references/deploy.md` — Pages, forms/captcha setup, tracking, launch checklist
- `scripts/bootstrap.sh` — fetch the template when it isn't on the machine
