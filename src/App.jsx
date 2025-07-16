import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import Inicio from './pages/Inicio';
import Informacion from './pages/Informacion';
import Historia from './pages/Historia';
import Modelo from './pages/Modelo';
import Galeria from './pages/Galeria';
import Contacto from './pages/Contacto';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Informacion" element={<Informacion />} />
          <Route path="/Historia" element={<Historia />} />
          <Route path="/Modelo" element={<Modelo />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;