import React from 'react';
import { useNavigate } from 'react-router-dom';

const BusinessBorrowers = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Login - to be implemented');
  };

  return (
    <div className="business-borrowers-page">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => navigate('/landing')}>
            <div className="logo-text">Grove</div>
          </div>
          <div className="nav-links">
            <button className="nav-link secondary" onClick={handleLogin}>Login</button>
            <button className="nav-cta" onClick={() => navigate('/get-started')}>Apply Now</button>
          </div>
        </div>
      </nav>
      
      <main className="business-main">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hook-statement">
              <h1 className="hook-title">
                Access Capital That Grows With Your Business
              </h1>
              <p className="hook-description">
                Whether you're looking to expand operations, manage cash flow, or invest in new 
                opportunities, Grove connects you with the right lenders who understand your business needs. 
                Get pre-qualified in minutes with our streamlined application process.
              </p>
              
              <div className="business-benefits">
                <div className="benefit-grid">
                  <div className="benefit-card">
                    <div className="benefit-icon">💰</div>
                    <h3 className="benefit-title">Flexible Funding</h3>
                    <p className="benefit-desc">$10K to $2M+ available with competitive rates tailored to your business profile</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">⚡</div>
                    <h3 className="benefit-title">Fast Approval</h3>
                    <p className="benefit-desc">Get pre-qualified in 3 minutes and receive funding decisions within 24 hours</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">🎯</div>
                    <h3 className="benefit-title">Perfect Match</h3>
                    <p className="benefit-desc">Our AI connects you with lenders who specialize in your industry and business size</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">📊</div>
                    <h3 className="benefit-title">Transparent Terms</h3>
                    <p className="benefit-desc">Clear pricing with no hidden fees and real-time tracking of your application status</p>
                  </div>
                </div>
              </div>
              
              <div className="cta-section">
                <button className="primary-cta-button" onClick={() => navigate('/get-started')}>
                  Start Your Application
                </button>
                <p className="cta-subtext">
                  No impact to your credit score during pre-qualification
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="social-proof-section">
          <div className="social-proof-content">
            <h2 className="social-proof-title">Trusted by 10,000+ Businesses</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">$500M+</div>
                <div className="stat-label">Funded to Date</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24hrs</div>
                <div className="stat-label">Average Decision Time</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.9/5</div>
                <div className="stat-label">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BusinessBorrowers;