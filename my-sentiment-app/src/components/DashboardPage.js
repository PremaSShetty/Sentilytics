import React, { useState, useEffect } from 'react';
import './DashboardPage.css';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const navigate = useNavigate();
  const [loadingSocial, setLoadingSocial] = useState(false);
  const [loadingProduct, setLoadingProduct] = useState(false);

  useEffect(() => {
    let socialTimeout, productTimeout;

    if (loadingSocial) {
      socialTimeout = setTimeout(() => {
        setLoadingSocial(false);
        navigate('/social-media-graphs');
      }, 10000);
    }

    if (loadingProduct) {
      productTimeout = setTimeout(() => {
        setLoadingProduct(false);
        navigate('/product-review-graphs');
      }, 10000);
    }

    return () => {
      clearTimeout(socialTimeout);
      clearTimeout(productTimeout);
    };
  }, [loadingSocial, loadingProduct, navigate]);

  const handleSocialMediaClick = () => {
    setLoadingSocial(true);
  };

  const handleProductReviewClick = () => {
    setLoadingProduct(true);
  };

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
        
              <img src={process.env.PUBLIC_URL + '/social.jpg'} alt="Social Media" className="card-icon"/>
          <h2 className="title">Social Media</h2>
          <p className="product-text">
            Analyze sentiment from real-time social media posts, product reviews, and customer feedback to gain valuable insights into user
            opinions and emotions.
          </p>
          <button className="button" onClick={handleSocialMediaClick}>Click Here</button>
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
        
             <img src={process.env.PUBLIC_URL + '/product.jpg'} alt="Product Review" className="card-icon"/>
          <h2 className="title">Product Review</h2>
          <p className="product-text">
            Discover how customers feel about your brand with our sentiment analysis tool. Get instant insights into positive, neutral, and negative
            sentiments from various sources.
          </p>
          <button className="button" onClick={handleProductReviewClick}>Click Here</button>
          <div className="star-container">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
        </div>
      </div>
      {(loadingSocial || loadingProduct) && (
        <div className="loading-overlay">
          <img src={process.env.PUBLIC_URL + '/loadingbg.jpg'} alt="Background" className="loading-background" />
          <img src={process.env.PUBLIC_URL + '/logosybg.jpg'} alt="Loading Logo" className="loading-logo" />
        </div>
      )}
    </div>
  );
}

export default DashboardPage;