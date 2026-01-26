import React, { useCallback, memo } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product, setProductid, productos, links, setSelectedLink }) => {
  
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
    <article className="product-card">
      <div className="product-card-image-container">
        <img 
          className="product-card-image"
          src={product.image} 
          alt={product.title}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="product-card-content">
        <h3 className="product-card-title">{product.title}</h3>
        <p className="product-card-phrase">{product.phrase}</p>
        <Link 
          className="product-card-link" 
          to={`/productos?id=${product.id}`} 
          onClick={handleClick}
        >
          {product.botton}
          <i className='bx bx-right-arrow-alt'></i>
        </Link>
      </div>
    </article>
  );
};

// React.memo previene re-renders innecesarios
export default memo(ProductCard);