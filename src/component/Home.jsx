import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";


const Home = ({ home, productos, setProductid, productid, contacto, setSelectedLink, links }) => {
  const scrollContainer = useRef(null);
  const navigate = useNavigate()
  // Función para mover el scrollbar a la izquierda o derecha
  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = 600; // Cantidad de píxeles a mover
      const start = scrollContainer.current.scrollLeft;
      const target = direction === "left" ? start - scrollAmount : start + scrollAmount;
      const duration = 100; // Duración de la animación en milisegundos
      const startTime = performance.now();
      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Asegura que no pase del 100%
        scrollContainer.current.scrollLeft = start + (target - start) * easeInOutQuad(progress);
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      requestAnimationFrame(animateScroll);
    }
  };

  // Función de easing para una animación más suave
const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  
  
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const cortina = document.querySelector('.cortina');
    cortina.classList.add('animate');
  }, []);

  

  const products = productos.products;

  return (
    <div className="home">
      <div className="cortina"></div> 
      <section className="homeHeader">
        <div>
          <span className="hw">{home.welcome}</span>
          <h1 className="ht">{home.titleE}</h1>
          <span className="hh">{home.header}</span>
        </div>
        <div className="filter"></div>
      </section>
      <section className="homeContact">
        <div className="bar">
          <div className="barItem left">
            <img className="icon" src="img/phone.png" alt="" />
            <div className="barItemText">
              <span className="subT">{contacto.ltext}</span>
              <span className="cont">{contacto.phone2}</span>
            </div>
          </div>
          <div className="barItem Center" >
            <Link to="/contactenos" className="linkContact" onClick={()=>(setSelectedLink({ path: "/contactenos", label: contacto.title, icon: "bx bx-user" }))}>
            {contacto.title}
            </Link>
          </div>
          <div className="barItem Right">
            <img className="icon" src="img/mail.png" alt="" />
            <div className="barItemText">
              <span className="subT">{contacto.lemail}</span>
              <span className="cont">{contacto.email}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="homeProduct">
        <div className="hpTitle">
          <span>{home.sections[1].description}</span> 
        </div>
        <button 
          className="arrowSlider aleft" 
          onClick={() => scroll("left")}
          aria-label="Desplazar a la izquierda"
          title="Desplazar a la izquierda"
        >
          <img src="img/arrow-slider.png" alt="" />
        </button>
        <div className="hpProduct" ref={scrollContainer}>
          {products.map((product, i) => (
            <ProductCard
              key={i}
              productos={productos}
              product={product}
              setProductid={setProductid}
              productid={productid}
              links={links}
              setSelectedLink={setSelectedLink}
            />
          ))}
        </div>
        {/* Flecha derecha */}
        <button 
          className="arrowSlider aright" 
          onClick={() => scroll("right")}
          aria-label="Desplazar a la derecha"
          title="Desplazar a la derecha"
        >
        <img src="img/arrow-end.png" alt="" />
        </button>
      </section>
      <section className="shortPage">
        <h1>{home.description}</h1>
        <div className="spcont">
        {home.sections.map((section, i) => (
          <div className="shortPageItem" key={i}>
            <img src={section.image} alt={section.description} />
            <div className="contenido">
            
              <span>{section.description}</span>
              
              
                <Link className="linkBtn linkP" to={section.link} onClick={()=>(setSelectedLink(links[i]))}>
                  {section.btn}
                </Link>
              
              
              
              
            </div>
            <div className="filter"></div>
          </div>
        ))}
        </div>
      </section>
    </div>
  );
};

export default Home;