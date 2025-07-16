import "./Productos1.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ListaProductos from "./ListaProductos";
import InfoProducto from "./InfoProducto";

const Productos1 = ({ productos, language = "es" }) => {
  const [selectedProductId, setSelectedProductId] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="productos1-container">
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