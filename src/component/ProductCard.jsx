import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product, setProductid, productid}) => {
    
    console.log(product)
    
    function defProduct() {
        setProductid(productid==[] ? product : productid)
        console.log(productid)
    }
    


    
    
    
    
  return (
    <div className="hpProductItem" >
                      <img src={product.image} alt={product.title} />
                      <h3>{product.title}</h3>
                      <p>{product.phrase}</p>
                      <button onClick={defProduct} ><Link to="/FichaTecnica">ver más</Link></button>
    </div>
  )
}

export default ProductCard