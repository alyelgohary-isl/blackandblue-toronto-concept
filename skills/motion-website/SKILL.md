---
name: motion-website
description: Build and publish a premium, scroll-driven "motion" marketing website for a business in one run, from a URL or a short brief to a live GitHub Pages URL. Use this whenever someone asks to create, redesign, rebuild or "make modern" a website, landing page or microsite for a company, product, development or venue, especially with words like animated, cinematic, scroll film, premium, wow, Stallion-style, or "like the one we did"; when they hand over a stock image kit, renders or a brand URL and want a site from it; when they want AI-generated visuals (Nano Banana, Kling, kie.ai) turned into a website; or when they ask to publish/deploy a static site to GitHub Pages. Do the creative thinking yourself when no animation ideas are given. Not for editing a single component or a non-marketing web app.
---

# Motion website

Two vertical skills refine this one and should be preferred when they fit: `real-estate-website` (developers, condos, listings, brokerages) and `restaurant-website` (restaurants, cafés, caterers, food businesses). This skill holds the engine, the process and the rules that hold for every industry.

You are building a small, premium marketing site whose home page is a scroll-driven film with generated cutaways, plus a handful of inner pages with ambient loops or a scrubbed hero, wired forms, and a GitHub Pages deploy. The Stallion Developments site is the reference build; this skill is the process that produced it, with the mistakes already taken out.

The template does the engineering. Your job is judgment: what the client is selling, which moments deserve motion, what the copy says, what the visuals must never claim.

## Ground rules that came from real client feedback

- **Never present stock photos of real homes or venues as the client's project.** Use stock only as mood references inside a generation prompt. Heroes and galleries are generated from the client's own render or photo. The client saw a stock estate on the communities hero and said "that's a castle, not us."
- **Generated visuals must match the real scale.** A four-home project gets a four-home aerial, not a subdivision. Say the exact count in the prompt ("EXACTLY two buildings, four homes, no other houses").
- **Facts are the client's.** Anything not in the source material (phone, address, dates, prices, lot sizes, counts) becomes an HTML comment `<!-- CONFIRM: … -->` next to where it belongs, never visible copy. Don't invent per-unit numbers to make a card read better.
- **Specs over prose.** Buyers scan. A featured item shows a spec list (bedrooms, baths, size, lot) rather than a paragraph containing them. Write sizes the way the client says them ("1,900 sq ft above ground").
- **Status appears once.** If a card carries a "Coming soon" badge, don't repeat it in the meta line. Card links pin to the bottom so every card's link sits on the same row regardless of copy length.
- **The home page stays short.** Film, one statement, one featured item, the grid, a CTA with both audiences' buttons, footer. Everything else lives on inner pages.
- **Security: run `tools/check-clean.sh` before any build.** The template was hit by the PolinRider repo-poisoning campaign in 2026 (obfuscated JS appended to `astro.config.mjs` after a run of tabs; in older sites a hidden `.vscode/tasks.json` folder-open task plus a fake font). It runs from the npm pre-scripts, `new-site.sh`, `setup.sh`, the Pages workflow and the pre-commit hook; a config file over ~1 KB is suspect. Never bypass it; if it fires, strip the payload and rotate credentials.
- **Real assets first, generation second.** If the client has photography (restaurants, hospitality, retail), the film is image-to-video from their photos: Kling takes a real photo as start or end frame. Generate stills only for what cannot be photographed. If the client has renders (real estate), generate from the render. Never present stock as the client's.
- **Wide and square, never outpainted.** Portrait sources become 1:1 clips floating on the ground (`layout="bleed"`), landscape sources become 16:9 full-bleed. Padding a portrait image to 16:9 and outpainting leaves seams.
- **One ground, not alternating bands.** A client called a plaster/umber AB-AB page "not unique"; separate sections with light and imagery instead of background swaps.
- **No unsourced facts as visible copy.** Reply times, busiest hours, parking, pick-up times, client lists: CONFIRM comments or nothing.
- **Concept builds ship `noindex`** so a rebuild never competes with the client's live site.
- **Check with a browser before reporting.** Full-page captures of every changed page, desktop and mobile. A viewport crop once hid a broken gallery row. See `references/qa-checklist.md`.

## Process

Work through these in order. Each step names the reference to read when you get there; don't read them all up front.

### 0. Setup (once per machine, once per site)

```
tools/setup.sh                                  # ffmpeg, cwebp, node, python deps, headless Chromium
<template>/tools/new-site.sh <site-dir>          # scaffold; template lives at ~/Islands/motion-site-template
cp .env.example .env                            # KIE_API_KEY (kie.ai), GH_TOKEN if gh isn't logged in
npm run dev                                     # 8014, or the next free port: read the URL it prints (an old preview may hold 8014)
```
If the template folder is missing, `scripts/bootstrap.sh` clones it from GitHub.

### 1. Intake → brief + copy doc

