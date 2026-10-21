/* "A Superior Selection, lot by lot." The home film, passed to <ScrollFilm layout="plate"> in src/pages/index.astro.
   Five Kling 3.0 clips (16:9, 61 frames each at 12 fps), every one started from the client's own photograph.
   Frames are cropped into a letterboxed plate centred under the header; fx/fy set each clip's focal point.
   Between lots a `cut` drops the plate to the ground and its gold frame traces itself again.
   Provenance and prompts: work/beats.md and work/gen/kie.log. */

export const sources = {
  locker:   { dir: "frames/locker",   prefix: "lo_", count: 61, fy: 0.46 },  // their salt-locker photo (prime.jpg): slow push-in, the salt wall glows
  kobe:     { dir: "frames/kobe",     prefix: "ko_", count: 61, fx: 0.56, fy: 0.58 },  // their Kobe striploin with the certificate (kobe.jpg): slow arc
  carve:    { dir: "frames/carve",    prefix: "ca_", count: 41, fy: 0.52 },  // the chef carving the Wellington (DSC_0235-2); frames 41–60 rearranged the pastry, cut
  primerib: { dir: "frames/primerib", prefix: "pr_", count: 61, fy: 0.42 },  // the jus pour over prime rib (BB.jpg, sharpened)
  room:     { dir: "frames/room",     prefix: "ro_", count: 61, fy: 0.5 },   // the room (blackblue-tor.jpg, sharpened): slow glide to the bar
};

type Ref = [keyof typeof sources, number];
type Segment = { id: string; units: number } & ({ from: Ref; to: Ref } | { hold: Ref } | { cut: true });

export const timeline: Segment[] = [
  { id: "hero",     units: 0.7,  hold: ["locker", 0] },                         // the salt locker, still, under the hero copy
  { id: "locker",   units: 0.8,  from: ["locker", 0], to: ["locker", 60] },     // Lot 01
  { id: "h1",       units: 0.2,  hold: ["locker", 60] },
  { id: "c1",       units: 0.25, cut: true },
  { id: "kobe",     units: 0.8,  from: ["kobe", 0], to: ["kobe", 60] },         // Lot 02
  { id: "h2",       units: 0.2,  hold: ["kobe", 60] },
  { id: "c2",       units: 0.25, cut: true },
  { id: "carve",    units: 0.8,  from: ["carve", 0], to: ["carve", 40] },       // Lot 03
  { id: "h3",       units: 0.2,  hold: ["carve", 40] },
  { id: "c3",       units: 0.25, cut: true },
  { id: "primerib", units: 0.8,  from: ["primerib", 0], to: ["primerib", 60] }, // Lot 04
  { id: "h4",       units: 0.2,  hold: ["primerib", 60] },
  { id: "c4",       units: 0.25, cut: true },
  { id: "room",     units: 0.9,  from: ["room", 0], to: ["room", 60] },         // Lot 05: the restaurant
  { id: "end",      units: 0.4,  hold: ["room", 60] },
];

/* Frames loaded before the loader lifts; the rest stream in scroll order */
export const preload: Ref = ["locker", 18];

export const plate = { ratio: 2.35, maxH: 0.58, mobileRatio: 1.16 };
