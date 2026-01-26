import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from './Loading';

const RouteLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Mostrar loader y ocultar contenido en cada cambio de ruta
    setIsLoading(true);
    setShowContent(false);

    // Garantizar mínimo 3 segundos de loader
    const minLoadTime = setTimeout(() => {
      setIsLoading(false);
      // Pequeño delay adicional antes de mostrar contenido para evitar flash
      setTimeout(() => {
        setShowContent(true);
      }, 100);
    }, 3000);

    return () => clearTimeout(minLoadTime);
  }, [location.pathname]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div 
      style={{
        opacity: showContent ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
    >
      {children}
    </div>
  );
};

export default RouteLoader;
