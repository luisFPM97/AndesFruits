import React from 'react'

const FichaTecnica = ({productos,productid}) => {
    
    const product = productos.products[productid]
    console.log(product)
  return (
    <div>
        <h1>{product.ftitle}</h1>
        <img src={product.image} alt="" />
        <h2>{product.title}</h2>
        <h3>{product.scientificName}</h3>
        <span>{product.phrase}</span>
        <span>{product.curiousFact}</span>
        <span>{product.description}</span>
        <div>
          {
            product.table.map((data,i)=>(
              
              <div key={i}>
                <span>{data.title} </span><span>{data.value} </span><span>{data.unit} </span>
              </div>
            ))
          }
        </div>

    </div>
  )
}

export default FichaTecnica