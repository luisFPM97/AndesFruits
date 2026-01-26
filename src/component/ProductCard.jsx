import React, { useCallback, memo } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, setProductid, productos, links, setSelectedLink }) => {
  
  // useCallback para evitar recrear la función en cada render
  const handleClick = useCallback(() => {
    setProductid(product.id);
    if (setSelectedLink) {
      setSelectedLink({ 
        path: "/productos", 
        label: productos.title, 
        icon: "bx bx-medal" 
      });
    }
  }, [product.id, setProductid, setSelectedLink, productos.title]);

  return (
    <div className="hpProductItem">
      {/* Lazy loading nativo de imágenes */}
      <img 
        src={product.image} 
        alt={product.title}
        loading="lazy"
        decoding="async"
      />
      <h3>{product.title}</h3>
      <p>{product.phrase}</p>
      <button>
        <Link 
          className="linkP" 
          to={`/FichaTecnica/${product.id}`} 
          onClick={handleClick}
        >
          {product.botton}
        </Link>
      </button>
    </div>
  );
};

// React.memo previene re-renders innecesarios
export default memo(ProductCard);