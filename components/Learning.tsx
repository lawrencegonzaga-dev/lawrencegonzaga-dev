export default function Learning(){
  return (
    <section id="learning">
      <div className="wrap">
        <div className="eyebrow">2026</div>
        <h2 className="sec-title">What I'm currently <span className="accent">learning.</span></h2>
        <div className="learn-grid">
          <div className="learn-card">
            <h4>Deepening</h4>
            <ul><li>React</li><li>TypeScript</li><li>Next.js</li><li>Node.js</li></ul>
          </div>
          <div className="learn-card">
            <h4>Building</h4>
            <ul><li>Full-stack apps</li><li>APIs</li><li>Authentication</li><li>Databases</li></ul>
          </div>
          <div className="learn-card">
            <h4>Improving</h4>
            <ul><li>System design</li><li>Code architecture</li><li>Testing</li><li>Deployment</li></ul>
          </div>
          <div className="learn-card explore">
            <h4>Exploring</h4>
            <ul><li>Docker</li><li>AWS</li><li>CI/CD</li></ul>
          </div>
        </div>
      </div>
    </section>
  )
}