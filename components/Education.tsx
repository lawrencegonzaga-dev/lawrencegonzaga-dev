import { education, educationLead } from "@/data/education";

export default function Education() {
  return (
    <section id="education" data-reveal>
      <div className="wrap">
        <div className="eyebrow">Education</div>
        <h2 className="sec-title">
          Academic <span className="accent">foundations.</span>
        </h2>
        <p className="sec-lead">{educationLead}</p>
        <div className="exp-list">
          {education.map((edu) => (
            <article className="exp-entry" key={edu.school}>
              <h3>{edu.degree}</h3>
              <div className="exp-company">{edu.school}</div>
              <p className="exp-summary">{edu.graduation}</p>
              <h4 className="exp-note">Relevant Focus</h4>
              <ul>
                {edu.focus.map((item) => (
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
