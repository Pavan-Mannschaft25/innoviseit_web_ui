// import { describe, it, expect } from "vitest";
// import { readFileSync } from "node:fs";
// import { pages, getSeo, BASE_URL } from "../config/seoConfig";

// const indexable = pages.filter((p) => p.indexable);
// const routesSource = readFileSync("src/routes/AppRoutes.jsx", "utf8"); // <-- adjust path if different

// const routePaths = [...routesSource.matchAll(/path="([^"]+)"/g)]
//   .map((m) => m[1])
//   .filter((p) => !p.includes("*") && !p.includes(":"));

// describe("SEO config", () => {
//   it("every indexable page has a unique title", () => {
//     const titles = indexable.map((p) => p.title);
//     expect(new Set(titles).size).toBe(titles.length);
//   });

//   it("every indexable page has a unique description", () => {
//     const d = indexable.map((p) => p.description);
//     expect(new Set(d).size).toBe(d.length);
//   });

//   it("titles <= 65 chars and descriptions <= 175 chars", () => {
//     indexable.forEach((p) => {
//       expect(p.title.length, p.path).toBeLessThanOrEqual(65);
//       expect(p.description.length, p.path).toBeLessThanOrEqual(175);
//     });
//   });

//   it("canonical URLs are absolute, on the right domain, and match the path", () => {
//     indexable.forEach((p) => {
//       const expected = p.path === "/" ? `${BASE_URL}/` : `${BASE_URL}${p.path}`;
//       expect(p.canonical).toBe(expected);
//     });
//   });

//   it("duplicate pages point to an existing indexable primary page", () => {
//     pages
//       .filter((p) => p.canonicalPath)
//       .forEach((p) => {
//         const primary = pages.find((x) => x.path === p.canonicalPath);
//         expect(primary, p.path).toBeTruthy();
//         expect(primary.indexable).toBe(true);
//       });
//   });
// });

// describe("Routes <-> SEO config", () => {
//   it("no route path is declared twice", () => {
//     const dupes = routePaths.filter((p, i) => routePaths.indexOf(p) !== i);
//     expect(dupes).toEqual([]);
//   });

//   it("every static route has an SEO entry", () => {
//     const missing = routePaths.filter((p) => getSeo(p).path === null);
//     expect(missing).toEqual([]);
//   });

//   it("every config page has a matching route", () => {
//     const orphan = pages
//       .map((p) => p.path)
//       .filter((p) => !routePaths.includes(p));
//     expect(orphan).toEqual([]);
//   });

//   it("unknown URLs get noindex", () => {
//     expect(getSeo("/does-not-exist").indexable).toBe(false);
//   });
// });

import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { pages, getSeo, BASE_URL } from "../config/seoConfig";

const indexable = pages.filter((p) => p.indexable);

const rawRoutesSource = readFileSync("src/routes/AppRoutes.jsx", "utf8");
// ignore commented-out code: only JSX comments {/* ... */} and // line comments
const routesSource = rawRoutesSource
  .replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, "")
  .replace(/^\s*\/\/.*$/gm, "");

const routePaths = [...routesSource.matchAll(/path="([^"]+)"/g)]
  .map((m) => m[1].replace(/\/\*$/, "")) // "/careers/*" -> "/careers"
  .filter((p) => p !== "*" && !p.includes(":"));

describe("SEO config", () => {
  it("every indexable page has a unique title", () => {
    const titles = indexable.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("every indexable page has a unique description", () => {
    const d = indexable.map((p) => p.description);
    expect(new Set(d).size).toBe(d.length);
  });

  it("titles <= 65 chars and descriptions <= 175 chars", () => {
    indexable.forEach((p) => {
      expect(p.title.length, p.path).toBeLessThanOrEqual(65);
      expect(p.description.length, p.path).toBeLessThanOrEqual(175);
    });
  });

  it("canonical URLs are absolute, on the right domain, and match the path", () => {
    indexable.forEach((p) => {
      const expected = p.path === "/" ? `${BASE_URL}/` : `${BASE_URL}${p.path}`;
      expect(p.canonical).toBe(expected);
    });
  });

  it("duplicate pages point to an existing indexable primary page", () => {
    pages
      .filter((p) => p.canonicalPath)
      .forEach((p) => {
        const primary = pages.find((x) => x.path === p.canonicalPath);
        expect(primary, p.path).toBeTruthy();
        expect(primary.indexable).toBe(true);
      });
  });
});

describe("Routes <-> SEO config", () => {
  it("no route path is declared twice", () => {
    const dupes = routePaths.filter((p, i) => routePaths.indexOf(p) !== i);
    expect(dupes).toEqual([]);
  });

  it("every static route has an SEO entry", () => {
    const missing = routePaths.filter((p) => getSeo(p).path === null);
    expect(missing).toEqual([]);
  });

  it("every config page has a matching route", () => {
    const orphan = pages
      .map((p) => p.path)
      .filter((p) => !routePaths.includes(p));
    expect(orphan).toEqual([]);
  });

  it("unknown URLs get noindex", () => {
    expect(getSeo("/does-not-exist").indexable).toBe(false);
  });
});
