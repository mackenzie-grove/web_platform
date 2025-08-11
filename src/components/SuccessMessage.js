import React from 'react';

const SuccessMessage = () => {
  return (
    <div className="container">
      <div className="success-card final-success">
        <div className="success-icon"></div>
        <h1 className="success-title">Thank You!</h1>
        <p className="success-message">
          Your message has been received. A Grove representative will contact you 
          with next steps and timeline information for your loan application process.
        </p>
        <div className="progress-indicator">
          <div className="progress-dot active"></div>
          <div className="progress-dot active"></div>
          <div className="progress-dot active"></div>
          <div className="progress-dot active"></div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;