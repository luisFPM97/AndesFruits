import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import SEO from "./SEO";
import "./Home.css";


const Home = ({ home, productos, setProductid, productid, contacto, setSelectedLink, links, certificaciones }) => {
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

 

  
  const certs = certificaciones.certifications
  const products = productos.products;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Andes Export Company S.A.S",
    "alternateName": "Andes Fruits",
    "url": "https://andesexport.com",
    "logo": "https://andesexport.com/img/logo.png",
    "description": "Leading exporter of premium Colombian exotic fruits with global certifications",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CO"
    },
    "sameAs": [
      "https://www.linkedin.com/company/andes-fruits",
      "https://www.instagram.com/andesfruits"
    ]
  };

  return (
    <div className="home">
      <SEO
        title="Andes Fruits - Premium Colombian Exotic Fruits Exporter"
        description="Leading exporter of premium Colombian exotic fruits: uchuva (golden berry), gulupa, granadilla, pitahaya. Global certifications: BASC, GlobalG.A.P., SMETA, Primus GFS."
        keywords="exotic fruits, colombian fruits, uchuva, golden berry, gulupa, granadilla, pitahaya, dragon fruit, fruit export, tropical fruits, BASC certified, GlobalGAP certified"
        image="/img/logo.png"
        url="/"
        jsonLd={organizationSchema}
      />

      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-content">
          <span className="home-welcome">{home.welcome}</span>
          <h1 className="home-title">{home.titleE}</h1>
          <p className="home-subtitle">{home.header}</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="home-products-section">
        <div className="home-products-header">
          <h2 className="home-products-title">{home.sections[1].description}</h2>
        </div>
        
        <div className="home-products-container">
          <button 
            className="slider-nav-button slider-nav-left" 
            onClick={() => scroll("left")}
            aria-label="Desplazar productos a la izquierda"
          >
            <img src="/img/arrow-slider.png" alt="" loading="lazy" />
          </button>
          
          <div className="products-slider-wrapper" ref={scrollContainer}>
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
          
          <button 
            className="slider-nav-button slider-nav-right" 
            onClick={() => scroll("right")}
            aria-label="Desplazar productos a la derecha"
          >
            <img src="/img/arrow-end.png" alt="" loading="lazy" />
          </button>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="home-sections">
        <div className="home-sections-header">
          <h2>{home.description}</h2>
        </div>
        
        <div className="sections-grid">
          {home.sections.map((section, i) => (
            <article className="section-card" key={i}>
              <img 
                className="section-card-image"
                src={section.image} 
                alt={section.description}
                loading="lazy"
                decoding="async"
              />
              <div className="section-card-overlay"></div>
              <div className="section-card-content">
                <p className="section-card-description">{section.description}</p>
                <Link 
                  className="section-card-link" 
                  to={section.link} 
                  onClick={() => setSelectedLink(links[i])}
                >
                  {section.btn}
                  <i className='bx bx-right-arrow-alt'></i>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="home-certifications">
        <div className="home-certifications-header">
          <h2>{certificaciones.description}</h2>
        </div>
        
        <div className="certifications-grid">
          {certificaciones.certifications.map((cert, i) => (
            <article className="certification-card" key={i}>
              <img 
                src={cert.image} 
                alt={cert.title}
                loading="lazy"
                decoding="async"
              />
              <span>{cert.title}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;