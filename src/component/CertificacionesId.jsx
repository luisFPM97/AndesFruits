import React from "react";

const CertificacionesId = (certification) => {
  const cert = certification.certification;

  return (
    <div className={cert.id % 2 == 0 ? "cCard" : "cCard rev"}>
      <div className="certCard">
        <img src={cert.image} alt="" />
        <h2>{cert.title}</h2>
        <span><span>{cert.concept} </span><span>{cert.number}</span></span>
        <span>{cert.subtittle}</span>
        <p>{cert.description}</p>
        {cert.pdf === "" ? (
          <div></div>
        ) : (
          <a className="cimage" href={cert.pdf} target="blank">
            <i className="bx bx-link-external"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificacionesId;
