import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a separate CSS file for header styles

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    const navUl = document.querySelector('nav ul');
    const menuToggle = document.getElementById('menu-toggle');
    navUl.classList.toggle('open');
    menuToggle.classList.toggle('active');
  };

  return (
    <header>
      <div className="container">
        <Link to="/Inicio">
          <img src="Imagenes/Logo ONU.png" alt="Logo MNU" className="logo" />
        </Link>
        <nav>
          <ul>
            <li><Link to="/Inicio">Inicio</Link></li>
            <li><Link to="/Informacion">Información</Link></li>
            <li><Link to="/Historia">Historia</Link></li>
            <li><Link to="/Modelo">Modelo 2025</Link></li>
            <li><Link to="/MapaParticipantes">Paises</Link></li>
            <li><Link to="/Contacto">Contacto</Link></li>
          </ul>
        </nav>
        <button id="menu-toggle" className="menu-toggle" aria-label="Abrir menú" onClick={handleMenuToggle}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;