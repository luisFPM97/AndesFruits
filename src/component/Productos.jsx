import React, { useEffect } from "react";
import Uchuva from "./Uchuva";
import ProductIdCard from "./ProductIdCard";
import ProductCard from "./ProductCard";

const Productos = ({ setProductid, productos }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div className="productos">
      <section className="pHeader">
      <div className="filterBack"></div>
        <div className="infoC">
          <h2>{productos.phrase}</h2>
          <h3>{productos.intro}</h3>
        </div>
        
      </section>
      <section className="pProducts">
        <span>{productos.title}</span>
        
        <div className="list">
          {productos.products.map((product, i) => (
            <ProductCard
              key={i}
              product={product}
              setProductid={setProductid}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Productos;