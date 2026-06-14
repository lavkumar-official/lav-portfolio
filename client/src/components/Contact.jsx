import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:lavtiwariofficials@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section scroll-reveal">
      <div className="section-badge-container">
        <div className="section-badge"><span className="badge-dot"></span> Contact</div>
      </div>
      <div className="section-header-compact">
        <h2 className="section-title">Let's <span className="text-gradient">Connect & Work</span> Together</h2>
        <p className="section-desc">Reach out for SDE opportunities, internship projects, or frontend/backend collaborations.</p>
      </div>
      
      <div className="contact-card-reference">
        <div className="contact-details-box">
          <h3>Let's collaborate on your next product!</h3>
          <p>I am looking for developer opportunities. Feel free to contact me directly or leave a message in the contact form.</p>
          <div className="contact-meta-list">
            <div className="contact-meta-item">
              <div className="meta-icon"><i className="fa-solid fa-envelope"></i></div>
              <div className="meta-text">
                <span className="meta-label">Email</span>
                <a href="mailto:lavtiwariofficials@gmail.com" className="meta-val">lavtiwariofficials@gmail.com</a>
              </div>
            </div>
            <div className="contact-meta-item">
              <div className="meta-icon"><i className="fa-solid fa-phone"></i></div>
              <div className="meta-text">
                <span className="meta-label">Phone</span>
                <a href="tel:+918797855667" className="meta-val">+91 8797855667</a>
              </div>
            </div>
            <div className="contact-meta-item">
              <div className="meta-icon"><i className="fa-solid fa-map-pin"></i></div>
              <div className="meta-text">
                <span className="meta-label">Location</span>
                <span className="meta-val">Bhopal, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-box">
          {status !== 'success' ? (
            <form onSubmit={handleSubmit} className="ref-contact-form">
              <div className="ref-form-group">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder=" " 
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="ref-form-group">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder=" " 
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="ref-form-group">
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  placeholder=" " 
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
                <label htmlFor="subject">Subject</label>
              </div>
              <div className="ref-form-group">
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required 
                  placeholder=" " 
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                ></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              {status === 'error' && (
                <p style={{ color: 'red', fontSize: '0.85rem' }}>Something went wrong. Please try again later.</p>
              )}
              <button 
                type="submit" 
                className="btn btn-primary btn-submit-ref" 
                id="submit-contact-form"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <span>Sending...</span> <i className="fa-solid fa-spinner fa-spin"></i>
                  </>
                ) : (
                  <>
                    <span>Send Message</span> <i className="fa-solid fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div id="form-success" className="ref-form-success">
              <i className="fa-solid fa-circle-check"></i>
              <p>Thank you! Your message has been sent successfully. I will get back to you shortly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
