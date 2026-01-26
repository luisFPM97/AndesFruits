import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext.jsx";
import { HelmetProvider } from "react-helmet-async";
import { registerSW } from 'virtual:pwa-register';

// Registrar Service Worker con auto-actualización
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('Nueva versión disponible. ¿Recargar para actualizar?')) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log('App lista para funcionar offline');
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AppProvider>
          <App />
        </AppProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
