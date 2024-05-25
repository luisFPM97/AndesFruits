import { useEffect, useState } from "react";
import "./App.css";
import Home from "./component/Home";
import Certificaciones from "./component/Certificaciones";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import QuienesSomos from "./component/QuienesSomos";
import Instalaciones from "./component/Instalaciones";
import Productos from "./component/Productos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import data from "./data.json";

function App() {
  const [language, setLanguage] = useState("es");
  const [content, setContent] = useState(data[language]);

  function changeLanguage() {
    setLanguage(language === "en" ? "es" : "en");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (data) {
      setContent(data[language]);
    }
  }, [language, data]);

  

  

  return (
    <div className="App">
      <header></header>
      <Navbar 
        setLanguage={setLanguage}
        language={language}
      />
      <Routes>
        <Route 
          path="/" 
          element={
          <Home
            home={content.home}
            productos = {content.productos}
          />
          } />
        <Route
          path="/quienes-somos"
          element={<QuienesSomos QuienesSomos={data.quienesSomos} />}
        />
        <Route path="/instalaciones" element={<Instalaciones />} />
        <Route path="/certificaciones" element={<Certificaciones />} />
        <Route path="/contactenos" element={<Contact />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
      <footer>
        <div className="fc">
          <hr />
          <div className="firstf">
            <span className="titlef">Andes Fruits</span>
            <span className="titlef"> Call:(+57)315 3871168 </span>
          </div>
          <hr />
          <div className="fd">
            
            <span>Andes Fruits - Andes Export Company S.A.S</span>
            <span>Combita - Boyacá(Colombia)</span>
            <span>Parque industrial Km 1 via Tunja-Paipa</span>
          </div>
          <hr />
          <div className="ff">
            <span>© Andes Fruits 2024</span>
            <span>
              {" "}
              <a
                className="lcode"
                href="https://luis-code.netlify.app/"
                target="blank"
              >
                {" "}
                Luis Code
              </a>
            </span>
            <a href="https://andesexp.netlify.app/">deploy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
