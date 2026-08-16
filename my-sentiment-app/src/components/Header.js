import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        {/* Replace with your logo image or text */}
        <img src="hack12.jpg" alt="Logo" /> 
        <span>SENTILYTICS</span> 
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/signup" className="login-bt">Sign Up</Link>
        <Link to="/login" className="login-bt">Login</Link>
      </nav>
    </header>
  );
}

export default Header;