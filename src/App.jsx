import { useState } from 'react'
import './App.css'
import Home from './component/Home'
import Certificaciones from './component/Certificaciones'
import Contact from './component/Contact'
import Navbar from './component/Navbar'
import QuienesSomos from './component/QuienesSomos'
import Instalaciones from './component/Instalaciones'
import Productos from './component/Productos'
import { BrowserRouter as Router,Route, Routes  } from 'react-router-dom'



function App() {

  return (
    <div className='App'>
      <header></header>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/instalaciones" element={<Instalaciones />} />
        <Route path="/certificaciones" element={<Certificaciones />} />
        <Route path="/contactenos" element={<Contact />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
      <footer>
        <span>© 2021 Copyright: Andes Fruits</span>
      </footer>
    </div>
  )
}

export default App
