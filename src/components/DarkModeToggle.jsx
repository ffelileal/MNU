import React, { useEffect } from 'react';

const DarkModeToggle = () => {
  useEffect(() => {
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
      toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    }
  });

  const handleToggle = () => {
    document.body.classList.toggle('dark-mode');
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
      toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    }
  };

  return (
    <button
      id="darkModeToggle"
      className="darkmode-fab"
      aria-label="Modo oscuro"
      onClick={handleToggle}
    >
      🌙
    </button>
  );
};

export default DarkModeToggle;