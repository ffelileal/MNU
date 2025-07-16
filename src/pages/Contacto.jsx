import React from 'react';
import Footer from '../components/Footer';

const Contacto = () => {
  return (
    <main>
      <section
        id="contacto-principal"
        style={{
          maxWidth: 500,
          margin: '2rem auto',
          background: '#f8fdfd',
          borderRadius: '12px',
          boxShadow: '0 2px 12px rgba(33,92,92,0.07)',
          padding: '2rem',
        }}
      >
        <h1 style={{ textAlign: 'center', color: '#215c5c', marginBottom: '1rem' }}>
          📬 Contacto
        </h1>
        <p style={{ textAlign: 'center', color: '#215c5c', marginBottom: '2rem' }}>
          ¿Tenés dudas, sugerencias o querés sumarte? <br />
          Escribinos y te responderemos a la brevedad.
        </p>
        <form
          id="form-contacto"
          action="https://formsubmit.co/felileal25@gmail.com"
          method="POST"
          autoComplete="off"
          style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
        >
          <div>
            <label htmlFor="nombre" style={{ fontWeight: 600, color: '#215c5c' }}>
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              style={{
                width: '100%',
                padding: '0.6rem',
                borderRadius: '6px',
                border: '1px solid #b2d8d8',
              }}
            />
          </div>
          <div>
            <label htmlFor="email" style={{ fontWeight: 600, color: '#215c5c' }}>
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              style={{
                width: '100%',
                padding: '0.6rem',
                borderRadius: '6px',
                border: '1px solid #b2d8d8',
              }}
            />
          </div>
          <div>
            <label htmlFor="mensaje" style={{ fontWeight: 600, color: '#215c5c' }}>
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              required
              style={{
                width: '100%',
                padding: '0.6rem',
                borderRadius: '6px',
                border: '1px solid #b2d8d8',
              }}
            ></textarea>
          </div>
          {/* Campo honeypot para evitar spam */}
          <input type="text" name="_honey" style={{ display: 'none' }} />
          {/* Redirección tras enviar */}
          <input type="hidden" name="_next" value="https://tu-dominio.com/contacto/gracias.html" />
          {/* Desactiva captcha de Formsubmit (opcional) */}
          <input type="hidden" name="_captcha" value="false" />
          <button
            type="submit"
            style={{
              background: '#215c5c',
              color: '#fff',
              fontWeight: 700,
              border: 'none',
              borderRadius: '6px',
              padding: '0.8rem',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
          >
            Enviar mensaje
          </button>
        </form>
        <div
          id="contacto-info"
          style={{
            marginTop: '2.5rem',
            textAlign: 'center',
            color: '#215c5c',
            fontSize: '1rem',
          }}
        >
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Email:</strong>{' '}
            <a href="mailto:example@gmail.com" style={{ color: '#215c5c', textDecoration: 'underline' }}>
              example@gmail.com
            </a>
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Instagram:</strong>{' '}
            <a
              href="https://instagram.com/example"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#215c5c', textDecoration: 'underline' }}
            >
              @example
              
            </a>
          </div>
          <div>
            <strong>Teléfono:</strong> 123-456-7890
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contacto;