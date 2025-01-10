import React, { useState } from 'react';
import Empleados from '/src/utils/empleados.json'; // Asegúrate de que es un arreglo

const Confirmacion = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [visible, setVisible] = useState(false);
  const [empleadoEncontrado, setEmpleadoEncontrado] = useState(null);

  const buscarEmpleadoPorCedula = (cedula) => {
    if (Array.isArray(Empleados)) {
      const empleado = Empleados.find((empleado) => empleado.cedula === cedula);
      setEmpleadoEncontrado(empleado);
      return empleado; // Retorna el empleado encontrado
    }
    return null; // En caso de que Empleados no sea un arreglo
  };
//enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    
    formData.append('access_key', 'f7dc8472-34bf-44ca-b03b-cf62bc68aef7');

    const cedulaInput = formData.get('name'); // Obtén la cédula del formulario
    const empleado = buscarEmpleadoPorCedula(cedulaInput); // Busca al empleado

    if (empleado) {
      setVisible(true); // Muestra los datos del empleado si se encuentra
    } else {
      setVisible(false); // Oculta los datos si no se encuentra
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert('Hemos recibido tu mensaje, en breve nos pondremos en contacto contigo.');
      e.target.reset();
    } else {
      alert(
        'Ha ocurrido un error al intentar enviar la solicitud de contacto. Por favor, envía un mensaje vía correo electrónico a luis.pinzon.m.m@gmail.com'
      );
      e.target.reset();
    }
  };

  return (
    <div className="contact-page">
      <h1>Ponte en contacto</h1>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          {isSuccess && (
            <div className="success-message">
              ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Número de documento: </label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Periodo:</label>
            <select name="subject" id="" >
            <option value="" disabled selected required>
            Selecciona una opción
            </option>
            {["Enero", "Febrero", "Marzo"].map((opcion, index) => (
            <option key={index} value={opcion}>
                {opcion}
            </option>
            ))}
            </select>
          </div>

          <div className="form-group" hidden>
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value="Consulta desprendible de pago"
              readOnly
              required
            ></textarea>
          </div>

          <button className="btnLink" type="submit">Confirmar datos</button>
        </form>
      </div>

      <div className={visible ? 'datos visible' : 'datos hidden'}>
        {empleadoEncontrado ? (
          <>
            <div>
              <span><b>Cédula: </b></span>
              <span>{empleadoEncontrado.cedula}</span>
            </div>
            <div>
              <span><b>Año: </b></span>
              <span>2025</span>
            </div>
            <div>
              <span><b>Nombre: </b></span>
              <span>{empleadoEncontrado.nombre}</span>
            </div>
            <div>
            {empleadoEncontrado.comprobantes.map((comprobante) => (
                <div key={comprobante.enlace || comprobante.mes}>
                <span><b>{comprobante.mes}:  </b></span>
                {comprobante.enlace === "" ? (
                    <span>...No disponible</span>
                ) : (
                    <a href={comprobante.enlace} target="_blank" rel="noreferrer">
                    Descargar
                    </a>
                )}
                </div>
            ))}
            </div>
          </>
        ) : (
          <p>No se encontró ningún empleado con la cédula ingresada.</p>
        )}
      </div>
    </div>
  );
};

export default Confirmacion;