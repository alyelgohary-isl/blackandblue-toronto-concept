/* The three Black+Blue locations. Every page under src/pages/[loc]/ reads its copy, hours, links,
   film and menus from one of these objects, so the three sites share one design and differ only in content.
   Copy is the client's own (blackandbluesteakhouse.ca, crawled 2026-10-22) unless a field says otherwise. */
import type { Menu } from "./menu";
import { toronto } from "./loc/toronto";
import { vancouver } from "./loc/vancouver";
import { roof } from "./loc/roof";

export type Pair = [string, string];
export type Hours = { label: string; days: string; time: string; spec: { days: string[]; opens: string; closes: string } | null };
export type Clip = { id: string; dir: string; prefix: string; count: number; fx?: number; fy?: number; units?: number };
export type Lot = { no: string; title: [string, string]; body: string; spec: Pair[]; actions?: [string, string][] };
export type Feature = { title: string; sub: string; img: string; alt: string; body: string; links: [string, string][]; confirm?: string };
export type Hero = { loop: string; title: [string, string]; lede: string; actions?: [string, string][]; label: string };
export type PageKey = "menu" | "selection" | "private" | "about" | "contact";

export type Location = {
  key: "toronto" | "vancouver" | "roof";
  slug: string;                 // URL segment
  name: string;                 // "Black+Blue Toronto"
  short: string;                // "Toronto"
  logo: { src: string; w: number; h: number; wordmark?: boolean };
  address: { street: string; line2?: string; city: string; region: string; postal: string; country: string };
  phone: string; tel: string; email: string; maps: string;
  book: string; events: string; groupMenus: string; festive: string; tour: string; facebook: string;
  hours: Hours[];
  pages: PageKey[];
  seo: { title: string; description: string };
  film: { clips: Clip[]; preload: number; heroEyebrow: string; heroTitle: [string, string]; tagline: string; heroActions: [string, string][]; lots: Lot[] };
  welcome: string;
  week?: { day: string; items: Pair[] }[];
  weekFoot?: string[];
  features: Feature[];
  sections: { kind: "split"; eyebrow: string; title: [string, string]; body: string[]; img?: string; loop?: string; alt: string; actions: [string, string][]; flip?: boolean }[];
  distinctions: { title: string; sub: string }[];
  distinctionsConfirm?: string;
  visit: { title: [string, string]; note: string; parking: string[]; access: string };
  heroes: Partial<Record<PageKey, Hero>>;
  menus: Menu[];
  selection: { intro: string[]; lots: { no: string; where: string; title: string; img?: string; alt: string; body: string; spec: Pair[]; link: string }[] };
  privateDining: { intro: string[]; rooms: { figure: string; label: string }[]; roomsConfirm?: string; gallery: { img: string; alt: string; wide?: boolean }[]; formNote: string; spaces: string[]; faq: { q: string; a: string[] }[]; faqNote: string; maxGuests: number };
  about?: { letter?: { title: [string, string]; body: string[]; sign: string[] }; highlights?: Pair[]; room?: { eyebrow: string; title: [string, string]; body: string[]; img: string; alt: string }; policies: Pair[]; press?: [string, string, string][] };
  contactNote: string;
  schema: Record<string, unknown>;
};

export const locations: Location[] = [toronto, vancouver, roof];
export const bySlug = Object.fromEntries(locations.map((l) => [l.slug, l])) as Record<string, Location>;

/* The home film: a still hero on the first clip's first frame, then each clip with a short hold and a cut between. */
export function buildFilm(clips: Clip[]) {
  const sources = Object.fromEntries(clips.map((c) => [c.id, { dir: c.dir, prefix: c.prefix, count: c.count, fx: c.fx, fy: c.fy }]));
  const timeline: object[] = [{ id: "hero", units: 0.7, hold: [clips[0].id, 0] }];
  clips.forEach((c, i) => {
    const last = c.count - 1;
    timeline.push({ id: c.id, units: c.units ?? 0.8, from: [c.id, 0], to: [c.id, last] });
    if (i < clips.length - 1) {
      timeline.push({ id: `h${i + 1}`, units: 0.2, hold: [c.id, last] });
      timeline.push({ id: `c${i + 1}`, units: 0.25, cut: true });
    } else timeline.push({ id: "end", units: 0.4, hold: [c.id, last] });
  });
  /* when each lot's copy is on screen */
  const segs = clips.map((c, i) => (i < clips.length - 1 ? `${c.id}:0.08,c${i + 1}:0.12` : `${c.id}:0.1,end:1`));
  return { sources, timeline, segs };
}

export const restaurantSchema = (l: Location, abs: (p: string) => string) => ({
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: l.name,
  url: abs(`${l.slug}/`),
  image: abs("assets/img/og.jpg"),
  telephone: l.schema.telephone,
  email: l.email,
  servesCuisine: ["Steakhouse", "Seafood"],
  priceRange: "$$$$",
  acceptsReservations: "True",
  hasMenu: abs(`${l.slug}/menu/`),
  address: { "@type": "PostalAddress", streetAddress: l.address.street, addressLocality: l.address.city, addressRegion: l.address.region, postalCode: l.address.postal, addressCountry: l.address.country },
  openingHoursSpecification: l.hours.filter((h) => h.spec).map((h) => ({ "@type": "OpeningHoursSpecification", name: h.label, dayOfWeek: h.spec!.days, opens: h.spec!.opens, closes: h.spec!.closes })),
  sameAs: ["https://www.instagram.com/bandbsteak/", l.facebook],
  ...l.schema,
});
