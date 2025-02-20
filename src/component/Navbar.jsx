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
    <div className="mainM">
      <Link className="logoA" to="/" onClick={()=>(setSelectedLink(links[0]))}>
        <img className="logo" src="/img/Recurso.png" alt="logo" />
      </Link>
      <Link className="respLink" to={selectedLink.path}>{selectedLink.label}</Link>
      <i onClick={showNavbar} className={showNav?"bx bx-x": "bx bx-menu"}>
        
      </i>
      <div className={showNav ? "navbar responNav": "navbar"}>
        <ul>
          {links.map((link) => (
            <Link
              key={link.path}
              className={`pagesMenu ${location.pathname === link.path ? "active" : ""}`}
              to={link.path}
              onClick={()=>(setSelectedLink(link), setShowNav(!showNav))}
            >
              
              {link.label}
            </Link>
          ))}
          <div className={`${language} lang`} onClick={changeLanguage}>
            <span className="text-es">{idiomaSec}</span>
            <div className="circle">{idioma}</div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
