import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" data-reveal>
      <div className="wrap">
        <div className="eyebrow">Experience</div>
        <h2 className="sec-title">
          Professional <span className="accent">Experience</span>
        </h2>
        <p className="sec-lead">
          Contributing to real client software and production-oriented workflows.
        </p>
        <div className="exp-list">
          {experience.map((job) => (
            <article className="exp-entry" key={job.company}>
              <h3>{job.role}</h3>
              <div className="exp-company">
                {job.company} · {job.period}
              </div>
              <p className="exp-summary">{job.summary}</p>
              <h4 className="exp-note">{job.responsibilitiesHeading}</h4>
              <ul>
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
