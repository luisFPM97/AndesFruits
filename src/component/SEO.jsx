import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({
  title = 'Andes Fruits - Premium Colombian Exotic Fruits',
  description = 'Leading exporter of premium Colombian exotic fruits: uchuva, gulupa, granadilla, pitahaya. Global certifications: BASC, GlobalG.A.P., SMETA, Primus.',
  keywords = 'exotic fruits, colombian fruits, uchuva, gulupa, granadilla, pitahaya, fruit export, tropical fruits',
  image = '/img/logo.png',
  url = 'https://andesexport.com',
  type = 'website',
  author = 'Andes Export Company S.A.S',
  jsonLd = null,
}) => {
  const siteUrl = 'https://andesexport.com';
  const canonicalUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Andes Fruits" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  author: PropTypes.string,
  jsonLd: PropTypes.object,
};

export default SEO;
