import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Empleados from '/src/utils/empleados.json'; // Asegúrate de que es un arreglo válido
import './styles/PortalEmpleados.css'

const PortalEmpleados = () => {
  const [cedula, setCedula] = useState('');
  const navigate = useNavigate();

  const handleConsulta = (e) => {
    e.preventDefault();

    // Buscar empleado por cédula
    const empleado = Empleados.find((empleado) => empleado.cedula === cedula);

    if (empleado) {
      // Guardar variable en localStorage
      localStorage.setItem('verificado', 'true');
      localStorage.setItem('cedula1',`${cedula}`)
      alert(`Bienvenido ${empleado.nombre} `);
      // Redirigir a /comprobantes con el empleado encontrado
      navigate('/comprobantes', { state: { empleado } });
    } else {
      // Mostrar alerta si no se encuentra el empleado
      alert('Empleado no encontrado. Verifica el número de documento ingresado.');
    }
  };

  return (
    <div className='portal-empleados'>
      <h1>Portal de Empleados</h1>
      <form className='formulario-portal' onSubmit={handleConsulta}>
        <div className='formulario-cont'>
          <label htmlFor="cedula">Número de documento:</label>
          <input
            type="text"
            id="cedula"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            required
          />
        </div>
        <button className='btnLink' type="submit">Consultar</button>
      </form>
    </div>
  );
};

export default PortalEmpleados;
