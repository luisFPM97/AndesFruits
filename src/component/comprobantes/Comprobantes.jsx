import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Comprobante.css';
import Confirmacion from './componentes/Confirmacion';

const Comprobantes = () => {
  const navigate = useNavigate();
  const cedulav = localStorage.getItem('cedula1');
  const [timeLeft, setTimeLeft] = useState(300); // Estado para almacenar el tiempo restante en segundos

  useEffect(() => {
    // Configurar el temporizador para actualizar cada segundo
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId); // Detener el intervalo cuando llegue a 0
          alert('Tu sesión ha expirado. Serás redirigido al Portal de empleados.');
          localStorage.removeItem('verificado'); // Eliminar la variable 'verificado'
          localStorage.removeItem('cedula1'); // Eliminar la variable 'cedula1'
          window.location.reload(); // Recargar la página
        }
        return prevTime - 1; // Reducir el tiempo restante en 1 segundo
      });
    }, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Obtener la variable 'verificado' de localStorage
    const verificado = localStorage.getItem('verificado');

    // Si no está verificado o el valor no es 'true', redirigir a /PortalEmpleados
    if (verificado !== 'true') {
      alert('No tienes acceso a esta página. Por favor, se redigira al Portal de empleados.');
      navigate('/PortalEmpleados');
    }
  }, [navigate]);

  // Convertir el tiempo restante a formato mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div className="comprobantes">
      
      <Confirmacion cedulav={cedulav} />
      <div className="session-timer">
        <p>Tu sesión expira en: <strong>{formatTime(timeLeft)}</strong></p>
      </div>
    </div>
  );
};

export default Comprobantes;
