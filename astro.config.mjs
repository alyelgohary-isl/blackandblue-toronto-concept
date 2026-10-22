// @ts-check
import { defineConfig } from "astro/config";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// BASE_PATH is set by the Pages workflow from GitHub's own answer: "/<repo>/"
// on a project site, "/" once a custom domain is attached. Locally it's "/".
// To check a subpath build before deploying: BASE_PATH=/test/ npm run build && npm run preview
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  base,
  trailingSlash: "always",
  build: { format: "directory" },
  // Astro 7 defaults to JSX whitespace rules, which drop line breaks between
  // inline elements in hand-written copy. `true` compresses losslessly instead.
  compressHTML: true,
  // tools/*.mjs QA scripts expect the dev/preview server here
  server: { port: 8014 },
  // every old URL on blackandbluesteakhouse.ca (sitemap, 2026-10-22) plus the first concept paths; meta-refresh stubs on Pages, real 301s in public/_redirects
  redirects: {
    "/toronto-home/": base + "toronto/",
    "/toronto-menu/": base + "toronto/menu/",
    "/toronto-about/": base + "toronto/about/",
    "/toronto-contact/": base + "toronto/contact/",
    "/toronto-private-dining/": base + "toronto/private-dining/",
    "/toronto-a-superior-selection/": base + "toronto/superior-selection/",
    "/toronto-event-faq/": base + "toronto/private-dining/#faq",
    "/toronto-3d-tour/": base + "toronto/about/",
    "/grand-opening-photos/": base + "toronto/about/#press",
    "/fathers-day-bbq-kit/": base + "toronto/menu/",
    "/location/toronto/": base + "toronto/",
    "/vancouver-home/": base + "vancouver/",
    "/van-menu/": base + "vancouver/menu/",
    "/van-about/": base + "vancouver/about/",
    "/van-book-a-table/": base + "vancouver/contact/",
    "/van-event-request/": base + "vancouver/private-dining/#inquiry",
    "/van-private-dining/": base + "vancouver/private-dining/",
    "/van-a-superior-selection/": base + "vancouver/superior-selection/",
    "/van-contact/": base + "vancouver/contact/",
    "/van-faq/": base + "vancouver/private-dining/#faq",
    "/vancouver-3d-tour/": base + "vancouver/about/",
    "/location/vancouver/": base + "vancouver/",
    "/the-roof-vancouver/": base + "the-roof/",
    "/van-roof-menu/": base + "the-roof/menu/",
    "/van-roof-contact/": base + "the-roof/contact/",
    "/van-roof-private-dining/": base + "the-roof/private-dining/",
    "/van-roof-a-superior-selection/": base + "the-roof/superior-selection/",
    "/location/the-roof/": base + "the-roof/",
    "/menu/": base + "toronto/menu/",
    "/superior-selection/": base + "toronto/superior-selection/",
    "/private-dining/": base + "toronto/private-dining/",
    "/about/": base + "toronto/about/",
    "/contact/": base + "toronto/contact/",
  },

});
