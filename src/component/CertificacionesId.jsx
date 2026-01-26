import React from "react";

const CertificacionesId = ({ certification }) => {
  const cert = certification;

  return (
    <article className="cert-card">
      <div className="cert-card-image">
        <img 
          src={cert.image} 
          alt={cert.title}
          loading="lazy"
          decoding="async"
        />
      </div>
      
      <div className="cert-card-content">
        <h2 className="cert-card-title">
          {cert.url ? (
            <a href={cert.url} target="_blank" rel="noopener noreferrer">
              {cert.title}
              <i className='bx bx-link-external'></i>
            </a>
          ) : (
            cert.title
          )}
        </h2>
        
        {(cert.concept || cert.number) && (
          <div className="cert-number">
            {cert.concept && <span>{cert.concept}</span>}
            {cert.number && <span>{cert.number}</span>}
          </div>
        )}
        
        {cert.subtittle && (
          <div className="cert-subtitle">{cert.subtittle}</div>
        )}
        
        <p className="cert-description">{cert.description}</p>
        
        {(cert.url || cert.pdf) && (
          <div className="cert-card-actions">
            {cert.url && (
              <a 
                href={cert.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-btn cert-btn-primary"
              >
                <i className='bx bx-link'></i>
                Ver certificado
              </a>
            )}
            {cert.pdf && (
              <a 
                href={cert.pdf} 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-btn cert-btn-secondary"
              >
                <i className='bx bxs-file-pdf'></i>
                Descargar PDF
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default CertificacionesId;
