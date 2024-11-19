import React from 'react';
import './OrderScreen.css'; // Archivo CSS específico para esta pantalla

const OrderScreen = () => {
  return (
    <div className="order-screen">
      <div className="header-section">
        <a href="/orders" className="back-button">← Orden de servicio</a>
        <button className="save-button">Guardar</button>
      </div>

      <div className="order-content">
        <div className="tabs-section">
          <ul className="tabs">
            <li className="active-tab">Reparaciones (0)</li>
            <li>Ventas (0)</li>
            <li>Historial</li>
          </ul>
        </div>

        <div className="left-section">
          <button className="add-device-button">+ Agregar dispositivo</button>
        </div>

        <div className="right-section">
          <div className="client-search">
            <label>Buscar clientes</label>
            <input type="text" placeholder="Teclea email, nombre o apellido" />
            <button className="add-client-button">+</button>
          </div>

          <div className="order-summary">
            <h3>Resumen de orden</h3>
            <p>Servicios: $0.00</p>
            <p>Impuestos: $0.00</p>
            <p>Anticipos: $0.00</p>
            <p>Total: $0.00</p>
          </div>

          <div className="order-details">
            <h3>Detalles</h3>
            <label>Prioridad</label>
            <select>
              <option>Seleccionar</option>
            </select>
            <label>Fecha compromiso</label>
            <input type="date" />
            <label>Asignar responsable</label>
            <select>
              <option>Seleccionar</option>
            </select>
          </div>

          <div className="image-upload">
            <label>Imágenes</label>
            <input type="file" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
