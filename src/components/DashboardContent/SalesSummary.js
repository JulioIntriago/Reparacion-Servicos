import React from 'react';

const SalesSummary = () => {
  return (
    <div className="sales-summary">
      <h3>Ventas: $0.00</h3>
      <h3>Finalizados: 0</h3>

      <div className="time-buttons">
        <button className="active">Hoy</button>
        <button>Semana</button>
        <button>Mes</button>
      </div>

      <button className="close-day-button">Cerrar Día</button>
    </div>
  );
};

export default SalesSummary;
