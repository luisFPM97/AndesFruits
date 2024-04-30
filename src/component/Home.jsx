import React, { useEffect } from "react";

import { Link } from "react-router-dom"

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      
      <div className="section">
        <h1 className="title">Andes Export</h1>
        <span className="stitle">
          Primera compañia Colombiana exportadora de frutas exoticas
        </span>
      </div>
      
      <div className="section2">
        <div className="img"></div>
        <div className="descSec2">
          <span >En Andes Fruits</span>
          <p>
            Cultivamos y exportamos uchuva y gulupa de la más alta calidad,
            utilizando prácticas agrícolas sostenibles que protegen el medio
            ambiente y benefician a los pequeños agricultores.
          </p>
          <p>
            Creemos en el comercio justo y trabajamos en estrecha colaboración
            con nuestros productores para garantizar que reciban un precio justo
            por sus productos.
          </p>
          <p>
            Al elegir Andes Fruits, usted está apoyando la agricultura
            sostenible y el desarrollo económico de las comunidades rurales en
            Colombia.
          </p>
        </div>
      </div>
      
      <div id="carouselExample" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/uchuva.png"  alt="..." />
            <div className="cdescript">
              <span className="ctitle">Uchuva</span>
              <p>
                El fruto es una baya en forma ovoide con un diámetro entre 1,5 y 0,87 
                pesa de 4 a 6 gramos. Su piel es suave y brillante. El fruto esta recubierto 
                de una membrana o vaina fibrosa (cáliz), fina no comestible, que puede ser de 
                color amarilla o verde
              </p>
              <i className='bx bx-right-arrow-circle'></i>
            </div>
            
          </div>
          <div className="carousel-item">
            <img src="img/gulupa2.png"  alt="..." />
            <div className="cdescript">
              <span className="ctitle">Gulupa</span>
              <p>
              La fruta es casi redonda, con un peso entre 50 y 60g y un diámetro promedio de 
              5,7 cm. Tiene una corteza resistente, lisa y gruesa.
              </p>
              <i className='bx bx-right-arrow-circle'></i>
            </div>
            
          </div>
          <div className="carousel-item">
            <img src="img/maracuya2.png"  alt="..." />
            <div className="cdescript">
              <span className="ctitle">Maracuya</span>
              <p>
              El Maracuyá pertenece a las frutas de la pasión. La fruta de forma circular a 
              ovalada pesa entre 110 y 125gr y tiene aproximadamente 6 o 7.5cms de diámetro. 
              Cuando la fruta madura, cambia de un color verde intenso a un amarillo brillante, 
              su corteza es gruesa y lisa, aunque con el tiempo tiende a arrugarse debido al proceso 
              natural de maduración. Su interior contiene numerosas y pequeñas semillas comestibles de color negro.
              </p>
              <i className='bx bx-right-arrow-circle'></i>
            </div>
            
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="shortC">
        <span>¿Quieres saber más?</span>
        <span>Contacta con nosotros</span>
        <form action="">
          <input type="text" placeholder="Nombre Completo" />
          <input type="text" placeholder="Correo Electrónico" />
        </form>
        <button>Enviar <i className='bx bx-send' ></i></button>
      </div>

    </div>
  );
};

export default Home;
