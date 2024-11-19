// src/pages/BusinessSettings/BusinessSettings.js
import React, { useState } from 'react';

import './UsersPermissions.css';

const BusinessSettings = () => {
  const [businessData, setBusinessData] = useState({
    name: '',
    country: '',
    phone: '',
    currency: '',
    timezone: '',
    dateFormat: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBusinessData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del negocio guardados:', businessData);
  };

  return (
    <div className="business-settings-container">
      <h2>Mi Negocio</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos de entrada para cada detalle del negocio */}
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={businessData.name}
            onChange={handleChange}
            placeholder="Nombre de tu negocio"
          />
        </div>
        <div className="form-group">
          <label>País</label>
          <select name="country" value={businessData.country} onChange={handleChange}>
            <option value="">Seleccionar</option>
            <option value="EC">Ecuador</option>
            <option value="MX">México</option>
          </select>
        </div>
        <div className="form-group">
          <label>Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={businessData.phone}
            onChange={handleChange}
            placeholder="Teléfono"
          />
        </div>
        <div className="form-group">
          <label>Tipo de Moneda</label>
          <select name="currency" value={businessData.currency} onChange={handleChange}>
            <option value="">Seleccionar</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="form-group">
          <label>Zona Horaria</label>
          <input
            type="text"
            name="timezone"
            value={businessData.timezone}
            onChange={handleChange}
            placeholder="Ej: GMT-5"
          />
        </div>
        <div className="form-group">
          <label>Formato de Fecha</label>
          <select name="dateFormat" value={businessData.dateFormat} onChange={handleChange}>
            <option value="">Seleccionar</option>
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
          </select>
        </div>
        <div className="form-group">
          <label>Dirección</label>
          <textarea
            name="address"
            value={businessData.address}
            onChange={handleChange}
            placeholder="Dirección del negocio"
          ></textarea>
        </div>
        <button type="submit" className="save-button">Guardar</button>
      </form>
    </div>
  );
};

export default BusinessSettings;
