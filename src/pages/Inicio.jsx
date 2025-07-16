import React from 'react';

const Inicio = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="inicio">
        <h1>Modelo de Naciones Unidas para Hernando y Región</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a href="/Inicio/index.html">
            <img src="/Imagenes/Logo ONU.png" alt="MNU Logo" className="hero-logo" />
          </a>
        </div>
        
        <p>13 y 14 de septiembre 2025 - Hernando, Córdoba</p>
      </section>

      {/* Sobre */}
      <section id="sobre">
        <h2>🌎🌍🌏 MODELO DE NACIONES UNIDAS 🌎🌍🌏</h2>
        <p>
          El Modelo de Naciones Unidas del Instituto Divino Corazón es una experiencia educativa única y transformadora, diseñada para preparar a los jóvenes ante los desafíos de un mundo dinámico y cambiante. Desde el año 2001, este simulacro combina el aprendizaje activo con los valores fundamentales de la ONU, fomentando habilidades clave como la investigación, la oratoria, la escritura diplomática y la resolución de conflictos a través del consenso.
        </p>
      </section>

      {/* Crecer */}
      <section id="crecer">
        <h2>Un espacio para crecer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisi nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Etiam ac eros nec urna dictum placerat.
        </p>
      </section>

      {/* Trayectoria */}
      <section id="trayectoria">
        <h2>Impacto y trayectoria</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non laoreet dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nec urna nec urna cursus faucibus. Nullam euismod, nisi vel consectetur cursus, nisl erat dictum enim, at cursus enim erat nec urna.
        </p>
      </section>

      {/* Escuela */}
      <section id="escuela">
        <h2>Una escuela para una nueva época</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ac sem nec urna cursus dictum. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisi nec erat.
        </p>
      </section>
    </main>
  );
};

export default Inicio;