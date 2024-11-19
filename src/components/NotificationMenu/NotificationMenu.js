// src/components/NotificationMenu/NotificationMenu.js
import React, { useState, useRef, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';
import './NotificationMenu.css';

const NotificationMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
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
    <div className="notification-menu" ref={menuRef}>
      <FaBell className="icon" onClick={toggleDropdown} />
      {isDropdownOpen && (
        <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
          <div className="menu-header">
            <span>Notificaciones</span>
            <button className="clear-icon">Limpiar</button>
          </div>
          <div className="notification-item">Notificación 1</div>
          <div className="notification-item">Notificación 2</div>
          <div className="notification-item">Notificación 3</div>
        </div>
      )}
    </div>
  );
};

export default NotificationMenu;
