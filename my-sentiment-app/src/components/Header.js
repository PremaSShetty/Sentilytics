import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const isSocialMediaGraphs = location.pathname === '/social-media-graphs';
  const isProductReviewGraphs = location.pathname === '/product-review-graphs';

  // Logout function
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/logout', {
        method: 'GET',
        credentials: 'include', // Include cookies for session management
      });

      if (response.ok) {
        const data = await response.json(); // Parse JSON response
        navigate('/'); // Redirect to login page
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="logosybg.jpg" alt="Logo" className="logo-image" />
        <span className="logo-text">SENTI<span className="purple-text">LYTICS</span></span>
      </div>

      {/* Conditionally render the navigation links */}
      {isSocialMediaGraphs || isProductReviewGraphs ? (
        <nav className="nav">
          <button className="button signup-btn" onClick={() => handleNavigation('/dashboard')}>Dashboard</button>
          <button className="button signup-btn" onClick={handleLogout}>Logout</button>
        </nav>
      ) : !isDashboard ? (
        <nav className="nav">
          <button className="button signup-btn" onClick={() => handleNavigation('/')}>Home</button>
          <button className="button signup-btn" onClick={() => handleNavigation('/signup')}>Sign Up</button>
          <button className="button signup-btn" onClick={() => handleNavigation('/login')}>Login</button>
        </nav>
      ) : (
        <button className="button signup-btn" onClick={handleLogout}>Logout</button>
      )}
    </header>
  );
}

export default Header;