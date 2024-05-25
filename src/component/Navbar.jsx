import React, { useState } from 'react'
import { Link } from "react-router-dom"





const Navbar = ({setLanguage, language}) => {
  
  function changeLanguage() {
    setLanguage(language === "en" ? "es" : "en");
  }
  let idioma = ""
  let idiomaSec=""
  if (language === "en") {
    idioma = "En"
    idiomaSec = "Es"
  }else{
    idioma = "Es"
    idiomaSec = "En"
  }

  const [showNav, setShowNav] = useState(false);
  return (
    
    <div className={showNav ? 'mainM responsive' : 'mainM'}>
      <Link  to="/" className={showNav ? 'lA lAr' : 'lA'} ><img  onClick={() => setShowNav(true)} src="/img/Recurso.png" alt="logo" /></Link>
      
      <Link className={showNav ? 'logoA' : 'logoA'} to="/"  ><img onClick={() => setShowNav(true)} className='logo' src="/img/Recurso.png" alt="logo" /></Link>
      <a className='icon'   onClick={() => setShowNav(!showNav)}>{showNav ? 'X' : ''}</a>
      <div className='language' onClick={changeLanguage}>
        <i className="fa-solid fa-globe"></i>
        <span className='idioma'>{idioma}</span>| <span className='idiomaSec'>{idiomaSec}</span>
      </div>
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
