import PropTypes from "prop-types";
import "./ListaProductos.css";
import React from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 980);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 980);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
};

const scrollTo50vh = () => {
  const halfViewport = window.innerHeight / 2;
  window.scrollTo({
    top: halfViewport,
    left: 0,
    behavior: 'smooth' // opcional, para que se desplace suavemente
  });
};

const ListaProductos = ({ productos, selectedProductId, onSelect }) => {
  const [hovered, setHovered] = React.useState(null);
  const isMobile = useIsMobile();

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
        <ul>
          {productos.products.map((product, i) => {
            const showImg = hovered === i || selectedProductId === i;
            return (
              <li
                key={i}
                onClick={() =>  {onSelect(i); scrollTo50vh() }}
                className={selectedProductId === i ? "selected" : ""}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {showImg && product.image && (
                  <img
                    src={product.image}
                    alt={product.title}
                    className="hover-img inline-img"
                    key={showImg + '-' + i}
                  />
                )}
                <span className={showImg ? "hovered-name" : ""}>{product.title}</span>
              </li>
            );
          })}
        </ul>
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

export default ListaProductos; 