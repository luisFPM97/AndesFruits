import React, { useEffect, useRef, useState } from "react";
import Nosotros from "./sobre nosotros/Nosotros";
import SEO from "./SEO";
import "./QuienesSomos.css";

const QuienesSomos = ({ QuienesSomos }) => {
  const scrollContainer = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = scrollContainer.current.clientWidth;
      const start = scrollContainer.current.scrollLeft;
      const target = direction === "left" ? start - scrollAmount : start + scrollAmount;
      const duration = 500;
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

      setActiveIndex((prevIndex) => {
        const newIndex = direction === "left" ? prevIndex - 1 : prevIndex + 1;
        return Math.max(0, Math.min(newIndex, QuienesSomos.history.length - 1));
      });
    }
  };

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  };

  // Detectar scroll manual para actualizar el índice activo
  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.clientWidth;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(newIndex);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="About Us - Andes Fruits | Premium Colombian Fruit Exporter"
        description="Learn about Andes Fruits, Colombia's leading exporter of exotic fruits. Our history, mission, values, and commitment to quality and sustainability."
        keywords="about andes fruits, colombian fruit company, exotic fruit exporter, sustainable agriculture, fruit export colombia"
        url="/about"
      />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">Nuestra Historia</h1>
          <p className="about-hero-subtitle">Un viaje de sabor, tradición y compromiso desde 1999</p>
        </div>
      </section>

      {/* Slider Container */}
      <section className="about-slider-section">
        <div className="about-slider-container">
          <button 
            className="slider-nav-btn slider-nav-left" 
            onClick={() => scroll("left")}
            aria-label="Sección anterior"
            disabled={activeIndex === 0}
          >
            <i className='bx bx-chevron-left'></i>
          </button>

          <div className="slider-wrapper" ref={scrollContainer}>
            {QuienesSomos.history.map((section, i) => (
              <article
                key={section.id}
                className="slider-card"
                style={{ 
                  backgroundImage: `linear-gradient(135deg, rgba(46, 60, 29, 0.5) 0%, rgba(131, 168, 65, 0.45) 100%), url(${section.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="slider-card-content">
                  <span className="slider-card-number">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="slider-card-title">{section.title}</h2>
                  <p className="slider-card-description">{section.descript}</p>
                </div>
              </article>
            ))}
          </div>

          <button 
            className="slider-nav-btn slider-nav-right" 
            onClick={() => scroll("right")}
            aria-label="Siguiente sección"
            disabled={activeIndex === QuienesSomos.history.length - 1}
          >
            <i className='bx bx-chevron-right'></i>
          </button>
        </div>

        {/* Indicator dots */}
        <div className="slider-indicators">
          {QuienesSomos.history.map((_, i) => (
            <button
              key={i}
              className={`indicator-dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => {
                if (scrollContainer.current) {
                  const scrollAmount = scrollContainer.current.clientWidth;
                  scrollContainer.current.scrollTo({
                    left: scrollAmount * i,
                    behavior: 'smooth'
                  });
                  setActiveIndex(i);
                }
              }}
              aria-label={`Ir a sección ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Nosotros Component */}
      <Nosotros />
    </>
  );
};

export default QuienesSomos;
