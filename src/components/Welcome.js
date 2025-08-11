import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const handleLanguageSelect = (lang) => {
    // Store language in localStorage for future use
    localStorage.setItem('selectedLanguage', lang);
    navigate('/landing');
  };

  return (
    <div className="container">
      <div className="logo">
        <div className="logo-text">Grove</div>
      </div>
      <div className="welcome-card">
        <h1 className="welcome-title">Welcome to Grove</h1>
        <p className="welcome-subtitle">
          Choose your preferred language to continue with your banking application
        </p>
        <div className="button-container">
          <button 
            className="language-button"
            onClick={() => handleLanguageSelect('en')}
          >
            English
          </button>
          <button 
            className="language-button"
            onClick={() => handleLanguageSelect('es')}
          >
            Español
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;