import "./Productos2.css";
import PropTypes from "prop-types";
import InfoProducto from "./InfoProducto";
import { useState, useRef, useEffect } from "react";

const Productos2 = ({ productos }) => {
  const productsArray = productos.products || [];
  const [selectedProductId, setSelectedProductId] = useState(0);
  const slideRef = useRef(null);
  const imgRefs = useRef([]);

  const infiniteProducts = [];
  for (let i = 0; i < 25; i++) {
    infiniteProducts.push(...productsArray);
  }
  

  // Escala y opacidad dinámica en tiempo real
  useEffect(() => {
    let running = true;
    function updateScaleFade() {
      if (!slideRef.current) return;
      const slideRect = slideRef.current.getBoundingClientRect();
      console.log(slideRect.width)
      const centerX = slideRect.left + slideRect.width / 2;
      imgRefs.current.forEach((img) => {
        if (!img) return;
        const imgRect = img.getBoundingClientRect();
        const imgCenter = imgRect.left + imgRect.width / 2;
        const dist = Math.abs(centerX - imgCenter);
        const maxDist = slideRect.width / 2;
        // Scale: 1 en el centro, 0.6 en los extremos
        let scale = (1 - (dist / maxDist)) + 0.4;
        scale = Math.max(0, Math.min(1.15, scale));
        console.log(scale)
        // Opacidad: 1 en el centro, 0.2 en los extremos
        let opacity = (1 - (dist / maxDist)) - 0.1;
        opacity = Math.max(0, Math.min(1, opacity));
        img.style.transform = `scale(${scale})`;
        img.style.opacity = opacity;
      });
      if (running) requestAnimationFrame(updateScaleFade);
    }
    updateScaleFade();
    return () => { running = false; };
  }, [productsArray.length]);

  const handleClick = (idx) => {
    setSelectedProductId(idx % productsArray.length);
  };

  return (
    <div className="productos2-container">
      <section className="pHeader2">
        <div className="filterBack2"></div>
        <div className="infoC2">
          <h2>{productos.phrase}</h2>
          <h3>{productos.intro}</h3>
        </div>
      </section>
      <div className="productos2-slide-marquee" ref={slideRef}>
        <div className="marquee-track css-marquee">
          {infiniteProducts.map((producto, idx) => (
            <div
              key={idx}
              className="slide-item"
              onClick={() => handleClick(idx)}
            >
              {producto.image ? (
                <>
                  <img
                    ref={el => imgRefs.current[idx] = el}
                    src={producto.image}
                    alt={producto.title || `Producto ${(idx % productsArray.length) + 1}`}
                    className="slide-img"
                  />
                  <span className="slide-name-hover">{producto.title || `Producto ${(idx % productsArray.length) + 1}`}</span>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="productos1-info">
          <InfoProducto
            producto={productsArray[selectedProductId]}
            productos={productos}
            productid={selectedProductId}
            language={"es"}
          />
        </div>
      </div>
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