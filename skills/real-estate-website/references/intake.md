# Intake: from a URL or brief to a copy doc

## 1. Which kind of real estate business

Decide this first; it sets the audiences, forms and pages. If a business is two of these (a developer with a sales brokerage), build for the one that sells the product on this site.

| Type | What the site sells | Audiences (max 2) | Main lead forms (`data-form-type`) | Typical pages |
|---|---|---|---|---|
| Developer, low-rise communities (Stallion) | homes in a few named communities | end buyers, investors | `register`, `floor_plan`, `investor` | communities index, one page per community, invest, team/about, contact |
| Condo / tower pre-construction | suites off-plan in one building | end buyers, investors (brokers as a third, via a broker form) | `register`, `floor_plan`, `viewing` (presentation centre), `broker` | the building, suites/floor plans, amenities, neighbourhood, team (architect, designer), register |
| Branded residences / resort | a lifestyle plus a unit, often to overseas buyers | overseas buyers, investors | `register`, `viewing`, `investor` | residences, the brand/hotel, amenities, location, payment plan, contact |
| Single property / listing microsite | one home | buyers, their agents | `viewing` | one long page, or home + gallery + floor plans + neighbourhood |
| Brokerage / agent | the agent's judgment and listings | sellers, buyers | `valuation`, `viewing`, `contact` | listings (featured, not a portal), neighbourhoods, agents/team, sell (valuation), contact |

Every site also has a general `contact` form. `newsletter` is excluded from lead tracking in GTM.

## 2. What to extract

From the existing site (the home page and the 3–5 most important inner pages; `sitemap.xml` if present), a copy doc, a sales brochure, or the brief:

| Field | Where it usually is | Why it matters |
|---|---|---|
| Legal name, tagline, licence/registration numbers | footer, about, legal | lockup, footer, JSON-LD, compliance |
| Business type and what is sold to whom | hero, project pages | section 1 above; the film's story |
| Projects / buildings / listings with facts: address or area, status, home types, beds, baths, sizes, lot sizes, unit count, completion or occupancy date, price or "from" price | listing pages, brochures | cards, spec pairs, inner pages |
| Floor plans, site plan, unit mix, price list, deposit structure or payment plan | PDFs, brochures | only ever the client's files; gate plan PDFs behind the `floor_plan` form if the client wants leads |
| Team and partners: architect, interior designer, builder, landscape, sales brokerage | about, brochure credits | proof beats, team page |
| Proof: years, homes delivered, awards, warranty programme | about, footer badges | film beats, stats moment |
| Amenities and specs (finishes, heights, systems) | features pages | spec lists, amenities page |
| Location: nearby schools, transit, shops, water, drive times | location pages | neighbourhood sections; every distance is a CONFIRM unless sourced |
| Contact: email, phone, sales centre address and hours | contact, footer | forms, footer, schema |
| Brand: logo, colours, fonts, tone | CSS, imagery | whether the direction works inside a brand (see creative-direction.md §4) |
| Imagery: renders, photos, drone footage, construction photos | media | the film's source stills; note ownership |

From a kit or brief with no URL: ask nothing yet; write the copy doc with CONFIRM markers wherever a fact is missing and show it at the gate.

## 3. Compliance lines to ask about

These are CONFIRM items with the client, not legal advice, and never invented. Put the ones that apply in the CONFIRM list with where they'll appear (footer, legal page, near prices, near galleries).

- **Everywhere:** "Renderings are artist's concept"; "prices, specifications and availability subject to change without notice"; "E. & O.E." where the client uses it.
- **Ontario:** new-home builders and vendors are licensed by the HCRA (licence number in the footer is common) and homes carry a Tarion warranty; brokerages are registered with RECO and must use their registered name, and "Brokerage" in it where required.
- **Dubai / UAE:** property adverts generally need a DLD/RERA advertising permit (Trakheesi) number, and developers and brokers show their RERA registration; ask for the permit number and where it must appear.
- **United States:** fair housing rules apply to ad copy: describe the property and the amenities, never who should live there ("perfect for young families", "ideal for professionals" are out). Add the Equal Housing Opportunity line or logo if the client uses it.
- **UK:** listings carry material information (tenure, council tax band, price); ask for it rather than leaving it out.
- **Elsewhere:** ask the client what their regulator requires on adverts; list it as CONFIRM.

## 4. Copy doc format (`work/copy.md`)

```
# <Company> — website copy
## Business type             (from section 1) and the two audiences with one CTA each
## Sitemap                   (path → page purpose; 6–10 pages)
## Home
  H1 (4–8 words) · tagline · supporting marks (e.g. badges) if the direction uses them
  Film beats (5–7): heading + one-sentence body each, in the order the film tells them
  The home sections the direction chose, each with its copy (keep to 3–4 after the film)
  Featured home or building: label, heading, lede (place, not specs), spec pairs (4–6), CTAs
  CTA: heading, line, two buttons (one per audience)
## <each inner page>
  SEO title (≤60 chars) · meta (≤155) · H1 · lede · sections · form and its data-form-type
## Footer                    blurb, tagline, columns, compliance lines, legal line
## CONFIRM list              every fact you could not source, with where it appears
```

## 5. Rules

- Keep the client's voice; if they have a tagline people know, keep it.
- Numbers stay exactly as written ("1,900 sq ft above ground", not "~1,900 sq ft"). "From $X" only if the client gives a from-price.
- Describe a project by its homes, not its land. "Estate homes on generous wooded lots" beats "24 acres" unless the per-home lot is known.
- Status once. Scarcity as "Limited homes available", not a count, unless the count is confirmed and wanted.
- Location ledes talk about walking distance and what's nearby, not the site's acreage; every time and distance is a CONFIRM until sourced.
- Interlude captions in the film are phrases from the copy doc, so the client never sees copy they didn't approve.
- SEO: one primary phrase per page in H1 and title ("new homes in Bracebridge", "pre-construction condos in Mississauga"). FAQ blocks get FAQPage JSON-LD on the page that shows the questions, and only there.
- Schema: `Organization` (developer) or `RealEstateAgent` (brokerage) site-wide, via `schema["@type"]` in `site.config.ts`; per project, through the page's `schema` prop on `<Layout>`, a `Residence` / `ApartmentComplex` / `SingleFamilyResidence` with the address or `geo` only if confirmed. No `Offer` with a price unless the price is confirmed and public.
