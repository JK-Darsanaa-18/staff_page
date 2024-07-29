import React, { useState, useEffect } from 'react';
import './StaffLogin.css'; // Ensure you create this file for styling
import { useNavigate } from 'react-router-dom';

const StaffLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Set the class on the body element
    document.body.className = 'staff-login-page';
    // Cleanup the class when the component unmounts
    return () => {
      document.body.className = '';
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if entered email and password are not empty
    if (formData.email && formData.password) {
      setSuccess('Login successful!');
      setError('');
      // Redirect to dashboard after successful login
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000); // Delay to show the success message
    } else {
      setError('Email and password are required.');
      setSuccess('');
    }
  };

  return (
    <div className="staff-login-page">
      <div className="staff-form-container">
        <h2>Staff Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p className="staff-error">{error}</p>}
        {success && <p className="staff-success">{success}</p>}
      </div>
    </div>
  );
};

export default StaffLogin;
