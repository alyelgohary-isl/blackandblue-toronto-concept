# Animation playbook for food and restaurants

The home film is one continuous frame sequence drawn to a canvas and scrubbed by scroll (`ScrollFilm` in `layout="bleed"`), with text beats over it and `cut` segments between clips. Inner pages get one `ScrubHero` each: a sticky full-viewport canvas the page scrolls through, with the copy in a panel. Everything else is ambient or on hover, and there should be little of it.

## The technique: image-to-video from the client's photos

Kling 3.0 takes a real photograph as its start frame. Give it the client's coffee pour, the kofta under tahina, hands over a platter, the dining room, and ask for the one motion that photo implies. The result is their food and their room, moving. Nothing is invented, and the client recognises every frame.

- **One physical action per clip, entering the frame:** a pour, a sprinkle, a hand reaching, steam, a time-lapse of light. The object that acts (ladle, hand, jug) comes in from an edge and leaves.
- **No end frames for assemblies.** Start frame + end frame + "the bowl fills" makes contents materialise in place. If the dish must change state, film the finishing action over the finished photo instead (sauce over the koshary, honey over the feteer).
- **End frames work for light**, not for objects: the lunch-to-night time-lapse (real photo → night edit of the same photo) was the showpiece.
- **Two framings, chosen by the photo's orientation.** Landscape photos → 16:9, full-bleed. Portrait photos → crop square, sharpen to a 2K master, 1:1, drawn to the right of the copy column. Never outpaint a portrait photo to 16:9.

## Concept seeds

Invent the film from the restaurant. These are starting points, each from a different kind of place; none is the default and the Masrawy one is already used.

| Seed | What the viewer sees | Suits |
|---|---|---|
| **An evening in five moves** (Masrawy) | the room → coffee → the signature dish finished → the grill → the shared table → the room at night | a dine-in room with interiors and a signature dish. Used; don't repeat the beat order |
| **The hour the ovens open** | dark kitchen → the oven door → the first tray → the window at 7am → the first customer | bakeries, cafés |
| **Seat by seat** | the counter from the end, then one bowl per seat, each a square clip | counters, ramen, sushi, omakase |
| **From the window** | the queue → the board → the hands at the plancha → the box closing → the first bite | take-out, taquerias, trucks |
| **The pass** | fire → plating → the server carries it through the room → the table | chef-led, open kitchens |
| **Course by course** | nine squares, one per course, the card's numerals as the only copy | tasting menus |
| **Today's pot** | one pot through a day: morning prep, the lid lifted at noon, the last plate at night | home-style and family places |
| **Light** | the room from lunch to night as a single time-lapse, nothing else | a room worth staring at; cheap (1 still + 1 clip) |
| **Hands only** | five overhead squares of hands: tearing bread, dipping, pouring, passing, clearing | sharing cultures, mezze, dim sum |

A film is 4–6 beats. Put the client's primary actions in the hero panel; the last beat carries the reservation or order call.

## The engine's film features (all in `src/data/film.ts` and `scroll-film.js`)
- `layout: "bleed"`: wide frames cover the viewport (centred a little right so the copy column keeps the left); square frames float to the right of the column, clear of the header. On phones every frame goes into the bottom card and the copy sits above it.
- `{ cut: true }` segments: the film drops to the ground, a gold rule draws across (`.film-cut`), the next clip fades in. Use one between every pair of clips. `label`/`ar` on a cut are supported but duplicate the next heading; leave them off.
- `hold` segments after each clip (0.15–0.3 units) and a `hero` hold at the start. A still hero (hold on frame 0 of a wide clip, `count: 1` in the source) costs one frame instead of sixty-one.
- `scrim`: a gradient under the copy column on wide frames. It exists; prefer solid panels (`.band-section.on-photo .beat-copy` in the site CSS) because the gradient reads as fog.
- `preload`: the first ~12–24 frames of the first moving clip, not the whole clip.
- `ScrubHero`: 61 frames over a 320vh runway; `marks` light up by progress; the copy block is `.scrub-copy` (give it a panel when the hero is a photograph).

## Inner-page moments
- **ScrubHero** per inner page: the page scrolls through 61 frames (the sauce pour on the menu, the lane dissolving into the room on the story, the platter carried on catering, tea on contact).
- **Ambient loop**: a generated loop behind one section at most. Masrawy dropped its lantern loop for weight and noise.
- **Marquee, peek, counters**: available; each one is a reason the v2 page was called bloated. Use one if the direction needs it, not all.

## Frame budgets
| Clip | Frames | Width | Quality | Size |
|---|---|---|---|---|
| wide, detail-rich room | 61 | 1600 | 62 | ~11–12 MB |
| wide, simpler (hands, table) | 61 | 1600 | 62 | ~8 MB |
| square close-up | 61 | 1080 | 68 | ~3–7 MB |
| still hero (one frame of a wide clip) | 1 | 1600 | 62 | ~0.2 MB |
Five moving clips plus a still hero ≈ 35–40 MB streamed in scroll order; acceptable with a short preload. Re-encoding at the same settings is byte-identical; a lighter home means fewer or shorter clips, not a smaller `-q`. Fewer than 10 fps looks stepped when scrubbed; stay at 12.

## What to avoid
- Generated food that isn't on the menu, extra ingredients, a different plate. Prompts say "keep everything identical" and "no new objects".
- A generated exterior or room the client doesn't have. Scene-setting images (a bazaar, a lantern) go on the story page or behind a section, never as "this is us".
- Assemblies from start+end frames (spawning layers); outpainting portrait photos (seams); morphing one dish into another (smears); Kling "scan" effects.
- Judging a transition from a 384px contact sheet: extract the last second at full size.
- Blocking the pipeline on one kie task: run clips in the background, re-poll stuck tasks by id.
