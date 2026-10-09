import JsonLd from "./JsonLd";

const OrganizationSchema = () => (
  <JsonLd
    data={{
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Innovise LLC",
      url: "https://innovise-it.com/",
      logo: "https://innovise-it.com/images/logo.png",
      description:
        "Enterprise technology partner delivering SAP, AI, engineering, application and digital transformation solutions.",
      // Add only real, official profile URLs. Remove the key if you have none.
      sameAs: [],
    }}
  />
);

export default OrganizationSchema;
