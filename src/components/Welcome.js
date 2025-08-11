import React from 'react';

const Welcome = ({ onLanguageSelect }) => {
  return (
    <div className="container">
      <div className="logo">Logo</div>
      <div className="button-container">
        <button 
          className="language-button"
          onClick={() => onLanguageSelect('en')}
        >
          English
        </button>
        <button 
          className="language-button"
          onClick={() => onLanguageSelect('es')}
        >
          Español
        </button>
      </div>
    </div>
  );
};

export default Welcome;