// src/pages/WelcomePage/StepPolicies.js
import React from 'react';
import './StepPolicies.css'; // Archivo CSS para estilos específicos

const StepPolicies = ({ onFinish }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onFinish();
  };

  return (
    <div className="step-container">
      <h2>Políticas y Plantillas</h2>
      <form onSubmit={handleSubmit} className="policies-form">
        {/* Editor de texto enriquecido (aquí podría ir un componente de editor si es necesario) */}
        <textarea placeholder="Escribe tus políticas aquí..." className="policies-textarea"></textarea>

        {/* Botón de finalizar */}
        <button type="submit" className="finish-button">Terminar</button>
      </form>
    </div>
  );
};

export default StepPolicies;
