import { useState, useEffect } from 'react';
import proj1Img from '../assets/project_dashboard_mockup.png';
import proj2Img from '../assets/project_mobile_mockup.png';
import proj3Img from '../assets/interview_prep_mockup.png';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 800);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      img: proj1Img,
      type: "Full-Stack Application",
      title: "WasteChain – Industrial Waste Reuse Platform",
      desc: "A web platform designed to facilitate industrial waste reuse and material exchange between organizations. Includes JWT auth, role-based controls, collection schemas, and search indexing.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind"],
      github: "https://github.com/lavkumar-official",
      live: "https://www.lavtiwari.tech"
    },
    {
      img: proj2Img,
      type: "Search Engine Utility",
      title: "Hiring Search Tool",
      desc: "An interactive Boolean search tool built to assist SDE searchers in identifying matching recruitment and hiring managers. Integrated with Firebase DB and state-saving parameters.",
      tags: ["React.js", "Node.js", "Firebase", "Hooks", "Material UI"],
      github: "https://github.com/lavkumar-official",
      live: "https://www.lavtiwari.tech"
    },
    {
      img: proj3Img,
      type: "Web Application",
      title: "PrepMode - Interview Platform",
      desc: "A sleek, dark-themed interview preparation dashboard featuring coding challenge metrics, progress charts, and an interactive code editor UI for mastering Data Structures and Algorithms.",
      tags: ["React.js", "Chart.js", "Node.js", "Express"],
      github: "https://github.com/lavkumar-official",
      live: "https://www.lavtiwari.tech"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="projects-section scroll-reveal">
      <div className="section-badge-container">
        <div className="section-badge"><span className="badge-dot"></span> Projects</div>
      </div>
      <div className="section-header-compact">
        <h2 className="section-title">Featured <span className="text-gradient">Projects</span> I've Built</h2>
        <p className="section-desc">A selection of web platforms and developer utilities crafted from end to end.</p>
      </div>
      
      <div className={`projects-carousel-container ${isMobile ? 'mobile-carousel-active' : ''}`}>
        {isMobile && (
          <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Previous Project">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
          </button>
        )}
        
        <div className="carousel-track-wrapper">
          <div 
            className="projects-grid-reference"
            style={isMobile ? { transform: `translateX(-${currentIndex * 100}%)` } : {}}
          >
            {projects.map((proj, idx) => (
              <div key={idx} className="ref-project-card">
                <div className="ref-project-image-container">
                  <img src={proj.img} alt={proj.title} className="ref-project-img" />
                  <div className="ref-project-actions">
                    <a href={proj.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub Repository"><i className="fa-brands fa-github"></i></a>
                    <a href={proj.live} target="_blank" rel="noreferrer noopener" aria-label="Live Website"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                </div>
                <div className="ref-project-info">
                  <div className="ref-project-meta">
                    <span className="ref-project-type">{proj.type}</span>
                  </div>
                  <h3 className="ref-project-title">{proj.title}</h3>
                  <p className="ref-project-text">{proj.desc}</p>
                  <div className="ref-project-tags">
                    {proj.tags.map(tag => <span key={tag} className="ptag">{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isMobile && (
          <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Next Project">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
        )}
      </div>
    </section>
  );
}
