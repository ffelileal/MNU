// src/components/Bienvenida.jsx
import React from "react";

const Bienvenida = ({ onCerrar }) => (
  <div style={{
    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex", justifyContent: "center", alignItems: "center",
    zIndex: 9999,
  }}>
    <div style={{
      background: "#fff",
      padding: "2rem",
      borderRadius: "8px",
      maxWidth: "400px",
      textAlign: "center",
      color: "#215c5c",
      boxShadow: "0 4px 12px rgba(33,92,92,0.1)"
    }}>
      <h2>¡Bienvenidos al Modelo de Naciones Unidas!</h2>
      <p style={{ marginTop: "1rem", lineHeight: "1.4", fontSize: "1rem" }}>
        Es un honor recibirlos a todos en esta edición de nuestro Modelo de Naciones Unidas. Estamos aquí para facilitar un espacio de diálogo constructivo y enriquecedor. Si durante la jornada surgen dudas o necesitan cualquier tipo de apoyo, por favor, acérquense a los organizadores. ¡Estamos aquí para ayudarlos a tener una experiencia exitosa y memorable!
      </p>
      <button
        onClick={onCerrar}
        style={{
          marginTop: "1.5rem",
          padding: "0.6rem 1.2rem",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#215c5c",
          color: "#fff",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "1rem"
        }}
      >
        Comenzar
      </button>
    </div>
  </div>
);

export default Bienvenida;
