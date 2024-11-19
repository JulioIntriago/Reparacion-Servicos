import React from 'react';
import { FaTasks, FaBox, FaUsers, FaTruck, FaWrench, FaDollarSign } from 'react-icons/fa'; // Importa los íconos de React Icons
import '../assets/styles/FeaturesSection.css'; // Importa los estilos

function FeaturesSection() {
  const features = [
    { icon: <FaTasks />, title: "Órdenes de trabajo", description: "Administra y notifica a tus clientes." },
    { icon: <FaBox />, title: "Inventario", description: "Actualiza tu inventario automáticamente." },
    { icon: <FaUsers />, title: "Clientes", description: "Gestión de contactos e historial." },
    { icon: <FaTruck />, title: "Proveedores", description: "Registra y administra proveedores." },
    { icon: <FaWrench />, title: "Servicios", description: "Registra servicios a la medida." },
    { icon: <FaDollarSign />, title: "Finanzas", description: "Administra tus finanzas con reportes." },
  ];

  return (
    <section id="features" className="features-section">
      <h2>Características</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{feature.icon}</div> {/* Icono agregado */}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
