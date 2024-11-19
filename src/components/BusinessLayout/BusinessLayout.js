// src/components/BusinessLayout/BusinessLayout.js
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import BusinessSidebar from './BusinessSidebar';
import BusinessHeader from './BusinessHeader';
import './BusinessLayout.css';

const BusinessLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="business-layout">
      <BusinessHeader toggleSidebar={toggleSidebar} />
      <div className="content-wrapper">
        {isSidebarOpen && <BusinessSidebar />}
        <div className={`business-content ${isSidebarOpen ? '' : 'sidebar-closed'}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BusinessLayout;
