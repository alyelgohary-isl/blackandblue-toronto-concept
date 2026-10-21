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
  // every old Toronto URL on blackandbluesteakhouse.ca (sitemap, 2026-10-22); meta-refresh stubs on Pages, real 301s in public/_redirects
  redirects: {
    "/toronto-home/": base + "",
    "/toronto-menu/": base + "menu/",
    "/toronto-about/": base + "about/",
    "/toronto-contact/": base + "contact/",
    "/toronto-private-dining/": base + "private-dining/",
    "/toronto-a-superior-selection/": base + "superior-selection/",
    "/toronto-event-faq/": base + "private-dining/#faq",
    "/toronto-3d-tour/": base + "about/",
    "/grand-opening-photos/": base + "about/#press",
    "/fathers-day-bbq-kit/": base + "menu/",
    "/location/toronto/": base + "",
  },
});
