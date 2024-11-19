// src/pages/WelcomePage/WelcomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirección
import Navbar from '../../components/Navbar';
import StepBusinessDetails from './StepBusinessDetails';
import StepUserPermissions from './StepUserPermissions';
import StepPolicies from './StepPolicies';
import './WelcomePage.css';

const WelcomePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const goToNextStep = () => setCurrentStep((prevStep) => prevStep + 1);

  const finishSetup = () => {
    // Redirige al dashboard al finalizar
    navigate('/dashboard');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepBusinessDetails onContinue={goToNextStep} />;
      case 2:
        return <StepUserPermissions onContinue={goToNextStep} />;
      case 3:
        return <StepPolicies onFinish={finishSetup} />;
      default:
        return <StepBusinessDetails onContinue={goToNextStep} />;
    }
  };

  return (
    <div className="welcome-page">
      <Navbar />
      <div className="welcome-content">
        <h1>¡Bienvenido!</h1>
        <div className="steps-indicator">
          <div className={`step ${currentStep === 1 ? 'active' : ''}`}>
            <span>Mi negocio</span>
          </div>
          <div className={`step ${currentStep === 2 ? 'active' : ''}`}>
            <span>Usuarios y permisos</span>
          </div>
          <div className={`step ${currentStep === 3 ? 'active' : ''}`}>
            <span>Políticas y plantillas</span>
          </div>
        </div>
        <div className="form-container">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
