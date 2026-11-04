import { describe, it, expect } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import RouteSEO from "../components/SEO/RouteSEO";

const renderAt = (path) =>
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <RouteSEO />
      </MemoryRouter>
    </HelmetProvider>,
  );

const meta = (sel) => document.head.querySelector(sel)?.getAttribute("content");
const jsonLd = () =>
  [...document.head.querySelectorAll('script[type="application/ld+json"]')].map(
    (s) => JSON.parse(s.textContent),
  );

describe("RouteSEO", () => {
  it("sets unique title, description, canonical, robots on a service page", async () => {
    renderAt("/services/sap-consulting");
    await waitFor(() =>
      expect(document.title).toBe(
        "SAP Consulting & Implementation Services | Innovise",
      ),
    );
    expect(meta('meta[name="description"]')).toMatch(/S\/4HANA/);
    expect(document.head.querySelector('link[rel="canonical"]').href).toBe(
      "https://innovise-it.com/services/sap-consulting",
    );
    expect(meta('meta[name="robots"]')).toBe("index, follow");
    expect(meta('meta[property="og:title"]')).toBe(document.title);
  });

  it("adds Service and Breadcrumb JSON-LD on industry pages", async () => {
    renderAt("/industries/automotive");
    await waitFor(() => expect(jsonLd().length).toBeGreaterThanOrEqual(2));
    const types = jsonLd().map((j) => j["@type"]);
    expect(types).toContain("Service");
    expect(types).toContain("BreadcrumbList");
  });

  it("adds Organization JSON-LD on the home page", async () => {
    renderAt("/");
    await waitFor(() =>
      expect(jsonLd().some((j) => j["@type"] === "Organization")).toBe(true),
    );
  });

  it("duplicate route is noindex and canonicalises to the primary page", async () => {
    renderAt("/industries/retail");
    await waitFor(() =>
      expect(meta('meta[name="robots"]')).toBe("noindex, follow"),
    );
    expect(document.head.querySelector('link[rel="canonical"]').href).toBe(
      "https://innovise-it.com/industries/consumer-retail",
    );
  });

  it("unknown route is noindex", async () => {
    renderAt("/nope");
    await waitFor(() =>
      expect(meta('meta[name="robots"]')).toBe("noindex, follow"),
    );
  });
});
