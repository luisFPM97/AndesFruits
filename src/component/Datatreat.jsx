import React from 'react'

const Datatreat = ({content}) => {
    console.log(content)
  return (
    <div className='dataTreatment'> 
        <h1><img src="/img/Recurso.png" alt="logo" />{content.title}</h1>
        <span>{content.d1}</span>
       <br />
        <span>{content.d2}</span>
        <br />
        <span>{content.d3}</span>
        <span>{content.d4}</span>
        <span>{content.d5}</span>
        <span>{content.d6}</span>
        <span>{content.d7}</span>
        <br />
        <span>{content.d8}</span>
        <br />
        <span>{content.d9}</span>
        <br />
        <span><b>{content.d10}</b></span>
        <span>{content.d11}</span>
        <span></span>
    </div>
  )
}

export default Datatreat