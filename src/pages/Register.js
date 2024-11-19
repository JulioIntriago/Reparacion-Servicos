import React, { useState } from 'react';
import '../assets/styles/Register.css';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneCode: '+1',
    phoneNumber: '',
    email: '',
    password: '',
    termsAccepted: false,
  });
  
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
      alert("Debes aceptar los términos y condiciones");
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
        fullName: formData.fullName,
        phoneNumber: `${formData.phoneCode}${formData.phoneNumber}`,
        email: formData.email,
        password: formData.password,
      });

      setMessage({ type: 'success', text: 'Registro exitoso' });
      console.log(response.data);
    } catch (error) {
      const errorMsg = error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : 'Error al registrar el usuario';
      setMessage({ type: 'error', text: errorMsg });
      console.error('Error en el registro:', errorMsg);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Registra tu cuenta</h2>
        {message && (
          <p className={`message ${message.type === 'success' ? 'success' : 'error'}`}>
            {message.text}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre completo</label>
            <input
              type="text"
              name="fullName"
              placeholder="Nombre completo"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Teléfono</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <select
                name="phoneCode"
                value={formData.phoneCode}
                onChange={handleChange}
                style={{ marginRight: '10px', height: '30px' }}
              >
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+593">+593 (Ecuador)</option>
                <option value="+34">+34 (España)</option>
              </select>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Teléfono"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Elige una contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Elige una contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group terms-group">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            <span className="terms-text">
              He leído y acepto los <a href="/terms">términos y condiciones</a> y la <a href="/privacy">política de privacidad</a>
            </span>
          </div>

          <button type="submit" className="register-button">
            Comenzar
          </button>
        </form>

        <p className="signup-text">
          ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
