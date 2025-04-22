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
      setproduct(productos.products[id % 10])
    }
    // Temporizador para cambiar el estado de carga después de 4 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Espera 4 segundos
    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
    
  }, [id, productos]);

  return (
    <div className="fichaTecnica">
      {
        loading ? (
          <Loading />
        ) : (
          <>

            <div className="rute">
              <Link className="linkP" to="/productos">
                Productos
              </Link>{" "}
              <span>/</span>
              <span>{product.title}</span>

            </div>

            <div className="fichaTecnicaPrueba">
              <section className="sectionInfo cero">
                <div className="content first vis">
                  <img src={product.image} alt="" />
                  <h1>{product.title}</h1>
                  <h2>{product.scientificName}</h2>
                </div>
                <div className="content second">
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
              <section className="sectionInfo one" style={{ backgroundImage: `url(${product.img1})` }}>
                <div className="content second">
                  <div className="tabla">
                    <h2>{product.ttitle}</h2>
                    <span className="separator"></span>
                    <span className="separator"></span>
                    <div className="table">
                      <table >
                        <thead>
                          <th>Element</th>
                          <th className="aright">Total</th>
                          <th className="aright">Unit</th>
                        </thead>
                        <tbody className="tb">
                          {product.table.map((data, i) => (
                            <tr key={i}>
                              <td className="aleft">{data.title} </td>
                              <td className="aright">{data.value} </td>
                              <td className="aright">{data.unit} </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="content first"></div>
              </section>
              <section className="sectionInfo two" style={{ backgroundImage: `url(${product.img2})` }}>
                <div className="content first"></div>
                <div className="content second">
                  <span>*{product.t1}</span>
                  <p>{product.d1}</p>
                  <span>*{product.t2}</span>
                  <p>{product.d2}</p>
                  <span>*{product.t3}</span>
                  <p>{product.d3}</p>
                </div>
              </section>
              <section className="sectionInfo tree" style={{ backgroundImage: `url(${product.img3})` }}>
                <div className="content second">
                  <span>*{product.t4}</span>
                  <p>{product.d4}</p>
                  <span>*{product.t5}</span>
                  <p>{product.d5}</p>
                  <span>*{product.t6}</span>
                </div>
                <div className="content first">
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
