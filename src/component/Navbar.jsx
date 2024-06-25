import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setLanguage, language, content }) => {
  function changeLanguage() {
    setLanguage(language === "en" ? "es" : "en");
  }
  let idioma = "";
  let idiomaSec = "";
  if (language === "en") {
    idioma = "En";
    idiomaSec = "Es";
  } else {
    idioma = "Es";
    idiomaSec = "En";
  }
  const home = content.home.title
  const aboutUs = content.quienesSomos.title
  const productos = content.productos.title
  const contacto = content.contactenos.title
  const certificaciones = content.certificaciones.title

  const [showNav, setShowNav] = useState(false);
  return (
    <div className={showNav ? "mainM responsive" : "mainM"}>
      <Link to="/" className={showNav ? "lA lAr" : "lA"}>
        <img src="/img/Recurso.png" alt="logo" />
      </Link>
      <button
        className={showNav ? "bntMenu btnMr" : "bntMenu"}
        onClick={() => setShowNav(true)}
      >
        <i className="bx bx-menu"></i>
        <span>Menú</span>
      </button>
      <Link className={showNav ? "logoA" : "logoA"} to="/">
        <img
          onClick={() => setShowNav(!showNav)}
          className="logo"
          src="/img/Recurso.png"
          alt="logo"
        />
      </Link>
      <a className="icon" onClick={() => setShowNav(!showNav)}>
        {showNav ? <i className='bx bx-x'></i> : ""}
      </a>
      <div className="language" onClick={changeLanguage}>
        <i className="fa-solid fa-globe"></i>
        <span onClick={() => setShowNav(false)} className="idioma">
          {idioma}|
        </span>
        {" "}
        <span onClick={() => setShowNav(false)} className="idiomaSec">
          {idiomaSec}
        </span>
      </div>
      <div className="navbar" id="myNavbar">
        <ul>
          <Link
            className="pagesMenu"
            onClick={() => setShowNav(!showNav)}
            to="/quienes-somos"
          >
            <span><i className='bx bx-buildings'></i></span>
            {aboutUs}
            
          </Link>
          <Link
            className="pagesMenu"
            onClick={() => setShowNav(!showNav)}
            to="/productos"
          >
            <span><i className='bx bx-lemon'></i></span>
            {productos}
          </Link>
          <Link
            className="pagesMenu"
            onClick={() => setShowNav(!showNav)}
            to="/certificaciones"
          >
            <span><i className='bx bx-medal'></i></span>
            {certificaciones}
          </Link>
          <Link
            className="pagesMenu"
            onClick={() => setShowNav(!showNav)}
            to="/contactenos"
          >
            <span><i className='bx bx-user'></i></span>
            {contacto}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
