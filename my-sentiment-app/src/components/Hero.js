import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section className="hero">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/homebg.jpg)` }}
      ></div>

      <div className="hero-content">

        <div className="hero-left">
          <div className="header-logo">
            SENTI<span className="purple-text">LYTICS</span>
          </div>
          <div className="tagline">
            Understand Emotions <span className="purple-text">Instantly</span>
          </div>

          <div className="logo-container">
            <img
              src={process.env.PUBLIC_URL + '/logosybg.jpg'}
              alt="Sentiment Analysis Logo"
              className="rotating-logo"
            />
          </div>



          <div className="hero-right">
            <p>
              Gain deep insights into customer emotions with our advanced
              sentiment
            </p>
            <p> analysis tool. Detect positive, neutral, or negative
              sentiments in real time.</p>
            <p>Make data-driven decisions to enhance user experience.</p>
            <div className="button-group">
              <button className="signup-btn" onClick={() => handleNavigation('/signup')}>Sign Up</button>
              <button className="login-btn" onClick={() => handleNavigation('/login')}>Login</button>
            </div>
          </div>
        </div>




      </div>
    </section>
  );
}

export default Hero;