/* Everything that changes per client, in one place. The layout, header,
   footer and head tags read from here; pages only carry their own copy.
   Paths are site-relative ("contact/", "assets/img/x.webp"); the base path
   is added at build time; mailto:/https: links are left alone. */

const email = "info@blackandbluetoronto.com";
const phone = "647.368.8283";

export const site = {
  /** Legal/brand name: page titles, Organization schema, footer copyright */
  name: "Black+Blue",
  /** Header and footer lockup: first part plain, second in the italic accent */
  brand: ["Black", "Blue"],
  /** Production domain, used for canonical and OG URLs (not where the preview is hosted) */
  url: "https://blackandbluesteakhouse.ca",
  email,
  phone,
  tel: "tel:+16473688283",
  /** Concept builds ship noindex until they replace the live site */
  noindex: true,
  tagline: "The Golden Age of Steak",
  /** Footer blurb and Organization schema description (their words) */
  description: "Canada’s premier steak dining experience. We offer the magic of the classic steak house combined with a modern and energetic twist.",

  address: { street: "130 King St West", city: "Toronto", region: "ON", postal: "M5X 2A2", country: "CA" },
  maps: "https://www.google.com/maps/search/?api=1&query=Black%2BBlue+Steakhouse+130+King+St+West+Toronto",
  book: "https://www.sevenrooms.com/explore/blackbluetoronto/reservations/create/search/?venues=blackbluetoronto%2Crileystoronto%20",
  events: "https://glowbalrestaurantgroup.tripleseat.com/party_request/26669",
  giftCards: "https://www.buyatab.com/gcp/accessible/?id=5194#customize",
  tour: "https://cloud.threshold360.com/locations/8486630-1175407377",
  instagram: "https://www.instagram.com/bandbsteak/",
  facebook: "https://www.facebook.com/blackandbluetoronto",
  newsletterUrl: "https://glowbalgroup.us1.list-manage.com/subscribe?u=27e03b9041abccfa6b0a2094c&id=65e5c6184e",

  /** Hours as the contact page shows them (rendered 2026-10-22). CONFIRM brunch: the home page says 11:00 AM. */
  hours: [
    { label: "Lunch", days: "Monday – Friday", time: "11:30 am – 2:00 pm", spec: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "11:30", closes: "14:00" } },
    { label: "Happy Hour", days: "Monday – Sunday", time: "2:30 pm – 5:30 pm", spec: null },
    { label: "Dinner", days: "Monday – Sunday", time: "3:00 pm – 12:00 am", spec: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "15:00", closes: "23:59" } },
    { label: "Brunch", days: "Saturday – Sunday", time: "10:30 am – 2:00 pm", spec: { days: ["Saturday", "Sunday"], opens: "10:30", closes: "14:00" } },
  ],

  /** Google Fonts stylesheet; change together with --font-display / --font-body in src/styles/style.css */
  fonts: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..600;1,6..96,400&family=Geist+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap",
  /** Letter favicon drawn as an inline SVG */
  favicon: { letter: "B", background: "#121726", color: "#b8975a" },
  /** Default OG image in public/ */
  ogImage: "assets/img/og.jpg",

  nav: [
    { key: "menu", href: "menu/", label: "Menu" },
    { key: "selection", href: "superior-selection/", label: "A Superior Selection" },
    { key: "private", href: "private-dining/", label: "Private Dining" },
    { key: "about", href: "about/", label: "About" },
    { key: "contact", href: "contact/", label: "Contact" },
  ],
  cta: { label: "Book a Table", href: "https://www.sevenrooms.com/explore/blackbluetoronto/reservations/create/search/?venues=blackbluetoronto%2Crileystoronto%20" },

  footer: {
    columns: [
      { title: "The Restaurant", links: [{ label: "Menu", href: "menu/" }, { label: "A Superior Selection", href: "superior-selection/" }, { label: "Private Dining", href: "private-dining/" }, { label: "About", href: "about/" }, { label: "Contact & Hours", href: "contact/" }] },
      { title: "Guests", links: [{ label: "Book a Table", href: "https://www.sevenrooms.com/explore/blackbluetoronto/reservations/create/search/?venues=blackbluetoronto%2Crileystoronto%20" }, { label: "Gift Cards", href: "https://www.buyatab.com/gcp/accessible/?id=5194#customize" }, { label: "Wine Dinners", href: "https://www.glowbalgroup.com/wine-dinner-club/" }, { label: "Instagram", href: "https://www.instagram.com/bandbsteak/" }, { label: "Facebook", href: "https://www.facebook.com/blackandbluetoronto" }] },
    ],
    newsletter: "Wine dinners, holiday menus and features, from the Glowbal Restaurant Group.",
    legal: "A Glowbal Restaurant Group dining destination. Prices are subject to applicable taxes and may change.",
  },

  /** Restaurant JSON-LD merged over the Organization defaults */
  schema: {
    "@type": "Restaurant",
    telephone: "+1-647-368-8283",
    servesCuisine: ["Steakhouse", "Seafood", "Sushi"],
    priceRange: "$$$$",
    acceptsReservations: "True",
    address: { "@type": "PostalAddress", streetAddress: "130 King St West", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M5X 2A2", addressCountry: "CA" },
    sameAs: ["https://www.instagram.com/bandbsteak/", "https://www.facebook.com/blackandbluetoronto"],
  } as Record<string, unknown>,

  /** Tracking IDs come from the environment, never this file: .env locally, repo variables
      in CI (tools/deploy.sh copies them over). Empty = that snippet is left out. Only
      production builds get them, so `npm run dev` visits never reach the client's reports. */
  tracking: {
    /** GTM-XXXXXXX. GA4 and the form key event are configured inside the container */
    gtm: env("PUBLIC_GTM_ID"),
    /** G-XXXXXXXXXX. Loaded directly with gtag.js only when there is no GTM container */
    ga4: env("PUBLIC_GA4_ID"),
    /** Search Console HTML-tag token (the content="…" value). Not needed if GSC is verified via GTM or DNS */
    gscVerification: env("PUBLIC_GSC_VERIFICATION"),
  },
};

function env(name: string): string {
  return import.meta.env.PROD ? String(import.meta.env[name] ?? "").trim() : "";
}

export type NavKey = (typeof site.nav)[number]["key"];
