import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import React, { useEffect, useRef, useState } from "react";

const QuienesSomos = ({ QuienesSomos }) => {
  const scrollContainer = useRef(null);
  
    // Función para mover el scrollbar a la izquierda o derecha
    const scroll = (direction) => {
      if (scrollContainer.current) {
        const scrollAmount = scrollContainer.current.clientWidth; // 100% del ancho visible
        const start = scrollContainer.current.scrollLeft;
        const target = direction === "left" ? start - scrollAmount : start + scrollAmount;
        const duration = 500; // Duración de la animación en ms (ajusta según necesidad)
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
    
    // Función de suavizado (Easing function)
    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aboutCont">
    <button className="arrowSlider aleft" onClick={() => scroll("left")}>
      <img src="img/arrow-slider.png" alt="" />
    </button>
    <div className="aboutUs" ref={scrollContainer}>
      {QuienesSomos.history.map((section, i) => {
        return (
          <div
            key={i}
            className={i % 2 === 0 ? "aboutUsSec Inpar" : "aboutUsSec Par"}
            id={section.id}
            style={{ backgroundImage: `url(${section.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            
            <div className="content">
              <h3>{section.title}</h3>
              <p>{section.descript}</p>
            </div>
          </div>
        );
      })}
    </div>
    <button className="arrowSlider aright" onClick={() => scroll("right")}>
      <img src="img/arrow-end.png" alt="" />
    </button>
    </div>
  );
};

export default QuienesSomos;
