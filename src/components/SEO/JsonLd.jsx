import { useEffect } from "react";

const JsonLd = ({ data }) => {
  const json = JSON.stringify(data);

  useEffect(() => {
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-seo-jsonld", "true");
    el.text = json;
    document.head.appendChild(el);
    return () => el.remove();
  }, [json]);

  return null;
};

export default JsonLd;
