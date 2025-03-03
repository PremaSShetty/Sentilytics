import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Make sure you have this CSS file

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
        const response = await axios.post('http://localhost:5000/signup', {
            firstName,
            lastName,
            email,
            password,
        });

        if (response.status === 201) {
            // Redirect to login page after successful signup
            navigate('/login');
        } else {
            setError('Signup failed. Please try again.');
        }
    } catch (err) {
        setError('An error occurred. Please try again later.');
        console.error(err);
    }
};

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up for SENTILYTICS</h2>
        <form onSubmit={handleSubmit}> {/* Add onSubmit handler */}
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              value={firstName} // Bind input value to state
              onChange={(e) => setFirstName(e.target.value)} // Update state on input change
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="termsAndConditions"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              required
            />
            <label htmlFor="termsAndConditions">I accept Terms & Conditions</label>
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Log in</a>
        </p>
        {error && <div className="error-message">{error}</div>} {/* Display error message */}
      </div>
    </div>
  );
}

export default SignUp;