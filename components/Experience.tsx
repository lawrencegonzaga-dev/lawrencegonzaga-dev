import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" data-reveal>
      <div className="wrap">
        <div className="eyebrow">Experience</div>
        <h2 className="sec-title">
          Where I&apos;ve <span className="accent">built.</span>
        </h2>
        <div className="exp-list">
          {experience.map((job) => (
            <article className="exp-entry" key={job.company}>
              <h3>{job.role}</h3>
              <div className="exp-company">{job.company}</div>
              <p className="exp-summary">{job.summary}</p>
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
