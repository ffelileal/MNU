import React from 'react';

const Modelo = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="inicio">
        <h1>Modelo de Naciones Unidas para Hernando y Región</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/Imagenes/Logo ONU.png" alt="MNU Logo" className="hero-logo" />
        </div>
        <p>13 y 14 de septiembre 2025 - Hernando, Córdoba</p>
      </section>

      {/* Tópicos a tratar */}
      <section id="sobre">
        <h2>🌎🌍🌏 Tópicos a tratar 🌎🌍🌏</h2>
        <p>
          Explora los desafíos más urgentes de nuestro tiempo a través de debates dinámicos y diplomáticos. En esta edición, abordaremos temas críticos que demandan cooperación internacional, innovación y compromiso con los derechos humanos y el desarrollo sostenible.
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0 1rem 0', textAlign: 'left', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
          <li>🔹 <strong>Asamblea General:</strong> Consumismo y contaminación global · Derechos de las niñeces</li>
          <li>🔹 <strong>ECOSOC:</strong> Bienestar social vs. privatización · Recursos naturales como mercancía</li>
          <li>🔹 <strong>Cumbre de Embajadores:</strong> Presos políticos y justicia</li>
          <li>🔹 <strong>Consejo de Seguridad:</strong> Apoyo internacional en conflictos · Deportación y seguridad</li>
        </ul>
        <blockquote style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          📚 "El cambio comienza con el diálogo."
        </blockquote>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a
            href="https://drive.google.com/file/d/1_CLcTs7Tg3SvqGA8i5clSENXLIR-8p--/view"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#215c5c',
              color: '#fff',
              padding: '0.8rem 2rem',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(33,92,92,0.10)',
              transition: 'background 0.2s',
            }}
          >
            📂 Ver archivo de tópicos
          </a>
          <br /><br />
          <a
            href="/PDFS/TÓPICOS 2025.pdf"
            download
            style={{
              display: 'inline-block',
              backgroundColor: '#215c5c',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            📥 Descargar archivo de tópicos
          </a>
        </div>
      </section>

      {/* Cumbre de Embajadores */}
      <section id="crecer">
        <h2>🕊️ Cumbre de Embajadores</h2>
        <h3>Presos políticos: ¿justicia o control de la disidencia?</h3>
        <p>
          En muchas partes del mundo, personas son encarceladas no por delitos reales, sino por sus ideas políticas, su activismo o su trabajo periodístico. Este tópico invita a debatir si estos arrestos protegen el orden público o si violan derechos fundamentales como la libertad de expresión y el acceso a la justicia.
        </p>
        <blockquote>
          "La libertad de expresión y la democracia se ponen en jaque cuando se encarcela a las ideas."
        </blockquote>
      </section>

      {/* Asamblea General - Consumismo */}
      <section id="asamblea">
        <h2>🌍 Asamblea General</h2>
        <h3>Consumismo y contaminación global: ¿cómo equilibrar crecimiento y sostenibilidad?</h3>
        <p>
          El consumo excesivo de bienes y servicios acelera la contaminación, agota recursos y agrava la desigualdad. Este tópico invita a debatir qué modelos económicos podrían proteger el planeta sin frenar el desarrollo.
        </p>
        <blockquote>
          "Contaminar al producir, contaminar al desechar. El consumismo es el combustible de un juego en el que se pierde en cada estación."
        </blockquote>
      </section>

      {/* Asamblea General - Niñeces */}
      <section id="ninez">
        <h2>👶 Asamblea General</h2>
        <h3>Las niñeces y sus derechos: ¿qué rol deben cumplir los Estados?</h3>
        <p>
          Millones de niños y niñas viven sin acceso a educación, salud ni protección. ¿Hasta qué punto los gobiernos son responsables por esta realidad? Este debate propone revisar la acción —o inacción— estatal frente a las infancias vulneradas.
        </p>
        <blockquote>
          "Niñeces, en plural. No todos los niños y niñas cuentan con el cumplimiento de todos los derechos consagrados por la ONU."
        </blockquote>
      </section>

      {/* ECOSOC - Bienestar social */}
      <section id="ecosoc">
        <h2>🏛️ Consejo Económico y Social (ECOSOC)</h2>
        <h3>¿Hasta dónde puede llegar el Estado? El desafío del bienestar social</h3>
        <p>
          Vivienda, salud, agua y electricidad siguen siendo inaccesibles para millones. ¿Debe garantizarlo el Estado o el mercado? El debate se centra en el rol gubernamental para asegurar una vida digna.
        </p>
        <blockquote>
          "Los gobiernos deben ser garantes de que las poblaciones puedan tener acceso a condiciones básicas para una vida digna."
        </blockquote>
      </section>

      {/* ECOSOC - Recursos naturales */}
      <section id="recursos">
        <h2>💧 Consejo Económico y Social (ECOSOC)</h2>
        <h3>¿De bien común a mercancía? El debate por los recursos naturales</h3>
        <p>
          Petróleo, agua y minerales son esenciales para el desarrollo. ¿Deben pertenecer a todos o a empresas privadas? Este tópico discute soberanía, desigualdad y sostenibilidad.
        </p>
        <blockquote>
          "Los recursos naturales son fundamentales para absolutamente todas las sociedades."
        </blockquote>
      </section>

      {/* Consejo de Seguridad - Guerra */}
      <section id="guerra">
        <h2>⚔️ Consejo de Seguridad</h2>
        <h3>Héroes o cómplices: el dilema del apoyo internacional en la guerra</h3>
        <p>
          El apoyo militar o económico puede salvar vidas o alimentar conflictos. ¿Las alianzas internacionales garantizan paz o perpetúan la violencia? Un debate sobre la verdadera intención detrás del respaldo en tiempos de guerra.
        </p>
        <blockquote>
          "La violencia como manera de resolver conflictos suele contar con aliados que, desde la distancia, avalan el uso de las armas."
        </blockquote>
      </section>

      {/* Consejo de Seguridad - Deportación */}
      <section id="deportacion">
        <h2>✈️ Consejo de Seguridad</h2>
        <h3>La deportación como control de la criminalidad terrorista</h3>
        <p>
          La deportación se presenta como estrategia de seguridad, pero también como violación de derechos humanos. ¿Hasta dónde se justifica esta medida en nombre de la justicia y el orden interno?
        </p>
        <blockquote>
          "Entre la protección de la seguridad interior y el respeto de los derechos humanos: fuerte debate para la comunidad internacional."
        </blockquote>
      </section>
    </main>
  );
};

export default Modelo;