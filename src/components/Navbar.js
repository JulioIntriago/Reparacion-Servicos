import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú hamburguesa
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <h2>Fixie</h2>
        </Link>
      </div>
      {/* Menú de enlaces, visible en dispositivos grandes y controlado por el menú hamburguesa en dispositivos pequeños */}
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#features">Características</a></li>
          <li><a href="#pricing">Precios</a></li>
          <li><Link to="/login">Iniciar sesión</Link></li>
          <li><Link to="/register" className="register-button">Regístrate</Link></li>
        </ul>
      </div>
      {/* Menú hamburguesa para pantallas pequeñas */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
