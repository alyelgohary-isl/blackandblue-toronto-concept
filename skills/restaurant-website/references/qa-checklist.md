# QA checklist

`npm run build` must pass first (it fails on broken markup and bad imports). Then serve the site (`npm run dev`, or `python3 -m http.server <port>` inside `dist/` after a build) and run every line with `BASE=http://localhost:<port>/`. Port 8014 is often held by another project's session: if the loader never finishes or the screenshots show a different site, you are on the wrong port. In zsh never name a loop variable `path` (it is tied to PATH). Look at the images; don't infer from exit codes.

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
export BASE_PATH=/test/ && npm run build && (npm run preview -- --port 8015 &) && BASE=http://localhost:8015/test/ node tools/shoot.mjs …
#    preview must see BASE_PATH too, or it serves at / and every page 404s; unset BASE_PATH afterwards

# 7. Compliance and facts
grep -rn "CONFIRM" src/ | wc -l          # every one is in the handover list
grep -rniE "artist.?s concept|subject to change" dist/ | head   # the disclaimers actually ship

# 8. Distinctness: the home hero and one film beat next to the last builds, 1440x900
#    (Stallion: https://soci-social-investing.github.io/stallion-developments-website/ ; Masrawy v3: https://alyelgohary-isl.github.io/masrawy-kitchen-concept/ ; the eval sites under ~/Islands/eval-sites/)
node tools/shoot.mjs .playwright-mcp/qa/compare/this 0.00 0.30
BASE=<previous site url> node tools/shoot.mjs .playwright-mcp/qa/compare/<name> 0.00 0.30   # per previous build
#    tile all of them in one sheet with PIL and READ it
```

## What "pass" looks like
- No `pageerror` lines. A 404 for a frame folder that isn't generated yet is the only acceptable console error, and only before those frames exist.
- Every beat's text is on screen with the frame it was written for; captions don't drop a beat early (extend `data-seg` leave into the next segment's first third).
- Footer text at full contrast. If it's dim, the film overlay is still up.
- Card links on one row across the grid. Gallery captions never overlapped.
- Sticky hero on mobile: text, card and tabs fit one viewport.
- Stats counted up (if the direction has them), overlay dark, then released cleanly into the page flow.
- Beat text readable over the busiest frame of its segment, on desktop and phone: on a panel or on the ground, never on a gradient. Square clips clear of the copy column.
- Every cut shows the rule on the ground with no frame behind it; the next clip fades in after.
- The hero carries the client's primary actions; the header over the film has no band.
- No generated floor plan, site plan or map anywhere; every plan on the site is a client file.
- In the distinctness sheet, someone who saw the previous sites would not say "same template". If they would, the direction didn't make it into the CSS: fix that before reporting.

## Report
Include the tiled screenshots you looked at, and say which checks you ran. If something could not be checked (no key, no network), say so first.
