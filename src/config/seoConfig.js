export const BASE_URL = "https://innovise-it.com";
export const DEFAULT_IMAGE = `${BASE_URL}/images/og-default.jpg`;

const page = (path, title, description, extra = {}) => ({
  path,
  title,
  description,
  canonical: path === "/" ? `${BASE_URL}/` : `${BASE_URL}${path}`,
  indexable: true,
  inSitemap: true,
  ...extra,
});

// Non-primary route: noindex, canonical points to the primary page.
const duplicateOf = (path, primaryPath) => ({
  path,
  canonicalPath: primaryPath,
  indexable: false,
  inSitemap: false,
});

export const pages = [
  page(
    "/",
    "Innovise | SAP, AI & Digital Transformation Solutions",
    "Innovise delivers SAP, Guidewire, AI, engineering, application management and digital transformation solutions for organizations worldwide.",
    {
      type: "home",
      h1: "Transforming Businesses with SAP, Guidewire & AI Solutions",
    },
  ),

  // ---------- SERVICES ----------
  page(
    "/services/sap-consulting",
    "SAP Consulting & Implementation Services | Innovise",
    "Innovise provides SAP consulting and implementation services including S/4HANA transformation, migration, SAP security, GRC and enterprise solutions.",
    {
      type: "service",
      name: "SAP Consulting & Implementation",
      h1: "SAP Consulting & Implementation",
    },
  ),
  page(
    "/services/guidewire",
    "Guidewire Services | Innovise",
    "Innovise provides Guidewire services supporting insurance transformation, implementation, integration, testing and application management.",
    { type: "service", name: "Guidewire Services", h1: "Guidewire Services" },
  ),
  page(
    "/services/application-development-integration-ai",
    "Application Development & Integration Services | Innovise",
    "Build and modernize enterprise applications with Innovise's application development, integration, AI and engineering services.",
    {
      type: "service",
      name: "Application Development, Integration & AI",
      h1: "Application Development, Integration & AI",
    },
  ),
  page(
    "/services/app-maintenance",
    "Application Management Services | Innovise",
    "Innovise provides application management, monitoring, maintenance and continuous improvement services for enterprise applications.",
    {
      type: "service",
      name: "Application Management Services",
      h1: "Application Management Services",
    },
  ),
  page(
    "/services/testing-quality-assurance",
    "Software Testing & Quality Assurance Services | Innovise",
    "Innovise delivers software testing and quality assurance services focused on reliability, performance, automation and enterprise application quality.",
    {
      type: "service",
      name: "Software Testing & Quality Assurance",
      h1: "Software Testing & Quality Assurance",
    },
  ),
  page(
    "/services/data-migration",
    "Data Migration & Transformation Services | Innovise",
    "Modernize enterprise data with secure data migration, SAP HANA migration, data transformation, integration, cleansing and validation services from Innovise.",
    {
      type: "service",
      name: "Data Migration & Transformation",
      h1: "Data Migration & Transformation",
    },
  ),
  // Extra service pages not in the guide – EDIT copy to match what the pages really say
  page(
    "/services/core-engineering-ai",
    "Core Engineering & AI Services | Innovise",
    "Innovise combines core engineering and AI to build intelligent, scalable enterprise solutions and modernize business-critical systems.",
    {
      type: "service",
      name: "Core Engineering & AI",
      h1: "Core Engineering & AI",
    },
  ),
  page(
    "/services/code-quality-security",
    "Code Quality & Security Services | Innovise",
    "Improve software reliability and reduce risk with Innovise code quality, security review and secure development services.",
    {
      type: "service",
      name: "Code Quality & Security",
      h1: "Code Quality & Security",
    },
  ),
  page(
    "/services/project-support",
    "Project Support & Remediation Services | Innovise",
    "Innovise helps recover and stabilize at-risk enterprise projects with expert project support and remediation services.",
    {
      type: "service",
      name: "Project Support & Remediation",
      h1: "Project Support & Remediation",
    },
  ),
  page(
    "/services/staff-augmentation",
    "IT Staff Augmentation Services | Innovise",
    "Extend your team with skilled SAP, engineering and application specialists through Innovise staff augmentation services.",
    { type: "service", name: "Staff Augmentation", h1: "Staff Augmentation" },
  ),
  duplicateOf(
    "/services/application-development",
    "/services/application-development-integration-ai",
  ),
  duplicateOf(
    "/services/integration-services",
    "/services/application-development-integration-ai",
  ),
  duplicateOf("/services/remediation", "/services/project-support"),
  duplicateOf("/services/testing-qa", "/services/testing-quality-assurance"),

  // ---------- INDUSTRIES ----------
  page(
    "/industries/automotive",
    "Automotive IT Solutions & Digital Transformation | Innovise",
    "Innovise delivers automotive IT solutions for vehicle lifecycle management, connected vehicles, smart manufacturing and future mobility.",
    {
      type: "industry",
      name: "Automotive IT Solutions & Digital Transformation",
      serviceType: "Automotive IT Solutions",
      h1: "Automotive IT Solutions & Digital Transformation",
    },
  ),
  page(
    "/industries/energy-utilities",
    "Energy, Oil & Gas & Utilities IT Solutions | Innovise",
    "Technology and digital transformation solutions for energy, oil and gas, utilities and chemicals, including asset management, smart metering, trading and compliance.",
    {
      type: "industry",
      name: "Energy, Oil & Gas, Utilities & Chemicals",
      serviceType: "Energy and Utilities IT Solutions",
      h1: "Energy, Oil & Gas, Utilities & Chemicals",
    },
  ),
  page(
    "/industries/consumer-retail",
    "Consumer Products & Retail IT Solutions | Innovise",
    "Innovise helps consumer products and retail organizations transform supply chains, merchandising, omnichannel commerce and customer experiences.",
    {
      type: "industry",
      name: "Consumer Products & Retail Technology Solutions",
      serviceType: "Consumer Products and Retail IT Solutions",
      h1: "Consumer Products & Retail Technology Solutions",
    },
  ),
  page(
    "/industries/industrial-manufacturing",
    "Industrial Manufacturing & High Tech IT Solutions | Innovise",
    "Innovise delivers digital transformation solutions for industrial manufacturing and high tech, including smart factories, predictive maintenance and Industry 4.0.",
    {
      type: "industry",
      name: "Industrial Manufacturing & High Tech Solutions",
      serviceType: "Industrial Manufacturing IT Solutions",
      h1: "Industrial Manufacturing & High Tech Solutions",
    },
  ),
  page(
    "/industries/public-sector",
    "Public Sector IT Solutions & Digital Transformation | Innovise",
    "Innovise delivers technology and digital transformation solutions for public sector organizations, including government accounting, grants management and citizen services.",
    {
      type: "industry",
      name: "Public Sector Technology & Digital Transformation",
      serviceType: "Public Sector IT Solutions",
      h1: "Public Sector Technology & Digital Transformation",
    },
  ),
  page(
    "/industries/aerospace-defense",
    "Aerospace & Defense IT Solutions | Innovise",
    "Innovise provides aerospace and defense technology solutions covering SAP transformation, MRO optimization, program execution and compliance-driven operations.",
    {
      type: "industry",
      name: "Aerospace & Defense Technology Solutions",
      serviceType: "Aerospace and Defense IT Solutions",
      h1: "Aerospace & Defense Technology Solutions",
    },
  ),
  duplicateOf("/industries/consumer-products", "/industries/consumer-retail"),
  duplicateOf("/industries/retail", "/industries/consumer-retail"),
  duplicateOf("/industries/chemicals", "/industries/energy-utilities"),
  // Not in the guide. If this page has real unique content, give it its own page(...) entry instead.
  duplicateOf(
    "/industries/construction-real-estate",
    "/industries/industrial-manufacturing",
  ),

  // ---------- ABOUT / CULTURE ----------
  page(
    "/about",
    "About Innovise | Enterprise Technology Partner",
    "Learn about Innovise, an enterprise technology partner delivering SAP, AI, engineering, application and digital transformation solutions.",
    { type: "about", name: "About Innovise", h1: "About Innovise" },
  ),
  page(
    "/about/leadership",
    "Innovise Leadership Team | Technology & Transformation Experts",
    "Meet the Innovise leadership team driving enterprise technology, digital transformation, innovation and customer success.",
    {
      type: "about",
      name: "Leadership",
      parent: "/about",
      h1: "Innovise Leadership Team",
    },
  ),
  page(
    "/culture/values",
    "Innovise Values | Our Culture & Principles",
    "Discover the values that guide Innovise's culture, client relationships, innovation and approach to delivering technology solutions.",
    { type: "about", name: "Our Values", h1: "Our Values" },
  ),
  page(
    "/culture/diversity",
    "Diversity & Inclusion | Innovise",
    "Learn about Innovise's commitment to diversity, inclusion, collaboration and building a workplace that values different perspectives.",
    {
      type: "about",
      name: "Diversity & Inclusion",
      h1: "Diversity & Inclusion",
    },
  ),
  page(
    "/culture/community",
    "Community Impact | Innovise",
    "See how Innovise supports the communities where its teams live and work through volunteering, giving and local partnerships.",
    { type: "about", name: "Community Impact", h1: "Community Impact" },
  ),
  page(
    "/contact",
    "Contact Innovise | IT Consulting & Technology Services",
    "Contact Innovise for SAP consulting, AI, engineering, application management and enterprise digital transformation services.",
    { type: "contact", name: "Contact Innovise", h1: "Contact Innovise" },
  ),
  page(
    "/about/privacy-policy",
    "Privacy Policy | Innovise",
    "Read the Innovise privacy policy describing how personal information is collected, used, protected and managed.",
    {
      type: "legal",
      name: "Privacy Policy",
      parent: "/about",
      h1: "Privacy Notice",
      inSitemap: false,
    },
  ),

  // ---------- OTHER (edit copy to match the real pages) ----------
  page(
    "/careers",
    "Careers at Innovise | Join Our Technology Team",
    "Explore career opportunities at Innovise and join a global team delivering SAP, AI, engineering and digital transformation projects.",
    { type: "careers", name: "Careers", h1: "Careers at Innovise" },
  ),
  page(
    "/think",
    "Innovise Think | Insights & Perspectives",
    "Insights and perspectives from Innovise on SAP, AI, engineering and enterprise digital transformation.",
    { type: "other", name: "Innovise Think", h1: "Innovise Think" },
  ),
  page(
    "/events",
    "Events | Innovise",
    "Find upcoming Innovise events, webinars and executive briefings on SAP, AI and digital transformation.",
    { type: "other", name: "Events", h1: "Events" },
  ),
  page(
    "/reserve-your-invitation",
    "Reserve Your Invitation | Innovise",
    "Reserve your invitation to an Innovise event.",
    { type: "other", indexable: false, inSitemap: false },
  ),
];

