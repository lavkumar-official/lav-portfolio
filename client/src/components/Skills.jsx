export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: "fa-solid fa-code",
      skills: [
        { name: "Java", icon: "fa-brands fa-java", color: "#f89820" },
        { name: "JavaScript", icon: "fa-brands fa-js", color: "#f7df1e" }
      ]
    },
    {
      category: "Frontend",
      icon: "fa-solid fa-layer-group",
      skills: [
        { name: "React.js", icon: "fa-brands fa-react", color: "#61dafb" },
        { name: "Tailwind CSS", icon: "fa-solid fa-wind", color: "#38bdf8" },
        { name: "HTML5", icon: "fa-brands fa-html5", color: "#e34f26" },
        { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#1572b6" }
      ]
    },
    {
      category: "Backend",
      icon: "fa-solid fa-server",
      skills: [
        { name: "Node.js", icon: "fa-brands fa-node", color: "#339933" },
        { name: "Express.js", icon: "fa-brands fa-node-js", color: "#fff" },
        { name: "RESTful APIs", icon: "fa-solid fa-network-wired", color: "#00a1ff" }
      ]
    },
    {
      category: "Databases",
      icon: "fa-solid fa-database",
      skills: [
        { name: "MongoDB", icon: "fa-solid fa-leaf", color: "#47a248" },
        { name: "MySQL", icon: "fa-solid fa-database", color: "#00758f" }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: "fa-solid fa-screwdriver-wrench",
      skills: [
        { name: "Git", icon: "fa-brands fa-git-alt", color: "#f34f29" },
        { name: "GitHub", icon: "fa-brands fa-github", color: "#fff" },
        { name: "Postman", icon: "fa-solid fa-paper-plane", color: "#ff6c37" },
        { name: "VS Code", icon: "fa-solid fa-laptop-code", color: "#007acc" }
      ]
    },
    {
      category: "Core CS",
      icon: "fa-solid fa-microchip",
      skills: [
        { name: "Data Structures & Algorithms", icon: "fa-solid fa-diagram-project", color: "#a5b4fc" },
        { name: "OOP", icon: "fa-solid fa-cubes", color: "#fb7185" },
        { name: "DBMS", icon: "fa-solid fa-server", color: "#fde047" },
        { name: "Operating Systems", icon: "fa-brands fa-linux", color: "#fca5a5" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section scroll-reveal">
      <div className="section-badge-container">
        <div className="section-badge"><span className="badge-dot"></span> Capabilities</div>
      </div>
      <div className="section-header-compact">
        <h2 className="section-title">My Tech <span className="text-gradient">Arsenal</span></h2>
        <p className="section-desc">Technologies and tools I leverage to build scalable, high-performance applications.</p>
      </div>

      <div className="bento-skills-grid">
        {skillCategories.map((group, index) => (
          <div key={index} className="bento-skill-box">
            <div className="bento-box-header">
              <i className={group.icon}></i>
              <h3>{group.category}</h3>
            </div>
            <div className="bento-skills-list">
              {group.skills.map((skill, i) => (
                <div key={i} className="bento-skill-item">
                  <div className="bento-skill-icon" style={{ '--skill-color': skill.color }}>
                    <i className={skill.icon}></i>
                  </div>
                  <span className="bento-skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
