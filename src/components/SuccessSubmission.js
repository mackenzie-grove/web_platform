import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessSubmission = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="success-card">
        <div className="success-icon"></div>
        <h1 className="success-title">Application Submitted</h1>
        <p className="success-message">
          Your loan application has been successfully submitted to Grove. 
          Our team will review your information and get back to you within 24-48 hours.
        </p>
        <button 
          className="action-button"
          onClick={() => navigate('/apply/final-success')}
        >
          Timeline Disclosure and Next Steps
        </button>
      </div>
    </div>
  );
};

export default SuccessSubmission;