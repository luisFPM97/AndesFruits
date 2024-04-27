import React, { useState } from 'react'
import { Link } from "react-router-dom"





const Navbar = () => {
    
  const [showNav, setShowNav] = useState(false);
  return (
    
    <div className="mainM">
        <div className={showNav ? 'navbar responsive' : 'navbar'} id="myNavbar">
            <ul>
              <Link className='pagesMenu logoA' to="/"><img className='logo' src="/img/logo andes horizontal.png" alt="logo" /></Link>
              <Link className='pagesMenu' to="/">Inicio<span className='border'></span></Link>
              <Link className='pagesMenu' to="/quienes-somos">Nosotros<span className='border'></span></Link>
              <Link className="pagesMenu" to="/productos">Productos<span className='border'></span></Link> 
              <Link className='pagesMenu' to="/instalaciones">Instalaciones<span className='border'></span></Link>
              <Link className='pagesMenu' to="/certificaciones">Certificaciones<span className='border'></span></Link>
              <Link className='pagesMenu' to="/contactenos">Contactos<span className='border'></span></Link>   
              
            </ul>
            <a className='pagesMenu icon'   onClick={() => setShowNav(!showNav)}>{showNav ? 'X' : '☰'}</a>
        </div>
        
        

    
    </div>
    
  )
}

export default Navbar
