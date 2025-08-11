import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Lender = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    lendingVolume: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
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
    // Here you would typically send the data to your backend
    console.log('Lender contact form submitted:', formData);
    setIsSubmitted(true);
  };

  const isFormValid = () => {
    return formData.companyName.trim() !== '' &&
           formData.contactName.trim() !== '' &&
           formData.email.trim() !== '' &&
           formData.phone.trim() !== '';
  };

  if (isSubmitted) {
    return (
      <div className="lender-page">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo" onClick={() => navigate('/landing')}>
              <div className="logo-text">Grove</div>
            </div>
          </div>
        </nav>
        
        <main className="lender-main">
          <div className="success-card">
            <div className="success-icon"></div>
            <h1 className="success-title">Thank You for Your Interest!</h1>
            <p className="success-message">
              We've received your partnership inquiry and will review your information. 
              A member of our lender relations team will contact you within 24 hours to discuss 
              partnership opportunities.
            </p>
            <button 
              className="action-button primary"
              onClick={() => navigate('/landing')}
            >
              Back to Home
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="lender-page">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => navigate('/landing')}>
            <div className="logo-text">Grove</div>
          </div>
        </div>
      </nav>
      
      <main className="lender-main">
        <section className="lender-hero">
          <div className="hook-statement">
            <h1 className="hook-title">
              Partner With Grove to Expand Your Lending Portfolio
            </h1>
            <p className="hook-description">
              Join our network of trusted lenders and gain access to a steady stream of 
              pre-qualified borrowers. Our advanced matching technology connects you with 
              businesses that fit your lending criteria, streamlining your origination process 
              and increasing your loan volume.
            </p>
            
            <div className="lender-benefits">
              <div className="benefit-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">🎯</div>
                  <h3 className="benefit-title">Qualified Leads</h3>
                  <p className="benefit-desc">Access pre-screened borrowers that match your lending criteria</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">📊</div>
                  <h3 className="benefit-title">Data Insights</h3>
                  <p className="benefit-desc">Comprehensive business profiles and risk assessments</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">⚡</div>
                  <h3 className="benefit-title">Faster Decisions</h3>
                  <p className="benefit-desc">Streamlined application process reduces time to funding</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-container">
            <h2 className="contact-title">Get Started as a Lending Partner</h2>
            <p className="contact-subtitle">
              Fill out the form below and we'll connect you with our partnership team
            </p>

            <form onSubmit={handleSubmit} className="lender-contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="companyName" className="form-label">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contactName" className="form-label">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
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
                <label htmlFor="lendingVolume" className="form-label">
                  Annual Lending Volume
                </label>
                <select
                  id="lendingVolume"
                  name="lendingVolume"
                  value={formData.lendingVolume}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Select volume range</option>
                  <option value="under-1m">Under $1M</option>
                  <option value="1m-10m">$1M - $10M</option>
                  <option value="10m-50m">$10M - $50M</option>
                  <option value="50m-100m">$50M - $100M</option>
                  <option value="over-100m">Over $100M</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows="4"
                  placeholder="Tell us about your lending focus and partnership interests..."
                />
              </div>
              
              <div className="form-footer">
                <button 
                  type="submit"
                  className={`form-submit-button ${!isFormValid() ? 'disabled' : ''}`}
                  disabled={!isFormValid()}
                >
                  Submit Partnership Inquiry
                </button>
                <p className="form-security-note">
                  <span className="security-icon">🔒</span>
                  Your information is confidential and secure
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Lender;