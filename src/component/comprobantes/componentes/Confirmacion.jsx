import React, { useEffect, useState } from 'react';
import Empleados from '/src/utils/empleados.json'; // Asegúrate de que es un arreglo

const Confirmacion = ({ cedulav }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [visible, setVisible] = useState(false);
  const [empleadoEncontrado, setEmpleadoEncontrado] = useState(null);
  const [comprobanteEncontrado, setComprobanteEncontrado] = useState(null); // Estado para el comprobante encontrado
const [empleadoVerificado, setEmpleadoVerificado] = useState(Empleados.find((empleado) => empleado.cedula === cedulav))

  const buscarEmpleadoPorCedula = (cedula) => {
    if (Array.isArray(Empleados)) {
        console.log(Empleados)
      const empleado = Empleados.find((empleado) => empleado.cedula === cedula);
      setEmpleadoEncontrado(empleado);
      console.log(empleado)
      return empleado; // Retorna el empleado encontrado
    }
    return null; // En caso de que Empleados no sea un arreglo
  };
  useEffect(() => {
   console.log(empleadoVerificado)
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append('access_key', 'f7dc8472-34bf-44ca-b03b-cf62bc68aef7');
    
    const cedulaInput = formData.get('name'); // Obtén la cédula del formulario
    const selectedMes = formData.get('subject'); // Obtén el mes seleccionado del formulario
    const empleado = buscarEmpleadoPorCedula(cedulaInput); // Busca al empleado
    console.log(empleado)
    if (empleadoVerificado) {
      setVisible(true); // Muestra los datos del empleado si se encuentra

      // Buscar el comprobante correspondiente al mes seleccionado
      const comprobante = empleadoVerificado.comprobantes.find(
        (comp) => comp.mes === selectedMes
      );

      setComprobanteEncontrado(comprobante || null); // Guarda el comprobante encontrado o null si no existe
    } else {
      setVisible(false); // Oculta los datos si no se encuentra
      setComprobanteEncontrado(null); // Reinicia comprobante encontrado
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert(
        'Haz ingresado tus datos correctamente, tendrás tus comprobantes disponibles. En caso de no ser así, por favor comunícate con el área de recursos humanos.'
      );
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
            <input type="text" id="name" name="name" disabled value={cedulav} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Periodo:</label>
            <select name="subject" id="subject" required>
              <option value="" disabled selected>
                Selecciona una opción
              </option>
              {['Enero','Febrero'].map((opcion, index) => (
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

          <button className="btnLink" type="submit">
            Confirmar datos
          </button>
        </form>
      </div>

      <div className={visible ? 'datos visible' : 'datos hidden'}>
        {empleadoVerificado ? (
          <>
            <div>
              <span>
                <b>Cédula: </b>
              </span>
              <span>{empleadoVerificado.cedula}</span>
            </div>
            <div>
              <span>
                <b>Año: </b>
              </span>
              <span>2025</span>
            </div>
            <div>
              <span>
                <b>Nombre: </b>
              </span>
              <span>{empleadoVerificado.nombre}</span>
            </div>
            {comprobanteEncontrado ? (
              <div>
                <span>
                  <b>Comprobante para {comprobanteEncontrado.mes}: </b>
                </span>
                {comprobanteEncontrado.enlace === '' ? (
                  <span>...No disponible</span>
                ) : (
                  <a
                    href={comprobanteEncontrado.enlace}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Descargar
                  </a>
                )}
              </div>
            ) : (
              <p>No se encontró el comprobante para el mes seleccionado.</p>
            )}
          </>
        ) : (
          <p>No se encontró ningún empleado con la cédula ingresada.</p>
        )}
      </div>
    </div>
  );
};

export default Confirmacion;
