import React from 'react';
import './DashboardPage.css'; // Create this CSS file

function DashboardPage() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to Sentiment Analysis Dashboard!</h1>
      <div className="card-container">
        {/* Social Media Card */}
        <div className="card">
          <div className="status-dots">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
          <div className="menu-icon">☰</div>
          <div className="icon-container"> {/* Removed user-icon class */}
            <i className="fas fa-user"></i> {/* Font Awesome Icon */}
          </div>
          <h2 className="title">Social Media</h2>
          <p className="product-text">
            Analyze sentiment from real-time social media posts, product reviews, and customer feedback to gain valuable insights into user
            opinions and emotions.
          </p>
          <button className="button">Click Here</button>
          <div className="star-container">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
        </div>

        {/* Product Review Card */}
        <div className="card">
          <div className="status-dots">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
          <div className="menu-icon">☰</div>
          <div className="icon-container"> {/* Removed cart-icon class */}
            <i className="fas fa-shopping-cart"></i> {/* Font Awesome Icon */}
          </div>
          <h2 className="title">Product Review</h2>
          <p className="product-text">
            Discover how customers feel about your brand with our sentiment analysis tool. Get instant insights into positive, neutral, and negative
            sentiments from various sources.
          </p>
          <button className="button">Click Here</button>
          <div className="star-container">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;