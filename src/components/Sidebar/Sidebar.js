// src/components/Sidebar/Sidebar.js
import React from 'react';
import { FaBox, FaUsers, FaTruck, FaCogs, FaMoneyBillAlt, FaRegClipboard, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <ul>
        <li>
          <Link to="/dashboard">
            <FaRegClipboard />
            <span className="sidebar-text">Inicio</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/ordenes">
            <FaBox />
            <span className="sidebar-text">Órdenes</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/inventario">
            <FaBox />
            <span className="sidebar-text">Inventario</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/clientes">
            <FaUsers />
            <span className="sidebar-text">Clientes</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/proveedores">
            <FaTruck />
            <span className="sidebar-text">Proveedores</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/servicios">
            <FaCogs />
            <span className="sidebar-text">Servicios</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/finanzas">
            <FaMoneyBillAlt />
            <span className="sidebar-text">Finanzas</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/tutoriales">
            <FaUserFriends />
            <span className="sidebar-text">Tutoriales</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
