import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setLanguage, language, content, links, selectedLink, setSelectedLink }) => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false)
  

  function changeLanguage() {
    setLanguage(language === "en" ? "es" : "en");
  }
  function showNavbar ( ){
    setShowNav(!showNav)
  }

  let idioma = language === "en" ? "En" : "Es";
  let idiomaSec = language === "en" ? "Es" : "En";

  

  return (
    <nav className="mainM" role="navigation" aria-label="Main navigation">
      <Link className="logoA" to="/" onClick={()=>(setSelectedLink(links[0]))} aria-label="Home - Andes Fruits">
        <img className="logo" src="/img/Recurso.png" alt="Andes Fruits logo" />
      </Link>
      <Link className="respLink" to={selectedLink.path} aria-current={location.pathname === selectedLink.path ? "page" : undefined}>{selectedLink.label}</Link>
      <button 
        onClick={showNavbar} 
        className="menu-toggle"
        aria-label={showNav ? "Close menu" : "Open menu"}
        aria-expanded={showNav}
        aria-controls="main-menu"
      >
        <i className={showNav?"bx bx-x": "bx bx-menu"}></i>
      </button>
      <div className={showNav ? "navbar responNav": "navbar"} id="main-menu">
        <ul role="list">
          {links.map((link) => (
            <Link
              key={link.path}
              className={`pagesMenu ${location.pathname === link.path ? "active" : ""}`}
              to={link.path}
              onClick={()=>(setSelectedLink(link), setShowNav(!showNav))}
              aria-current={location.pathname === link.path ? "page" : undefined}
            >
              
              {link.label}
            </Link>
          ))}
          <button 
            className={`${language} lang`} 
            onClick={changeLanguage}
            aria-label={`Change language to ${language === 'en' ? 'Spanish' : 'English'}`}
          >
            <span className="text-es" aria-hidden="true">{idiomaSec}</span>
            <div className="circle" aria-hidden="true">{idioma}</div>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
