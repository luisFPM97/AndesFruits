import React from 'react'
import CertificacionesId from './CertificacionesId'


const Certificaciones = (certificaciones) => {

  const certs = certificaciones.certificaciones
  

  return (
    <div className='certificaciones'>
      
      <section className='header'>
        <h1>{certs.title}</h1>
        <p>{certs.description}</p>
        <div className='img'></div>
      </section>
      {
        certs.certifications.map((certification, i )=>(
          <CertificacionesId
            key={i}
            certification = {certification}
          />
        ))
      }
    </div>
  )
}

export default Certificaciones