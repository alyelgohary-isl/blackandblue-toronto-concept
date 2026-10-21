# Prompt cookbook (kie.ai: Nano Banana 2 + Kling 3.0)

Everything below shipped on the Stallion site. Costs: still 12 credits (2K), clip 90 credits (5 s, pro). Stills take 30–90 s, clips 3–4 min. The upload endpoint returns `data.downloadUrl`; URLs live ~24 h.

## Still: new viewpoint of the client's house
```
python3 tools/kie.py image --ar 1:1 --res 2K --out work/rooms/living.png \
  --ref key_frames/frame1.jpg --ref "<stock living room, mood only>" \
  --prompt "Architectural visualization render in exactly the same style, palette and soft warm daylight as the first reference image (a semi-detached home with cream siding and white trim). New viewpoint: inside that home, standing just inside the front door, looking down the open-concept living room toward the back. White and light-cream walls, white trim, pale oak floor. Focal wall: a floor-to-ceiling grey granite fireplace with a white mantel, like the second reference. … In the far background: a glimpse of the white kitchen island and the rear sliding doors with a green backyard and pines. Eye level, one-point perspective. Square 1:1. Photoreal CGI render, no people, no text, no artwork on the walls."
```
Pattern: *same style as reference 1* → *new viewpoint of that same house* → materials → what's visible through openings (so the next clip has somewhere to go) → camera → format → negatives.

## Still: season / time-of-day variant (edit mode)
```
--ref key_frames/frame1.jpg --prompt "Edit this exact image and change only the season to peak Ontario autumn in October. Keep the identical camera position, framing, composition, house, road, cars, people, bicycle, dog and everything else exactly in place. Change: the large tree on the left and the trees behind the house turn brilliant orange, red and gold; fallen leaves … crisp golden late-afternoon light … Same photoreal architectural render style, same blue tile roof and cream siding, no text, no watermark."
```

## Still: aerial at the real scale
```
--ar 16:9 --ref work/xray/frame245.png --ref key_frames/frame1.jpg --prompt "Wide cinematic 16:9 aerial drone photograph of a small boutique development: EXACTLY two semi-detached buildings (four homes in total) side by side on one side of a short, quiet residential street, the same architecture as the references … No other houses anywhere. … surrounded by dense forest of tall Ontario pines and maples, a lake visible in the distance. Camera high and further back, looking down at about 40 degrees. …"
```
Without "EXACTLY … no other houses" the model drew a 40-home subdivision.

## Clip: cutaway from the film into a generated still
```
python3 tools/kie.py video --dur 5 --ar 1:1 --mode pro --start work/proof/frame110.png --end work/rooms/living.png --out work/rooms/clip_living.mp4 \
  --prompt "Single continuous shot, no cuts. The camera lowers to eye level and dollies forward smoothly toward the front door of the half-built house, keeping the whole frame sharp and stable. As it passes through the doorway the bare timber framing fills in around it into a finished, bright, white open-concept living room: … The shot settles just inside the front door looking down the room. Slow even dolly, no motion blur, soft daylight, photoreal architectural render."
```
Then living → kitchen, kitchen → deck, each with `--start <previous still> --end <next still>`. Return leg = the first clip's frames reversed in the timeline.

## Clip: seamless loop
```
--start work/aerial/day4.png --end work/aerial/day4.png --ar 16:9 --prompt "Aerial drone shot hovering almost still above … Very slow, subtle drift and gentle life: tree canopies sway lightly in the breeze, soft cloud shadows move across the lawns, a faint shimmer on the distant lake. The framing returns exactly to where it started so the clip loops seamlessly. No new objects, no people, no zoom, photoreal."
```
Motion is subtle by design; encoded loops are 150–300 KB. Prove playback with `tools/videocheck.mjs`.

## Clip: season transition (locked camera)
```
--start summer.jpg --end fall.png --prompt "Locked-off camera, absolutely no camera movement, no zoom. Seamless time-lapse of summer turning into autumn on the same street: … the people, cars, bicycle, dog and house stay exactly in place. Smooth continuous transformation, photoreal architectural render."
```

## Clip: windows glow ending
```
--start frame245.png (no --end) --prompt "Locked-off aerial shot, the camera does not move except a very slow, almost imperceptible push in. Time-lapse: the afternoon sky deepens smoothly into dusk and then blue hour … warm golden light comes on in every window of the homes one after another, a porch light glows, a street lamp flickers on … Nothing else changes."
```
Known quirk: a lamp post may grow out of nothing in the first second; acceptable at scroll speed.

## Failure modes seen

| Symptom | Cause | Fix |
|---|---|---|
| 4 smeared frames mid-clip | "walls complete around the camera" while passing a person | "house completes as the camera approaches", "everything stays sharp and stable" |
| Subdivision instead of 4 homes | scale not stated | "EXACTLY N buildings … no other houses anywhere" |
| Stock-looking result | too much weight on the stock reference | client render first, stock second, "mood like the second reference" |
| Eames chair, brand props | copied from stock reference | say "no designer furniture" or regenerate |
| Loop pops at the seam | end frame differs from start | pass the same file to --start and --end |
| Dusk clip only "softens" | "dusk" is vague | "deep blue-violet blue-hour sky, sun fully set, windows are the brightest thing in frame" |
| 12–14 units for a 12-unit brief | count stated once | "EXACTLY twelve villas, count them, no partial or overlapping buildings, nothing beyond the community" |
| Spend disputed later | no record | tools/kie.py writes every call + creditsConsumed to work/gen/kie.log; quote it in the report |
