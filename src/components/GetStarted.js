import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="get-started-card">
        <div className="get-started-content">
          <h1 className="get-started-title">Ready to Get Started?</h1>
          <p className="get-started-description">
            You're just a few steps away from accessing the capital your business needs. 
            Our streamlined application process takes just minutes to complete, and you'll 
            receive an instant decision from our network of trusted lenders.
          </p>
          <div className="get-started-benefits">
            <div className="benefit-item">
              <span className="benefit-icon">⚡</span>
              <span className="benefit-text">Quick 3-minute application</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🎯</span>
              <span className="benefit-text">Instant matching with lenders</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🔒</span>
              <span className="benefit-text">Bank-level security & privacy</span>
            </div>
          </div>
        </div>
        <button 
          className="get-started-button"
          onClick={() => navigate('/apply/step1')}
        >
          Start Your Application
        </button>
      </div>
    </div>
  );
};

export default GetStarted;