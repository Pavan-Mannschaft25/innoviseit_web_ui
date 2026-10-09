import { useLocation } from "react-router-dom";
import SEO from "./SEO";
import OrganizationSchema from "./OrganizationSchema";
import BreadcrumbSchema from "./BreadcrumbSchema";
import ServiceSchema from "./ServiceSchema";
import { getSeo, BASE_URL, pages } from "../../config/seoConfig";

const RouteSEO = () => {
  const { pathname } = useLocation();
  const seo = getSeo(pathname);

  let crumbs = null;
  if (seo.path && seo.path !== "/" && seo.indexable && seo.name) {
    crumbs = [{ name: "Home", url: `${BASE_URL}/` }];
    const parent = seo.parent && pages.find((p) => p.path === seo.parent);
    if (parent) crumbs.push({ name: parent.name, url: parent.canonical });
    crumbs.push({ name: seo.name, url: seo.canonical });
  }

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        indexable={seo.indexable}
      />
      {seo.path === "/" && <OrganizationSchema />}
      {(seo.type === "service" || seo.type === "industry") && seo.indexable && (
        <ServiceSchema
          name={seo.name}
          description={seo.description}
          serviceType={seo.serviceType}
        />
      )}
      {crumbs && <BreadcrumbSchema items={crumbs} />}
    </>
  );
};

export default RouteSEO;
