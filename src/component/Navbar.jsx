import React, { useState } from 'react'
import { Link } from "react-router-dom"





const Navbar = () => {
    
  const [showNav, setShowNav] = useState(false);
  return (
    
    <div className={showNav ? 'mainM responsive' : 'mainM'}>
      <Link className='pagesMenu logoA' to="/"  ><img onClick={() => setShowNav(true)} className='logo' src="/img/Recurso.png" alt="logo" /></Link>
      <a className='pagesMenu icon'   onClick={() => setShowNav(!showNav)}>{showNav ? 'X' : 'X'}</a>
        <div className="navbar" id="myNavbar">
            <ul>
            <Link className='pagesMenu' onClick={() => setShowNav(!showNav)} to="/quienes-somos" >Nosotros</Link>
            <Link className="pagesMenu" onClick={() => setShowNav(!showNav)} to="/productos">Productos</Link> 
            <Link className='pagesMenu' onClick={() => setShowNav(!showNav)} to="/certificaciones">Certificaciones</Link>
            <Link className='pagesMenu' onClick={() => setShowNav(!showNav)} to="/contactenos">Contactos</Link>
            </ul>
            
        </div>
        
        

    
    </div>
    
  )
}

export default Navbar
