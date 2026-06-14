// React import not required with new JSX transform

export default function About() {
  return (
    <section id="about" className="about-section scroll-reveal">
      <div className="section-badge-container">
        <div className="section-badge"><span className="badge-dot"></span> About Me</div>
      </div>
      <div className="section-header-compact">
        <h2 className="section-title">Developer who turns <span className="text-gradient">complex problems</span> into clean software.</h2>
        <p className="section-desc">I am a CSE student in my 3rd year at Technocrats Institute of Technology – Excellence, Bhopal. I specialize in backend architecture and full-stack web applications. I enjoy engineering clean API systems, optimizing relational/non-relational schemas, and crafting smooth client interfaces.</p>
      </div>
      
      <div className="about-grid">
        {/* Left Column Card */}
        <div className="about-info-card">
          <span className="card-badge"><i className="fa-solid fa-sparkles"></i> What I do</span>
          <h3 className="card-heading">Building modern web applications with <span className="text-gradient">purpose</span>.</h3>
          <p className="card-text">From building secure JWT-protected APIs to crafting responsive React layouts, I focus on delivering functional features end-to-end. I design schemas, solve algorithms, and follow clean code rules for reliable software delivery.</p>
          <ul className="card-bullets">
            <li><i className="fa-solid fa-terminal"></i> Full-Stack Web Development (MERN Stack)</li>
            <li><i className="fa-solid fa-terminal"></i> Secure REST API Design & Integration</li>
            <li><i className="fa-solid fa-terminal"></i> Data Structures & Algorithm Optimization</li>
            <li><i className="fa-solid fa-terminal"></i> MongoDB & MySQL Schema Engineering</li>
          </ul>
        </div>
        
        {/* Right Column Grid of 4 Small Cards */}
        <div className="about-features-grid">
          <div className="feature-card">
            <div className="feature-icon bg-frontend"><i className="fa-solid fa-laptop-code"></i></div>
            <h4 className="feature-title">Frontend Engineering</h4>
            <p className="feature-desc">Building modular React applications with clean styles and hooks.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon bg-backend"><i className="fa-solid fa-gears"></i></div>
            <h4 className="feature-title">Backend Architecture</h4>
            <p className="feature-desc">Engineering layered Node.js/Express APIs with robust validation.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon bg-data"><i className="fa-solid fa-database"></i></div>
            <h4 className="feature-title">Database Design</h4>
            <p className="feature-desc">Structuring efficient queries, indexes, and collections.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon bg-devops"><i className="fa-solid fa-code-branch"></i></div>
            <h4 className="feature-title">Logic & Algorithms</h4>
            <p className="feature-desc">Writing performant code, testing edge cases, and debugging.</p>
          </div>
        </div>
      </div>
      
      {/* Bottom CTA Card */}
      <div className="about-cta-card">
        <div className="cta-inner">
          <div className="cta-icon-container"><i className="fa-solid fa-rocket"></i></div>
          <div className="cta-text-container">
            <h4 className="cta-heading">Ready to build your next full-stack application?</h4>
            <p className="cta-sub">Let's collaborate to build something fast, beautiful, and secure.</p>
          </div>
          <a href="#contact" className="btn-cta-start"><i className="fa-solid fa-envelope"></i> Let's Collaborate</a>
        </div>
      </div>
    </section>
  );
}
