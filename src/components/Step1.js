import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step1 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store form data in localStorage for later use
    localStorage.setItem('applicationData', JSON.stringify(formData));
    navigate('/apply/success');
  };

  const isFormValid = () => {
    return Object.values(formData).every(value => value.trim() !== '');
  };

  return (
    <div className="container">
      <div className="form-card">
        <div className="form-header">
          <h1 className="form-title">Basic Contact Information</h1>
          <p className="form-subtitle">
            Step 1 of 4 - Tell us about yourself and your business
          </p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '25%' }}></div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="form-label">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="businessName" className="form-label">
              Business Name *
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="businessType" className="form-label">
              Business Type *
            </label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleInputChange}
              className="form-select"
              required
            >
              <option value="">Select your business type</option>
              <option value="sole-proprietorship">Sole Proprietorship</option>
              <option value="llc">Limited Liability Company (LLC)</option>
              <option value="corporation">Corporation</option>
              <option value="partnership">Partnership</option>
              <option value="non-profit">Non-Profit</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="form-footer">
            <button 
              type="submit"
              className={`form-submit-button ${!isFormValid() ? 'disabled' : ''}`}
              disabled={!isFormValid()}
            >
              Continue to Next Step
            </button>
            <p className="form-security-note">
              <span className="security-icon">🔒</span>
              Your information is encrypted and secure
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;