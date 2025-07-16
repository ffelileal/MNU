import React from 'react';
import Footer from '../components/Footer';

const Historia = () => {
  return (
    <main>
      <section className="hero" id="inicio">
        <h1>Modelo de Naciones Unidas para Hernando y Región</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/Imagenes/Logo ONU.png" alt="MNU Logo" className="hero-logo" />
        </div>
        <p>13 y 14 de septiembre 2025 - Hernando, Córdoba</p>
      </section>

      <section className="historia-section">
        <h1 className="historia-title">
          🌍 Historia del Modelo de Naciones Unidas en Hernando
        </h1>
        <p className="historia-intro">
          El Modelo de Naciones Unidas (MNU) en Hernando comenzó en el año 2000, como una iniciativa pionera en la región para acercar a los jóvenes a la diplomacia, el debate y la cooperación internacional. Desde entonces, el evento ha evolucionado y se ha consolidado como un espacio de formación ciudadana, donde estudiantes de diferentes instituciones pueden experimentar el rol de delegados, embajadores y autoridades de la ONU, debatiendo sobre los grandes desafíos globales.
        </p>
        <div className="historia-cards">
          <div className="historia-card">
            <h2>📅 Orígenes</h2>
            <p>
              El primer MNU en Hernando se realizó en 2000, impulsado por docentes visionarios y estudiantes del Instituto Divino Corazón. Inspirados por la necesidad de crear espacios de debate y participación, el evento reunió a jóvenes de distintas escuelas para simular sesiones de la ONU y abordar problemáticas globales. Con el paso de los años, la propuesta fue creciendo y sumando el apoyo de la comunidad educativa y autoridades locales.
            </p>
          </div>
          <div className="historia-card">
            <h2>🌱 Crecimiento</h2>
            <p>
              A lo largo de más de dos décadas, el MNU Hernando se ha transformado en un referente regional. Se han sumado nuevas instituciones, tanto de Hernando como de localidades vecinas, y se han fortalecido los comités principales: Asamblea General, Consejo de Seguridad, ECOSOC y la Cumbre de Embajadores. La participación activa de exalumnos y voluntarios ha permitido profesionalizar la organización y enriquecer la experiencia de los delegados, promoviendo el trabajo en equipo, la innovación y el compromiso social.
            </p>
          </div>
          <div className="historia-card">
            <h2>🏆 Impacto</h2>
            <p>
              Más de 1000 jóvenes han pasado por el MNU Hernando, desarrollando habilidades de oratoria, negociación, liderazgo y pensamiento crítico. Muchos de ellos han continuado su camino en espacios de participación juvenil, universidades y organizaciones sociales, llevando los valores del modelo a otros ámbitos educativos y profesionales. El MNU ha dejado una huella profunda en la comunidad, promoviendo el respeto, la tolerancia y el compromiso social.
            </p>
          </div>
        </div>
        <hr className="historia-divider" />
        <section>
          <h2 className="historia-subtitle">Temáticas destacadas a lo largo de los años</h2>
          <ul className="historia-list">
            <li>🔹 Derechos Humanos y equidad de género</li>
            <li>🔹 Cambio climático y desarrollo sostenible</li>
            <li>🔹 Conflictos internacionales y resolución pacífica</li>
            <li>🔹 Educación y acceso a nuevas tecnologías</li>
            <li>🔹 Salud global y pandemias</li>
            <li>🔹 Cooperación regional y alianzas estratégicas</li>
            <li>🔹 Migraciones y crisis humanitarias</li>
            <li>🔹 Desarme nuclear y seguridad internacional</li>
            <li>🔹 Infancia, adolescencia y derechos de los niños</li>
            <li>🔹 Economía global y reducción de la pobreza</li>
            <li>🔹 Diversidad cultural y diálogo interreligioso</li>
          </ul>
        </section>
        <hr className="historia-divider" />
        <section>
          <h2 className="historia-subtitle">¿Por qué participar?</h2>
          <ul className="historia-list">
            <li>🌟 Desarrollar habilidades de liderazgo, negociación y trabajo en equipo.</li>
            <li>🌟 Mejorar la oratoria, la argumentación y la capacidad de escucha.</li>
            <li>🌟 Conocer nuevas realidades, culturas y perspectivas globales.</li>
            <li>🌟 Formar parte de una red de jóvenes comprometidos con el cambio social.</li>
            <li>🌟 Vivir una experiencia única, desafiante y enriquecedora.</li>
            <li>🌟 Inspirar a otros y dejar huella en la comunidad.</li>
          </ul>
        </section>
        <hr className="historia-divider" />
        <section>
          <h2 className="historia-subtitle">Comités y órganos simulados</h2>
          <ul className="historia-list">
            <li>🌐 Asamblea General de la ONU</li>
            <li>🛡️ Consejo de Seguridad</li>
            <li>🌱 ECOSOC</li>
            <li>🤝 Cumbre de Embajadores</li>
          </ul>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Historia;