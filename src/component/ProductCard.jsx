import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product, setProductid, productos, productid, links, setSelectedLink }) => {

  
  function defId(id) {
    setProductid(id);
    if (setSelectedLink) {
      setSelectedLink(links[2]); // Solo ejecuta si está definido
      console.log("setSelectedLink actualizado:", links[2]); // Verifica en consola
    }
  }

  const navigate = useNavigate();

  return (
    <div className="hpProductItem">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.phrase}</p>
      <button  >
        <Link className="linkP" to={`/FichaTecnica/${product.title}`} onClick={()=>( setSelectedLink({ path: "/productos", label: productos.title, icon: "bx bx-medal" }), console.log(links[2]))} >
          {product.botton}
        </Link>
      </button>
    </div>
  );
};

export default ProductCard;