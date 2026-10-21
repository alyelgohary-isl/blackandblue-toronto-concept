# Black+Blue Toronto — launch checklist

- [ ] Resolve the CONFIRM list in work/copy.md (`grep -rn CONFIRM src/`): brunch start time, Toronto distinctions, room capacities, events reply time, allergen and legal copy, holiday closures.
- [ ] Prices and hours re-checked against the current printed menu (src/data/menu.ts was transcribed from the live HTML menu on 2026-10-22).
- [ ] Decide the events path: the on-site `private_event` form, Tripleseat, or both (both are wired).
- [ ] Formspree form (recipient info@blackandbluetoronto.com), endpoint in public/js/config.js; reCAPTCHA v3 site key there, secret in Formspree; one test submission per form.
- [ ] GTM: the live site runs GTM-MRZWV3Z3. Put it in `.env` as PUBLIC_GTM_ID, add the `form_success` → GA4 `generate_lead` tag, mark it a key event.
- [ ] Remove `noindex` (site.noindex in src/site.config.ts) and the concept line in the footer when this replaces /toronto-home/.
- [ ] Hosting: this is Toronto only; the group site also serves Vancouver and The Roof. Either mount it at blackandbluesteakhouse.ca/toronto/ or a subdomain, then update `url` in src/site.config.ts. Old Toronto URLs are mapped in astro.config.mjs (meta-refresh) and public/_redirects (301s).
- [ ] Google Business Profile: website → new home, menu link → /menu/.
- [ ] Higher-resolution originals of the room photo (blackblue-tor.jpg is 900px; the film uses a 2K sharpen) and the Wellington shot (700px).
- [ ] Generated motion reviewed on contact sheets and last frames (work/gen/sheets); the Wellington carve is trimmed to its first 3.4 s because the last 1.6 s rearranged the pastry.
