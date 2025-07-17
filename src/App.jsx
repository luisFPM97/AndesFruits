import { useEffect, useState } from "react";
import "./App.css";
import Home from "./component/Home";
import Certificaciones from "./component/Certificaciones";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import QuienesSomos from "./component/QuienesSomos";
import Instalaciones from "./component/Instalaciones";
import Productos from "./component/Productos";
import Productos1 from "./component/Productos1";
import Productos2 from "./component/Productos2";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
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
import Footer from "./component/Footer";
import DashboardEmpleos from "./component/empleos/DashboardEmpleos";
import ModalContact from "./component/modalContact/ModalContact";

function App() {
  const [language, setLanguage] = useState("en");
  const [productid, setProductid] = useState(0);
  const [content, setContent] = useState(data[language]);
  const [ArticleId, setArticleId] = useState(0)
  const [articlesInfo, setArticlesInfo] = useState(articles)
  const [showModalCOntact, setShowModalCOntact] = useState(false)
  const links = [
    { path: "/", label: content.home.title, icon: "bx bx-buildings" },
    { path: "/quienes-somos", label: content.quienesSomos.title, icon: "bx bx-lemon" },
    { path: "/productos", label: content.productos.title, icon: "bx bx-medal" },
    { path: "/contactenos", label: content.contactenos.title, icon: "bx bx-user" },
    { path: "/certificaciones", label: content.certificaciones.title, icon: "bx bx-certificate" },
  ];
  const [selectedLink, setSelectedLink] = useState(links[0]);
  const location = useLocation(); // Obtiene la ruta actual
  useEffect(() => {
    // Extraer la ruta base sin el nombre del producto
    const pathSegments = location.pathname.split("/"); // Divide la URL en partes
    const isFichaTecnica = pathSegments[1] === "FichaTecnica"; // Verifica si es la ruta esperada
    if (isFichaTecnica) {
      setSelectedLink(links[2]); // Asigna el link correspondiente
      console.log("📌 Ruta detectada: /FichaTecnica/ - Link actualizado:", links[2]);
    } else {
      const currentLink = links.find(link => link.path === location.pathname);
      if (currentLink) {
        setSelectedLink(currentLink);
        console.log("📌 Ruta detectada: /FichaTecnica/ - Link actualizado:", selectedLink);
      }
    }
  }, [location.pathname]); // Se ejecuta cuando la ruta cambia // Se actualiza cada vez que cambia la ruta
  useEffect(() => {
    if (data) {
      setContent(data[language]);
    }
  }, [language, data]);
  return (
    <div className="App">
      <button className="btncontacthp" onClick={() => setShowModalCOntact(true)}><i className='bx  bxs-message-circle-notification bx-flip-horizontal'  ></i> </button>
      <Navbar selectedLink={selectedLink} setSelectedLink={setSelectedLink} setLanguage={setLanguage} language={language} content={content} links={links} />
      <ModalContact
        showModalCOntact={showModalCOntact}
        setShowModalCOntact={setShowModalCOntact}
        contact={content.contactenos}
      />
      <Routes>
        <Route path="/" element={ <Home home={content.home} setSelectedLink={selectedLink} productos={content.productos} setProductid={setProductid}productid={productid} links={links}  contacto={content.contactenos} certificaciones={content.certificaciones}/> } />
        <Route path="/quienes-somos" element={<QuienesSomos QuienesSomos={content.quienesSomos} />} />
        <Route path="/instalaciones" element={<Instalaciones />} />
        <Route path="/certificaciones" element={ <Certificaciones certificaciones={content.certificaciones} /> } />
        <Route path="/contactenos" element={<Contact contact={content.contactenos} />} />
        <Route path="/productos" element={<Productos1 setProductid={setProductid} productos={content.productos} /> } />
        {/*<Route path="/productos1" element={<Productos1 productos={content.productos} language={language} /> } />
        <Route path="/productos2" element={<Productos2 productos={content.productos} /> } />*/}
        <Route path="/FichaTecnica/:id" element={ <FichaTecnica productid={productid} productos={content.productos} language={language} />} />
        <Route path="/ProductCard" element={<ProductCard />} />
        <Route path="/data" element={<Datatreat content={content.datat}/>}/>
        <Route path="/empleo" element={<DashboardEmpleos/>} />
        <Route path="/articulos" element={<Articles language ={language} setArticleId={setArticleId}/>}/>
        <Route path="/articulos/:name" element={<ArticleInfo ArticleId={ArticleId} articlesInfo={articlesInfo} language={language}/>}/>
        <Route path="/codigoEtica" element={<EticCode code={content.etic}/>}/>
        <Route path="/eticalLine" element={<Pqrs contact={content.contactenos} />} />
        {/*<Route path="/comprobantes" element={<Comprobantes />} />*/}
        {/*<Route path="/PortalEmpleados" element={<PortalEmpleados />} />*/}
        {/*Ruta de error*/}
        <Route path="*" element={<Err404 err={content.err}/>}/>
      </Routes>
      <Footer content={content} links={links} language={language}/>
    </div>
  );
}

export default App;
