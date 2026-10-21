# Creative direction

Every site from this skill runs on the same engine, and that's fine: visitors never see the engine. What they see is the look, and so far the look has been the same every time. A near-black ground taken from the film's shadows, a high-contrast display serif over a humanist sans, a square film card on the right with numbered italic beats to its left, stats counting up over a darkened aerial, then statement → featured → grid → pine CTA band. Changing the hex values and font names inside that shell is a reskin, not a direction.

The fix is to make the look a decision you take for this client, on purpose, before any CSS.

## 1. Start from the client, not the template

Answer these in `work/direction.md`:

1. **What is true of this property that a competitor can't claim?** The lake, the heritage building, the architect, the street, the price point, the kind of buyer, the city. One sentence.
2. **Who is buying, and what else do they look at?** A first-time buyer in Barrie comparing builders on their phone, an overseas investor buying off-plan from London, a downsizer leaving a family home, a family office. Their world sets the register.
3. **An analogue from outside websites** that carries the feeling. Borrow its grammar (grid, type, rules, captions, margins, colour), not its content. Some that suit property: an architect's monograph, a hotel's printed stationery, a yacht spec sheet, a cottage-country field guide, a surveyor's plan, a Swiss railway timetable, a gallery catalogue, an auction lot sheet, a 1960s resort brochure, a wine label, a watch manual, a Japanese product catalogue, a newspaper property supplement. Pick one that fits *this* client; don't reuse one from `past-directions.md`.
4. **The idea, in one line.** "A field guide to the lake." "The tower as a spec sheet." "Twelve villas, catalogued like lots at auction." "A neighbourhood you read like a Sunday paper."

If the idea could be pasted onto another developer's site unchanged, it isn't specific enough. Go back to question 1.

## 2. Decide each axis

For each row, write your choice and one clause on why it serves the idea. The middle column is where you drift if you don't decide; it's there so you notice.

| Axis | The Stallion default | Other directions to consider |
|---|---|---|
| Ground | near-black taken from the film's shadows | paper white, bone, sand, plaster, concrete grey, a strong colour (terracotta, ultramarine, oxblood, racing green), light and dark grounds alternating by section |
| Type | high-contrast display serif + humanist sans | one grotesk family at extreme sizes; a condensed sans; a slab; a single text serif throughout; wide caps with a small text face; mono for data beside a serif |
| Scale and rhythm | headings 2.3–4rem, even generous spacing | oversized type cropping at the edges; dense catalogue rhythm; small type with very large margins; one huge number per screen |
| Grid | centred 78rem wrap, two-column statement | asymmetric editorial columns; strict 12-column Swiss grid with visible rules; image-led full-bleed; index or table layout; a narrow single column like a letter |
| Film framing | square card anchored right, text on the ground to the left | full-bleed with text on a scrim or a solid band; card left; centred card with type set around it; 21:9 letterbox with captions beneath; 50/50 split; a portrait card like a brochure page |
| Beat copy | small italic serif index + rule, heading, two-line body | plate captions ("Plate 3 — The kitchen"); times or coordinates as the index; one word per beat; running marginalia; big outlined numerals; a caption bar like a film subtitle |
| Home sections | statement → featured → grid → CTA band | open with the unit mix as a table; a location section with a real map and walk times; one long gallery; an index of homes like a contents page; floor-by-floor list for a tower; a single featured home and nothing else; a letter from the founder |
| Components | rounded cards with a badge on the image, pill buttons | ruled rows; tabular lists; square corners; text links with arrows; image-only tiles with captions on hover; numbered lots; tabs |
| Image treatment | full colour, 16px radius | square and matted like prints; full-bleed with no radius; duotone; black and white with one colour; grain; tight crops on material details |
| Motion signature | beats slide and fade in, stats count up | text revealed through a mask; a horizontal pinned strip; a sun or clock dial tracking the film; a line drawing that fills in; letter-by-letter set; a counter of floors. Pick one and use it throughout, sparingly |

Fit to the business type, which sets priorities rather than aesthetics: luxury reads quieter (fewer elements, more space); first-time buyer sites must surface prices and plans fast; investor sites lead with numbers, location and payment terms; brokerages need listings browsable within a scroll.

## 3. The sameness check

Compare your axis choices with every row in `past-directions.md`. The new site must differ from each on at least 5 of the 10 axes, and at least two of those must be ground, type, film framing or home sections. Write the comparison into `work/direction.md` as a short table. If it fails, change the direction, not the check.

"Like Stallion", "like the one we did" and "same kind of scroll animations" mean the motion and the quality bar: keep the film mechanics and cutaway technique, and still give the site its own look. Only reuse a past look when the user says so explicitly ("same design", "same look").

## 4. The client's brand comes first

If the client has an established brand (logo, colours, typefaces people recognise), the direction works inside it: the freedom is in layout, scale, rhythm, framing and how the brand is used, not in replacing it. Only a client without a real brand gets a palette and type chosen from scratch. Either way, say which it was in `direction.md`.

## 5. Show it at the gate

In the one gate message: the chosen direction as a short paragraph (idea, analogue, ground and palette, type, framing, home sections), plus two alternates in one line each, so the user can redirect before any credits are spent. If there's time, build a static hero mock (one HTML file in `work/`, the client's render or a flat placeholder, no generation) and attach a 1440×900 screenshot; it makes the direction concrete in a way a paragraph doesn't.

## Doing it in the template

- **Styles.** `:root` in `src/styles/style.css` is the minimum change, not the limit. Rewrite component rules, delete what you don't use, add your own. The token names are Stallion's (`--cream` is the ground even when it's dark, `--pine` the accent); rename them if they'd mislead, and grep `src/` for uses first: `ScrollFilm.astro` uses `--cream`, `--pine`, `--moss`, `--ink-soft`, `--hairline`, `--font-display` and `--gutter`.
- **Markup.** `src/pages/index.astro` is a placeholder with Stallion's section order. Replace the sections to match the direction; add components in `src/components/`. Header and Footer are yours to restructure too.
- **Film framing.** `frameRect()` in `src/components/motion/scroll-film.js` returns the rectangle each frame is drawn into (`dx, dy, dw, dh` in canvas pixels); the card-right layout is its first branch, the portrait card its second. Change it per site:
  - *Card left*: `dx: margin`, and move the text column right with `.band-section { align-items: flex-end }`.
  - *Full-bleed*: return the whole canvas and crop the frame cover-style with the 9-argument `drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)` in `drawFrame`; set `radius={0}` and `headerOffset={0}`. Generate 16:9 frames for landscape and accept a centre crop on phones, or keep a separate portrait framing. Beat text then needs a scrim or a solid caption band to stay legible over every frame.
  - *Letterbox*: a wide rect across the middle or top of the viewport, captions in the band below; generate 16:9 or 21:9.
  - *Centred card*: a smaller square in the middle, beat text set around it at large sizes.
  - Text placement is CSS in `ScrollFilm.astro` (`--film-text-col`, `.band-section` padding and alignment); override it from `style.css` with enough specificity, since the component's styles load after the site's.
- **What stays.** The timeline and `data-seg` contract, `.band-section` and `.page-flow`, the loader and release behaviour, the reduced-motion poster, `url()`, the form handler and `data-form-type`. Change how they look, not how they work.
