import React, { useState } from 'react';
import '../assets/styles/Navbar.css'; // Ajustar la ruta a la ubicación correcta

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Fixie</h2>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#features">Características</a></li>
          <li><a href="#pricing">Precios</a></li>
          <li><a href="#login">Iniciar sesión</a></li>
          <li><button className="register-button">Regístrate</button></li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
