import { useState, useEffect } from 'react';
import avatarImg from '../assets/developer_avatar.jpg';
import resumePdf from '../assets/Lav_Kumar_Resume.pdf';

export default function Hero() {
  const titles = [
    'Full-Stack Developer',
    'Software Engineer',
    'Mobile App Developer',
    'Cloud Enthusiast'
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(100);

  /*
    Typing effect: intentionally manages timing with internal state.
    Disable exhaustive-deps for this effect because we control updates via state variables.
  */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypingText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        setTypingSpeed(50);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypingText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      setTimeout(() => {
        setTypingSpeed(2000);
        setIsDeleting(true);
      }, 0);
    } else if (isDeleting && charIndex === 0) {
      setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((titleIndex + 1) % titles.length);
        setTypingSpeed(500);
      }, 0);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badges">
            <div className="badge-item">
                <span className="pulse-dot"></span> Open to opportunities
            </div>
            <div className="badge-item">
              <i className="fa-solid fa-location-dot"></i> Bhopal, India
            </div>
            <div className="badge-item">
              <i className="fa-solid fa-graduation-cap"></i> CSE Student
            </div>
          </div>
          <h1 className="hero-title">Hi, I'm <span className="text-gradient">Lav Kumar</span></h1>
          <h2 className="hero-subtitle">I'm a <span id="typing-text">{typingText}</span><span className="typed-cursor">|</span></h2>
          <p className="hero-description">Pre-final year Computer Science & Engineering undergraduate building scalable web products, writing optimized backend schemas, and solving complex DSA challenges.</p>
          <div className="hero-actions">
            <a href={resumePdf} download="Lav_Kumar_Resume.pdf" className="btn btn-primary"><i className="fa-solid fa-download"></i> Download Resume</a>
            <a href="#projects" className="btn btn-secondary">View Projects <i className="fa-solid fa-arrow-right"></i></a>
            <a href="#contact" className="btn btn-tertiary"><i className="fa-solid fa-envelope"></i> Contact Me</a>
          </div>
          <div className="hero-socials">
            <span>Find me on</span>
            <a href="https://github.com/lavkumar-official" target="_blank" rel="noreferrer noopener" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
            <a href="https://linkedin.com/in/lavkumarofficial" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://x.com/Lav_tiwari_" target="_blank" rel="noreferrer noopener" aria-label="Twitter/X"><i className="fa-brands fa-x"></i></a>
            <a href="https://www.lavtiwari.tech" target="_blank" rel="noreferrer noopener" aria-label="Website"><i className="fa-solid fa-globe"></i></a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="premium-profile-card">
            <div className="profile-glow"></div>
            <div className="profile-image-container">
              <div className="profile-sheen"></div>
              <img src={avatarImg} alt="Lav Kumar" className="profile-img" />
            </div>
            <div className="profile-code-badge">
               <i className="fa-solid fa-code"></i> Building scalable systems
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Counter/Stats Section */}
      <div className="hero-stats-grid scroll-reveal">
        <div className="stat-box">
          <span className="stat-number text-gradient">1+</span>
          <span className="stat-caption">Years Experience</span>
        </div>
        <div className="stat-box">
          <span className="stat-number text-gradient">10+</span>
          <span className="stat-caption">Projects Delivered</span>
        </div>
        <div className="stat-box">
          <span className="stat-number text-gradient">300+</span>
          <span className="stat-caption">DSA Problems Solved</span>
        </div>
      </div>
    </section>
  );
}
