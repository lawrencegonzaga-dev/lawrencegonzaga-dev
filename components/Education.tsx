import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" data-reveal>
      <div className="wrap">
        <div className="eyebrow">Education</div>
        <h2 className="sec-title">
          Academic <span className="accent">foundations.</span>
        </h2>
        <div className="exp-list">
          {education.map((edu) => (
            <article className="exp-entry" key={edu.school}>
              <h3>{edu.degree}</h3>
              <div className="exp-company">{edu.school}</div>
              <p className="exp-summary">{edu.graduation}</p>
              <p className="exp-summary">
                Relevant coursework: {edu.coursework.join(", ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
