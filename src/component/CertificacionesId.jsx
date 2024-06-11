import React from 'react'

const CertificacionesId = (certification) => {

    const cert = certification.certification


  return (
    <div className={cert.id%2==0 ? 'cCard' :'cCard rev'}>
        <div className='certCard'>
            <img src={cert.image} alt="" />
            <h2>{cert.title}</h2>
            <span>{cert.subtittle}</span>
            <p>{cert.description}</p>
        </div>
            <a className='cimage' href={cert.pdf} target='blank'><img src={cert.pdf} alt="" /></a>
    </div>
  )
  
}



export default CertificacionesId