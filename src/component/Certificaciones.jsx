import React, { useEffect } from "react";
import CertificacionesId from "./CertificacionesId";
import "./Certificaciones.css";
import SEO from "./SEO";

const Certificaciones = (certificaciones) => {
  const certs = certificaciones.certificaciones;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certificationsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": certs.title,
    "description": certs.description,
    "itemListElement": certs.certifications.map((cert, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": cert.title,
        "description": cert.description
      }
    }))
  };

  return (
    <div className="certificaciones-container">
      <SEO
        title={`${certs.title} - Andes Fruits | Quality Certifications`}
        description={certs.description}
        keywords="ISO certifications, food safety, quality standards, export certifications, HACCP, organic certification"
        url="/certificaciones"
        jsonLd={certificationsSchema}
      />
      
      <section className="cert-header">
        <div className="cert-header-bg"></div>
        <div className="cert-header-content">
          <h1>{certs.title}</h1>
          <p>{certs.description}</p>
        </div>
      </section>
      
      <section className="cert-grid">
        {certs.certifications.map((certification, i) => (
          <CertificacionesId key={i} certification={certification} />
        ))}
      </section>
    </div>
  );
};

export default Certificaciones;
