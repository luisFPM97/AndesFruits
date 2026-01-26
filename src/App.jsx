import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useAppContext } from "./context/AppContext.jsx";

// Componentes que se cargan inmediatamente (críticos para el layout)
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ModalContact from "./component/modalContact/ModalContact";

// Componente de carga (Loading fallback)
import Loading from "./component/Loading";

// Lazy loading de componentes de ruta
const Home = lazy(() => import("./component/Home"));
const Certificaciones = lazy(() => import("./component/Certificaciones"));
const Contact = lazy(() => import("./component/Contact"));
const QuienesSomos = lazy(() => import("./component/QuienesSomos"));
const Instalaciones = lazy(() => import("./component/Instalaciones"));
const Productos1 = lazy(() => import("./component/Productos1"));
const FichaTecnica = lazy(() => import("./component/FichaTecnica"));
const Datatreat = lazy(() => import("./component/Datatreat"));
const Articles = lazy(() => import("./component/Articles"));
const ArticleInfo = lazy(() => import("./component/ArticleInfo"));
const EticCode = lazy(() => import("./component/EticCode"));
const Err404 = lazy(() => import("./component/Err404"));
const Pqrs = lazy(() => import("./component/Pqrs"));
const DashboardEmpleos = lazy(() => import("./component/empleos/DashboardEmpleos"));
const Team = lazy(() => import("./component/portal empleados/Team"));

// Componentes comentados (no se usan actualmente)
// const ProductCard = lazy(() => import("./component/ProductCard"));
// const Productos = lazy(() => import("./component/Productos"));
// const Productos2 = lazy(() => import("./component/Productos2"));
// const WorkWithUs = lazy(() => import("./component/WorkWithUs"));
// const Comprobantes = lazy(() => import("./component/comprobantes/Comprobantes"));
// const PortalEmpleados = lazy(() => import("./component/portal empleados/PortalEmpleados"));

function App() {
  // Obtener estados y funciones del contexto
  const {
    language,
    setLanguage,
    productid,
    setProductid,
    content,
    ArticleId,
    setArticleId,
    articlesInfo,
    showModalContact,
    setShowModalContact,
    selectedLink,
    setSelectedLink,
    links,
  } = useAppContext();

  return (
    <div className="App">
      <button 
        className="btncontacthp" 
        onClick={() => setShowModalContact(true)}
      >
        <i className='bx bxs-message-circle-notification bx-flip-horizontal'></i>
      </button>
      
      <Navbar 
        selectedLink={selectedLink} 
        setSelectedLink={setSelectedLink} 
        setLanguage={setLanguage} 
        language={language} 
        content={content} 
        links={links} 
      />
      
      <ModalContact
        showModalCOntact={showModalContact}
        setShowModalCOntact={setShowModalContact}
        contact={content.contactenos}
      />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                home={content.home} 
                setSelectedLink={setSelectedLink} 
                productos={content.productos} 
                setProductid={setProductid}
                productid={productid} 
                links={links}  
                contacto={content.contactenos} 
                certificaciones={content.certificaciones}
              />
            } 
          />
          <Route 
            path="/quienes-somos" 
            element={<QuienesSomos QuienesSomos={content.quienesSomos} />} 
          />
          <Route path="/instalaciones" element={<Instalaciones />} />
          <Route 
            path="/certificaciones" 
            element={<Certificaciones certificaciones={content.certificaciones} />} 
          />
          <Route 
            path="/contactenos" 
            element={<Contact contact={content.contactenos} />} 
          />
          <Route 
            path="/productos" 
            element={<Productos1 setProductid={setProductid} productos={content.productos} />} 
          />
          <Route 
            path="/FichaTecnica/:id" 
            element={
              <FichaTecnica 
                productid={productid} 
                productos={content.productos} 
                language={language} 
              />
            } 
          />
          <Route 
            path="/data" 
            element={<Datatreat content={content.datat}/>}
          />
          <Route path="/empleo" element={<DashboardEmpleos/>} />
          <Route 
            path="/articulos" 
            element={<Articles language={language} setArticleId={setArticleId}/>}
          />
          <Route 
            path="/articulos/:name" 
            element={
              <ArticleInfo 
                ArticleId={ArticleId} 
                articlesInfo={articlesInfo} 
                language={language}
              />
            }
          />
          <Route 
            path="/codigoEtica" 
            element={<EticCode code={content.etic}/>}
          />
          <Route 
            path="/eticalLine" 
            element={<Pqrs contact={content.contactenos} />} 
          />
          <Route 
            path="/team" 
            element={<Team team={content.team}/>}
          />
          <Route path="*" element={<Err404 err={content.err}/>}/>
        </Routes>
      </Suspense>
      
      <Footer content={content} links={links} language={language}/>
    </div>
  );
}

export default App;
