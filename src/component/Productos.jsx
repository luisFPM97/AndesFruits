import React from 'react'
import Uchuva from './Uchuva'


const Productos = () => {
  return (
    <div className='productos'>
      <section className='listp'>
        <div className='list'>
          <h2>Productos</h2>
          <span>Uchuva</span>
          <span>Gulupa</span>
          <span>Maracuya</span>
          <span>Granadilla</span>
          <span>Pitaya</span>
          <span>Feijoa</span>
          <span>Bananito</span>
        </div>
      </section>
      <Uchuva/>
    </div>
  )
}

export default Productos
