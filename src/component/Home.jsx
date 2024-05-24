import React, { useEffect } from "react";

import { Link } from "react-router-dom"

const Home = ({home}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(home)

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
    </div>
  );
};

export default Home;
