// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// function Header() {
//   const location = useLocation();
//   const isDashboard = location.pathname.startsWith('/dashboard'); // Check if on dashboard

//   return (
//     <header className="header">
//       <div className="logo">
//         <img src="hack12.jpg" alt="Logo" />
//         <span>SENTILYTICS</span>
//       </div>
//       {!isDashboard && ( // Show links only when NOT on the dashboard
//         <nav className="nav">
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/signup" className="login-bt">Sign Up</Link>
//           <Link to="/login" className="login-bt">Login</Link>
//         </nav>
//       )}
//     </header>
//   );
// }

// export default Header;

import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isDashboard = location.pathname.startsWith('/dashboard'); // Check if on dashboard

  // Logout function
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/logout', {
        method: 'GET',
        credentials: 'include', // Include cookies for session management
      });

      if (response.ok) {
        const data = await response.json(); // Parse JSON response
        navigate('/login'); // Redirect to login page
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="hack12.jpg" alt="Logo" />
        <span>SENTILYTICS</span>
      </div>
      {!isDashboard ? (
        // Show these links only if NOT on the dashboard
        <nav className="nav">
          <Link to="/" className="button">Home</Link>
          <Link to="/signup" className="button">Sign Up</Link>
          <Link to="/login" className="button">Login</Link>
        </nav>
      ) : (
        // Show Logout button only on the dashboard
        <button className="button" onClick={handleLogout}>Logout</button>
      )}
    </header>
  );
}

export default Header;
