import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  // Define admin credentials
  const adminCredentials = {
    email: '727722euai018@skcet.ac.in',
    password: 'Geetha@123',
  };

  useEffect(() => {
    // Set the class on the body element
    document.body.className = 'login-page';
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
    // Check if entered email and password match the admin credentials
    if (formData.email === adminCredentials.email && formData.password === adminCredentials.password) {
      setSuccess('Login successful!');
      setError('');
      // Redirect to home page after successful login
      setTimeout(() => {
        navigate('/home');
      }, 1000); // Delay to show the success message
    } else {
      setError('Login failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="ff">
      <div className="form-container">
        <h2>Login</h2>
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
        {error && <p className="error">{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <p>If you are a staff member, click here:</p>
        <Link to="/staff-login">Staff Login</Link> {/* Link to StaffLogin page */}
      </div>
    </div>
  );
};

export default Login;
