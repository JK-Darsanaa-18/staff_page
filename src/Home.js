import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './Home.css'; // Ensure you create this file for styling

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`home-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <main className={`main-content ${sidebarOpen ? 'shifted' : ''}`}>
      </main>
    </div>
  );
};

export default Home;
