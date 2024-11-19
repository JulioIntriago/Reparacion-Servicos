import React, { useState, useRef, useEffect } from 'react';
import { FaPlusCircle, FaClipboardList, FaBox, FaUserPlus, FaTruck } from 'react-icons/fa';
import '../AddMenu/AddMenu.css'; // Asegúrate de tener los estilos adecuados

const AddMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Cierra el menú cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="add-menu" ref={menuRef}>
      <FaPlusCircle className="icon" onClick={toggleDropdown} />
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className="menu-item">
            <FaClipboardList /> Crear Orden
          </div>
          <div className="menu-item">
            <FaBox /> Agregar Producto
          </div>
          <div className="menu-item">
            <FaUserPlus /> Crear Cliente
          </div>
          <div className="menu-item">
            <FaTruck /> Crear Proveedor
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMenu;
