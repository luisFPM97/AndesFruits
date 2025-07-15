import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";
import Loading from "./Loading";
import Grafica from "./Grafica";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend
} from 'recharts';

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
            {/* Nueva sección de temporadas de producción */}
            {
              //<div className="temporadas-section">
              //  <h2>Temporadas de producción</h2>
              //  <div className="temporadas-grafica">
              //    {/* Gráfica de área suavizada y sombreada con recharts */}
              //    <ResponsiveContainer width="100%" height={220}>
              //      <AreaChart
              //        data={Object.entries(product.temporadas).map(([mes, valor]) => ({ mes: mes.charAt(0).toUpperCase() + mes.slice(1,3), valor }))}
              //        margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
              //      >
              //        <defs>
              //          <linearGradient id="colorTemporada" x1="0" y1="0" x2="0" y2="1">
              //            <stop offset="5%" stopColor="#83a841" stopOpacity={0.6}/>
              //            <stop offset="95%" stopColor="#83a841" stopOpacity={0.1}/>
              //          </linearGradient>
              //        </defs>
              //        <CartesianGrid strokeDasharray="3 3" />
              //        <XAxis dataKey="mes" tick={{ fontSize: 13 }} />
              //        <YAxis domain={[1, 3]} ticks={[1,2,3]} tick={{ fontSize: 13 }}
              //          tickFormatter={v => v === 1 ? 'Baja' : v === 2 ? 'Media' : 'Alta'}
              //          allowDecimals={false}
              //        />
              //        <Tooltip formatter={(value) => value === 1 ? 'Baja' : value === 2 ? 'Media' : 'Alta'} labelFormatter={label => `Mes: ${label}`}/>
              //        <Area type="monotone" dataKey="valor" stroke="#83a841" fillOpacity={1} fill="url(#colorTemporada)" dot={{ r: 6, fill: '#ffe066', stroke: '#83a841', strokeWidth: 2 }} />
              //      </AreaChart>
              //    </ResponsiveContainer>
              //  </div>
              //  <div className="temporadas-leyenda">
              //    <div className="leyenda-punto"><div style={{ width: 18, height: 18, background: '#ffe066', borderRadius: "50%", border: '1px solid #83a841' }}></div> <span style={{ fontSize: 13 }}>Punto de temporada</span></div>
              //    <div className="leyenda-linea"><div style={{ width: 30, height: 4, background: '#83a841', borderRadius: 2 }}></div> <span style={{ fontSize: 13 }}>Tendencia</span></div>
              //  </div>
              //</div>
            }
          </>

        )
      }
      {/*<Grafica/>*/}
    </div>
  );
};

export default FichaTecnica;
