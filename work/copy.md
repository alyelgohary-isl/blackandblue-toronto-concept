# Black+Blue Toronto — website copy

Type: single dine-in steakhouse (group brand). Audiences: diners booking a table (CTA: Book a Table → SevenRooms); event and group buyers (CTA: Event Request → on-site `private_event` form, Tripleseat link kept).

## Sitemap and redirects
| New path | Purpose | Old URL(s) redirected here |
|---|---|---|
| / | film (5 lots) → the week → events → distinctions → visit | /toronto-home/, /location/toronto/ |
| /menu/ | all 8 menus as HTML, Menu schema | /toronto-menu/, /fathers-day-bbq-kit/, Wellington PDF (Netlify only) |
| /superior-selection/ | salt locker + the four grades | /toronto-a-superior-selection/ |
| /private-dining/ | rooms, gallery, event form, FAQ (FAQPage) | /toronto-private-dining/, /toronto-event-faq/ |
| /about/ | highlights, room, policies, press | /toronto-about/, /toronto-3d-tour/, /grand-opening-photos/ |
| /contact/ | hours, parking, contact form | /toronto-contact/ |
| /dishes/<8 slugs>/ | glossary (AEO) | — |
| /legal/, /404 | — | — |
Vancouver and The Roof pages stay on the group site (out of scope).

## Source of every line (V = verbatim from their site, N = new)
- Hero: eyebrow "Toronto · 130 King St West" (N, address theirs); H1 "The Golden Age of Steak" (V home); tagline "A decidedly unique dining experience" (V home); buttons Book a Table / Menu / Private Dining (V nav labels).
- Lot 01: "Superior selection, superior flavour" + body (V superior-selection); spec prices (V dinner menu).
- Lot 02: Kobe body (V superior-selection); prices (V menu). "Hyogo, Japan" (N, from the certificate plaque in their own photo).
- Lot 03: Wellington menu line + 169 (V menu); Wellington Mondays $195 (V home); Châteaubriand (V menu).
- Lot 04: Prime Rib menu line + 78 (V); Prime Rib Sundays (V home).
- Lot 05: "Black+Blue Toronto focuses on classic steakhouse offerings with a twist, and the world’s most premium cuts of meat." (V about).
- The week: H2 "The week at Black+Blue" (N); welcome paragraph (V home); calendar entries (V home + Lunch 45 menu); feature titles, sublines and bodies (V home); Happy Hour body (V menu items and prices).
- Events: H2 + holiday paragraph (V home); rooms paragraph (V private dining).
- Distinctions (V badges on their home; "#1 in Vancouver" dropped).
- Visit: "In the Exchange Tower, in the heart of the Financial District." (N, from press: Toronto Life); parking + accessibility (V event FAQ).
- Inner pages: all body copy V from the matching page, ledes trimmed from their sentences; dish pages N (general knowledge) with "At Black+Blue" V.

## Forms
- `private_event` (private-dining/#inquiry): name, company, email, phone, date, guests, occasion, space, message.
- `contact` (contact/#form): name, phone, email, reason, message, consent.
- `newsletter` (footer). The live site's Mailchimp list link is kept in config (`newsletterUrl`) for the hand-off.

## CONFIRM list
1. Brunch start: 11:00 AM (home) vs 10:30 am (contact widget).
2. Which distinctions apply to Toronto (DiRoNA, Travellers' Choice 2021, Top 10%).
3. Private room capacities (16 / 32) by room name; mezzanine and patio capacities.
4. Events reply time; whether the on-site form should replace or sit beside Tripleseat.
5. Allergen statement wording; terms and privacy copy (Glowbal).
6. Formspree endpoint + reCAPTCHA keys; GTM container (live site uses GTM-MRZWV3Z3).
7. Holiday closures ("Upcoming Closures" is empty on the live widget).
8. Lunch menu lists "Australian Wagyu" as an item with no price inside Signature Entrees (their markup); kept as a sub-heading.
