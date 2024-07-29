import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import ViewSchedule from './ViewSchedule';
import ManageStaff from './ManageStaff';
import Reports from './Reports';
import Settings from './Settings';
import Login from './Login';
import Home from './Home';
import ThankYou from './Thankyou';
import './App.css'; // Ensure you create this file for styling
import ShiftCalendar from './ShiftCalendar';
import MyAccount from './MyAccount';
import TimeOffRequest from './TimeOffRequest';


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-container">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <main className={`main-content ${sidebarOpen ? 'shifted' : ''}`}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/my-account" element={<MyAccount/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/schedule" element={<ViewSchedule />} />
          <Route path="/time-off-requests" element={<TimeOffRequest/>} />
          <Route path="/calendar" element={<ShiftCalendar/>}/>
          <Route path="/staff" element={<ManageStaff />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/thank-you" element={<ThankYou/>} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
