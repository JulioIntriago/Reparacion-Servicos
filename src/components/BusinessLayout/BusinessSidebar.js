// src/components/BusinessLayout/BusinessSidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBuilding, FaCogs, FaUserFriends, FaMapMarkerAlt, FaBell, FaClipboard, FaFileImport, FaLock, FaUser } from 'react-icons/fa';
import './BusinessSidebar.css';

const BusinessSidebar = () => {
  return (
    <div className="business-sidebar">
      <h3>Administrar Mi Negocio</h3>
      <NavLink to="/business-settings" activeClassName="active"><FaBuilding /> Mi Negocio</NavLink>
      <NavLink to="/business-settings/membership" activeClassName="active"><FaCogs /> Mi Membresía</NavLink>
      <NavLink to="/business-settings/users" activeClassName="active"><FaUserFriends /> Usuarios y Permisos</NavLink>
      <NavLink to="/business-settings/branches" activeClassName="active"><FaMapMarkerAlt /> Sucursales</NavLink>
      <NavLink to="/business-settings/notifications" activeClassName="active"><FaBell /> Notificaciones</NavLink>
      <NavLink to="/business-settings/templates" activeClassName="active"><FaClipboard /> Políticas y Plantillas</NavLink>
      <NavLink to="/business-settings/import-clients" activeClassName="active"><FaFileImport /> Importar Clientes</NavLink>
      <NavLink to="/business-settings/import-products" activeClassName="active"><FaFileImport /> Importar Productos</NavLink>
      <NavLink to="/business-settings/account" activeClassName="active"><FaUser /> Mis Datos</NavLink>
      <NavLink to="/business-settings/security" activeClassName="active"><FaLock /> Seguridad</NavLink>
    </div>
  );
};

export default BusinessSidebar;
