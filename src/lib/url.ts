/* Site-root URLs that respect the deploy base ("/" on a domain,
   "/<repo>/" on a GitHub Pages project site; set by BASE_PATH at build time).
   url("contact/") → "/<repo>/contact/" */
import { site } from "../site.config";

const BASE = import.meta.env.BASE_URL.replace(/\/?$/, "/");

export const url = (path = "") => (/^[a-z]+:/i.test(path) ? path : BASE + path.replace(/^\//, ""));

/* Canonical and OG URLs always point at the production domain. */
export const SITE_URL = site.url.replace(/\/$/, "");
export const absolute = (path = "") => `${SITE_URL}/${path.replace(/^\//, "")}`;

/* Links in location data: absolute URLs and #anchors pass through, "/x/" is site-root, "x/" is inside the location. */
export const locHref = (slug: string, h: string) =>
  /^([a-z]+:|#)/i.test(h) ? h : h.startsWith("/") ? url(h.slice(1)) : url(`${slug}/${h}`);
