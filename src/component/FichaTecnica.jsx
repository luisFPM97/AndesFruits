import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";
import Loading from "./Loading";
import Grafica from "./Grafica";

const FichaTecnica = ({ productos, productid }) => {
  const [product, setproduct] = useState(productos.products[productid])
  //let product = productos.products[productid];
  const [productVerified, setProductVerified] = useState(null);
  const { id } = useParams()

  const [language, setLanguage] = useState("en");
  const [content, setContent] = useState(data[language]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundProduct = productos.products.find(product => product.title === id);

    if (foundProduct) {
      setProductVerified(foundProduct);
      setproduct(foundProduct)
    } else {
      console.log(content)
    }
    // Temporizador para cambiar el estado de carga después de 3 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Espera 3 segundos
    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
  }, [id, productos]);
  
  return (
    <div className="fichaTecnica">
      {
        loading ? (
          <Loading/>
        ):(
          <>
          
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
            <thead>
              <th>Element</th>
              <th>Unit</th>
              <th>Total</th>
            </thead>
            <tbody className="tb">
              {product.table.map((data, i) => (
                <tr key={i}>
                  <td className="aleft">{data.title} </td>
                  <td className="aright">{data.unit} </td>
                  <td className="aright">{data.value} </td>
                </tr>
              ))}
            </tbody>
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
      </div></>
        )
      }
      <Grafica/>
    </div>
  );
};

export default FichaTecnica;
