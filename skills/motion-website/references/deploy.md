# Deploy and launch

## GitHub Pages
```
tools/deploy.sh <owner> <repo> [public|private]
```
Relativizes every URL (project sites live under `/repo/`), creates the repo if missing, commits and pushes `main`, enables Pages with the Actions workflow, waits for the first deploy and prints `https://<owner>.github.io/<repo>/`. Needs `gh` logged in or `GH_TOKEN` with repo + Pages admin in `.env`. Pages on a private repo needs a paid GitHub plan; default to public for marketing sites.

If Pages can't be enabled by the token (the workflow fails at `configure-pages`), the owner flips Settings → Pages → Source: GitHub Actions once, then re-runs the workflow.

Keep new links relative afterwards (`./`, `../`, `../../` by depth). `relativize.py` is idempotent; run it before every deploy.

## Forms
All forms post through one handler to the Formspree endpoint in `js/config.js`, with a per-form subject, the page URL, a honeypot and an invisible reCAPTCHA v3 token that Formspree verifies. Setup (client side, ~10 min):
1. formspree.io → new form → recipient = the client's inbox → they click the verification email.
2. google.com/recaptcha/admin → v3 → domains: production domain + `<owner>.github.io` → site key into `config.js`, secret into the Formspree form's spam settings.
Free tier: 50 submissions/month across the account.

## Launch checklist to hand over
- CONFIRM items in the HTML comments (grep `CONFIRM`), resolved with the client
- Formspree recipient verified, reCAPTCHA keys in place, test submission received
- Custom domain: CNAME file in the repo + DNS; update canonical, sitemap, robots
- Analytics snippet, 404 page, real OG image
- Placeholder cards ("renderings coming soon") replaced when assets arrive
- Frame weight reviewed (home ≤ ~70 MB); inner sequences at 800px

## What runs where
- Claude Code / Cowork on a machine with `tools/setup.sh` done: the whole pipeline.
- Claude Code cloud sessions: same, with `KIE_API_KEY` and `GH_TOKEN` as environment secrets and `tools/setup.sh` in the session setup.
- claude.ai chat alone: can write the copy doc and beat sheet, cannot generate, QA or deploy; hand off to a Claude Code session.
