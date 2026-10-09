import { pages } from "../src/config/seoConfig.js";

const BASE = process.argv[2] || "http://localhost:4173";
const targets = pages.filter((p) => p.indexable && p.inSitemap);
let failed = 0;

for (const p of targets) {
  const res = await fetch(BASE + p.path);
  const html = await res.text();
  const problems = [];
  const safeTitle = p.title.replace(/&/g, "&amp;");
  if (res.status !== 200) problems.push(`HTTP ${res.status}`);
  if (!html.includes(`>${safeTitle}</title>`))
    problems.push("title missing/wrong");
  if (!html.includes(`href="${p.canonical}"`))
    problems.push("canonical missing");
  if (!/<meta[^>]+name="description"/.test(html))
    problems.push("meta description missing");
  console.log(
    problems.length
      ? `FAIL ${p.path} -> ${problems.join(", ")}`
      : `ok   ${p.path}`,
  );
  if (problems.length) failed++;
}
process.exit(failed ? 1 : 0);
