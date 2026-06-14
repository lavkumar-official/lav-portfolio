// React import not required with new JSX transform

export default function Navbar({ theme, toggleTheme, activeSection, mobileMenuOpen, setMobileMenuOpen }) {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    // { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#hero" className="logo" id="logo-link">
          <span className="logo-icon"><i className={theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-rocket'}></i></span>
          Lav<span>.dev</span>
        </a>
        
        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="nav-menu">
          {navItems.map(item => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              className={`nav-link ${activeSection === item.id ? 'active-link' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <div className="nav-actions">
          <button 
            id="theme-toggle" 
            className="theme-btn" 
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <i className="fa-solid fa-circle-half-stroke"></i>
          </button>
          
          <a href="#contact" className="btn-hire-me">Hire Me</a>
          
          <button 
            className="mobile-menu-btn" 
            id="mobile-menu-toggle" 
            aria-label="Toggle navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
