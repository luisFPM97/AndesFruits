import React, { useEffect } from "react";

import { Link } from "react-router-dom"

const Home = ({home, productos}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const products = productos.products
  console.log(products)

  return (
    <div className="home">
        <section className="homeHeader">
          <div>
          <h1>{home.titleE}</h1>
          <span>{home.header}</span>
          <button>{home.button}</button>
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
                  <div className="hpProductItem" key={i}>
                      <img src={product.image} alt={product.title} />
                      <h3>{product.title}</h3>
                      <p>{product.phrase}</p>
                      <button>ver más</button>
                    </div>
                ))
              }
          </div>
        </section>
    </div>
  );
};

export default Home;
