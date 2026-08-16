import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
// import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp';
import DashboardPage from './components/DashboardPage';
import './styles/index.css';

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Hero />} /> 
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;