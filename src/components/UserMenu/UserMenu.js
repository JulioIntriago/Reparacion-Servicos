// src/components/UserMenu/UserMenu.js
import React, { useState, useRef, useEffect } from 'react';
import { FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './UserMenu.css';

const UserMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleBusinessSettings = () => {
    navigate('/business-settings');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="user-menu" ref={menuRef}>
      <div className="user-name" onClick={toggleDropdown}>
        Julio <span className="arrow">&#9660;</span>
      </div>
      {isDropdownOpen && (
        <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
          <div className="menu-item" onClick={handleBusinessSettings}>
            <FaCog /> Administrar mi negocio
          </div>
          <div className="menu-item" onClick={handleLogout}>
            <FaSignOutAlt /> Cerrar sesión
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
