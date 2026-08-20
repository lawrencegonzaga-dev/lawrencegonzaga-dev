import {projects} from "@/data/projects";

export default function Projects(){
  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow">Selected Projects</div>
        <h2 className="sec-title">Range, not <span className="accent">repetition.</span></h2>

        {projects.map((project, i) => (
          <div className="project" key={project.slug}>
            <div className="project-head">
              <span className="project-idx">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3>{project.title}</h3>
            <div className="stack">{project.stack.join(" / ")}</div>
            <p className="desc">{project.solution}</p>
            <div className="details">
              <span>Problem → Architecture → Features</span>
              <span>Technical Decisions</span>
              <span>Challenges & Fixes</span>
              <span>Deployed</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}