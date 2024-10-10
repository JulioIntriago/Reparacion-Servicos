import React from 'react';
import '../assets/styles/FeaturesSection.css'; // Importa los estilos desde el archivo CSS

function FeaturesSection() {
  const features = [
    { title: "Órdenes de trabajo", description: "Administra y notifica a tus clientes." },
    { title: "Inventario", description: "Actualiza tu inventario automáticamente." },
    { title: "Clientes", description: "Gestión de contactos e historial." },
    { title: "Proveedores", description: "Registra y administra proveedores." },
    { title: "Servicios", description: "Registra servicios a la medida." },
    { title: "Finanzas", description: "Administra tus finanzas con reportes." },
  ];

  return (
    <section id="features" className="features-section">
      <h2>Características</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
