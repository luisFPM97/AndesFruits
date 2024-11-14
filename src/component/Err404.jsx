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
        console.log(err)
        
    }, [err])
    
  return (
    <div className='err404'>
        <div className='content'>
            <h1 className='titulo'>{titulo}</h1>
            <p className='msj1'>{mensaje1}</p>
            <p className='msj2'>{mensaje2}</p>
        </div>
        <button className='btn' onClick={() => nHome()}>
            <img src="/img/lv.png" alt="" />
            <span className='spbtn'>{home}</span>
        </button>
    </div>
  )
}

export default Err404