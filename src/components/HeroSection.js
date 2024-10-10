import React from 'react';
import '../assets/styles/HeroSection.css'; // Asegúrate de tener los estilos
import heroImage from '../assets/images/fixie.svg'; // Asegúrate de que la imagen esté en esta ruta

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          El mejor software para administrar
          <span>tu taller de reparación.</span>
        </h1>
        <p className="small-text">Toma el control de tu negocio.</p>
        <div className="button-container">
          <button className="primary-button">Comenzar gratis</button>
          <p className="secondary-button">Prueba gratis de 15 días</p>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Imagen de software" className="hero-image" />
      </div>
    </section>
  );
}

export default HeroSection;