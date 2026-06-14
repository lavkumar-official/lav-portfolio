import { useState, useEffect } from 'react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">&copy; 2026 Lav Kumar. All rights reserved.</p>
        <a 
          href="#hero" 
          className={`back-to-top-ref ${showBackToTop ? '' : 'hidden'}`} 
          aria-label="Scroll to Top" 
          id="back-to-top-btn"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </footer>
  );
}
