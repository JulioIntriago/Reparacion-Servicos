import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para la redirección
import '../assets/styles/Login.css'; // Asegúrate de que la ruta esté correcta
import axios from 'axios'; // Importamos axios para hacer la solicitud

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook para redirigir

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulamos que el login es exitoso y redirigimos al DashboardPage
    navigate('/dashboard'); // Aquí es donde redirigimos al dashboard
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">Iniciar sesión</button>
        </form>

        <p className="signup-text">
          ¿Aún no tienes cuenta? <a href="/register">Regístrate</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
