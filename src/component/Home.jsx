import React, { useEffect } from "react";

import { Link } from "react-router-dom"
import FichaTecnica from "./FichaTecnica";
import ProductCard from "./ProductCard";

const Home = ({home, productos,setProductid,productid}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const products = productos.products
 

  return (
    <div className="home">
        <section className="homeHeader">
          <div>
          <h1>{home.titleE}</h1>
          <span>{home.header}</span>
          <button><Link className="btnLink" to={home.link}>{home.button}</Link></button>
          </div>
          <div className="filter"></div>
        </section>
        <section className="homeProduct">
        <img className="arrowSlider aleft" src="/img/arrow.svg" alt="" />
        <img className="arrowSlider aright" src="/img/arrow.svg" alt="" />
          <div className="hpTitle">
            <span>{home.sections[1].description}</span>
          </div>
          <div className="hpProduct">
              {
                products.map((product, i)=>(
                  <ProductCard
                  key={i}
                  product={product}
                  setProductid ={setProductid} 
                  productid={productid}
                  />
                ))
              }
          </div>
        </section>
        <section className="shortPage">
              {
                home.sections.map((section, i)=>(
                  <div className="shortPageItem" key={i}>
                    <img src={section.image} alt={section.description} />
                    <h3>{section.description}</h3>
                    <button><Link className="linkBtn" to={section.link}>{section.btn}</Link></button>
                    <div className="filter"></div>
                  </div>
                ))
              }
        </section>
        
    </div>
  );
};

export default Home;
