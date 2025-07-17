import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import Inicio from './pages/Inicio';
import Informacion from './pages/Informacion';
import Historia from './pages/Historia';
import Modelo from './pages/Modelo';
import MapaParticipantes from './pages/MapaParticipantes';
import Contacto from './pages/Contacto';
import './styles.css';

// Este componente envuelve las rutas con animaciones
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Inicio />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Informacion" element={<Informacion />} />
        <Route path="/Historia" element={<Historia />} />
        <Route path="/Modelo" element={<Modelo />} />
        <Route path="/MapaParticipantes" element={<MapaParticipantes />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <DarkModeToggle />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
};

export default App;

