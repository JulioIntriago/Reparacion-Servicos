// src/components/BusinessLayout/BusinessHeader.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaArrowLeft } from 'react-icons/fa';
import './BusinessHeader.css';

const BusinessHeader = ({ toggleSidebar }) => {
  const navigate = useNavigate(); // Hook para navegación

  // Función para manejar el clic en el botón "Atrás"
  const handleBack = () => {
    navigate('/dashboard'); // Ajusta la ruta según tu estructura de rutas
  };

  return (
    <header className="business-header">
      <button className="menu-btn" onClick={toggleSidebar}>
        <FaBars /> {/* Botón hamburguesa */}
      </button>
      <h2>Fixme up</h2>
      <button className="back-button" onClick={handleBack}>
        <FaArrowLeft /> Atrás {/* Botón "Atrás" con icono de flecha */}
      </button>
    </header>
  );
};

export default BusinessHeader;
