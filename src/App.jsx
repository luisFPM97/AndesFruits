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
import Articles from "./component/Articles";
import ArticleInfo from "./component/ArticleInfo";
import articles from './articles.json'
import EticCode from "./component/EticCode";
import Err404 from "./component/Err404";
import Pqrs from "./component/Pqrs";
import Comprobantes from "./component/comprobantes/Comprobantes";
import PortalEmpleados from "./component/portal empleados/PortalEmpleados";

function App() {
  const [language, setLanguage] = useState("en");
  const [productid, setProductid] = useState(0);
  const [content, setContent] = useState(data[language]);
  const [ArticleId, setArticleId] = useState(0)
  const [articlesInfo, setArticlesInfo] = useState(articles)
  const [selectedLink, setSelectedLink] = useState({ path: "/", label: content.home.title, icon: "bx bx-buildings" })
  const links = [
      { path: "/", label: content.home.title, icon: "bx bx-buildings" },
      { path: "/quienes-somos", label: content.quienesSomos.title, icon: "bx bx-lemon" },
      { path: "/productos", label: content.productos.title, icon: "bx bx-medal" },
      { path: "/contactenos", label: content.contactenos.title, icon: "bx bx-user" },
    ];
  useEffect(() => {
    
    if (data) {
      setContent(data[language]);
      
    }
  }, [language, data]);

  return (
    <div className="App">
      <header></header>
      <Navbar selectedLink={selectedLink} setSelectedLink={setSelectedLink} setLanguage={setLanguage} language={language} content={content} links={links} />
      
      <Routes>
        <Route path="/" element={ <Home home={content.home} productos={content.productos} setProductid={setProductid}productid={productid} contacto={content.contactenos}/> } />
        <Route path="/quienes-somos" element={<QuienesSomos QuienesSomos={content.quienesSomos} />} />
        <Route path="/instalaciones" element={<Instalaciones />} />
        <Route path="/certificaciones" element={ <Certificaciones certificaciones={content.certificaciones} /> } />
        <Route path="/contactenos" element={<Contact contact={content.contactenos} />} />
        <Route path="/productos" element={<Productos setProductid={setProductid} productos={content.productos} /> } />
        <Route path="/FichaTecnica/:id" element={ <FichaTecnica productid={productid} productos={content.productos} />} />
        <Route path="/ProductCard" element={<ProductCard />} />
        <Route path="/data" element={<Datatreat content={content.datat}/>}/>
        <Route path="/empleo" element={<WorkWithUs work={content.workWithUs}/>} />
        <Route path="/articulos" element={<Articles language ={language} setArticleId={setArticleId}/>}/>
        <Route path="/articulos/:name" element={<ArticleInfo ArticleId={ArticleId} articlesInfo={articlesInfo} language={language}/>}/>
        <Route path="/codigoEtica" element={<EticCode code={content.etic}/>}/>
        <Route path="/eticalLine" element={<Pqrs contact={content.contactenos} />} />
        <Route path="/comprobantes" element={<Comprobantes />} />
        <Route path="/PortalEmpleados" element={<PortalEmpleados />} />
        {/*Ruta de error*/}
        <Route path="*" element={<Err404 err={content.err}/>}/>
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
            <span className="cc">© Andes Fruits 2024 || <Link to="/data">{content.contactenos.td}</Link> || <Link to="/eticalLine">PQRS</Link> || <Link to="/PortalEmpleados">Portal Empleados</Link></span>
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
