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
    e.preventDefault(); // Prevent default form submission
    setError(null); // Clear any previous errors

    // Basic validation (you can add more)
    if (!termsAccepted) {
      setError('Please accept the Terms & Conditions.');
      return;
    }

    try {
      // Send POST request to your backend API
      const backendUrl = 'http://127.0.0.1:5000'; 

      // Send POST request to the backend API

      // const formData = new URLSearchParams();
      //       formData.append('firstName', firstName);
      //       formData.append('lastName', lastName);
      //       formData.append('email', email);
      //       formData.append('password', password);

            const response = await axios.post(`${backendUrl}/signup`, {
              firstName, 
              lastName, 
              email, 
              password 
              // headers: {
              //       'Content-Type': 'application/json',
              //   },
            });

      // Handle successful response (status code 200)
      if (response.status === 200) {
        // Redirect to login page
        navigate('/login'); 
      } else {
        // Handle error response (e.g., display a generic error message)
        setError('Signup failed. Please try again.'); 
      }
    } catch (err) {
      // Handle network errors or other exceptions
      setError('An error occurred. Please try again later.'); 
      console.error(err); // Log the error for debugging
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