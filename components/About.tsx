import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" data-reveal>
      <div className="wrap">
        <div className="eyebrow">About</div>
        <h2 className="sec-title">
          About <span className="accent">me</span>
        </h2>
        <div className="about-text">
          {profile.bio.split("\n\n").map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
