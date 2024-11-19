// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardPage from './pages/DashboardPage';
import OrdersPage from './components/OrdersPage/OrdersPage';
import DashboardLayout from './components/DashboardLayout/DashboardLayout';
import BusinessSettings from './pages/BusinessSettings/BusinessSettings';
import BusinessLayout from './components/BusinessLayout/BusinessLayout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import UsersPermissions from './pages/BusinessSettings/UsersPermissions';

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<><Navbar /><HeroSection /><FeaturesSection /><Footer /></>} />
        
        {/* Autenticación */}
        <Route path="/login" element={<><Navbar /><Login /></>} /> 
        <Route path="/register" element={<><Navbar /><Register /></>} /> 

        {/* Página de bienvenida */}
        <Route path="/welcome" element={<WelcomePage />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard/*" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="ordenes" element={<OrdersPage />} />
        </Route>

        {/* Layout de "Administrar Mi Negocio" */}
        <Route path="/business-settings/*" element={<BusinessLayout />}>
          <Route index element={<BusinessSettings />} />
          <Route path="users" element={<UsersPermissions />} />

          {/* Agrega rutas adicionales bajo "Administrar Mi Negocio" aquí */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
