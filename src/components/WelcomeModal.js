// src/components/WelcomeModal.js
import React from 'react';
import './WelcomeModal.css'; // Asegúrate de crear estilos específicos para el modal

const WelcomeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Bienvenido a Samii</h2>
        <img src="/path/to/robot-image.png" alt="Bienvenida Robot" className="welcome-image" />
        <p>El primer software para técnicos hecho por un técnico.</p>
        <button className="primary-button" onClick={onClose}>Crear mi Primer Orden</button>
      </div>
    </div>
  );
};

export default WelcomeModal;
