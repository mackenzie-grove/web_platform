import React from 'react';

const Success = ({ onNext }) => {
  return (
    <div className="container">
      <div className="success-message">
        Success! Account has been setup
      </div>
      <button 
        className="action-button"
        onClick={onNext}
      >
        Finish Application
      </button>
    </div>
  );
};

export default Success;