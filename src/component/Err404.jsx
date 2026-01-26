import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Err404 = ({err}) => {
    
    let titulo= err.titulo
    let mensaje1 = err.mensaje1
    let mensaje2 = err.mensaje2
    let home = err.boton
    const navigate = useNavigate()
    function nHome() {
        navigate("/")
    }

        //eliminar useEffect()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [err])
    
  return (
    <div className='err404'>
        <div className='err404-background'>
            <div className='floating-shape shape-1'></div>
            <div className='floating-shape shape-2'></div>
            <div className='floating-shape shape-3'></div>
        </div>
        
        <div className='err404-container'>
            <div className='err404-number'>
                <span className='number-4 first'>4</span>
                <span className='number-0'>0</span>
                <span className='number-4 last'>4</span>
            </div>
            
            <div className='content'>
                <h1 className='titulo'>{titulo}</h1>
                <p className='msj1'>{mensaje1}</p>
                <p className='msj2'>{mensaje2}</p>
            </div>
            
            <button className='btn' onClick={() => nHome()}>
                <img src="/img/lv.png" alt="Logo" />
                <span className='spbtn'>{home}</span>
            </button>
        </div>
    </div>
  )
}

export default Err404