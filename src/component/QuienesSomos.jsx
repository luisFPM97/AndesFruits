import React, { useEffect, useRef, useState } from "react";
import ScrollIndicador from "./ScrollIndicador";

const QuienesSomos = ({ QuienesSomos }) => {
  const scrollContainer = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Estado para rastrear la sección activa

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = scrollContainer.current.clientWidth; // 100% del ancho visible
      const start = scrollContainer.current.scrollLeft;
      const target = direction === "left" ? start - scrollAmount : start + scrollAmount;
      const duration = 500; // Duración de la animación en ms
      const startTime = performance.now();

      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        scrollContainer.current.scrollLeft = start + (target - start) * easeInOutQuad(progress);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);

      // Actualiza el índice activo
      setActiveIndex((prevIndex) => {
        const newIndex = direction === "left" ? prevIndex - 1 : prevIndex + 1;
        return Math.max(0, Math.min(newIndex, QuienesSomos.history.length - 1)); // Evita valores fuera de rango
      });
    }
  };

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aboutCont">
      <ScrollIndicador/>
      <button className="arrowSlider aleft" onClick={() => scroll("left")}>
        <img src="img/arrow-slider.png" alt="left arrow" />
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
              <div className="filter"></div>
              <div className={`content ${i === activeIndex ? "animate-in" : "animate-out"}`}>
                <h3>{section.title}</h3>
                <p>{section.descript}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="arrowSlider aright" onClick={() => scroll("right")}>
        <img src="img/arrow-end.png" alt="right arrow" />
      </button>
    </div>
  );
};

export default QuienesSomos;
