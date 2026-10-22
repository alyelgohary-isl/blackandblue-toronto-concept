# Black+Blue Toronto — beat sheet

Film concept: **"A Superior Selection" — the catalogue, lot by lot.** The plate (a letterboxed frame centred on the navy ground, caption beneath like an auction-catalogue plate) shows one lot at a time: the salt locker, the Kobe, the Wellington carved, the prime rib's jus, the room. Each beat captions the thing on screen with the client's own menu line and price. Gold hairline plate border redraws at every cut.

All clips 16:9 (Kling 3.0 pro, 5 s, 90 credits), start frame = the client's own photo, one action, no end frame unless it's light.

| # | Beat / lot | Start frame (client photo) | Action | Copy (theirs) | Credits |
|---|---|---|---|---|---|
| 0 | Hero (still, frame 0 of clip 1) | prime.jpg (salt locker) | — | "The Golden Age of Steak" / "A decidedly unique dining experience" + Book a Table, Menu, Private Dining | 0 |
| 1 | Lot 01 · The salt locker | prime.jpg 16:9 crop | slow push-in, salt bricks glow breathes | "All our steaks are kept in the cooler for 28–45 days…" | 90 |
| 2 | Lot 02 · Japanese Kobe Beef | kobe.jpg 16:9 crop | slow arc around the striploin, light moves on the marbling | Kobe Rib Eye 52 / Striploin 56 / Tenderloin 69 per oz | 90 |
| 3 | Lot 03 · Beef Wellington for Two | DSC_0235-2 (chef carving) | the knife completes the slice, slice eases away | "mushroom duxelles, crêpe, puff pastry, truffle jus" · 169 | 90 |
| 4 | Lot 04 · Prime Rib | BB.jpg (jus pour), sharpened 2K | the jus pour continues, pools, eases off | "slow-roasted, yorkshire pudding…" · 78 (14oz); Prime Rib Sundays $69 | 12 + 90 |
| 5 | Lot 05 · The Restaurant | blackblue-tor.jpg, sharpened 2K | slow glide down the room, lights glow | Address + Book a Table | 12 + 90 |

Inner-page ScrubHeroes (61 frames each):

| Page | Start | Action | Credits |
|---|---|---|---|
| /menu/ | DSC_9616-2 steak platter | steam + rosemary wisp, locked camera | 90 |
| /superior-selection/ | kobe-2 striploin | slow push-in across the marbling | 90 |
| /private-dining/ | DSC_9946-1 private room | slow dolly down the table | 90 |
| /about/ | DSC_9380 façade → night edit (end frame) | day to night, sign lights | 12 + 90 |
| /contact/ | DSC_9349 garden patio room | slow dolly, leaves sway | 90 |

Total planned: 10 clips × 90 + 3 stills × 12 = **936 credits** (balance 8,542 at start).

## 2026-10-22 — morphing clips replaced, shake fixes

- Code-made camera moves on the client's own photos (`work/camera.py`: eased push-in/pan, Lanczos from a float crop box, ends pulled inside the frame so nothing clamps mid-move) replace five Kling clips that changed the subject: **locker** (racks reshaped), **kobe** (marbling re-formed, plus up to 7 px wobble), **van_locker** (porterhouse bone reshaped), **striploin** (marbling re-formed; also re-encoded as `loops/striploin.mp4`), **roof_bull** (head reshaped, 4 px wobble). Same frame counts, names and size; `loops/van-selection.mp4` re-encoded from the new van_locker move.
  - locker `--from 0.5,0.5,1.0 --to 0.47,0.52,1.14` · kobe `0.56,0.5,1.02 → 0.44,0.6,1.16` · van_locker `0.5,0.5,1.0 → 0.44,0.5,1.12` · striploin `0.42,0.42,1.08 → 0.58,0.56,1.2` · roof_bull `0.5,0.5,1.0 → 0.5,0.4,1.12` (61 frames, 1600×900, q62; loops 121 frames q90 → pingpong.sh).
- **primerib** trimmed to 46 frames: after ~frame 46 the gravy boat bends and floats.
- Film engine (scroll-film.js): canvas sized from its 100lvh wrapper and only redrawn when that size really changes, `ScrollTrigger.config({ ignoreMobileResize: true })`, so the iOS URL bar no longer jolts the picture; adjacent frames of the same clip cross-fade by the scroll fraction, drawn once per animation frame, so slow scrolls glide instead of stepping.
