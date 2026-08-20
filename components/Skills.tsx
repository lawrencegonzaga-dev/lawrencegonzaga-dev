export default function Skills(){
  return (
    <section id="skills">
      <div className="wrap">
        <div className="eyebrow">Technical Skills</div>
        <h2 className="sec-title">What I can <span className="accent">build with.</span></h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <div className="tags">
              <span className="tag">React</span><span className="tag">Next.js</span><span className="tag">TypeScript</span>
              <span className="tag">JavaScript</span><span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">Tailwind CSS</span>
            </div>
          </div>
          <div className="skill-card">
            <h3>Backend</h3>
            <div className="tags">
              <span className="tag">Node.js</span><span className="tag">Express</span><span className="tag">REST APIs</span>
            </div>
          </div>
          <div className="skill-card">
            <h3>Databases</h3>
            <div className="tags">
              <span className="tag">PostgreSQL</span><span className="tag">MySQL</span>
            </div>
          </div>
          <div className="skill-card">
            <h3>Engineering</h3>
            <div className="tags">
              <span className="tag">Git</span><span className="tag">GitHub</span><span className="tag">API Integration</span>
              <span className="tag">Authentication</span><span className="tag">Debugging</span>
            </div>
          </div>
          <div className="skill-card wide">
            <h3>Additional Experience</h3>
            <div className="tags">
              <span className="tag">Cybersecurity</span><span className="tag">Machine Learning</span><span className="tag">Python</span>
              <span className="tag">Java</span><span className="tag">Three.js</span><span className="tag">React Three Fiber</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}