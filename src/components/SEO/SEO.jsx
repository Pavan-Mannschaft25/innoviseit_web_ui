import { Helmet } from "react-helmet-async";
import { DEFAULT_IMAGE } from "../../config/seoConfig";

const SEO = ({
  title,
  description,
  canonical,
  indexable = true,
  image = DEFAULT_IMAGE,
  type = "website",
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta
      name="robots"
      content={indexable ? "index, follow" : "noindex, follow"}
    />
    {canonical && <link rel="canonical" href={canonical} />}

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {canonical && <meta property="og:url" content={canonical} />}
    <meta property="og:type" content={type} />
    <meta property="og:image" content={image} />
    <meta property="og:site_name" content="Innovise" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Helmet>
);

export default SEO;
