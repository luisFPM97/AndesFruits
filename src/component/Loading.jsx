import React, { useState, useEffect } from 'react';
import './Loading.css';

const Loading = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Iniciar animación de salida después de 2.5 segundos (antes de que termine los 3s)
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`modern-loader ${fadeOut ? 'fade-out' : ''}`}>
      {/* Decorative Elements */}
      <div className="loader-decoration decoration-1"></div>
      <div className="loader-decoration decoration-2"></div>

      {/* Main Loader Container */}
      <div className="loader-container">
        {/* Logo */}
        <img 
          className="loader-logo" 
          src="/img/lv.png" 
          alt="Andes Fruits Logo" 
        />

        {/* Spinner */}
        <div className="loader-spinner">
          <div className="spinner-circle"></div>
        </div>

        {/* Loading Text */}
        <p className="loader-text">Cargando</p>

        {/* Dots Indicator */}
        <div className="loader-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="loader-progress">
        <div className="loader-progress-bar"></div>
      </div>
    </div>
  );
};

export default Loading;