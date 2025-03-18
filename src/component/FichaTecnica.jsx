import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";
import Loading from "./Loading";
import Grafica from "./Grafica";

const FichaTecnica = ({ productos, productid, language }) => {
  const [product, setproduct] = useState(productos.products[productid])
  const { id } = useParams()


  
  const [content, setContent] = useState(data[language]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundProduct = productos.products[id];

    if (foundProduct) {
      setproduct(foundProduct)
    } else {
      alert("Producto no encontrado")
      setproduct(productos.products[id%10])
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
      
      <div className="fichaTecnicaPrueba">
        <section className="sectionInfo">
          <div className="first vis">
              <img src={product.image} alt="" />
              <h1>{product.title}</h1>
              <h2>{product.scientificName}</h2>
          </div>
          <div className="second">
              <p>
                {product.phrase}
              </p>
              <p>
                {product.curiousFact}
              </p>
              <p>
                {product.description}
              </p>
          </div>
        </section>
        <section className="sectionInfo">
          <div className="second">
            <div className="table">
              <table >
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
          <div className="first"></div>
        </section>
        <section className="sectionInfo">
          <div className="first"></div>
          <div className="second">
            <span>*{product.t1}</span>
            <p>{product.d1}</p>
            <span>*{product.t2}</span>
            <p>{product.d2}</p>
            <span>*{product.t3}</span>
            <p>{product.d3}</p>
          </div>
        </section>
        <section className="sectionInfo">
          <div className="second">
            <span>*{product.t4}</span>
            <p>{product.d4}</p>
            <span>*{product.t5}</span>
            <p>{product.d5}</p>
            <span>*{product.t6}</span>
          </div>
          <div className="first">
          </div>
        </section>
      </div>
      </>
      
        )
      }
      {/*<Grafica/>*/}
    </div>
  );
};

export default FichaTecnica;
