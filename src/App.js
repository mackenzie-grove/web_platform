import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './components/Welcome';
import LandingPage from './components/LandingPage';
import BusinessBorrowers from './components/BusinessBorrowers';
import Lender from './components/Lender';
import GetStarted from './components/GetStarted';
import Step1 from './components/Step1';
import Success from './components/Success';
import SuccessSubmission from './components/SuccessSubmission';
import SuccessMessage from './components/SuccessMessage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/language" replace />} />
          <Route path="/language" element={<Welcome />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/borrowers" element={<BusinessBorrowers />} />
          <Route path="/lenders" element={<Lender />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/apply/step1" element={<Step1 />} />
          <Route path="/apply/success" element={<Success />} />
          <Route path="/apply/submission-success" element={<SuccessSubmission />} />
          <Route path="/apply/final-success" element={<SuccessMessage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;