Read `references/intake.md`. From a URL: pull brand (logo, colours, type, tone), the pages and copy that exist, imagery, contact details, and what the business actually sells to whom. From a kit or brief: same fields, from what you're given. Write `work/copy.md`: sitemap, per-page H1/lede/sections, SEO title and meta, and a CONFIRM list. Show the user the sitemap and the CONFIRM list before building; facts are cheap to fix now and expensive after.

### 2. Design direction

Read `references/design-rules.md`. Choose the palette from the film's own frames (the ground should feel like the imagery's shadows), pick a display serif plus a workhorse sans, and set the tokens in `css/style.css` `:root`. Load the frontend-design skill if it's available; it sharpens type and spacing choices. Don't reinvent components: the stylesheet already has cards, grids, gallery, terms tables, FAQ, forms, band CTA.

### 3. Animation brainstorm (the creative step)

Read `references/animation-playbook.md`. Decide the film's story in 5 to 7 beats, each tied to a message the client cares about, then pick cutaways and inner-page moments from the playbook. Write the beat sheet to `work/beats.md` with, per beat: message, camera move, start and end frame, generation cost. **Stop and show the beat sheet with the credit total before generating anything.** This is the one gate the user wants; generation costs real money.

Before writing the beat sheet run `python3 tools/kie.py credits` and plan to the balance, not to the brief: a brief may say "400 credits" while the account holds 40. Costs: Nano Banana 2 still at 2K ≈ 12 credits; Kling 3.0 5-second pro clip ≈ 90. Default budget when the user gives none and the balance allows: about 1,200 (≈10 clips + 12 stills). Under ~300: base film from one generated still plus one cutaway, no loops, no seasons. If a request returns `402 Credits insufficient` mid-run, stop generating, build the remaining beats with `tools/synth.py` (push-ins and dissolves from the stills you have, reversed on the timeline for return legs) and say plainly in the report which beats are synthesized. Every hero and gallery image must trace to a generated file or the client's own asset; write that provenance into the beat sheet.

### 4. Generate

Read `references/prompt-cookbook.md` for prompts that worked and the ones that failed. Stills with `tools/kie.py image`, clips with `tools/kie.py video`. Always pass both `--start` and `--end` when a clip must return to the film; pass the same image to both for a loop. Run stills and clips three at a time in the background (`nohup` + a log + a Monitor on the output folder); a kie task can sit in "waiting" for ten minutes, so never block on one job (re-poll by task id and download `resultUrls`). Review every still and a contact sheet of every clip (`ffmpeg … fps=2,tile=5x2`) **and the last frame at full size** before splitting; small tiles hide a day-to-night transition. A clip that morphs in its last second can be used to frame 48 in the timeline instead of regenerated. Split with `tools/frames.sh` (square) or `tools/frames16.sh` (keeps aspect: wide 1600/q62 ≈ 8–12 MB per clip, square 1080/q68 ≈ 3–5 MB), loops with `tools/loop.sh`. Preload ~24 frames, not a whole clip.

### 5. Assemble

Copy `templates/home.html` and `templates/page.html`, fill the placeholders from the copy doc, declare the film in `js/film.config.js` (sources, timeline with holds between clips, overlay and marquee if used). Text sections reference timeline segments (`data-seg="clip1:0.15,clip1:0.95"`). Stats that are years or codes get `data-static` so the counter never animates "1992". Runway height ≈ 100vh per timeline unit on desktop, ≈ 70vh on mobile. Interlude captions for cutaways reuse phrases from the copy doc, unnumbered. Inner pages: one hero variant each (plain, loop, scrub), a short body, a lead form. Forms need nothing per page; `js/config.js` holds the endpoint and captcha key.

### 6. QA

Read `references/qa-checklist.md` and run it: film progress points, every page full-page on desktop and mobile, video playback, one form submit against the mock endpoint, console errors. Fix, recapture, then report with the screenshots.

### 7. Publish

Read `references/deploy.md`. `tools/deploy.sh <owner> <repo>` builds, creates the repo if needed, pushes, enables Pages and prints the URL. A token without the `workflow` scope cannot push `.github/workflows/`: push `main` without it and publish a locally built `gh-pages` branch (with `.nojekyll`), or `gh auth refresh -h github.com -s workflow` first. Then hand over the launch checklist: CONFIRM items, Formspree recipient verification, reCAPTCHA keys, custom domain, analytics, 404.

## Reporting

Lead with the URL. Then what the film does beat by beat in a numbered list, what was generated and its cost, what's uncommitted or unconfirmed, and the two or three flaws you know about. Show the QA sheets. Never claim a check you didn't run.

## Files

- `references/intake.md` — brief and copy doc format, CONFIRM handling, SEO fields
- `references/animation-playbook.md` — concept menu, beat mapping, the three techniques, what to avoid
- `references/prompt-cookbook.md` — exact prompts that worked, failure modes, costs, timing
- `references/design-rules.md` — tokens, layout, cards, galleries, mobile rules, copy rules
- `references/qa-checklist.md` — the commands and what "pass" looks like
- `references/deploy.md` — Pages, forms/captcha setup, launch checklist
- `scripts/bootstrap.sh` — fetch the template when it isn't on the machine
