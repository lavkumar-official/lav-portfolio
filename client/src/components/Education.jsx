// React import not required with new JSX transform

export default function Education() {
  const educationTimeline = [
    {
      duration: '2023 - 2027',
      title: 'B.Tech in Computer Science & Engineering',
      institution: 'Technocrats Institute of Technology – Excellence, Bhopal',
      desc: 'Focusing on Algorithms, Database Systems, Operating Systems, OOPs, and Software Engineering. Current CGPA: 7.7',
      side: 'right'
    },
    {
      duration: '2021 - 2023',
      title: 'Senior Secondary School (BSEB)',
      institution: 'Gandak High School, Tarwara',
      desc: 'Completed 12th Board examinations with a focus on Mathematics, Physics, and Chemistry.',
      side: 'left'
    },
    {
      duration: '2019 - 2021',
      title: 'Secondary School (BSEB)',
      institution: 'Gandak High School, Tarwara',
      desc: 'Completed 10th Board examinations with high academic standing.',
      side: 'right'
    }
  ];

  return (
    <section id="education" className="education-section scroll-reveal">
      <div className="section-badge-container">
        <div className="section-badge"><span className="badge-dot"></span> Education</div>
      </div>
      <div className="section-header-compact">
        <h2 className="section-title">My Academic <span className="text-gradient">Timeline</span></h2>
        <p className="section-desc">Timeline of my schooling and ongoing university studies.</p>
      </div>
      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {educationTimeline.map((edu, index) => (
          <div key={index} className={`timeline-block block-${edu.side}`}>
            <div className="timeline-pointer-dot"></div>
            <div className="timeline-card">
              <span className="role-duration"><i className="fa-solid fa-graduation-cap"></i> {edu.duration}</span>
              <h3 className="role-title">{edu.title}</h3>
              <h4 className="company-name text-gradient"><i className="fa-solid fa-school"></i> {edu.institution}</h4>
              <p className="role-desc">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
