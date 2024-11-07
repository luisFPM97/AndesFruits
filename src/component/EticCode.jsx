import React from 'react'

const EticCode = (code) => {
    let contenido = code.code
    let valores = contenido.valores
    let principios = contenido.principios
    let gruposInteres = contenido.gruposInteres
    let conductas = contenido.conductasEsperadas
    let denuncias = contenido.denuncias
  return (
    <div className='eticcode'>
        <h1>{contenido.empresa}</h1>
        <p>{contenido.visionGeneral}</p>
        <hr />
        <h2>{valores.titulo}</h2>
        {
            valores.valores.map((valor, i)=>(
                <div key={i}>
                    <h3>{valor.nombre}</h3>
                    <p>{valor.descripcion}</p>
                </div>
            ))
        }
        <hr />
        <h2>{principios.titulo}</h2>
        {
            principios.principios.map((principio, i)=>(
                <div key={i}>
                    <h3>{principio.nombre}</h3>
                    <p>{principio.descripcion}</p>
                </div>
            ))
        }
        <hr />
        <h2>{gruposInteres.titulo}</h2>
        {
            gruposInteres.gruposInteres.map((grupo, i)=>(
                <div key={i}>
                    <h3>{grupo.grupo}</h3>
                    <p>{grupo.compromisos}</p>
                </div>
            ))
        }
        <hr />
        <h2>{conductas.titulo}</h2>
        {
            conductas.conductasEsperadas.map((conducta, i)=>(
                <div key={i}>
                    <h3>{conducta.conducta}</h3>
                    <p>{conducta.descripcion}</p>
                </div>
            ))
        }
        <hr />
        <br />
        <hr />
        <h2>{denuncias.titulo}</h2>
        <p>{denuncias.denuncias.canal}</p>
        <p>{denuncias.denuncias.garantia}</p>
    </div>
  )
}

export default EticCode