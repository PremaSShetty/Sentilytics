import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Sentiment Analysis</h1>
        <p>Understand Emotions Instantly</p>
        <p>Gain deep insights into customer emotions with our advanced sentiment analysis tool. Detect positive, neutral, or negative sentiments in real time and make data-driven decisions to enhance user experience.</p>
        <div className="button-group">
          <button className="signup-btn">Sign Up</button>
          <button className="login-btn">Login</button>
        </div>
      </div>
      <div className="hero-image">
        {/* Replace with your hero image */}
        <img src="hack5.jpg" alt="Sentiment Analysis" />
      </div>
    </section>
  );
}

export default Hero;