import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const FichaTecnica = ({ productos, productid }) => {
  const [product, setproduct] = useState(productos.products[productid])
  //let product = productos.products[productid];
  const [productVerified, setProductVerified] = useState(null);
  const { id } = useParams()
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundProduct = productos.products.find(product => product.title === id);
    
    if (foundProduct) {
      setProductVerified(foundProduct);
      setproduct(foundProduct)
      console.log("Producto verificado:", product);
    } else {
      console.log("Producto no encontrado");
    }
  }, [id, productos.products]);
  
  return (
    <div className="fichaTecnica">
      <div className="rute">
        <Link className="linkP" to="/productos">
          Productos
        </Link>{" "}
        <span>/</span>
        <span>{product.title}</span>
      </div>
      <h1>{product.ftitle}</h1>
      <div className="ftTitle">
        <h2>{product.title}</h2>
        <h3>{product.scientificName}</h3>
      </div>
      <div className="content">
        <div className="info">
          <span>{product.phrase}</span>
          <span>{product.curiousFact}</span>
        </div>

        <div className="img">
          <img src={product.image} alt="" />
        </div>

        <div className="table">
          <table>
            <tr>
              <th>Element</th>
              <th>Unit</th>
              <th>Total</th>
            </tr>
            {product.table.map((data, i) => (
              <tr key={i}>
                <td className="aleft">{data.title} </td>
                <td className="aright">{data.unit} </td>
                <td className="aright">{data.value} </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <div className="description">
        <span>{product.description}</span>
        <br />
        <br />
        <br />
        <br />
        <span>{product.t1}</span>
        <span>{product.d1}</span>
        <br />
        <span>{product.t2}</span>
        <span>{product.d2}</span>
        <br />
        <span>{product.t3}</span>
        <span>{product.d3}</span>
        <br />
        <span>{product.t4}</span>
        <span>{product.d4}</span>
        <br />
        <span>{product.t5}</span>
        <span>{product.d5}</span>
        <br />
        <span>{product.t6}</span>
        <br />
      </div>
    </div>
  );
};

export default FichaTecnica;
