// src/pages/OrdersPage/OrdersPage.js
import React, { useState } from 'react';
import { FaPlusCircle, FaSearch } from 'react-icons/fa';
import './OrdersPage.css';

const OrdersPage = () => {
  const [activeFilter, setActiveFilter] = useState('todas');

  const filters = [
    { label: 'Todas', value: 'todas' },
    { label: 'Por asignar', value: 'por-asignar' },
    { label: 'En proceso', value: 'en-proceso' },
    { label: 'Por entregar', value: 'por-entregar' },
    { label: 'Entregado', value: 'entregado' },
    { label: 'Rechazado', value: 'rechazado' },
  ];

  const ordersData = [
    { id: 'ORD-0001', fecha: '2024-10-01', cliente: 'Juan Pérez', status: 'Por asignar', modelo: 'A1', prioridad: 'Alta' },
    { id: 'ORD-0002', fecha: '2024-10-02', cliente: 'Ana López', status: 'En proceso', modelo: 'B2', prioridad: 'Media' },
  ];

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h2>Orden de Servicio</h2>
        <div className="order-summary">
          <span>Reparaciones <span className="order-count">{ordersData.length}</span></span>
        </div>
      </div>

      <div className="order-actions">
        <div className="add-device">
          <FaPlusCircle /> Agregar Dispositivo
        </div>
        <div className="search-client">
          <FaSearch />
          <input type="text" placeholder="Buscar clientes" />
        </div>
      </div>

      <div className="filters">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Orden</th>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Status</th>
            <th>Modelo</th>
            <th>Prioridad</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.fecha}</td>
              <td>{order.cliente}</td>
              <td>{order.status}</td>
              <td>{order.modelo}</td>
              <td>{order.prioridad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
