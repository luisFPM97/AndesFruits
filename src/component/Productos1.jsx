import "./Productos1.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ListaProductos from "./ListaProductos";
import InfoProducto from "./InfoProducto";
import SEO from "./SEO";

const Productos1 = ({ productos, language = "es" }) => {
  const [searchParams] = useSearchParams();
  const urlProductId = searchParams.get('id');
  const initialId = urlProductId ? parseInt(urlProductId, 10) : 0;
  const [selectedProductId, setSelectedProductId] = useState(initialId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (urlProductId) {
      const id = parseInt(urlProductId, 10);
      if (!isNaN(id)) {
        setSelectedProductId(id);
      }
    }
  }, [urlProductId]);

  const currentProduct = productos.products[selectedProductId];
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": currentProduct?.title || productos.phrase,
    "description": currentProduct?.description || productos.intro,
    "image": currentProduct?.image ? `https://andesexport.com${currentProduct.image}` : "https://andesexport.com/img/logo.png",
    "brand": {
      "@type": "Brand",
      "name": "Andes Fruits"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="productos1-container">
      <SEO
        title={`${currentProduct?.title || 'Products'} - Andes Fruits | Premium Colombian Exotic Fruits`}
        description={currentProduct?.description || productos.intro}
        keywords={`${currentProduct?.title || 'exotic fruits'}, colombian ${currentProduct?.title || 'fruits'}, fresh ${currentProduct?.title || 'tropical fruits'}, export quality`}
        image={currentProduct?.image || "/img/logo.png"}
        url="/products"
        type="product"
        jsonLd={productSchema}
      />
      <section className="pHeader1">
        <div className="filterBack1"></div>
        <div className="infoC1">
          <h2>{productos.phrase}</h2>
          <h3>{productos.intro}</h3>
        </div>
      </section>
      <div className="productos1-layout">
        <div className="productos1-list">
          <ListaProductos productos={productos} selectedProductId={selectedProductId} onSelect={setSelectedProductId} />
        </div>
        <div className="productos1-info">
          <InfoProducto producto={productos.products[selectedProductId]} productos={productos} productid={selectedProductId} language={language} />
        </div>
      </div>
    </div>
  );
};

Productos1.propTypes = {
  productos: PropTypes.shape({
    title: PropTypes.string,
    phrase: PropTypes.string,
    intro: PropTypes.string,
    products: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  language: PropTypes.string
};

export default Productos1; 