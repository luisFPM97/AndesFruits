import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import React, { useEffect, useRef, useState } from 'react'


const QuienesSomos = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [pdf, setPdf] = useState(null);
  const refContenedor = useRef(null);

  const descargarPaginaPDF = async () => {
    const canvas = await html2canvas(refContenedor.current);
    const imgData = canvas.toDataURL('image/png');

    const doc = new jsPDF();
    doc.addImage(imgData, 'PNG', 0, 0, 210, 297); // Ajusta el tamaño según tu necesidad
    doc.save('AndesExport.pdf');
    setPdf(doc); // Opcional para mostrar un mensaje o enlace de descarga
  };



  return (
   <div className="aboutUs" ref={refContenedor}>
    <section className="section1" >
      <div className="descripta first">
        <p>
          <span>Andes Fruits </span> 
          empresa pionera en la exportación de frutas exóticas 
          desde 1999, se destaca por su compromiso con la calidad, 
          la sostenibilidad y el bienestar social.
        </p>
        <p>
          <span>Nuestra pasión: </span> 
          La uchuva, fruto emblemático de Colombia, la ofrecemos en 
          diversas presentaciones para satisfacer las necesidades 
          de nuestros clientes internacionales en Europa y Estados 
          Unidos.
        </p>
        <p>
          <span>Calidad garantizada: </span> 
          Nos aseguramos de que cada fruto cumpla con los más altos 
          estándares de calidad e inocuidad alimentaria. Implementamos
           prácticas agrícolas responsables y contamos con 
           certificaciones internacionales como GLOBALGAP y Organics, 
           que avalan la ausencia de agroquímicos nocivos y la
            producción sostenible.
        </p>
        <div className='sq'></div>
      </div>
      <div className="img">
      </div>
    </section>

    <section className="section1">
      <div className="descripta second">
        <p>
          <span>Compromiso social: </span> 
          El bienestar de nuestros trabajadores y productores es 
          fundamental. Garantizando prácticas laborales justas y precios 
          equitativos.
        </p>

        <p>
          <span>Hacia la sostenibilidad: </span> 
          Trabajamos incansablemente para reducir el uso de agroquímicos en 
          todos nuestros cultivos. En febrero de 2012, logramos la certificación
           Orgánica para la uchuva, tanto en la producción como en la poscosecha, 
           separadas de la producción convencional.
        </p>

        <p>
          <span>Más que frutas: </span> 
          Expandimos nuestra oferta con la línea de frutas exóticas deshidratadas, 
          conservando su sabor y nutrientes para disfrutar en cualquier momento.
        </p>
        <div className='sq'></div>
      </div>
      <div className="img">
      </div>
    </section>

    <div className="shortC">
        <span>¿Quieres saber más?</span>
        <span>Contacta con nosotros</span>
        <form action="">
          <input type="text" placeholder="Nombre Completo" />
          <input type="email" placeholder="Correo Electrónico" />
        </form>
        <button onClick={descargarPaginaPDF}>Enviar <i className='bx bx-send' ></i></button>
      </div>
   </div>
  )
}

export default QuienesSomos