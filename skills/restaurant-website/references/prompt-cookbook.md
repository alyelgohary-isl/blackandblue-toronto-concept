# Prompt cookbook (kie.ai: Nano Banana 2 + Kling 3.0), restaurant edition

Costs seen on Masrawy (2026-10-21): still 12 credits (2K), clip 90 credits (5 s, pro, 16:9 or 1:1). Stills 30–120 s; clips 2–4 min; a task can sit in "waiting" for 10+ min (re-poll by id: `GET /api/v1/jobs/recordInfo?taskId=`, then download `resultJson.resultUrls[0]`). Every call is logged with its credits in `work/gen/kie.log`.

## Still: sharpen a small portrait photo into a square master (worked, first try)
```
kie.py image --ar 1:1 --res 2K --ref work/gen/src/coffee_sq.png --out work/gen/stills/coffee_sq.png \
  --prompt "Edit this exact photograph: output the same image at higher resolution and sharpness. Keep everything completely identical: same framing, same subject, same hands, same dish, same table, same light, same colours, same depth of field. Do not add, remove, move or restyle anything. No text, no watermark. Square 1:1."
```
Input was a 667×667 crop of the client's photo; output 2K, identical content. Use it as the Kling start frame.

## Still: the room at night (edit of the client's photo; worked, first try)
```
--ar 16:9 --ref work/gen/src/room_main.png --prompt "Edit this exact image and change only the time of day to night service. Keep the identical camera position, framing, composition, every table, chair, beam, screen, floor tile and wall exactly in place. Change: the windows at the back become deep blue-violet blue hour with the parking lot lights glowing softly outside; the string bulbs and pendant lamps become the brightest thing in the room, warm amber; candles or small brass lanterns glow on the tables; the mashrabiya screens are lit from behind with warm light casting patterned shadows; every table is laid with plates and glasses as if guests are about to sit. Same photoreal photographic style, same lens, no people, no text."
```
Result: the real room, blue-hour windows, lanterns on the tables. The end frame for the lunch-to-night clip and the OG image.

## Still: the empty bowl (edit; the start frame for a "builds layer by layer" clip)
```
--ar 1:1 --ref work/gen/stills/koshary_sq.png --prompt "Edit this exact image and change only one thing: the steel bowl is now completely EMPTY, clean and shiny inside, and the three small sauce cups beside it are also empty. Keep the identical camera position, framing, tray, bowl, cups, patterned tiles, table, light and depth of field. Nothing else changes. No text. Square 1:1."
```

## Still: scene-setting images that never claim to be the client's
Khan El-Khalili lane (16:9, from scratch): "Photoreal night photograph, 16:9, of a narrow lane in Khan El-Khalili bazaar in Cairo: dozens of hanging brass and coloured-glass lanterns glowing warm amber above the lane, stone arches, carved mashrabiya wooden screens on the upper windows, shop fronts with brass trays and clay pots, a few blurred passers-by in the distance, warm haze. Camera at eye level looking straight down the lane toward a lit archway at the far end. Cinematic, 35mm, shallow depth of field. No text, no signs with readable letters, no logos." Excellent first try.
Lantern (16:9): "Photoreal close-up photograph of a single ornate brass Egyptian lantern (fanous) with pierced star-and-polygon patterns and small coloured glass panels, hanging from a chain in a dark restaurant interior, lit from inside by a warm flickering flame, casting a lace of patterned light on a dark plaster wall behind it. Deep umber darkness around it, shallow depth of field, slight haze. No text, no people." Excellent; the loop source.

## Failed: outpainting portrait photos to 16:9
Padding the photo with black bands and asking "Replace ONLY the solid black bands on the left and on the right with a seamless, photoreal continuation…" produced plausible side panels with visible seams, different exposure and a different table plane on 4 of 7 photos. Abandoned (84 credits). Use square clips instead.

## Clip: lunch to lantern hour (start = real photo, end = the night edit; worked)
```
kie.py video --dur 5 --ar 16:9 --mode pro --start work/gen/src/room_main.png --end work/gen/stills/room_night.png --out work/gen/clips/night.mp4 \
  --prompt "Locked-off camera, absolutely no camera movement, no zoom. Seamless time-lapse from lunch to dinner service in the same dining room: the daylight in the windows fades through golden afternoon into deep blue-violet blue hour, the string bulbs and pendant lamps brighten to warm amber, lanterns glow on the tables and the carved screens light from behind, the tables become laid for dinner. Every table, chair, beam and tile stays exactly in place. Smooth continuous transformation, photoreal."
```
The contact sheet at 384px looked unchanged; the last frame at full size is the lit room. Always check the last frame.

