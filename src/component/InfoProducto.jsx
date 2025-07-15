import PropTypes from "prop-types";
import "./InfoProducto.css";

const TABLE_TITLES = {
  es: { element: "Elemento", total: "Total", unit: "Unidad" },
  en: { element: "Element", total: "Total", unit: "Unit" }
};

const InfoProducto = ({ producto, language = "es" }) => {
  if (!producto) {
    return <div style={{ color: '#888', padding: 40, textAlign: 'center' }}>Selecciona un producto para ver su ficha técnica</div>;
  }
  const titles = TABLE_TITLES[language] || TABLE_TITLES.es;
  return (
    <div className="info-producto" id="info-producto">
      <div className="info-main">
        <div className="info-img-title">
          <img src={producto.image} alt={producto.title} style={{ width: 120, height: 120, objectFit: 'contain', borderRadius: 12, marginBottom: 12 }} />
          <h2>{producto.title}</h2>
          {producto.scientificName && <h3 style={{ fontWeight: 400, fontSize: 18, color: '#4a4a4a' }}>{producto.scientificName}</h3>}
        </div>
        <div className="info-desc">
          {producto.phrase && <p><strong>{producto.phrase}</strong></p>}
          {producto.curiousFact && <p>{producto.curiousFact}</p>}
          <p>{producto.description}</p>
        </div>
        {/* Información Nutricional */}
        {producto.ttitle && producto.table && (
          <div className="info-nutricional">
            <h3>{producto.ttitle}</h3>
            <table className="tabla-nutricional">
              <thead>
                <tr>
                  <th>{titles.element}</th>
                  <th className="aright">{titles.total}</th>
                  <th className="aright">{titles.unit}</th>
                </tr>
              </thead>
              <tbody>
                {producto.table.map((data, i) => (
                  <tr key={i}>
                    <td className="aleft">{data.title}</td>
                    <td className="aright">{data.value}</td>
                    <td className="aright">{data.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {/* Especificaciones y bloques adicionales */}
        {producto.t1 && producto.d1 && (
          <div className="info-bloque">
            <span><strong>{producto.t1}</strong></span>
            <p>{producto.d1}</p>
          </div>
        )}
        {producto.t2 && producto.d2 && (
          <div className="info-bloque">
            <span><strong>{producto.t2}</strong></span>
            <p>{producto.d2}</p>
          </div>
        )}
        {producto.t3 && producto.d3 && (
          <div className="info-bloque">
            <span><strong>{producto.t3}</strong></span>
            <p>{producto.d3}</p>
          </div>
        )}
        {producto.t4 && producto.d4 && (
          <div className="info-bloque">
            <span><strong>{producto.t4}</strong></span>
            <p>{producto.d4}</p>
          </div>
        )}
        {producto.t5 && producto.d5 && (
          <div className="info-bloque">
            <span><strong>{producto.t5}</strong></span>
            <p>{producto.d5}</p>
          </div>
        )}
        {producto.t6 && producto.d6 && (
          <div className="info-bloque">
            <span><strong>{producto.t6}</strong></span>
            <p>{producto.d6}</p>
          </div>
        )}
      </div>
    </div>
  );
};

InfoProducto.propTypes = {
  producto: PropTypes.object,
  language: PropTypes.string
};

export default InfoProducto; 