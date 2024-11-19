import React from 'react';
import { FaUserCircle, FaTasks, FaBoxOpen } from 'react-icons/fa'; // Iconos

const StatusCards = () => {
  // Obtener fecha estática o dinámica
  const fechaActual = '12/10/2024'; 

  return (
    <div className="status-section">
      {/* Mostrar fecha y saludo */}
      <div className="status-header">
        <p>{fechaActual}</p>
        <p>Saludos, julio</p>
      </div>

      {/* Tarjetas de estado */}
      <div className="status-cards">
        <div className="status-card">
          <FaUserCircle className="status-icon" />
          <p>0 Por Asignar</p>
        </div>
        <div className="status-card">
          <FaTasks className="status-icon" />
          <p>0 En Proceso</p>
        </div>
        <div className="status-card">
          <FaBoxOpen className="status-icon" />
          <p>0 Por Entregar</p>
        </div>
      </div>
    </div>
  );
};

export default StatusCards;
