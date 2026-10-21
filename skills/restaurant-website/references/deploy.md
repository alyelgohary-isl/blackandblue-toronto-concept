# Deploy and launch

## GitHub Pages
```
tools/deploy.sh <owner> <repo> [public|private]
```
Checks `npm run build` passes, creates the repo if missing, commits and pushes `main`, enables Pages with the Actions workflow, waits for the first deploy and prints `https://<owner>.github.io/<repo>/`. The workflow builds with the base path GitHub reports (`/<repo>/` on a project site, `/` on a custom domain), so no file changes per repo. Needs `gh` logged in or `GH_TOKEN` with repo + Pages admin in `.env`. Pages on a private repo needs a paid GitHub plan; default to public for marketing sites.

If Pages can't be enabled by the token (the workflow fails at `configure-pages`), the owner flips Settings → Pages → Source: GitHub Actions once, then re-runs the workflow.

**Token without the `workflow` scope** (`refusing to allow an OAuth App to create or update workflow`): the push of `.github/workflows/pages.yml` is rejected. Either `gh auth refresh -h github.com -s workflow` (needs a browser), or publish without Actions: commit `main` with `.github/` removed from the index (`git rm -r --cached .github`, add `.github/` to `.git/info/exclude`), then `BASE_PATH=/<repo>/ npm run build && touch dist/.nojekyll`, init a `gh-pages` branch inside `dist/`, force-push it, and enable Pages from that branch (`gh api -X POST repos/<o>/<r>/pages -f source[branch]=gh-pages -f source[path]=/`). Redeploys repeat the build-and-push; `.nojekyll` matters because `_astro/` would otherwise be ignored.

`tools/check-clean.sh` runs before every build (npm pre-scripts, the scaffold, the workflow, the pre-commit hook). It refuses a checkout carrying the 2026 repo-poisoning payload (obfuscated tail on config files, folder-open task, fake fonts). Never bypass it.

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

Conversions: after a 2xx from the form endpoint, `site.js` pushes `{event: "form_success", form_name, form_type}` (`form_name` = the form's `data-form`, `form_type` = `data-form-type` or the same). In the GTM container: Data Layer Variables `form_name` and `form_type`, a Custom Event trigger on `form_success` where `form_type` is not `newsletter`, a GA4 Event tag `generate_lead` with `form_name` and `form_type` parameters. In GA4, mark `generate_lead` as a key event. The gtag.js fallback sends `generate_lead` itself. Restaurant form types are `reserve`, `catering_quote`, `private_event`, `contact` (plus `preorder`, `book_truck` where they apply; see intake.md); `form_type` lets the client split catering quotes from table requests in GA4 without extra tags. Test in the browser console: `dataLayer.push({event:"form_success", form_name:"test", form_type:"test"})`, then check GA4 Realtime.

## Launch checklist to hand over
- CONFIRM items in the HTML comments (grep `CONFIRM`), resolved with the client
- Prices and hours match the client's current printed menu; `confirm` notes in `src/data/menu.ts` resolved; allergen and halal/dietary wording as the client states it
- `noindex` removed from `src/site.config.ts` when the site replaces the live one; old URLs redirected (`astro.config.mjs` + `public/_redirects`); Google Business Profile website and menu links updated
- Formspree recipient verified, reCAPTCHA keys in place, test submission received
- Custom domain: `public/CNAME` + DNS; `url` in `src/site.config.ts` already drives canonical and OG, so update sitemap and robots
- Tracking IDs set (or listed as pending), `generate_lead` marked as a key event, Search Console verified and sitemap submitted
- 404 page, real OG image
- Generated clips reviewed on contact sheets and last frames; frame weight reviewed (home ≤ ~50 MB; wide 1600/q62, square 1080/q68)
- Full-resolution originals requested from the photographer if the web copies are ≤1000px

## What runs where
- Claude Code / Cowork on a machine with `tools/setup.sh` done: the whole pipeline.
- Claude Code cloud sessions: same, with `KIE_API_KEY` and `GH_TOKEN` as environment secrets and `tools/setup.sh` in the session setup.
- claude.ai chat alone: can write the copy doc and beat sheet, cannot generate, QA or deploy; hand off to a Claude Code session.
