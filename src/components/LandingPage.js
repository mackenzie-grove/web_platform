import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-text">Grove</div>
          </div>
          <div className="nav-links">
            <button className="nav-link" onClick={() => navigate('/borrowers')}>Business</button>
            <button className="nav-link" onClick={() => navigate('/lenders')}>Lender</button>
            <button className="nav-cta" onClick={() => navigate('/get-started')}>Apply Now</button>
          </div>
        </div>
      </nav>
      
      <main className="landing-main">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Empowering Growth Through Smart Lending</h1>
            <p className="hero-description">
              Grove connects businesses with the funding they need to thrive. 
              Our innovative platform streamlines the lending process, making capital 
              access faster, more transparent, and tailored to your business needs.
            </p>
          </div>
        </section>
        
        <section className="problem-section">
          <div className="section-content">
            <h2 className="section-title">The Challenge Businesses Face</h2>
            
            <div className="problem-card">
              <div className="problem-content">
                <h3 className="problem-title">Small Business Lending Obstacles</h3>
                <div className="problem-points">
                  <div className="problem-point">
                    <span className="problem-icon">⏳</span>
                    <p>Lengthy application processes that take weeks to complete</p>
                  </div>
                  <div className="problem-point">
                    <span className="problem-icon">📋</span>
                    <p>Complex paperwork requirements with unclear guidelines</p>
                  </div>
                  <div className="problem-point">
                    <span className="problem-icon">❌</span>
                    <p>High rejection rates despite strong business fundamentals</p>
                  </div>
                </div>
              </div>
              <div className="problem-graphic">
                <div className="graphic-placeholder">
                  <span className="graphic-text">📊</span>
                </div>
              </div>
            </div>
            
            <div className="problem-card reverse">
              <div className="problem-graphic">
                <div className="graphic-placeholder">
                  <span className="graphic-text">🏦</span>
                </div>
              </div>
              <div className="problem-content">
                <h3 className="problem-title">SMB Pain Points</h3>
                <div className="problem-points">
                  <div className="problem-point">
                    <span className="problem-icon">💰</span>
                    <p>Limited access to competitive interest rates</p>
                  </div>
                  <div className="problem-point">
                    <span className="problem-icon">🔍</span>
                    <p>Lack of transparency in loan approval criteria</p>
                  </div>
                  <div className="problem-point">
                    <span className="problem-icon">⏰</span>
                    <p>Urgent funding needs met with slow traditional processes</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="problem-card">
              <div className="problem-content full-width">
                <h3 className="problem-title">Lender Challenges</h3>
                <div className="problem-points horizontal">
                  <div className="problem-point">
                    <span className="problem-icon">⚖️</span>
                    <p>Difficult risk assessment with limited data visibility</p>
                  </div>
                  <div className="problem-point">
                    <span className="problem-icon">📈</span>
                    <p>Inefficient portfolio management and tracking systems</p>
                  </div>
                  <div className="problem-point">
                    <span className="problem-icon">🤝</span>
                    <p>Challenges in matching with qualified borrowers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="solution-section">
          <div className="section-content">
            <h2 className="section-title">Grove's Innovative Solution</h2>
            
            <div className="solution-card">
              <div className="solution-content">
                <h3 className="solution-title">Streamlined Platform Experience</h3>
                <div className="solution-points">
                  <div className="solution-point">
                    <span className="solution-icon">⚡</span>
                    <p>Digital-first application process completed in minutes, not weeks</p>
                  </div>
                  <div className="solution-point">
                    <span className="solution-icon">🎯</span>
                    <p>Smart matching algorithm connects businesses with ideal lenders</p>
                  </div>
                  <div className="solution-point">
                    <span className="solution-icon">📱</span>
                    <p>Intuitive dashboard for real-time application tracking</p>
                  </div>
                </div>
              </div>
              <div className="solution-graphic">
                <div className="graphic-placeholder solution">
                  <span className="graphic-text">🚀</span>
                </div>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="solution-content full-width">
                <h3 className="solution-title">Advanced Analytics & Transparency</h3>
                <div className="solution-points horizontal">
                  <div className="solution-point">
                    <span className="solution-icon">🔍</span>
                    <p>Clear approval criteria and real-time feedback</p>
                  </div>
                  <div className="solution-point">
                    <span className="solution-icon">📊</span>
                    <p>Data-driven risk assessment for better outcomes</p>
                  </div>
                  <div className="solution-point">
                    <span className="solution-icon">💡</span>
                    <p>Actionable insights to improve loan success rates</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="solution-content full-width">
                <h3 className="solution-title">Value Proposition</h3>
                <div className="value-props">
                  <div className="value-prop">
                    <div className="value-number">75%</div>
                    <div className="value-text">Faster application processing</div>
                  </div>
                  <div className="value-prop">
                    <div className="value-number">3x</div>
                    <div className="value-text">Higher approval rates</div>
                  </div>
                  <div className="value-prop">
                    <div className="value-number">24/7</div>
                    <div className="value-text">Platform availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="cta-section">
          <button className="cta-button" onClick={() => navigate('/get-started')}>
            Get Started Today
          </button>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;