## Clip: hands over the shared platter (start = real overhead photo, no end; worked)
"Locked overhead camera, absolutely no camera movement, no zoom. Lively, natural movement: the hands tear pieces of bread, scoop falafel and potatoes, dip into the sauces and lift them away, another hand reaches in from the edge of the frame; the plates and the platter stay in place. Smooth, photoreal, no new people."

## Clip: slow glide into the room (start = real wide photo, no end; worked, subtle)
"Single continuous shot, locked exposure. The camera dollies forward very slowly and smoothly into the empty dining room toward the tufted booths and the patterned wall, the carved wooden screens passing on the left, the pendant lamps glowing warmly. Everything stays sharp and stable; no people appear; no new objects; a subtle flicker in the string bulbs. Photoreal, cinematic, 35mm." Motion is gentle; fine under the hero copy.

## Clip: pours (start = square master, no end)
Coffee: "Locked camera, no zoom, no cuts. The hand tilts the steel kanaka and a thin stream of dark Egyptian coffee pours into the cup, steam rising and curling in the warm light; the pour slows and stops as the cup fills; the hand stays in frame. Everything else stays exactly in place. Photoreal, shallow depth of field."
Tahina: "…the small jug tilts a little further and creamy white tahina pours in a smooth ribbon over the grilled kofta, pooling and spreading on the meat; a little steam rises from the kofta; the pour eases off at the end…"
Honey, syrup, tea: same shape: what pours, where it lands, how it ends, "everything else stays in place".

## Clip: finishing the dish (start = the real photo, no end; worked, replaced the build)
```
kie.py video --dur 5 --ar 1:1 --mode pro --start <koshary_sq.jpg url> --out work/gen/clips/koshary_sauce.mp4 \
  --prompt "Locked-off overhead camera, absolutely no camera movement, no zoom. A steel ladle enters from the top edge of the frame and pours thick red spiced tomato sauce in a slow, glossy stream over the centre of the koshary, the sauce spreading over the rice, pasta and chickpeas; a little steam rises; the ladle lifts away as the pour ends. The bowl, the tray and the three small cups stay exactly in place. Smooth, continuous, photoreal."
```
Clean first try: the ladle enters, pours, spreads, leaves. The companion prompt (a hand sprinkles fried onions, then a jug of dakka) was weaker: the pinch barely registered and the jug was half out of frame. Prompt the one action that changes the dish visibly.

## Clip: the dish builds (start = empty-bowl edit, end = the real photo) — FAILED in review
"Locked-off overhead camera, absolutely no camera movement. The empty steel bowl fills in order, each layer dropping gently from above: white rice and brown lentils first, then short pasta, then chickpeas, then thick red tomato sauce spooned over, then a generous pile of crispy golden fried onions; the three small cups fill with red sauce, garlic vinegar and fried onions. Ends exactly on the final frame. Smooth, continuous, photoreal, no hands."
It generated and looked fine on the contact sheet, and the client said "things kinda just spawn in". With both frames fixed, Kling invents the assembly and layers materialise in place. Do not use start+end for assemblies; finish the dish instead (above).

## Clip: seamless loop (same still as start and end)
"Locked camera. The brass lantern hangs almost still, swaying very slightly on its chain; the flame inside flickers gently and the lace of patterned light on the wall breathes with it. The framing returns exactly to where it started so the clip loops seamlessly. No new objects, photoreal."

## Clip: the doorway (generated lane → the real room)
"Single continuous shot, no cuts. The camera dollies slowly forward down the lantern-lit bazaar lane toward the glowing archway; as it passes through the arch the lane dissolves smoothly and seamlessly into the bright dining room of the final frame, the lanterns becoming the string bulbs, the carved screens staying carved. Everything stays sharp and stable, no people, photoreal."

## Pipeline notes
- Upload masters as JPEG (`ffmpeg -i x.png -q:v 2 x.jpg`): the base64 upload of an 8 MB 2K PNG timed out twice; the 1.3 MB JPEG went through at once. Upload once with `kie.py upload` and pass the URL to every task that uses it.
- Prepare inputs with Pillow: landscape → `ImageOps.fit(1920×1080)`; portrait → square crop → 2K master via the sharpen prompt.
- Run stills in parallel threes with `&`/`wait` in a nohup script; run clips the same way, each `clip()` waiting for its input file to exist so waves chain without supervision.
- A waiter that `pgrep -f`s a script name matches itself under zsh; kill it and start the next batch directly.
- Review: `ffmpeg -i clip.mp4 -vf "fps=2,scale=480:-2,tile=5x2" sheet.jpg` plus `-ss 4.9 -frames:v 1` for the last frame.
