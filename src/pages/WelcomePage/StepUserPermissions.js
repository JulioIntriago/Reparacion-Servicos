// src/pages/WelcomePage/StepUserPermissions.js
import React from 'react';
import './StepUserPermissions.css'; // Asegúrate de crear y utilizar este archivo CSS

const StepUserPermissions = ({ onContinue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onContinue();
  };

  return (
    <div className="step-container">
      <h2>Usuarios y Permisos</h2>
      <form onSubmit={handleSubmit} className="permissions-form">
        {/* Campo de invitación por correo */}
        <label>Enviar invitación por correo</label>
        <div className="invite-section">
          <input type="email" placeholder="Correo electrónico" required />
          <button type="button" className="send-button">Enviar</button>
        </div>
      </form>
      {/* Botón de continuar en la esquina superior derecha */}
      <button className="continue-button" onClick={onContinue}>
        Continuar
      </button>
    </div>
  );
};

export default StepUserPermissions;
