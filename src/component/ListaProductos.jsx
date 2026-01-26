import PropTypes from "prop-types";
import "./ListaProductos.css";
import React, { useState, useEffect, useCallback, useMemo, memo } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 980);
  
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 980);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  
  return isMobile;
};

const ListaProductos = ({ productos, selectedProductId, onSelect }) => {
  const [hovered, setHovered] = useState(null);
  const isMobile = useIsMobile();

  // useCallback para funciones que se pasan como props
  const scrollTo50vh = useCallback(() => {
    const halfViewport = window.innerHeight / 2;
    window.scrollTo({
      top: halfViewport,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleSelect = useCallback((index) => {
    onSelect(index);
    scrollTo50vh();
  }, [onSelect, scrollTo50vh]);

  const handleMouseEnter = useCallback((index) => {
    setHovered(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(null);
  }, []);

  // useMemo para evitar recrear el array en cada render
  const productsList = useMemo(() => 
    productos.products.map((product, i) => {
      const showImg = hovered === i || selectedProductId === i;
      return (
        <li
          key={i}
          onClick={() => handleSelect(i)}
          className={selectedProductId === i ? "selected" : ""}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          {showImg && product.image && (
            <img
              src={product.icon}
              alt={product.title}
              className="hover-img inline-img"
              loading="lazy"
              decoding="async"
            />
          )}
          <span className={showImg ? "hovered-name" : ""}>{product.title}</span>
        </li>
      );
    }), [productos.products, hovered, selectedProductId, handleSelect, handleMouseEnter, handleMouseLeave]
  );

  return (
    <div className="lista-productos">
      <h2>{productos.title}</h2>
      {isMobile ? (
        <select
          className="lista-productos-select"
          value={selectedProductId ?? 0}
          onChange={e => onSelect(Number(e.target.value))}
        >
          {productos.products.map((product, i) => (
            <option value={i} key={i}>{product.title}</option>
          ))}
        </select>
      ) : (
        <ul>{productsList}</ul>
      )}
    </div>
  );
};

ListaProductos.propTypes = {
  productos: PropTypes.shape({
    title: PropTypes.string,
    products: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  selectedProductId: PropTypes.number,
  onSelect: PropTypes.func.isRequired
};

// React.memo para prevenir re-renders innecesarios
export default memo(ListaProductos); 