# Animation playbook

The home film is one continuous square sequence (12 fps webp frames drawn to a canvas) driven by scroll. Text beats sit on solid ground beside it. Everything else on the site is quieter: one loop or one scrub per inner page.

## The three techniques

1. **Cutaway with return.** Kling 3.0 takes a start frame and an end frame. Leave the film at frame N, generate N → (generated still), play it forward, hold on the still, play the same clip in reverse, resume at N+1. The original frames never change and the return is exact. Reverse in the timeline (`f0: 60, f1: 0`), not with ffmpeg.
2. **Seamless loop.** Same image as start and end frame, locked camera, "the framing returns exactly to where it started". Encode with `tools/loop.sh`. Use for hero backgrounds.
3. **Edit-mode stills.** Nano Banana 2 with the client's render as the first reference and "keep identical composition, change only X" for seasons, times of day, or a new viewpoint "of the same house". Add one stock image as a second reference for mood only.

## Concept menu

| Concept | What the viewer sees | Best for | Cost |
|---|---|---|---|
| **Deconstruct / rebuild** | roof lifts, floors strip to framing, down to the lot, rebuild, rise to aerial | builders, manufacturers, anything "made" | 6 clips (the base film) |
| **X-ray walkthrough** | from the stripped frame, glide in through the front door, room to room, out the back | homes: living room and kitchen first, then the yard | 3–4 clips + 3 stills |
| **Room cutaway** | rise into the upper floor, framing fills into a bedroom | one extra payoff beat | 1 clip + 1 still |
| **Windows glow ending** | final aerial goes to blue hour, windows warm one by one | any film ending on an exterior | 1 clip |
| **Four seasons scrub** | locked shot cycles summer → fall → winter → spring under a sticky hero | product pages; "full-time living" messages | 3 stills + 3 clips |
| **Ambient loop hero** | 5-second breathing aerial or exterior behind hero copy | index and contact pages | 1 still + 1 loop each |
| **Day-to-dusk hero** | the same aerial at blue hour for the contact page | pairs with the daytime index hero | 1 still + 1 loop |
| Rooms strip (parked) | horizontal pinned strip of restyled interiors | when there's no render to build a film from | 4 stills |

For a business that doesn't build things (restaurant, clinic, workshop), the deconstruct film becomes a **reveal**: empty room → set table → service, or raw material → product, told with the same cutaway mechanics. The stock kit's motion prompts (one camera move + one subject action + secondary motion) are a good seed.

## Beat mapping

- 5 to 7 beats. Each beat = one client message the copy doc already has (credentials, in-house, land owned, design, transparency, location).
- Put the strongest visual payoff (the room walkthrough) two-thirds in, not at the start.
- Holds of 0.1–0.5 units between clips give each message a beat of stillness. Cutaway holds 0.4–0.5.
- Captions on cutaways are unnumbered and short: "Open-concept living." "Generous yards, made for Muskoka summers."
- End on a stats moment over a darkened final shot, then release into the page.

## What to avoid

- Clips that push *through* a wall with "walls complete around the camera": they smear for ~4 frames at the midpoint. Prefer "the house completes as the camera approaches the door" or "glide between the studs".
- Stock images with palms, deserts or landmarks for an Ontario client; check location tags in the kit manifest.
- Rendering the same status twice, a 40-home subdivision for a 4-home project, a stock house as the client's project, an Eames chair in a client render if they'd object.
- More than ~600 frames on the home page. The preloader is progressive, but keep cutaways to 61 frames each and shrink inner-page sequences to 800px (`SIZE=800 Q=76`).
