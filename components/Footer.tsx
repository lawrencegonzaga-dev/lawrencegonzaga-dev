export default function Footer(){
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="eyebrow">Contact</div>
        <h2>Let's build <span className="accent">something.</span></h2>
        <p className="msg">I'm currently looking for opportunities where I can contribute, learn from experienced developers, and grow as a software engineer.</p>
        <div className="contact-links">
          <a href="mailto:lbgonzaga@addu.edu.ph" className="btn btn-primary">Email Me</a>
          <a href="https://github.com/lawrencegonzaga-dev" className="btn btn-ghost">GitHub</a>
          <a href="https://linkedin.com/in/lawrence-gonzaga" className="btn btn-ghost">LinkedIn</a>
          <a href="#" className="btn btn-ghost">Download CV</a>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Lawrence Gonzaga</span>
          <span>Built with React → shipped with intent</span>
        </div>
      </div>
    </footer>
  )
}