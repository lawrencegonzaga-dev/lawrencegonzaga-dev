import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" data-reveal>
      <div className="wrap">
        <div className="eyebrow">Technical Skills</div>
        <h2 className="sec-title">
          What I <span className="accent">build with.</span>
        </h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tags">
                {group.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
