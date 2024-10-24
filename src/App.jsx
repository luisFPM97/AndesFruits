import { useEffect, useState } from "react";
import "./App.css";
import Home from "./component/Home";
import Certificaciones from "./component/Certificaciones";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import QuienesSomos from "./component/QuienesSomos";
import Instalaciones from "./component/Instalaciones";
import Productos from "./component/Productos";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import data from "./data.json";
import FichaTecnica from "./component/FichaTecnica";
import ProductCard from "./component/ProductCard";
import Datatreat from "./component/Datatreat";
import WorkWithUs from "./component/WorkWithUs";

function App() {
  const [language, setLanguage] = useState("en");
  const [productid, setProductid] = useState(0);
  const [content, setContent] = useState(data[language]);

  useEffect(() => {
    if (data) {
      setContent(data[language]);
    }
  }, [language, data]);

  return (
    <div className="App">
      <header></header>
      <Navbar setLanguage={setLanguage} language={language} content={content} />
      
      <Routes>
        <Route path="/" element={ <Home home={content.home} productos={content.productos} setProductid={setProductid}productid={productid} /> } />
        <Route path="/quienes-somos" element={<QuienesSomos QuienesSomos={content.quienesSomos} />} />
        <Route path="/instalaciones" element={<Instalaciones />} />
        <Route path="/certificaciones" element={ <Certificaciones certificaciones={content.certificaciones} /> } />
        <Route path="/contactenos" element={<Contact contact={content.contactenos} />} />
        <Route path="/productos" element={<Productos setProductid={setProductid} productos={content.productos} /> } />
        <Route path="/FichaTecnica" element={ <FichaTecnica productid={productid} productos={content.productos} />} />
        <Route path="/ProductCard" element={<ProductCard />} />
        <Route path="/data" element={<Datatreat content={content.datat}/>}/>
        <Route path="es" element={<Home home={content.home} productos={content.productos} setProductid={setProductid} productid={productid}/>}/>
        <Route path="es/quienes-somos.html" element={<QuienesSomos QuienesSomos={content.quienesSomos} />}/>
        <Route path="es/contactenos.html" element={<Contact contact={content.contactenos} />} />
        <Route path="es/instalaciones.html" element={<Home  home={content.home}  productos={content.productos}   setProductid={setProductid}productid={productid}  />}/>
        <Route path="es/certificaciones.html"element={ <Certificaciones certificaciones={content.certificaciones} /> } />
        <Route path="es/productos.html" element={<Productos setProductid={setProductid} productos={content.productos} /> } />
        <Route path="/empleo" element={<WorkWithUs work={content.workWithUs}/>} />

      </Routes>
      <footer>
        <div className="fc">
          <hr />
          <div className="firstf">
            <span className="titlef">{content.home.titleE}</span>
            <a
              target="blank"
              className="titlef"
              href={`https://wa.me/+57${content.contactenos.phone}`}
            >
              <a
                target="blank"
                href={`https://wa.me/+57${content.contactenos.phone}`}
              >
                <i className="bx bxl-whatsapp"></i>
              </a>
              {content.contactenos.phone2}
            </a>
          </div>
          <hr />
          <div className="fd">
            <span>Andes Fruits - Andes Export Company S.A.S</span>
            <span>{content.contactenos.address}</span>
          </div>
          <hr />
          <div className="ff">
            <span className="cc">© Andes Fruits 2024 || <Link to="/data">{content.contactenos.td}</Link></span>
            <span>
              {" "}
              <a
                className="lcode"
                href="https://luis-code.netlify.app/"
                target="blank"
              >
                {" "}
                dev by Luis Code
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
