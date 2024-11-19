// src/pages/DashboardPage.js
import React from 'react';
import DashboardContent from '../components/DashboardContent/DashboardContent';
import '../assets/styles/DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-content-wrapper">
      <DashboardContent />
    </div>
  );
};

export default DashboardPage;
