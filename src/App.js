import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Success from './components/Success';
import SuccessSubmission from './components/SuccessSubmission';
import SuccessMessage from './components/SuccessMessage';

const App = () => {
  const [currentStep, setCurrentStep] = useState('welcome');
  const [language, setLanguage] = useState(null);

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    setCurrentStep('success');
  };

  const handleNextStep = () => {
    if (currentStep === 'success') {
      setCurrentStep('success-submission');
    } else if (currentStep === 'success-submission') {
      setCurrentStep('success-message');
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'welcome':
        return <Welcome onLanguageSelect={handleLanguageSelect} />;
      case 'success':
        return <Success onNext={handleNextStep} />;
      case 'success-submission':
        return <SuccessSubmission onNext={handleNextStep} />;
      case 'success-message':
        return <SuccessMessage />;
      default:
        return <Welcome onLanguageSelect={handleLanguageSelect} />;
    }
  };

  return (
    <div className="App">
      {renderCurrentStep()}
    </div>
  );
};

export default App;