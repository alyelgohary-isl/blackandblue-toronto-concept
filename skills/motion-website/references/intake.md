# Intake: from a URL or brief to a copy doc

## What to extract

From the existing site (fetch the home page and the 3–5 most important inner pages; a sitemap.xml if present):

| Field | Where it usually is | Why it matters |
|---|---|---|
| Legal name, tagline | header/footer, about | brand lockup, footer, JSON-LD |
| What they sell, to whom | home hero, product pages | the film's story and the two CTA audiences |
| Offerings (projects, menus, services) with facts | listing pages | cards, spec lists, inner pages |
| Proof (credentials, awards, years, counts) | about, footer badges | film beats, stats moment |
| Contact: email, phone, address, hours | contact, footer | forms, footer, schema (CONFIRM if missing) |
| Brand: logo, colours, fonts, tone of voice | CSS, imagery | tokens |
| Imagery: renders, photos, video | media | the film's source stills; note licence/ownership |
| Regions / locations | pages, copy | "why here" sections, SEO |

From a kit or brief with no URL: ask nothing yet; write the copy doc with CONFIRM markers wherever a fact is missing and show it.

## Copy doc format (`work/copy.md`)

```
# <Company> — website copy
## Audiences and CTAs        (2 audiences max, one CTA each)
## Sitemap                   (path → page purpose; keep to 6–10 pages)
## Home
  H1 (4–8 words, split into 2–3 lines) · tagline · badges (3)
  Film beats (5–7): heading + one-sentence body each, in the order the film tells them
  Statement (heading + 2 paragraphs + one accent line)
  Featured item: label, heading, lede (location, not specs), spec list (4–6 pairs), CTAs
  Grid: card title / desc / meta / link for each item
  CTA band: heading, line, two buttons
## <each inner page>
  SEO title (≤60 chars) · meta (≤155) · H1 · lede · sections · form purpose
## Footer                    blurb, tagline, columns, legal line
## CONFIRM list              every fact you could not source, with where it appears
```

## Rules

- Keep the client's voice; if the old site has a tagline people know, keep it.
- Numbers stay exactly as the client writes them ("1,900 sq ft above ground", not "~1,900 sq ft").
- Don't describe a project by its land size when buyers care about the home. "Estate homes on generous wooded lots" beats "24 acres" unless the per-home lot is known.
- Interlude captions in the film must be phrases from the copy doc, so the client never sees copy they didn't approve.
- SEO: one primary phrase per page in H1 and title; FAQ blocks get FAQPage JSON-LD on the page that shows the questions, and only there.
