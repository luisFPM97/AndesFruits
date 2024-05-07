import React from 'react'
import Uchuva from './Uchuva'


const Productos = () => {
  return (
    <div className='productos'>
      <section className='listp'>
        <div className='list'>
          <h2>Productos</h2>
          <div className='plist'>
            <span className='tplist'>Uchuva</span>
            <div className='descrptp'>
              <img className='imgp' src="/public/img/uchuva.png" alt="" />
            </div>
          </div>
          <div className='plist'>
            <span className='tplist'>Gulupa</span>
            <div className='descrptp'>
              <img className='imgp' src="/public/img/gulupa2.png" alt="" />
            </div>
          </div>
          <div className='plist'>
            <span className='tplist'>Maracuya</span>
            <div className='descrptp'>
              <img className='imgp' src="/public/img/maracuya2.png" alt="" />
            </div>
          </div>
          <div className='plist'>
            <span className='tplist'>Granadilla</span>
            <div className='descrptp'>
              <img className='imgp' src="/public/img/granadilla2.png" alt="" />
            </div>
          </div>
          <div className='plist'>
            <span className='tplist'>Pitaya</span>
            <div className='descrptp'>
              <img className='imgp' src="/public/img/pitaya2.png" alt="" />
            </div>
          </div>
          <div className='plist'>
            <span className='tplist'>Feijoa</span>
            <div className='descrptp'>
              <img className='imgp' src="/public/img/feijoa2.png" alt="" />
            </div>
          </div>
          <div className='plist'>
            <span className='tplist'>Bananito</span>
            <div className='descrptp'>
              <img className='imgp' src="/public/img/bananito2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Uchuva/>
    </div>
  )
}

export default Productos
