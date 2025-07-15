import React, { useEffect } from "react";
import CertificacionesId from "./CertificacionesId";

const Certificaciones = (certificaciones) => {
  const certs = certificaciones.certificaciones;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="certificaciones">
      <section className="header">
        <div className="img"></div>
        <h1>{certs.title}</h1>
        <p>{certs.description}</p>
      </section >
      <section className="secCert">
      {certs.certifications.map((certification, i) => (
        <CertificacionesId key={i} certification={certification} />
      ))}
      </section>
    </div>
  );
};

export default Certificaciones;
