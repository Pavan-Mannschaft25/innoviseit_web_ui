import JsonLd from "./JsonLd";

const ServiceSchema = ({ name, description, serviceType }) => (
  <JsonLd
    data={{
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      description,
      serviceType: serviceType || name,
      provider: {
        "@type": "Organization",
        name: "Innovise LLC",
        url: "https://innovise-it.com/",
      },
      areaServed: "Worldwide",
    }}
  />
);

export default ServiceSchema;
