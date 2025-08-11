import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="success-card">
        <div className="success-icon"></div>
        <h1 className="success-title">Application Submitted Successfully!</h1>
        <p className="success-message">
          Thank you for applying with Grove! Your loan application has been received 
          and is being reviewed by our network of lenders. You'll receive updates 
          via email within 24-48 hours.
        </p>
        <div className="success-actions">
          <button 
            className="action-button primary"
            onClick={() => navigate('/apply/submission-success')}
          >
            View Application Status
          </button>
          <button 
            className="action-button secondary"
            onClick={() => navigate('/landing')}
          >
            Back to Home
          </button>
        </div>
        <div className="next-steps">
          <h3 className="next-steps-title">What happens next?</h3>
          <div className="step-list">
            <div className="step-item">
              <span className="step-number">1</span>
              <span className="step-text">Lender review (24-48 hours)</span>
            </div>
            <div className="step-item">
              <span className="step-number">2</span>
              <span className="step-text">Initial offer notification</span>
            </div>
            <div className="step-item">
              <span className="step-number">3</span>
              <span className="step-text">Documentation and finalization</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;