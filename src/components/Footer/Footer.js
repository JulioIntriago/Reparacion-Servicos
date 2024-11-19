// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Importar íconos de redes sociales

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0E2954',
      color: '#fff',
      padding: '1.5rem 2rem',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        flexWrap: 'wrap'
      }}>
        <p>&copy; 2024 Fixie. Todos los derechos reservados.</p>
        <div style={{
          display: 'flex',
          gap: '1rem'
        }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}>
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}>
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
