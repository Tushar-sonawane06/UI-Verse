import React from 'react';

export default function terms(){
  return (
    <>
      <main className="terms-main">
      
        <section className="terms-hero">
      
          <div className="hero-badge">
            <i className="fa-solid fa-scale-balanced"></i>
            Legal Information
          </div>
      
          <h1 className="hero-title">
            Terms & <span>Conditions</span>
          </h1>
      
          <p className="hero-desc">
            These terms govern your access and use of UIverse. By using our platform, you agree to follow these conditions.
          </p>
      
          <div className="hero-points">
            <div className="hero-point"><i className="fa-solid fa-check"></i> Commercial Usage Allowed</div>
            <div className="hero-point"><i className="fa-solid fa-check"></i> User Friendly Terms</div>
            <div className="hero-point"><i className="fa-solid fa-check"></i> Secure & Transparent</div>
          </div>
      
        </section>
      
        {/* TERMS CONTENT */}
        <section className="terms-wrapper">
      
          <div className="section-head">
            <span className="section-tag">TERMS OF SERVICE</span>
            <h2>Legal Terms & <span>Policies</span></h2>
          <p className="section-desc">
            Clear, transparent, and developer-friendly guidelines designed to
            keep UIverse secure, open, and accessible for everyone.
          </p>
        </div>
      
        <div className="terms-topbar">
      
          <div className="topbar-card">
            <i className="fa-solid fa-shield-halved"></i>
            <div>
              <h4>Secure Platform</h4>
              <p>Protected access & safe browsing experience.</p>
            </div>
          </div>
      
          <div className="term-card">
            <h3><i className="fa-solid fa-circle-info"></i> Introduction</h3>
            <p>By accessing UIverse, you agree to these Terms & Conditions.</p>
          </div>
      
           <div className="topbar-card">
            <i className="fa-solid fa-bolt"></i>
            <div>
              <h4>Fast Access</h4>
              <p>Optimized infrastructure with reliable uptime.</p>
            </div>
          </div>
      
          <div className="topbar-card">
            <i className="fa-solid fa-scale-balanced"></i>
            <div>
              <h4>Fair Usage</h4>
              <p>Simple terms with commercial usage support.</p>
            </div>
          </div>
      
        </div>
      
        {/* TERMS GRID */}
        <div className="terms-grid">
      
          <div className="term-card premium">
            <div className="term-icon">
              <i className="fa-solid fa-circle-info"></i>
            </div>
      
            <div className="term-content">
              <span className="term-number">01</span>
              <h3>Introduction</h3>
      
              <p>
                By accessing UIverse, you agree to comply with our Terms &
                Conditions and all applicable platform guidelines.
              </p>
      
              <ul>
                <li>Access subject to agreement</li>
                <li>Developer-friendly policies</li>
                <li>Transparent platform rules</li>
              </ul>
            </div>
          </div>
      
          <div className="term-card premium">
            <div className="term-icon">
              <i className="fa-solid fa-globe"></i>
            </div>
      
            <div className="term-content">
              <span className="term-number">02</span>
              <h3>Website Usage</h3>
      
              <p>
                Users must avoid disrupting services, exploiting vulnerabilities,
                or attempting unauthorized access to platform resources.
              </p>
      
              <ul>
                <li>No harmful activities</li>
                <li>No reverse engineering</li>
                <li>Respect fair usage limits</li>
              </ul>
            </div>
          </div>
      
          <div className="term-card premium">
            <div className="term-icon">
              <i className="fa-solid fa-user-shield"></i>
            </div>
      
            <div className="term-content">
              <span className="term-number">03</span>
              <h3>User Accounts</h3>
      
              <p>
                Users are responsible for maintaining the confidentiality of their
                account credentials and for all activities that occur under their
                account.
                </p>
                <ul>
                  <li>Secure your credentials</li>
                  <li>Notify of unauthorized use</li>
                  <li>Comply with account policies</li>
      
                </ul>
            </div>
            </div>
          <div className="term-card">
            <h3><i className="fa-solid fa-globe"></i> Website Usage</h3>
            <p>Do not misuse or disrupt platform functionality.</p>
          </div>
      
          <div className="term-card">
            <h3><i className="fa-solid fa-user"></i> User Accounts</h3>
            <p>You are responsible for securing your account credentials.</p>
          </div>
      
          <div className="term-card">
            <h3><i className="fa-solid fa-copyright"></i> Intellectual Property</h3>
            <p>All UIverse assets remain protected intellectual property.</p>
          </div>
      
          <div className="term-card">
            <h3><i className="fa-solid fa-triangle-exclamation"></i> Limitation of Liability</h3>
            <p>UIverse is not responsible for damages or service interruptions.</p>
          </div>
      
        </section>
      
      </main>
    </>
  );
}