const byPath = new Map(pages.map((p) => [p.path, p]));

const NOT_FOUND = {
  path: null,
  title: "Page Not Found | Innovise",
  description: "The page you are looking for could not be found.",
  canonical: null,
  indexable: false,
  inSitemap: false,
};

export function normalizePath(pathname = "/") {
  const clean = pathname.split("?")[0].split("#")[0];
  return clean.length > 1 ? clean.replace(/\/+$/, "") : "/";
}

/** Returns the full SEO record for a URL path. Never throws. */
export function getSeo(pathname) {
  const path = normalizePath(pathname);
  let entry = byPath.get(path);

  // Dynamic / nested routes
  if (!entry && path.startsWith("/events/")) {
    entry = {
      path,
      title: "Event | Innovise",
      description: "Innovise event details and registration.",
      canonical: `${BASE_URL}${path}`,
      indexable: true,
      inSitemap: false,
    };
  }
  if (!entry && path.startsWith("/careers/")) entry = byPath.get("/careers");
  if (!entry) return NOT_FOUND;

  // Duplicates inherit title/description/canonical from their primary page
  if (entry.canonicalPath) {
    const primary = byPath.get(entry.canonicalPath);
    return {
      ...primary,
      ...entry,
      title: primary.title,
      description: primary.description,
      canonical: primary.canonical,
    };
  }
  return entry;
}

export default pages;
