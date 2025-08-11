import React from 'react';

const SuccessSubmission = ({ onNext }) => {
  return (
    <div className="container">
      <div className="success-message">
        Success! Application has been submitted.
      </div>
      <button 
        className="action-button"
        onClick={onNext}
      >
        Timeline Disclosure and Next Steps
      </button>
    </div>
  );
};

export default SuccessSubmission;