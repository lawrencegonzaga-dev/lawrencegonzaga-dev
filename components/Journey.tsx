export default function Journey(){
  return (
    <section id="journey">
      <div className="wrap">
        <div className="eyebrow">My Journey</div>
        <h2 className="sec-title">Explore <span className="accent">→</span> Build <span className="accent">→</span> Struggle <span className="accent">→</span> Refine <span className="accent">→</span> Ship</h2>
        <div className="journey">
          <div className="journey-step">
            <div className="journey-label">Exploration</div>
            <p>I started by exploring different areas of computer science — web development, programming, cybersecurity, AI, databases, and more.</p>
          </div>
          <div className="journey-step">
            <div className="journey-label">Building</div>
            <p>Instead of learning technologies in isolation, I started turning what I learned into projects and experiments.</p>
          </div>
          <div className="journey-step">
            <div className="journey-label">Complexity</div>
            <p>Working across different technologies taught me that building software isn't just about knowing syntax. Architecture, debugging, UX, security, and maintainability matter.</p>
          </div>
          <div className="journey-step">
            <div className="journey-label">Refinement</div>
            <p>I began becoming more intentional about what I learn and why I learn it.</p>
          </div>
          <div className="journey-step now">
            <div className="journey-label">Now</div>
            <p>I'm focused on becoming a job-ready software developer and building projects that demonstrate real engineering ability.</p>
          </div>
        </div>
      </div>
    </section>
  )
}