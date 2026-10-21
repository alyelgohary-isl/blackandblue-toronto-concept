# QA checklist

Serve the site (`python3 -m http.server 8014`) and run every line. Look at the images; don't infer from exit codes.

```
# 1. Film: a frame from every timeline segment, desktop
node tools/shoot.mjs .playwright-mcp/qa 0.00 0.10 0.20 0.30 0.40 0.50 0.60 0.70 0.80 0.90 0.97 1.00
#    prints frame index per point + page errors; tile with PIL and READ the sheet

# 2. Film on a phone
VIEWPORT=390x844 node tools/shoot.mjs .playwright-mcp/qa/m 0.30 0.55 0.96

# 3. Every page, full height, desktop and mobile (stitched strips; never resize the viewport on vh-based pages)
for p in "" communities/ contact/ …; do node tools/fullpage.mjs .playwright-mcp/qa/$p.png http://localhost:8014/$p && python3 tools/stitch.py .playwright-mcp/qa/$p.png; done
VIEWPORT=390x844 node tools/fullpage.mjs … && python3 tools/stitch.py …
#    crop tall captures into 3–4 chunks before reading them

# 4. Loops actually play
node tools/videocheck.mjs http://localhost:8014/communities/ http://localhost:8014/contact/
#    expect readyState 4, paused false, currentTime advancing

# 5. Forms end to end (mock endpoint)
node tools/formtest.mjs http://localhost:8014/contact/ "form.form"
#    expect the fields + _subject/form/page + empty _gotcha, success state true

# 6. Subpath check before deploy (GitHub Pages project sites live under /repo/)
python3 tools/relativize.py && (cd .. && python3 -m http.server 8015 &) && BASE=http://localhost:8015/<dir>/ node tools/shoot.mjs …
```

## What "pass" looks like
- No `pageerror` lines. A 404 for a frame folder that isn't generated yet is the only acceptable console error, and only before those frames exist.
- Every beat's text is on screen with the frame it was written for; captions don't drop a beat early (extend `data-seg` leave into the next segment's first third).
- Footer text at full contrast. If it's dim, the film overlay is still up.
- Card links on one row across the grid. Gallery captions never overlapped.
- Sticky hero on mobile: text, card and tabs fit one viewport.
- Stats counted up, overlay dark, then released cleanly into the page flow.

## Report
Include the tiled screenshots you looked at, and say which checks you ran. If something could not be checked (no key, no network), say so first.
