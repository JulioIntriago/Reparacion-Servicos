// src/pages/BusinessSettings/UserPermissions.js
import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import './UsersPermissions.css';

const UserPermissions = () => {
  const [permissions, setPermissions] = useState({
    adminPanel: true,
    statisticsPanel: false,
    modifyOrders: true,
    editStock: false,
    branchPanel: true,
    viewAllOrders: true,
    editPrices: false,
    createOrders: true,
  });

  const handleToggle = (permission) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [permission]: !prevPermissions[permission],
    }));
  };

  const handleSave = () => {
    console.log('Permisos guardados:', permissions);
  };

  return (
    <div className="user-permissions">
      <div className="invite-section">
        <input
          type="email"
          placeholder="Enviar invitación por correo"
          className="invite-input"
        />
        <div className="role-selection">
          <label>
            <input type="radio" name="role" value="Tecnico" defaultChecked />
            Técnico
          </label>
          <label>
            <input type="radio" name="role" value="Recepcionista" />
            Recepcionista
          </label>
        </div>
        <button className="invite-button">Enviar</button>
      </div>

      <div className="permissions-section">
        <div className="user-info">
          <span>Nombre: Iker Zambrano</span>
          <select disabled>
            <option>Dueño</option>
          </select>
        </div>

        <div className="permissions-grid">
          <div className="permission-item">
            <span><FaInfoCircle /> Permiso para usar panel de administración</span>
            <input
              type="checkbox"
              checked={permissions.adminPanel}
              onChange={() => handleToggle('adminPanel')}
            />
          </div>
          <div className="permission-item">
            <span><FaInfoCircle /> Permiso para usar panel de estadísticas</span>
            <input
              type="checkbox"
              checked={permissions.statisticsPanel}
              onChange={() => handleToggle('statisticsPanel')}
            />
          </div>
          <div className="permission-item">
            <span><FaInfoCircle /> Permiso para modificar órdenes</span>
            <input
              type="checkbox"
              checked={permissions.modifyOrders}
              onChange={() => handleToggle('modifyOrders')}
            />
          </div>
          <div className="permission-item">
            <span><FaInfoCircle /> Permiso para editar el stock de productos</span>
            <input
              type="checkbox"
              checked={permissions.editStock}
              onChange={() => handleToggle('editStock')}
            />
          </div>
          <div className="permission-item">
            <span><FaInfoCircle /> Permiso para uso de panel de sucursales</span>
            <input
              type="checkbox"
              checked={permissions.branchPanel}
              onChange={() => handleToggle('branchPanel')}
            />
          </div>
          <div className="permission-item">
            <span><FaInfoCircle /> Permiso para ver órdenes de todo el negocio</span>
            <input
              type="checkbox"
              checked={permissions.viewAllOrders}
              onChange={() => handleToggle('viewAllOrders')}
            />
          </div>
          <div className="permission-item">
            <span><FaInfoCircle /> Permiso para editar y ver costo y precio</span>
            <input
              type="checkbox"
              checked={permissions.editPrices}
              onChange={() => handleToggle('editPrices')}
            />
          </div>
          <div className="permission-item">
            <span><FaInfoCircle /> Permiso para crear órdenes</span>
            <input
              type="checkbox"
              checked={permissions.createOrders}
              onChange={() => handleToggle('createOrders')}
            />
          </div>
        </div>

        <button className="save-button" onClick={handleSave}>
          Guardar
        </button>
      </div>
    </div>
  );
};

export default UserPermissions;
