import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { pages, getSeo, DEFAULT_IMAGE } from "../src/config/seoConfig.js";

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");

const template = readFileSync("dist/index.html", "utf8")
  .replace(/<title>[\s\S]*?<\/title>/i, "")
  .replace(/<meta\s+name="description"[^>]*>/gi, "")
  .replace(/<link\s+rel="canonical"[^>]*>/gi, "");

for (const { path } of pages) {
  const s = getSeo(path);
  const tags = [
    `<title data-rh="true">${esc(s.title)}</title>`,
    `<meta data-rh="true" name="description" content="${esc(s.description)}">`,
    `<meta data-rh="true" name="robots" content="${s.indexable ? "index, follow" : "noindex, follow"}">`,
    s.canonical &&
      `<link data-rh="true" rel="canonical" href="${s.canonical}">`,
    `<meta data-rh="true" property="og:title" content="${esc(s.title)}">`,
    `<meta data-rh="true" property="og:description" content="${esc(s.description)}">`,
    s.canonical &&
      `<meta data-rh="true" property="og:url" content="${s.canonical}">`,
    `<meta data-rh="true" property="og:type" content="website">`,
    `<meta data-rh="true" property="og:image" content="${DEFAULT_IMAGE}">`,
    `<meta data-rh="true" property="og:site_name" content="Innovise">`,
    `<meta data-rh="true" name="twitter:card" content="summary_large_image">`,
    `<meta data-rh="true" name="twitter:title" content="${esc(s.title)}">`,
    `<meta data-rh="true" name="twitter:description" content="${esc(s.description)}">`,
    `<meta data-rh="true" name="twitter:image" content="${DEFAULT_IMAGE}">`,
  ]
    .filter(Boolean)
    .join("\n    ");

  const html = template.replace("</head>", `    ${tags}\n  </head>`);
  const out = path === "/" ? "dist/index.html" : `dist${path}/index.html`;
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
}
console.log(`Wrote meta-injected HTML for ${pages.length} routes`);
