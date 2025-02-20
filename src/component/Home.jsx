import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";


const Home = ({ home, productos, setProductid, productid, contacto, setSelectedLink, links }) => {
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
          <div className="barItem Center" onClick={()=>(setSelectedLink(links[3]))}>
            <Link to="/contactenos" className="linkContact">
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
        <div className="hpProduct">
          {products.map((product, i) => (
            <ProductCard
              key={i}
              product={product}
              setProductid={setProductid}
              productid={productid}
              links={links}
              setSelectedLink={setSelectedLink}
            />
          ))}
        </div>
      </section>
      <section className="shortPage">
        <h1>{home.description}</h1>
        <div className="spcont">
        {home.sections.map((section, i) => (
          <div className="shortPageItem" key={i}>
            <img src={section.image} alt={section.description} />
            <div className="contenido">
              <span>{section.description}</span>
              <button >
                <Link className="linkBtn" to={section.link} onClick={()=>(setSelectedLink(links[i]))}>
                  {section.btn}
                </Link>
              </button>
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