import React from 'react'
import './styles/Productos.css'

const Productos = () => {
  return (
    <div className='productContainer'>
      <div className='pageP'> 
        <h1>Nuestros productos</h1> <div className="products">
          <div className="product">
            <img className='imgProduct' src="/img/uchuva.png" alt="imgProduct" />{" "}
            <a className="productName" href="">
              UCHUVA
            </a>
          </div>
          <div className="product">
            <img className='imgProduct' src="/img/bananito2.png" alt="imgProduct" />{" "}
            <a className="productName" href="">
              BANANITO
            </a>
          </div>
          <div className="product">
            <img className='imgProduct' src="/img/feijoa2.png" alt="imgProduct" />{" "}
            <a className="productName" href="">
              FEIJOA
            </a>
          </div>
          <div className="product">
            <img className='imgProduct' src="/img/granadilla2.png" alt="imgProduct" />{" "}
            <a className="productName" href="">
              GRANADILLA
            </a>
          </div>
          <div className="product">
            <img className='imgProduct' src="/img/gulupa2.png" alt="imgProduct" />{" "}
            <a className="productName" href="">
              GULUPA
            </a>
          </div>
          <div className="product">
            <img className='imgProduct' src="/img/maracuya2.png" alt="imgProduct" />{" "}
            <a className="productName" href="">
              MARACUYA
            </a>
          </div>
          <div className="product">
            {" "}
            <img className='imgProduct' src="/img/pitaya2.png" alt="imgProduct" />
            <a className="productName" href="">
              PITAYA
            </a>
          </div>
          <div className="product">
            {" "}
            <img className='imgProduct' src="/img/tomate_de_arbol2.png" alt="imgProduct" />
            <a className="productName" href="">
              TOMATE DE ARBOL
            </a>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Productos
