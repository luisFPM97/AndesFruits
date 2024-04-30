import React, { useState } from 'react'
import { Link } from "react-router-dom"





const Navbar = () => {
    
  const [showNav, setShowNav] = useState(false);
  return (
    
    <div className="mainM">
        <div className={showNav ? 'navbar responsive' : 'navbar'} id="myNavbar">
            <ul>
              <Link className='pagesMenu logoA' to="/" ><img className='logo' src="/img/logo andes horizontal.png" alt="logo" /></Link>
              <Link className='pagesMenu' onClick={() => setShowNav(!showNav)} to="/">Inicio</Link>
              <Link className='pagesMenu' onClick={() => setShowNav(!showNav)} to="/quienes-somos" >Nosotros</Link>
              <Link className="pagesMenu" onClick={() => setShowNav(!showNav)} to="/productos">Productos</Link> 
              <Link className='pagesMenu' onClick={() => setShowNav(!showNav)} to="/instalaciones">Instalaciones</Link>
              <Link className='pagesMenu' onClick={() => setShowNav(!showNav)} to="/certificaciones">Certificaciones</Link>
              <Link className='pagesMenu' onClick={() => setShowNav(!showNav)} to="/contactenos">Contactos</Link>   
              
            </ul>
            <a className='pagesMenu icon'   onClick={() => setShowNav(!showNav)}>{showNav ? 'X' : '☰'}</a>
        </div>
        
        

    
    </div>
    
  )
}

export default Navbar
