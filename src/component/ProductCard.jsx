import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product, setProductid, productid }) => {
  function defId(id) {
    setProductid(id);
    navigate(`/FichaTecnica/${product.title}`)
  }
  const navigate = useNavigate();

  return (
    <div className="hpProductItem">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.phrase}</p>
      <button onClick={() => defId(product.id) } >
        <Link className="linkP" >
          {product.botton}
        </Link>
      </button>
    </div>
  );
};

export default ProductCard;
