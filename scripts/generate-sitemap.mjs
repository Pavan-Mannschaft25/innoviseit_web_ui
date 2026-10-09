import { writeFileSync } from "node:fs";
import { pages } from "../src/config/seoConfig.js";

const today = new Date().toISOString().slice(0, 10);
const urls = pages.filter((p) => p.indexable && p.inSitemap);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((p) => `  <url>\n    <loc>${p.canonical}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join("\n")}
</urlset>
`;

writeFileSync("public/sitemap.xml", xml);
console.log(`sitemap.xml written with ${urls.length} URLs`);
