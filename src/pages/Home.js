import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';  // Importa tu página Home
import Login from './pages/Login'; // Importa tu página Login

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página principal */}
        <Route path="/login" element={<Login />} /> {/* Página de inicio de sesión */}
      </Routes>
    </Router>
  );
}

export default App;
