import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Boxes,
  Bug,
  CheckCircle2,
  ExternalLink,
  Github,
  Layers,
  Lightbulb,
  Sparkles,
  Wrench,
} from "lucide-react";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { projects } from "@/data/projects";
import { findProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = findProjectBySlug(slug);
  if (!project) {
    return { title: "Project not found | Lawrence Gonzaga" };
  }
  return {
    title: `${project.title} | Lawrence Gonzaga`,
    description: project.solution,
  };
}

function SectionHeading({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <h2 className="case-section-heading">
      <span className="case-section-icon" aria-hidden="true">
        {icon}
      </span>
      {label}
    </h2>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <PageShell>
      <article className="case-wrap">
        <Link href="/#projects" className="case-back">
          <ArrowLeft size={15} aria-hidden="true" /> Back to Projects
        </Link>

        <header className="case-hero" data-reveal>
          <p className="eyebrow">Project Case Study</p>
          <h1 className="case-title">{project.title}</h1>
          <p className="case-subtitle">{project.subtitle}</p>

          <div className="case-stack">
            {project.stack.map((tech) => (
              <span className="chip" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className="case-actions">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Github size={15} aria-hidden="true" /> View Repository
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <ExternalLink size={15} aria-hidden="true" /> Live Demo
              </a>
            )}
          </div>
        </header>

        <div className="case-shot" data-reveal>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt ?? `${project.title} screenshot`}
              width={1200}
              height={700}
              className="case-shot-img"
            />
          ) : (
            <div className="case-shot-placeholder" aria-hidden="true">
              <span>{project.title}</span>
              <p>screenshot pending — add public/projects/{project.slug}.webp</p>
            </div>
          )}
        </div>

        <section className="case-section" data-reveal>
          <SectionHeading icon={<BookOpen size={18} />} label="Overview" />
          <p className="case-body">{project.overview}</p>
        </section>

        <section className="case-section" data-reveal>
          <div className="case-split">
            <div className="case-card problem">
              <h3 className="case-card-title">
                <Bug size={16} aria-hidden="true" /> Problem
              </h3>
              <p className="case-card-body">{project.problem}</p>
            </div>
            <div className="case-card solution">
              <h3 className="case-card-title">
                <Lightbulb size={16} aria-hidden="true" /> Solution
              </h3>
              <p className="case-card-body">{project.solution}</p>
            </div>
          </div>
        </section>
        <section className="case-section" data-reveal>
          <SectionHeading icon={<Layers size={18} />} label="Architecture" />
          <ul className="case-list">
            {project.architecture.map((item) => (
              <li key={item} className="case-list-item">
                <span className="case-list-dot" aria-hidden="true"></span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="case-section" data-reveal>
          <SectionHeading icon={<Sparkles size={18} />} label="Features" />
          <ul className="case-features">
            {project.features.map((feature) => (
              <li className="case-feature" key={feature}>
                <CheckCircle2
                  size={16}
                  aria-hidden="true"
                  className="case-feature-tick"
                />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="case-section" data-reveal>
          <SectionHeading icon={<Wrench size={18} />} label="Technical Decisions" />
          <div className="case-decisions">
            {project.technicalDecisions.map((decision) => (
              <div className="case-card decision" key={decision.slice(0, 48)}>
                <p className="case-card-body">{decision}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="case-section" data-reveal>
          <SectionHeading icon={<Boxes size={18} />} label="Challenges &amp; Solutions" />
          <div className="case-challenges">
            {project.challenges.map((challenge) => (
              <div className="case-card challenge" key={challenge.problem}>
                <h3 className="case-card-title">
                  <Bug size={15} aria-hidden="true" /> Challenge
                </h3>
                <p className="case-card-body">{challenge.problem}</p>
                <h3 className="case-card-title fix">
                  <CheckCircle2 size={15} aria-hidden="true" /> Fix
                </h3>
                <p className="case-card-body">{challenge.solution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="case-final" data-reveal>
          <h2>Explore {project.title}</h2>
          <p>Read the code, open the app, or start a conversation.</p>
          <div className="case-actions">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Github size={15} aria-hidden="true" /> View Repository
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <ExternalLink size={15} aria-hidden="true" /> Live Demo
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            )}
            <Link href="/contact" className="btn btn-ghost">
              Contact Me
            </Link>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
