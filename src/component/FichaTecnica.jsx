import React from 'react'

const FichaTecnica = ({productos,productid}) => {
    
    const product = productos.products[productid]

  return (
    <div className='fichaTecnica'>
        <h1>{product.ftitle}</h1>
        <div className='ftTitle'>
          <h2>{product.title}</h2>
          <h3>{product.scientificName}</h3>
        </div>
        <div className='content'>

        <div className='info'>
            <span>{product.phrase}</span>
            <span>{product.curiousFact}</span>
            
        </div>

        <div className='img'>
            <img src={product.image} alt="" />
        </div>
    
        <div className='table'>
          <table>
              <tr>
                <th>Element</th>
                <th>Unit</th>
                <th>Total</th>
              </tr>
              {
                product.table.map((data,i)=>(
                  
                  <tr key={i}>
                    <td className='aleft'>{data.title} </td>
                    <td className='aright'>{data.unit} </td>
                    <td className='aright'>{data.value} </td>
                  </tr>
                ))
              }
          </table>
        </div>

        </div>
        <div className='description'>
          <span >{product.description}</span>
        </div>

        
        <div className='carrousel-example'>
          <div className='imgC'>
            <div>
              <img src="/img/uchuva.png" class=" " alt="..."/>
            </div>
            <div>
              <img src="/img/tomate_de_arbol2.png" class="  h-100" alt="..."/>
            </div>
            <div>
              <img src="/img/Kumquat.png" class=" " alt="..."/>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default FichaTecnica