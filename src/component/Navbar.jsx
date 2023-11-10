import React, { useState } from 'react'
import { Link } from "react-router-dom"
import './styles/Navbar.css'




const Navbar = () => {
    
    function myFunction() {
        var x = document.getElementById("myNavbar");
        if (x.className === "navbar") {
          x.className += " responsive";
        } else {
          x.className = "navbar";
        }
      }
  return (
    
    <div className="main">
        <div className="navbar" id="myNavbar">
            <ul>
              <Link className='pagesMenu' to="/"><img className='logo' src="public\img\LOGO VERTICAL.png" alt="logo" /></Link>
              <Link className='pagesMenu' to="/quienes-somos">QUIENES SOMOS <span className='border'></span></Link>
              <Link className="pagesMenu" to="/productos">PRODUCTOS<span className='border'></span></Link> 
              <Link className='pagesMenu' to="/instalaciones">INSTALACIONES <span className='border'></span></Link>
              <Link className='pagesMenu' to="/certificaciones">CERTIFICACIONES <span className='border'></span></Link>
              <Link className='pagesMenu' to="/contactenos">CONTACTENOS <span className='border'></span></Link>   
                        
              <a className='pagesMenu' href="javascript:void(0);" class="icon" onClick={myFunction}>☰</a>
            </ul>
        </div>
        
        

    
    </div>
    
  )
}

export default Navbar