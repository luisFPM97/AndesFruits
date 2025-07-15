import "./Productos2.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Productos2 = ({ productos }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="productos2-container">
      <section className="pHeader2">
        <div className="filterBack2"></div>
        <div className="infoC2">
          <h2>{productos.phrase}</h2>
          <h3>{productos.intro}</h3>
        </div>
      </section>
    </div>
  );
};

Productos2.propTypes = {
  productos: PropTypes.shape({
    title: PropTypes.string,
    phrase: PropTypes.string,
    intro: PropTypes.string,
    products: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};

export default Productos2; 