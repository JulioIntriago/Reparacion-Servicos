// src/pages/WelcomePage/StepBusinessDetails.js
import React from 'react';
import './StepBusinessDetails.css';

const StepBusinessDetails = ({ onContinue }) => {
  return (
    <div className="step-container">
      <h2>Mi Negocio</h2>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Nombre de tu negocio" />
          </div>
          <div className="form-group">
            <label>País</label>
            <select>
              <option value="">Seleccionar</option>
              <option value="EC">Ecuador</option>
              <option value="MX">México</option>
            </select>
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <div className="phone-input">
              <select className="country-code">
                <option>+593</option>
                <option>+52</option>
              </select>
              <input type="tel" placeholder="Numero" />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Tipo de Moneda</label>
            <select>
              <option value="">Seleccionar</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <div className="form-group">
            <label>Zona Horaria</label>
            <select>
              <option value="">Seleccionar</option>
              <option value="GMT-5">GMT-5</option>
              <option value="GMT-6">GMT-6</option>
            </select>
          </div>
          <div className="form-group">
            <label>Formato de Fecha</label>
            <select>
              <option value="">mm/dd/yyyy</option>
              <option value="dd/mm/yyyy">dd/mm/yyyy</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Dirección</label>
          <textarea placeholder="Dirección del negocio"></textarea>
        </div>

        <div className="form-group">
          <label>Logo</label>
          <input type="file" />
        </div>

        <div className="tax-section">
          <h3>Impuestos Fijos</h3>
          <p>Configuración de impuestos fijos para órdenes</p>
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="Nombre" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Porcentaje" />
            </div>
            <button type="button" className="create-button">Crear</button>
          </div>
        </div>

        <button type="button" onClick={onContinue} className="continue-button">
          Continuar
        </button>
      </form>
    </div>
  );
};

export default StepBusinessDetails;
