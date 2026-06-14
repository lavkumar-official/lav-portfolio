import { useState, useEffect } from 'react';
import githubCertImg from '../assets/github.jpg';
import azureCertImg from '../assets/Lav_Azure_AZ900.png';
import nptelCertImg from '../assets/NPTEL_Cloud.png';
import googleCertImg from '../assets/Google_Cloud.png';

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 800);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const certificationsList = [
    {
      icon: 'fa-brands fa-github',
      title: 'GitHub Foundations',
      desc: 'Demonstrates proficiency in version control, collaborative workflows, actions, and project tracking.',
      issuer: 'GitHub',
      image: githubCertImg,
      color: '#2ea44f'
    },
    {
      icon: 'fa-solid fa-cloud',
      title: 'Azure Fundamentals',
      desc: 'Earned Microsoft AZ-900 validating core cloud architecture, storage, and IAM models.',
      issuer: 'Microsoft',
      image: azureCertImg,
      color: '#0089d6'
    },
    {
      icon: 'fa-brands fa-google',
      title: 'Google Cloud Certified',
      desc: 'Demonstrated foundational knowledge of cloud concepts and Google Cloud products, services, and use cases.',
      issuer: 'Google',
      image: googleCertImg,
      color: '#ea4335'
    },
    {
      icon: 'fa-solid fa-award',
      title: 'NPTEL Elite',
      desc: 'Awarded Elite status in the Cloud Computing course led by Indian Institute of Technology professors.',
      issuer: 'IIT / NPTEL',
      image: nptelCertImg,
      color: '#ff9900'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === certificationsList.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificationsList.length - 1 : prev - 1));
  };

  return (
    <section id="certifications" className="certifications-section scroll-reveal">
      <div className="section-badge-container">
        <div className="section-badge"><span className="badge-dot"></span> Credentials</div>
      </div>
      <div className="section-header-compact">
        <h2 className="section-title">Certifications & <span className="text-gradient">Badges</span></h2>
        <p className="section-desc">Key technical certifications and competitive coding milestones earned.</p>
      </div>

      <div className={`projects-carousel-container ${isMobile ? 'mobile-carousel-active' : ''}`}>
        {isMobile && (
          <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Previous Certification">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
          </button>
        )}
        
        <div className="carousel-track-wrapper">
          <div 
            className="cert-showcase-grid"
            style={isMobile ? { transform: `translateX(-${currentIndex * 100}%)` } : {}}
          >
            {certificationsList.map((cert, index) => (
              <div 
                key={index} 
                className="cert-showcase-card"
                style={{ '--brand-color': cert.color }}
                onClick={() => window.open(cert.image, '_blank')}
              >
                <div className="cert-card-image-wrap">
                  <img src={cert.image} alt={cert.title} />
                  <div className="cert-hover-overlay">
                     <i className="fa-solid fa-expand"></i> View
                  </div>
                </div>
                
                <div className="cert-card-body">
                  <div className="cert-card-top">
                    <div className="cert-mini-icon"><i className={cert.icon}></i></div>
                    <span className="cert-issuer-name">{cert.issuer}</span>
                  </div>
                  <h3 className="cert-title-text">{cert.title}</h3>
                  <p className="cert-desc-text">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isMobile && (
          <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Next Certification">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
        )}
      </div>
    </section>
  );
}
