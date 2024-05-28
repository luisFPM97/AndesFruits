import React from 'react'

const FichaTecnica = ({productos,productid}) => {
    
    const product = productos.products[productid]
    console.log(product)
  return (
    <div>
        <h1>{product.title}</h1>
        <span>{product.phrase}</span>
    </div>
  )
}

export default FichaTecnica