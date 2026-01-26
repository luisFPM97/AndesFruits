import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import data from '../data.json';
import articles from '../articles.json';

// Crear el contexto
const AppContext = createContext();

// Hook personalizado para usar el contexto fácilmente
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe ser usado dentro de un AppProvider');
  }
  return context;
};

// Provider del contexto
export const AppProvider = ({ children }) => {
  const location = useLocation();

  // Estados globales
  const [language, setLanguage] = useState('en');
  const [productid, setProductid] = useState(0);
  const [content, setContent] = useState(data[language]);
  const [ArticleId, setArticleId] = useState(0);
  const [articlesInfo] = useState(articles);
  const [showModalContact, setShowModalContact] = useState(false);

  // Links de navegación
  const links = [
    { path: '/', label: content.home.title, icon: 'bx bx-buildings' },
    { path: '/quienes-somos', label: content.quienesSomos.title, icon: 'bx bx-lemon' },
    { path: '/productos', label: content.productos.title, icon: 'bx bx-medal' },
    { path: '/contactenos', label: content.contactenos.title, icon: 'bx bx-user' },
    { path: '/certificaciones', label: content.certificaciones.title, icon: 'bx bx-certificate' },
  ];

  const [selectedLink, setSelectedLink] = useState(links[0]);

  // Actualizar contenido cuando cambia el idioma
  useEffect(() => {
    if (data) {
      setContent(data[language]);
    }
  }, [language]);

  // Actualizar link seleccionado basado en la ruta actual
  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const isFichaTecnica = pathSegments[1] === 'FichaTecnica';
    
    if (isFichaTecnica) {
      setSelectedLink(links[2]); // Productos
    } else {
      const currentLink = links.find(link => link.path === location.pathname);
      if (currentLink) {
        setSelectedLink(currentLink);
      }
    }
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Valor del contexto
  const value = {
    // Estados
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
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
