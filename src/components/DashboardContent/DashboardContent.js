import React from 'react';
import StatusCards from './StatusCards';
import OrdersChart from './OrdersChart';
import SalesSummary from './SalesSummary';
import OrdersTable from './OrdersTable';
import './DashboardContent.css';

const DashboardContent = () => {
  return (
    <div className="dashboard-content">
      {/* Tarjetas de Estado */}
      <StatusCards />

      {/* Sección de gráfico y ventas */}
      <div className="chart-and-summary">
        <div className="chart-container">
          <OrdersChart />
        </div>
        <div className="sales-summary-container">
          <SalesSummary />
        </div>
      </div>

      {/* Tabla de Órdenes */}
      <OrdersTable />
    </div>
  );
};

export default DashboardContent;
