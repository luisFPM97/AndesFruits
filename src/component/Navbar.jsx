import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setLanguage, language, content }) => {
  const location = useLocation();

  function changeLanguage() {
    setLanguage(language === "en" ? "es" : "en");
  }

  let idioma = language === "en" ? "En" : "Es";
  let idiomaSec = language === "en" ? "Es" : "En";

  const links = [
    { path: "/", label: content.home.title, icon: "bx bx-buildings" },
    { path: "/quienes-somos", label: content.quienesSomos.title, icon: "bx bx-lemon" },
    { path: "/productos", label: content.productos.title, icon: "bx bx-medal" },
    { path: "/contactenos", label: content.contactenos.title, icon: "bx bx-user" },
  ];

  return (
    <div className="mainM">
      <Link className="logoA" to="/">
        <img className="logo" src="/img/Recurso.png" alt="logo" />
      </Link>
      <div className="navbar">
        <ul>
          {links.map((link) => (
            <Link
              key={link.path}
              className={`pagesMenu ${location.pathname === link.path ? "active" : ""}`}
              to={link.path}
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
