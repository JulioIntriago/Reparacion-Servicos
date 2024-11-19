// src/components/DashboardHeader/DashboardHeader.js
import React from 'react';
import { FaBars } from 'react-icons/fa';
import AddMenu from '../AddMenu/AddMenu';
import UserMenu from '../UserMenu/UserMenu';
import NotificationMenu from '../NotificationMenu/NotificationMenu';
import './DashboardHeader.css';

const DashboardHeader = ({ toggleSidebar }) => {
  return (
    <header className="dashboard-header">
      <div className="left-section">
        <button className="menu-btn" onClick={toggleSidebar}>
          <FaBars /> {/* Botón hamburguesa */}
        </button>
        <span className="logo">Fixie</span>
      </div>
      <div className="search-section">
        <input type="text" placeholder="Buscar en Órdenes, Clientes, IMEI" />
      </div>
      <div className="right-section">
        <AddMenu /> {/* Menú para el botón "+" */}
        <NotificationMenu /> {/* Menú de notificaciones */}
        <UserMenu /> {/* Menú de usuario con las opciones */}
      </div>
    </header>
  );
};

export default DashboardHeader;
