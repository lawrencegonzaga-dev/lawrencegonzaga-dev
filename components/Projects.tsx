import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { featuredProjects } from "@/lib/projects";

export default function Projects() {
  const featured = featuredProjects();

  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow">Featured Projects</div>
        <h2 className="sec-title">
          Selected <span className="accent">Projects</span>
        </h2>
        <p className="sec-lead">
          Real problems I&apos;ve turned into working software — selected work
          demonstrating frontend engineering, product thinking, full-stack integration,
          and reliable application behavior.
        </p>
      </div>

      <div className="wrap projects-grid">
        {featured.map((project) => (
          <article className="project-card" key={project.slug} data-reveal>
            <div className="card-media">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? `${project.title} screenshot`}
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 1020px) 50vw, 33vw"
                  className="card-image"
                />
              ) : (
                <div className="card-media-placeholder" aria-hidden="true">
                  <span>{project.title}</span>
                  <p>screenshot pending — see case study</p>
                </div>
              )}
            </div>
            <div className="card-body">
              <div className="card-head">
                <div>
                  <h3>{project.title}</h3>
                  <p className="card-subtitle">{project.subtitle}</p>
                </div>
              </div>

              <div className="card-block">
                <p className="card-label">Problem solved</p>
                <p className="card-text">{project.cardProblem}</p>
              </div>

              <div className="card-block">
                <p className="card-label">What I delivered</p>
                <p className="card-text">{project.cardDelivered}</p>
              </div>

              <div className="card-stack">{project.stack.join(" · ")}</div>

              <div className="card-links">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink size={14} aria-hidden="true" /> Live Demo
                  </a>
                )}
                <Link href={`/projects/${project.slug}`} className="btn btn-ghost">
                  Case Study <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  aria-label={`${project.title} repository on GitHub`}
                >
                  <Github size={14} aria-hidden="true" /> GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
