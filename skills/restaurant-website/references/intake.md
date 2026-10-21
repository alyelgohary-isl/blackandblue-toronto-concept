# Intake: from a URL, a PDF menu or a brief to a copy doc and a gap list

## 1. Which kind of food business

| Type | What the site sells | Audiences (max 2) | Main lead forms (`data-form-type`) | Pages |
|---|---|---|---|---|
| Single dine-in restaurant (Masrawy) | the room and the menu, plus take-out | diners (order, reserve), event and catering buyers | `reserve`, `catering_quote`, `private_event`, `contact` | menu, brunch/specials, the room (private events), catering, story + press, gallery, reserve, contact, dishes/* glossary, order (hand-off) |
| Group / multi-location | the brand, then a location | diners by location | `reserve` (per location), `contact` | locations index, one page per location, menu (shared or per location) |
| Fast casual / take-out first | ordering | diners on phones | `contact`, `catering_quote` | menu, order hand-off, locations, catering |
| Caterer-first | menus per person and by tray | corporate buyers, families | `catering_quote` | corporate, private/wedding, sample menus, how it works, gallery |
| Café / bakery | the counter, the pastries, the morning | regulars, pre-orders | `preorder`, `contact` | menu, pre-order, the space, wholesale |
| Food truck / pop-up | where it is next | fans, event bookers | `book_truck` | schedule, menu, book |

Every site also has a general `contact` form and a `newsletter` (excluded from lead tracking).

## 2. The intel step (what "customised to the company" means)

Before writing copy, in `work/intel.md`:
- **Old site crawl:** home + every inner page, `sitemap.xml` (post, page, category sitemaps), every PDF link. The full URL list becomes the redirect map. Note the platform, fonts, colours, popups, how the menu is served. **Capture the home page's copy section by section, verbatim** (slider lines, welcome, timeline, quote, reviews, hours, about, contact, footer): it goes into the matching sections of the new site unchanged, and the primary buttons under their slider become the hero buttons.
- **Menus:** download the PDFs, extract text (`pypdf`), transcribe into `src/data/menu.ts` keeping the client's spellings; flag column-order ambiguities with `confirm`.
- **Ratings and reviews:** Google, Tripadvisor (overall and the sub-scores). What people praise (dish names, count them) and what they complain about (waits, atmosphere); the site should set expectations where the kitchen can't.
- **Social:** TikTok and Instagram for the dishes that get filmed and the handles; press for the owner story, the room's design details, client lists, opening dates.
- **Photography:** download every photo, make a contact sheet, name the good ones semantically. Note landscape vs portrait (it decides wide vs square clips) and whether interiors exist.
- **Gap list:** what the current site fails at (PDF menus, no schema, no reservations path, popups, no interior photos, stale blog). This is the outreach pitch.

## 3. What to extract into the copy doc

Legal name and tagline; address, phone, email (often missing: CONFIRM), hours (dine-in, brunch/breakfast, kitchen close), reservation policy, ordering platform link, delivery apps; menus with prices; catering terms (notice, minimums, delivery fees, payment methods, what's included); room facts (seats, private room capacity, patio, truck); the owner story and dates; press with sources; client list the owner has stated publicly; halal/kosher/dietary claims as the client words them; photo credits.

## 4. Compliance and claims to CONFIRM
- Halal/kosher certification body if named; allergen statement; "prices subject to applicable taxes and may change".
- Client logos: use names in a sentence, not logos, unless the client has permission.
- Photography credit and ownership; social handles.
- Reservation and reply-time promises only if the client stands behind them.

## 5. Copy doc format (`work/copy.md`)
```
# <Restaurant> — website copy
## Business type, audiences, one CTA each
## Sitemap (path → purpose) and redirect map (old → new)
## Home: H1, tagline, film beats (5–7: heading, body, price line), doors, signature list, scrub section, band, proof, visit
## <each inner page>: SEO title (≤60), meta (≤155), H1, lede, sections, form and data-form-type, schema
## Dishes glossary: slug, question, one-sentence answer, 2–3 paragraphs, "At <Restaurant>" with price, 3 FAQs
## Footer: blurb, hours, columns, legal line
## CONFIRM list
```

## 6. Rules
- Primary phrase per page in H1 and title: "Egyptian restaurant in Mississauga", "Egyptian brunch in Mississauga", "Egyptian catering Toronto".
- `Restaurant` schema site-wide (address, `openingHoursSpecification`, `servesCuisine`, `priceRange`, `telephone`, `acceptsReservations`, `hasMenu`, `sameAs`); `Menu` schema on menu pages with `MenuItem` and `Offer` prices; `FAQPage` only on pages that show the questions; `BreadcrumbList` everywhere; `FoodService` on catering.
- Glossary pages are the AEO play: one per signature dish, titled as the question people type, answered in one sentence, with the restaurant's version and price. Eight is a good number.
- Redirects: `astro.config.mjs` `redirects` (keys unprefixed, destinations prefixed with the base path) for meta-refresh stubs on Pages, plus `public/_redirects` as real 301s for Netlify/Cloudflare. Include PDFs (`/menu.pdf → /menu/`).
- Old blog posts that are press clippings redirect to `/our-story/#press`, which lists them with their original sources.
