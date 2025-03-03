import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
        const response = await axios.post('http://localhost:5000/login', { // Updated API endpoint
            email,
            password,
        });

        if (response.status === 200) {
            navigate('/dashboard');  // Redirect to dashboard after successful login
        }
    } catch (err) {
        if (err.response && err.response.status === 401) {
            setError('Invalid credentials');
        } else {
            setError('An error occurred. Please try again later.');
        }
        console.error(err);
    }
};

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email or phone number</label>
            <input
              type="text"
              id="email"
              placeholder="Enter email or phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <a href="/forgot-password" className="forgot-password">Forgot your password?</a>
        <p className="freepik-credit">Designed by freepik</p>
        {error && <div className="error-message">{error}</div>}
      </div>
      {/* <div className="login-image">
        <img src="hack13.jpg" alt="Login" />
      </div> */}
    </div>
  );
}

export default Login;