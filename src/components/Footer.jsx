import React from 'react';

const Footer = () => {
  return (
    <footer id="contacto" style={{ borderTop: '4px solid #215c5c', boxShadow: '0 -2px 12px rgba(33,92,92,0.10)', position: 'relative' }}>
      <div className="footer-container">
        <div>
          <img src="Imagenes/MNU Hernando.png" alt="Logo MNU" />
          <p style={{ fontWeight: 700 }}>Modelo de Naciones Unidas para Hernando y Región</p>
          <p>
            <a href="mailto:example@gmail.com" style={{ textDecoration: 'underline', color: 'inherit' }}>example@gmail.com</a><br />
            Instagram: <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>@example</a><br />
            Tel: 353 4788923
          </p>
        </div>
        <div>
          <img src="Imagenes/LogoIDC.png" alt="Escudo IDC" />
          <p style={{ fontWeight: 700 }}>Instituto Divino Corazón</p>
          <p>
            25 de Mayo 100<br />
            Hernando, X5929<br />
            Córdoba, Argentina<br />
            Tel: 353 4960953<br />
            <a href="mailto:idcsecundario@gmail.com" style={{ textDecoration: 'underline', color: 'inherit' }}>idcsecundario@gmail.com</a><br />
            Instagram: <a href="https://instagram.com/divinocorazon.hernando" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>@divinocorazon.hernando</a>
          </p>
        </div>
        <div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.0222590902476!2d-63.734865224555335!3d-32.426874473811935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cdaf256b5a5327%3A0x2b599a3cc80f53fe!2sInstituto%20Divino%20Coraz%C3%B3n!5e0!3m2!1ses-419!2sar!4v1749608315142!5m2!1ses-419!2sar" 
            width="100%" height="250" style={{ border: 0, maxWidth: '400px' }} allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div style={{ width: '100%', textAlign: 'center', marginTop: '2rem', color: '#215c5c', fontSize: '0.95rem' }}>
          © 2025 Modelo de Naciones Unidas para Hernando y Región. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;