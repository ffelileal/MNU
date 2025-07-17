import React from 'react';
import { motion } from 'framer-motion';

const Informacion = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <section className="hero" id="inicio">
        <h1>Modelo de Naciones Unidas para Hernando y Región</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a href="../Inicio/index.html">
            <img src="/Imagenes/Logo ONU.png" alt="MNU Logo" className="hero-logo" />
          </a>
        </div>
        <p>13 y 14 de septiembre 2025 - Hernando, Córdoba</p>
      </section>

      <section id="sobre">
        <h2>🌎🌍🌏 Información para delegados 🌎🌍🌏</h2>
        <p style={{ textAlign: 'center', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          🏛️ <strong>Debates reglamentarios, soluciones globales</strong><br />
          Los tópicos de esta edición se rigen por el <a href="[URL_DEL_REGLAMENTO]" target="_blank" rel="noopener noreferrer" style={{ color: '#215c5c', fontWeight: 600 }}>Reglamento del Modelo ONU 2025</a>, garantizando un espacio de discusión estructurado, inclusivo y alineado con los protocolos diplomáticos internacionales. Abordaremos temas críticos mediante <strong>procedimientos formales</strong>, respeto a la normativa y búsqueda de consensos.
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem auto', maxWidth: 600, textAlign: 'left', borderLeft: '3px solid #215c5c', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>🔹 <strong>Asamblea General:</strong> <em>Protocolo de debate:</em> Intervenciones de 90 segundos · 2 rondas de preguntas. Consumismo y contaminación global · Derechos de las niñeces</li>
          <li style={{ marginBottom: '1rem' }}>🔹 <strong>ECOSOC:</strong> <em>Protocolo de debate:</em> Moderación por bloques · Documentos de posición obligatorios. Bienestar social vs. privatización · Recursos naturales como mercancía</li>
          <li style={{ marginBottom: '1rem' }}>🔹 <strong>Cumbre de Embajadores:</strong> <em>Protocolo de debate:</em> Negociación directa · Resoluciones consensuadas. Presos políticos y justicia</li>
          <li>🔹 <strong>Consejo de Seguridad:</strong> <em>Protocolo de debate:</em> Veto aplicable · Urgencia en mociones. Apoyo internacional en conflictos · Deportación y seguridad</li>
        </ul>

        <blockquote style={{ borderLeft: '4px solid #215c5c', paddingLeft: '1rem', margin: '2rem auto', maxWidth: 600, fontStyle: 'italic', color: '#555' }}>
          📜 <strong>"La diplomacia se construye sobre reglas, pero la innovación nace de su interpretación."</strong> — Adaptado del Artículo 1 del Reglamento ONU.
        </blockquote>
      </section>

      {/* Sección de reglamentos */}
      <div className="reglamentos-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', margin: '2rem 0' }}>
        <div className="reglamento-card" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(33,92,92,0.07)', padding: '1rem', textAlign: 'center', width: 220 }}>
          <img src="/Imagenes/reglamento-cumbre.jpg" alt="Reglamento Cumbre de Embajadores" style={{ width: '100%', borderRadius: '8px' }} />
          <a href="/reglamento-cumbre.pdf" target="_blank" rel="noopener noreferrer">Reglamento</a>
          <div className="sub-link">Cumbre de Embajadores</div>
        </div>
        <div className="reglamento-card" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(33,92,92,0.07)', padding: '1rem', textAlign: 'center', width: 220 }}>
          <img src="/Imagenes/reglamento-asamblea.jpg" alt="Reglamento Asamblea General" style={{ width: '100%', borderRadius: '8px' }} />
          <a href="/reglamento-asamblea.pdf" target="_blank" rel="noopener noreferrer">Reglamento</a>
          <div className="sub-link">Asamblea General</div>
        </div>
        <div className="reglamento-card" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(33,92,92,0.07)', padding: '1rem', textAlign: 'center', width: 220 }}>
          <img src="/Imagenes/reglamento-ecosoc.jpg" alt="Reglamento ECOSOC" style={{ width: '100%', borderRadius: '8px' }} />
          <a href="/reglamento-ecosoc.pdf" target="_blank" rel="noopener noreferrer">Reglamento</a>
          <div className="sub-link">ECOSOC</div>
        </div>
        <div className="reglamento-card" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(33,92,92,0.07)', padding: '1rem', textAlign: 'center', width: 220 }}>
          <img src="/Imagenes/reglamento-cs.jpg" alt="Reglamento Consejo de Seguridad" style={{ width: '100%', borderRadius: '8px' }} />
          <a href="/reglamento-cs.pdf" target="_blank" rel="noopener noreferrer">Reglamento</a>
          <div className="sub-link">Consejo de seguridad</div>
        </div>
      </div>

      <div className="seccion-formulario" style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="https://forms.gle/tu-formulario" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#215c5c', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', marginBottom: '1rem' }}>
          CLICK AQUÍ
        </a>
        <p>
          Si tenés consultas sobre el Reglamento. Accederás al formulario donde podrás enviarlas.<br />
          Las mismas serán resueltas en un encuentro virtual sincrónico que tendrá lugar entre el 9 y el 13 de Junio, en horario también a definir.
        </p>
      </div>
    </motion.main>
  );
};

export default Informacion;
