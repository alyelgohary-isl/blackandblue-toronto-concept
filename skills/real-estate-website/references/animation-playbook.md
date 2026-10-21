# Animation playbook

The home film is one continuous frame sequence (12 fps webp frames drawn to a canvas) driven by scroll, with text beats set beside or over it. Everything else on the site is quieter: at most one loop or one scrub per inner page. The concept and framing are chosen to serve the direction in `work/direction.md`; don't default to the first row of the menu.

## The three techniques

1. **Cutaway with return.** Kling 3.0 takes a start frame and an end frame. Leave the film at frame N, generate N → (generated still), play it forward, hold on the still, play the same clip in reverse, resume at N+1. The original frames never change and the return is exact. Reverse in the timeline (`from: ["cutaway", 60], to: ["cutaway", 0]` in `src/data/film.ts`), not with ffmpeg.
2. **Seamless loop.** Same image as start and end frame, locked camera, "the framing returns exactly to where it started". Encode with `tools/loop.sh`. For hero backgrounds.
3. **Edit-mode stills.** Nano Banana 2 with the client's render as the first reference and "keep identical composition, change only X" for seasons, times of day, or a new viewpoint "of the same house". One stock image as a second reference, for mood only.

Chaining (2) and (1): any sequence of generated stills A → B → C → D becomes a film by generating clips A→B, B→C, C→D with start and end frames. Plan the stills first; they are the storyboard.

## Film concepts for real estate

| Concept | What the viewer sees | Suits | Cost |
|---|---|---|---|
| **Deconstruct / rebuild** (Stallion) | roof lifts, floors strip to framing, down to the lot, rebuild, rise to aerial | builders proud of how they build | 6 clips |
| **X-ray walkthrough** | from the stripped frame, glide in through the front door, room to room, out the back | a home with a strong interior; pairs with deconstruct | 3–4 clips + 3 stills |
| **Model to real** | a white architectural massing model on a table; the camera pushes in and the model becomes the finished render at full scale | towers, design-led developers, architects credited | 2–3 clips + 2 stills |
| **Elevator rise** | locked on the façade, the camera rises floor by floor; beats are levels (lobby, amenity floor, typical suite, penthouse) and the view widens as it climbs; ends on the penthouse view | condo and tower launches | 4–5 clips + 5 stills |
| **A day at the house** | one locked or slowly drifting shot, morning → noon → golden hour → blue hour; each beat is a moment of life (coffee on the deck, kids home, dinner, lights on) | family homes, cottage country, "full-time living" | 3–4 clips + 4 edit-mode stills |
| **Arrival sequence** | gate → drive → front door → through the house → the view it was built for | luxury single homes, villas, branded residences | 4 clips + 4 stills |
| **Arrive by water / by road** | approach from the lake, coast or road the buyer will actually use | waterfront, resort, rural | 2–3 clips |
| **Material study** | macro close-ups (stone, oak, brass, linen) that pull back to reveal the room they belong to | luxury interiors, designer-led projects | 3 clips + 3 macro stills |
| **Neighbourhood walk** | street → café → park → front door; one cutaway per nearby thing the copy names | brokerages, infill projects where location sells | 4 clips + 4 stills |
| **Plan to place** | the client's own floor plan on paper; walls rise out of the lines into the render | only when the client supplies the plan, and only as an impression: the clip will not preserve the plan exactly, so never show it as the plan | 1–2 clips |
| **Windows glow ending** | final exterior goes to blue hour, windows warm one by one | any film ending on an exterior | 1 clip |

Inner-page moments:

| Moment | What the viewer sees | Cost |
|---|---|---|
| **Four seasons scrub** | locked shot cycles summer → fall → winter → spring under a sticky hero | 3 stills + 3 clips |
| **Ambient loop hero** | 5-second breathing aerial or exterior behind hero copy | 1 still + 1 loop |
| **Day-to-dusk hero** | the same view at blue hour for the contact page | 1 still + 1 loop |
| **Rooms strip** | horizontal pinned strip of generated interiors of the same home | 4 stills |
| **Floor selector** | for towers: a still per level, swapped (or scrubbed) as the visitor picks a floor | 1 still per level |

## Framing (from the direction)

The same frames can be presented very differently; framing is set in `frameRect()` (see `creative-direction.md`). Decide it before generating, because it sets the aspect ratio. `tools/frames.sh` scales every clip to a `SIZE`×`SIZE` square, so for any non-square framing change its `scale=` filter in the site's copy (e.g. `scale=1600:900` for 16:9, `scale=720:1280` for 9:16) or the frames come out squashed; keep the total home weight in budget (16:9 at 1600px is roughly 1.6× a 960 square).

- **Square card** (left, right or centred): generate `--ar 1:1`. Text on solid ground beside it.
- **Full-bleed**: generate `--ar 16:9`; phones show a centre crop, so keep the subject centred in every still. Beat text needs a scrim or caption band.
- **Letterbox**: `--ar 16:9` (or crop to 21:9); captions below the band like subtitles.
- **Portrait card** (a brochure page): clips at `--ar 9:16` (Kling offers 16:9, 9:16 and 1:1; crop to 3:4 in `frames.sh` if wanted); works on phones without cropping.

## Beat mapping

- 5 to 7 beats. Each beat is one client message the copy doc already has (credentials, in-house build, land owned, design team, location, the homes themselves, the terms).
- Put the strongest visual payoff two-thirds in, not at the start.
- Holds of 0.1–0.5 units between clips give each message a beat of stillness. Cutaway holds 0.4–0.5.
- Captions on cutaways are short and come from the copy doc: "Open-concept living." "Generous yards, made for Muskoka summers."
- The ending is part of the direction: a stats moment over a darkened final shot (Stallion), a single line and the CTA, the view with nothing on it, or a cut straight into the page. Then release into the page flow.

## What to avoid

- Clips that push *through* a wall with "walls complete around the camera": they smear for ~4 frames at the midpoint. Prefer "the house completes as the camera approaches the door" or "glide between the studs".
- Stock images with palms, deserts or landmarks for an Ontario client (or snow and pines for Dubai); check location tags in the kit manifest.
- A 40-home subdivision for a 4-home project, a stock house as the client's project, a view from a suite that the building can't have (don't show a lake from a floor that faces the car park; ask), designer furniture the client would object to.
- Generated floor plans, site plans or maps presented as real.
- More than ~600 frames on the home page. The preloader is progressive, but keep cutaways to 61 frames each and shrink inner-page sequences to 800px (`SIZE=800 Q=76`).
