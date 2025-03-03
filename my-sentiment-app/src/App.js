import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Login from './components/Login';
import SignUp from './components/SignUp';
import DashboardPage from './components/DashboardPage';
import SocialMediaGraphs from './components/SocialMediaGraphs';
import ProductReviewGraphs from './components/ProductReviewGraphs';
import './styles/index.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Header /> {/* Always show Header */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/social-media-graphs" element={<SocialMediaGraphs />} />
        <Route path="/product-review-graphs" element={<ProductReviewGraphs />} />
      </Routes>
    </>
  );
}

export default App;
