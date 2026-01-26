import React from "react";

const ProductIdCard = ({ setProductid, product }) => {
  return (
    <div className="pProduct">
      <h3>{product.title}</h3>
    </div>
  );
};

export default ProductIdCard;
