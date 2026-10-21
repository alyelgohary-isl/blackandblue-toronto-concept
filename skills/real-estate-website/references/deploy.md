# Deploy and launch

## GitHub Pages
```
tools/deploy.sh <owner> <repo> [public|private]
```
Checks `npm run build` passes, creates the repo if missing, commits and pushes `main`, enables Pages with the Actions workflow, waits for the first deploy and prints `https://<owner>.github.io/<repo>/`. The workflow builds with the base path GitHub reports (`/<repo>/` on a project site, `/` on a custom domain), so no file changes per repo. Needs `gh` logged in or `GH_TOKEN` with repo + Pages admin in `.env`. Pages on a private repo needs a paid GitHub plan; default to public for marketing sites.

If Pages can't be enabled by the token (the workflow fails at `configure-pages`), the owner flips Settings → Pages → Source: GitHub Actions once, then re-runs the workflow.

Links and assets in pages go through `url()` from `@/lib/url` so they follow the base path; a hand-written `/x/` or `../x/` link breaks under `/<repo>/`.

## Forms
All forms post through one handler to the Formspree endpoint in `public/js/config.js`, with a per-form subject, the page URL, a honeypot and an invisible reCAPTCHA v3 token that Formspree verifies. Setup (client side, ~10 min):
1. formspree.io → new form → recipient = the client's inbox → they click the verification email.
2. google.com/recaptcha/admin → v3 → domains: production domain + `<owner>.github.io` → site key into `public/js/config.js`, secret into the Formspree form's spam settings. Set `siteName` there too: it prefixes every email subject.
Free tier: 50 submissions/month across the account.

## Tracking (GTM / GA4 / Search Console)
No code per site. Put the IDs in the site's `.env` before `tools/deploy.sh`; it copies them to the repo's Actions variables and the workflow injects them at build time (production builds only; `npm run dev` stays clean):
- `PUBLIC_GTM_ID=GTM-…`: preferred. GA4 lives inside the container.
- `PUBLIC_GA4_ID=G-…`: only for a site with no GTM container (gtag.js loaded directly).
- `PUBLIC_GSC_VERIFICATION=…`: Search Console HTML-tag token. Optional: GSC can verify through the GTM container instead.

Missing IDs are not a blocker: ship without them and list them in the handover. To add or change one later: edit the repo variable on GitHub (Settings → Secrets and variables → Actions → Variables), then re-run the Pages workflow.

Conversions: after a 2xx from the form endpoint, `site.js` pushes `{event: "form_success", form_name, form_type}` (`form_name` = the form's `data-form`, `form_type` = `data-form-type` or the same). In the GTM container: Data Layer Variables `form_name` and `form_type`, a Custom Event trigger on `form_success` where `form_type` is not `newsletter`, a GA4 Event tag `generate_lead` with `form_name` and `form_type` parameters. In GA4, mark `generate_lead` as a key event. The gtag.js fallback sends `generate_lead` itself. Real estate form types are `register`, `floor_plan`, `viewing`, `investor`, `broker`, `valuation`, `contact` (see intake.md); `form_type` lets the client split floor-plan requests from general enquiries in GA4 without extra tags. Test in the browser console: `dataLayer.push({event:"form_success", form_name:"test", form_type:"test"})`, then check GA4 Realtime.

## Launch checklist to hand over
- CONFIRM items in the HTML comments (grep `CONFIRM`), resolved with the client
- Compliance lines confirmed: artist's-concept and subject-to-change disclaimers, licence / registration / advertising permit numbers where the region needs them (intake.md §3)
- Floor plan PDFs and price lists are the client's latest versions
- Formspree recipient verified, reCAPTCHA keys in place, test submission received
- Custom domain: `public/CNAME` + DNS; `url` in `src/site.config.ts` already drives canonical and OG, so update sitemap and robots
- Tracking IDs set (or listed as pending), `generate_lead` marked as a key event, Search Console verified and sitemap submitted
- 404 page, real OG image
- Placeholder cards ("renderings coming soon") replaced when assets arrive
- Frame weight reviewed (home ≤ ~70 MB); inner sequences at 800px

## What runs where
- Claude Code / Cowork on a machine with `tools/setup.sh` done: the whole pipeline.
- Claude Code cloud sessions: same, with `KIE_API_KEY` and `GH_TOKEN` as environment secrets and `tools/setup.sh` in the session setup.
- claude.ai chat alone: can write the copy doc and beat sheet, cannot generate, QA or deploy; hand off to a Claude Code session.
