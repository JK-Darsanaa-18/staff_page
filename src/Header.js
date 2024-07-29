import React, { useState } from 'react';
import './Header.css'; // Ensure you create this file for styling
// Import the ProfileModal component
import ProfileIcon from './ProfileIcon'; // Import the custom ProfileIcon component

const Header = ({ toggleSidebar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfileClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="header">
        <button className="menu-icon" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i> {/* FontAwesome menu icon */}
        </button>
        <h1 className="header-title">Staff Portal</h1>
        <ProfileIcon onClick={handleProfileClick} /> {/* Custom ProfileIcon component */}
      </header>
    </>
  );
};

export default Header;
