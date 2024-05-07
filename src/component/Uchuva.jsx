import React, { useRef, useState } from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Uchuva = () => {


    const [pdf, setPdf] = useState(null);
    const refContenedor = useRef(null);

    const descargarPaginaPDF = async () => {
      const canvas = await html2canvas(refContenedor.current);
      const imgData = canvas.toDataURL("image/png");

      const doc = new jsPDF();
      doc.addImage(imgData, "PNG", 0, 0, 210, 280); // Ajusta el tamaño según tu necesidad
      doc.save("UchuvaAndesExport.pdf");
      setPdf(doc); // Opcional para mostrar un mensaje o enlace de descarga
    };


  return (
    <div className='uchuva' ref={refContenedor} id="uchuva">
        <img className='logoA' src="/public/img/LOGO VERTICAL.png" alt="" />
        <section>
            <h3>Uchuva</h3>
            <div className='descU'>
                <div className='textU'>
                    <span>DESCRIPCIÓN</span>
                    <p>
                        El fruto es una baya en forma ovoide con un diámetro entre 1,5 y 0,87 
                        pesa de 4 a 6 gramos. Su piel es suave y brillante. El fruto esta 
                        recubierto de una membrana o vaina fibrosa (cáliz), fina no comestible, 
                        que puede ser de color amarilla o verde
                    </p>

                    <span>ESPECIFICACIONES MICROBIOLÓGICAS</span>
                    <p>
                    Recuento de mesofilos 3000 UFC/g Máximo Levaduras y hongos 100 UFC/g Máximo 
                    Total Coliformes N.M.P 200 UFC/g Máximo Coliformes fecales N.M.P. 0
                    </p>

                    <span>ESPECIFICACIONES FISICOQUÍMICAS</span>
                    <p>
                    Medidas a 20°C de JUGO NATURAL Porcentaje total de sólidos (°Brix) 8.0 - 10.5 PH 
                    (20°C) 3.1 - 3.4 Relación Brix / Acidez 3.5 - 10.0
                    </p>

                    <span>TIPO DE TRATAMIENTO</span>
                    <p>
                    La uchuva es sometida a las etapas de Recibo, Almacenamiento, Selección, Encestado,
                    Secado, Empaque y Despacho
                    </p>
                </div>
                <img src="/public/img/uchuva.png" alt="" />
            </div>
            
            <span>CONDICIONES DE CONSERVACIÓN</span>
            <p>
            Temperatura: Entre 8 -10º C Humedad relativa: Entre 65 - 70%
            </p>

            <span>CONSUMO</span>
            <p>
            Esta fruta se consume cruda como una uva, sola o con otras frutas 
            en ensaladas o con chocolate fundido como postre, y como decoración 
            de platos. También se pueden preparar mermeladas, salsas o rellenos
             para deliciosas tortas, y para decoración
            </p>
            <button onClick={descargarPaginaPDF} className='print'><i className='bx bx-printer' ></i></button>
        </section>
        
    </div>
  )
}

export default Uchuva