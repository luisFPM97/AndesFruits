import React, { useState } from 'react'
import { Link } from "react-router-dom"
import './styles/Navbar.css'




const Navbar = () => {
    
  const [showNav, setShowNav] = useState(false);
  return (
    
    <div className="main">
        <div className={showNav ? 'navbar responsive' : 'navbar'} id="myNavbar">
            <ul>
              <Link className='pagesMenu' to="/"><img className='logo' src="https://edgarlaverde.netlify.app/public/logos/AE.png" alt="logo" /></Link>
              <Link className='pagesMenu' to="/quienes-somos">QUIENES SOMOS <span className='border'></span></Link>
              <Link className="pagesMenu" to="/productos">PRODUCTOS<span className='border'></span></Link> 
              <Link className='pagesMenu' to="/instalaciones">INSTALACIONES <span className='border'></span></Link>
              <Link className='pagesMenu' to="/certificaciones">CERTIFICACIONES <span className='border'></span></Link>
              <Link className='pagesMenu' to="/contactenos">CONTACTENOS <span className='border'></span></Link>   
                        
              <a className='pagesMenu icon'   onClick={() => setShowNav(!showNav)}>☰</a>
            </ul>
        </div>
        
        

    
    </div>
    
  )
}

export default Navbar
