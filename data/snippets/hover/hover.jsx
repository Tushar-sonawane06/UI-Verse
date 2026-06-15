import React from 'react';

export default function hover(){
  return (
    <>
      <main className="main-home">
      
        <header className="page-header">
          <h1>Hover Effects</h1>
          <p>Showcasing modern hover animations, 3D tilts, and interactive UI effects for reusable components.</p>
        </header>
      
        <section className="hover-grid">
      
          {/* 1. HOVER REVEAL CARDS */}
          <div className="hover-card">
            <div className="hover-info">
              <h2>Hover Reveal Cards</h2>
              <p>A card that slides to reveal hidden content underneath.</p>
            </div>
            <div className="component-preview" id="preview-1">
              <div className="reveal-card">
                <div className="reveal-front">
                  <i className="fa-solid fa-lock"></i>
                  <span>Hover me</span>
                </div>
                <div className="reveal-back">
                  <i className="fa-solid fa-unlock" style="font-size: 24px; margin-bottom: 8px;"></i>
                  <p>Secret content revealed!</p>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-1">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 2. GLOW HOVER BUTTONS */}
          <div className="hover-card">
            <div className="hover-info">
              <h2>Glow Hover Button</h2>
              <p>A button that generates a soft neon gradient border upon hover.</p>
            </div>
            <div className="component-preview" id="preview-2">
              <button className="glow-btn">Hover for Glow</button>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-2">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 3. 3D HOVER CARDS */}
          <div className="hover-card">
            <div className="hover-info">
              <h2>3D Hover Card</h2>
              <p>A card that tilts dynamically based on mouse position.</p>
            </div>
            <div className="component-preview" id="preview-3">
              <div className="perspective-container">
                <div className="tilt-card" id="tiltCard">
                  <div className="tilt-content">
                    <i className="fa-brands fa-space-awesome"></i>
                    <br />
                    <span>3D Space</span>
                  </div>
                </div>
              </div>
              <script>
                // Dynamic tilt logic included for easy copying
                const card = document.getElementById('tiltCard');
                card.addEventListener('mousemove', (e) => {
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = ((y - centerY) / centerY) * -15;
                  const rotateY = ((x - centerX) / centerX) * 15;
                  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                });
                card.addEventListener('mouseleave', () => {
                  card.style.transform = `rotateX(0) rotateY(0)`;
                });
              </script>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-3">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 4. SPOTLIGHT HOVER EFFECT */}
          <div className="hover-card">
            <div className="hover-info">
              <h2>Spotlight Hover Effect</h2>
              <p>A radial gradient background that follows the cursor.</p>
            </div>
            <div className="component-preview" id="preview-4">
              <div className="spotlight-card" id="spotlightCard">
                <div className="spotlight-content">Spotlight Target</div>
              </div>
              <script>
                // Spotlight logic included for easy copying
                const sCard = document.getElementById('spotlightCard');
                sCard.addEventListener('mousemove', (e) => {
                  const rect = sCard.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  sCard.style.setProperty('--x', `${x}px`);
                  sCard.style.setProperty('--y', `${y}px`);
                });
              </script>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-4">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 5. FLOATING HOVER ELEMENTS */}
          <div className="hover-card">
            <div className="hover-info">
              <h2>Floating Hover Elements</h2>
              <p>Elements that lift smoothly with dynamic drop-shadows.</p>
            </div>
            <div className="component-preview" id="preview-5">
              <div className="float-container">
                <div className="float-item"><i className="fa-brands fa-html5"></i></div>
                <div className="float-item"><i className="fa-brands fa-css3-alt"></i></div>
                <div className="float-item"><i className="fa-brands fa-js"></i></div>
                <div className="float-item"><i className="fa-brands fa-react"></i></div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-5">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 6. MAGNETIC BUTTON */}
          <div className="hover-card">
            <div className="hover-info">
              <h2>Magnetic Button</h2>
              <p>A button that physically attracts to your cursor.</p>
            </div>
            <div className="component-preview" id="preview-6">
              <button className="magnetic-btn" id="magneticBtn">
                <span className="btn-text">Magnetic</span>
              </button>
              <script>
                // Magnetic interaction logic
                const magBtn = document.getElementById('magneticBtn');
                magBtn.addEventListener('mousemove', (e) => {
                  const rect = magBtn.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;
                  magBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
                  magBtn.querySelector('.btn-text').style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
                });
                magBtn.addEventListener('mouseleave', () => {
                  magBtn.style.transform = 'translate(0px, 0px)';
                  magBtn.querySelector('.btn-text').style.transform = 'translate(0px, 0px)';
                });
              </script>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-6">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 7. GLITCH TEXT EFFECT */}
          <div className="hover-card">
            <div className="hover-info">
              <h2>Glitch Text Effect</h2>
              <p>Cyberpunk style text glitch on hover.</p>
            </div>
            <div className="component-preview" id="preview-7">
              <h3 className="glitch-text" data-text="CYBERPUNK">CYBERPUNK</h3>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-7">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 8. NEUMORPHIC INSET HOVER */}
          <div className="hover-card">
            <div className="hover-info">
              <h2>Neumorphic Inset</h2>
              <p>Soft UI element that presses inwards.</p>
            </div>
            <div className="component-preview" id="preview-8">
              <div className="neumorphic-btn">
                <i className="fa-solid fa-power-off"></i>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-8">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 9. IMAGE ZOOM OVERLAY */}
          <div className="hover-card">
            <div className="hover-info">
              <h2>Image Zoom Overlay</h2>
              <p>Image scales up while an overlay slides in.</p>
            </div>
            <div className="component-preview" id="preview-9">
              <div className="img-zoom-card">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Abstract Art" />
                <div className="img-overlay">
                  <h3>Abstract Art</h3>
                  <p>View Gallery &rarr;</p>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-9">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 10. LIQUID DISTORTION HOVER CARD */}
          <div className="hover-card">
            <div className="hover-info">
              <h2>Liquid Distortion Hover Card</h2>
              <p>Futuristic displacement map distortion waves on hover.</p>
            </div>
            <div className="component-preview" id="preview-10">
              <div className="liquid-card">
                <svg className="liquid-svg" viewBox="0 0 200 200">
                  <defs>
                    <filter id="liquid-filter-10">
                      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" className="disp-map" />
                    </filter>
                  </defs>
                  <image href="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop" x="0" y="0" width="200" height="200" filter="url(#liquid-filter-10)"/>
                </svg>
                <div className="liquid-content">
                  <h3>Cybernetic Wave</h3>
                  <p>Interactive Turbulence</p>
                </div>
              </div>
              <script>
                // Liquid Distortion Animation logic
                (function() {
                  const liqCard = document.querySelector('#preview-10 .liquid-card');
                  const dispMap = document.querySelector('#preview-10 .disp-map');
                  if (liqCard && dispMap) {
                    let animFrame;
                    let scaleVal = 0;
                    let targetScale = 0;
                    
                    liqCard.addEventListener('mouseenter', () => { targetScale = 25; });
                    liqCard.addEventListener('mouseleave', () => { targetScale = 0; });
                    
                    function animateLiquid() {
                      scaleVal += (targetScale - scaleVal) * 0.1;
                      dispMap.setAttribute('scale', scaleVal);
                      animFrame = requestAnimationFrame(animateLiquid);
                    }
                    animateLiquid();
                  }
                })();
              </script>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-10">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 11. AURORA GRADIENT HOVER BUTTON */}
          <div className="hover-card">
            <div className="hover-info">
              <h2>Aurora Gradient Hover Button</h2>
              <p>A button surrounded by glowing fluid aurora colors on hover.</p>
            </div>
            <div className="component-preview" id="preview-11">
              <button className="aurora-btn">
                <span className="aurora-glow"></span>
                <span className="aurora-glow"></span>
                <span className="aurora-glow"></span>
                <span className="aurora-btn-text">Initiate Aurora</span>
              </button>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-11">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 12. TILT GLASSMORPHISM PANEL */}
          <div className="hover-card">
            <div className="hover-info">
              <h2>Tilt Glassmorphism Panel</h2>
              <p>A frosted glass panel featuring specular reflection highlights.</p>
            </div>
            <div className="component-preview" id="preview-12">
              <div className="glass-tilt-container">
                <div className="glass-tilt-card" id="glassTiltCard">
                  <div className="glass-shine"></div>
                  <div className="glass-content">
                    <span className="glass-badge">PREMIUM</span>
                    <h3>Specular Glass</h3>
                    <p>Realistic light reflection mapping.</p>
                  </div>
                </div>
              </div>
              <script>
                (function() {
                  const gCard = document.getElementById('glassTiltCard');
                  if (gCard) {
                    const gShine = gCard.querySelector('.glass-shine');
                    gCard.addEventListener('mousemove', (e) => {
                      const rect = gCard.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;
                      
                      const rotateX = ((y - centerY) / centerY) * -12;
                      const rotateY = ((x - centerX) / centerX) * 12;
                      
                      gCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                      
                      const shineX = (x / rect.width) * 100;
                      const shineY = (y / rect.height) * 100;
                      gShine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 60%)`;
                    });
                    gCard.addEventListener('mouseleave', () => {
                      gCard.style.transform = `rotateX(0deg) rotateY(0deg)`;
                      gShine.style.background = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)`;
                    });
                  }
                })();
              </script>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-12">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 13. CURSOR TRAIL HOVER EFFECT */}
          <div className="hover-card">
            <div className="hover-info">
              <h2>Cursor Trail Hover Effect</h2>
              <p>A interactive canvas container capturing neon particle cursor trails.</p>
            </div>
            <div className="component-preview" id="preview-13" style="position: relative; overflow: hidden; min-height: 220px; width: 100%;">
              <div className="trail-card" id="trailCardBox">
                <canvas id="trailCanvas"></canvas>
                <div className="trail-content">Move cursor here</div>
              </div>
              <script>
                (function() {
                  const trailBox = document.getElementById('trailCardBox');
                  const canvas = document.getElementById('trailCanvas');
                  if (trailBox && canvas) {
                    const ctx = canvas.getContext('2d');
                    let particles = [];
                    
                    function resizeCanvas() {
                      canvas.width = trailBox.clientWidth;
                      canvas.height = trailBox.clientHeight;
                    }
                    resizeCanvas();
                    const ro = new ResizeObserver(() => resizeCanvas());
                    ro.observe(trailBox);
                    
                    class Particle {
                      constructor(x, y) {
                        this.x = x;
                        this.y = y;
                        this.size = Math.random() * 3 + 1;
                        this.speedX = (Math.random() - 0.5) * 1.5;
                        this.speedY = (Math.random() - 0.5) * 1.5;
                        this.alpha = 1;
                        const colors = ['#a855f7', '#06b6d4', '#ec4899'];
                        this.color = colors[Math.floor(Math.random() * colors.length)];
                      }
                      update() {
                        this.x += this.speedX;
                        this.y += this.speedY;
                        this.alpha -= 0.02;
                      }
                      draw() {
                        ctx.save();
                        ctx.globalAlpha = this.alpha;
                        ctx.beginPath();
                        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                        ctx.fillStyle = this.color;
                        ctx.shadowBlur = 8;
                        ctx.shadowColor = this.color;
                        ctx.fill();
                        ctx.restore();
                      }
                    }
                    
                    trailBox.addEventListener('mousemove', (e) => {
                      const rect = trailBox.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      for (let i = 0; i < 2; i++) {
                        particles.push(new Particle(x, y));
                      }
                    });
                    
                    function handleParticles() {
                      ctx.clearRect(0, 0, canvas.width, canvas.height);
                      for (let i = 0; i < particles.length; i++) {
                        particles[i].update();
                        particles[i].draw();
                        if (particles[i].alpha <= 0) {
                          particles.splice(i, 1);
                          i--;
                        }
                      }
                      requestAnimationFrame(handleParticles);
                    }
                    handleParticles();
                  }
                })();
              </script>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-13">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 14. MORPHING ICON HOVER CARD */}
          <div className="hover-card">
            <div className="hover-info">
              <h2>Morphing Icon Hover Card</h2>
              <p>Seamless SVG shape morph transition from octagon to shield on hover.</p>
            </div>
            <div className="component-preview" id="preview-14">
              <div className="morph-card">
                <div className="morph-svg-wrapper">
                  <svg viewBox="0 0 100 100" className="morph-svg">
                    <path className="morph-path" d="M30,10 L70,10 L90,30 L90,70 L70,90 L30,90 L10,70 L10,30 Z" />
                  </svg>
                  <i className="fa-solid fa-shield-halved morph-icon"></i>
                </div>
                <div className="morph-content">
                  <h3>Quantum Security</h3>
                  <p>Shield engaged</p>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-14">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 15. NEON SWEEP CARD */}
          <div className="hover-card">
            <div className="hover-info">
              <h2>Neon Sweep Card</h2>
              <p>A moving highlight beam glides across the surface on hover.</p>
            </div>
            <div className="component-preview" id="preview-15">
              <div className="neon-sweep-card">
                <span className="sweep-tag">Premium</span>
                <h3>Neon Sweep</h3>
                <p>Hover to send a light streak across the card.</p>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-15">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 16. SLIDE REVEAL CARD */}
          <div className="hover-card">
            <div className="hover-info">
              <h2>Slide Reveal Card</h2>
              <p>The front layer slides away to reveal a deeper panel underneath.</p>
            </div>
            <div className="component-preview" id="preview-16">
              <div className="slide-reveal-card">
                <div className="slide-face slide-front">
                  <i className="fa-solid fa-layer-group"></i>
                  <h3>Workspace Sync</h3>
                  <p>Lift the cover to reveal the payload.</p>
                </div>
                <div className="slide-face slide-back">
                  <span className="slide-stat">24%</span>
                  <p>Hover state unlocked</p>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-16">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 17. PRISM GLOW BUTTON */}
          <div className="hover-card">
            <div className="hover-info">
              <h2>Prism Glow Button</h2>
              <p>A layered button that blooms with color and depth on hover.</p>
            </div>
            <div className="component-preview" id="preview-17">
              <button className="prism-btn">
                <span className="prism-btn-text">Activate Prism</span>
                <span className="prism-btn-ripple"></span>
              </button>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-17">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 18. ORBIT HOVER TILE */}
          <div className="hover-card">
            <div className="hover-info">
              <h2>Orbit Hover Tile</h2>
              <p>Concentric rings spin and glow around the center icon.</p>
            </div>
            <div className="component-preview" id="preview-18">
              <div className="orbit-tile">
                <div className="orbit-ring orbit-ring-one"></div>
                <div className="orbit-ring orbit-ring-two"></div>
                <div className="orbit-core">
                  <i className="fa-solid fa-satellite-dish"></i>
                  <span>Signal</span>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-18">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 19. CORNER RIBBON CARD */}
          <div className="hover-card">
            <div className="hover-info">
              <h2>Corner Ribbon Card</h2>
              <p>A crisp ribbon tag swings into view with a soft shadow lift.</p>
            </div>
            <div className="component-preview" id="preview-19">
              <div className="ribbon-card">
                <span className="ribbon-tag">New</span>
                <div className="ribbon-copy">
                  <h3>Launch Ready</h3>
                  <p>Hover to reveal the corner accent.</p>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-19">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
        </section>
      
        {/* ================= FOOTER ================= */}
        <footer className="site-footer">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <i className="fa-solid fa-hexagon-nodes"></i>
                <span>UIverse</span>
              </div>
              <p>Build modern, reusable UI components with clean HTML, CSS, and JavaScript.</p>
              <div className="footer-socials">
                <a href="#"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Explore</h4>
              <ul>
                <li><a href="button.html">Buttons</a></li>
                <li><a href="navbar.html">Navbars</a></li>
                <li><a href="cards.html">Cards</a></li>
                <li><a href="inputs.html">Inputs</a></li>
                <li><a href="forms.html">Forms</a></li>
              </ul>
            </div>
      
            <div className="footer-links">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Contribute</a></li>
                <li><a href="#">GitHub Repo</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
      
            <div className="footer-links">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">License</a></li>
              </ul>
            </div>
      
            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <p>Get notified when new components drop.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="your@email.com" />
                <button type="button">Subscribe</button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2026 UIverse. Made with <i className="fa-solid fa-heart heart"></i> for developers worldwide.</p>
          </div>
        </footer>
      
      </main>
    </>
  );
}
