// src/components/DashboardLayout/DashboardLayout.js
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'; // Importamos useNavigate para redirección
import Sidebar from '../Sidebar/Sidebar';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './DashboardLayout.css';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate(); // Hook para la redirección

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    // Eliminar el token de localStorage
    localStorage.removeItem('token');
    // Redirigir al usuario a la página de inicio de sesión
    navigate('/login');
  };

  return (
    <div className="dashboard-layout">
      <DashboardHeader toggleSidebar={toggleSidebar} />

      <div className="main-content-with-sidebar">
        <Sidebar isOpen={isSidebarOpen} />

        <div className={`main-content ${isSidebarOpen ? '' : 'sidebar-closed'}`}>
          <Outlet /> {/* Renderiza las rutas internas */}
        </div>
      </div>

  
    </div>
  );
};

export default DashboardLayout;
