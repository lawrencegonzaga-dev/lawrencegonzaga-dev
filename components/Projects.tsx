"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
} from "lucide-react";
import { featuredProjects } from "@/lib/projects";

// Data-driven showcase carousel: adding a featured project object to
// data/projects.ts automatically renders a new card here. Native scrolling
// with CSS scroll-snap; buttons only assist keyboard/mouse users.
export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [index, setIndex] = useState(0);
  const featured = featuredProjects();

  const updateTrack = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".project-card");
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    setIndex(
      Math.max(0, Math.min(featured.length - 1, Math.round(track.scrollLeft / step))),
    );
    setAtStart(track.scrollLeft <= 4);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
  }, [featured.length]);

  useEffect(() => {
    updateTrack();
    window.addEventListener("resize", updateTrack);
    return () => window.removeEventListener("resize", updateTrack);
  }, [updateTrack]);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".project-card");
    const amount = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({
      left: amount * direction,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow">Featured Projects</div>
        <h2 className="sec-title">
          Built, shipped, <span className="accent">documented.</span>
        </h2>
        <div className="carousel-controls">
          <span className="carousel-counter" aria-hidden="true">
            <b>{String(index + 1).padStart(2, "0")}</b> /{" "}
            {String(featured.length).padStart(2, "0")}
          </span>
          <div className="carousel-nav">
            <button
              type="button"
              className="carousel-btn"
              aria-label="Previous project"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="carousel-btn"
              aria-label="Next project"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className="carousel" ref={trackRef} onScroll={updateTrack}>
        {featured.map((project) => (
          <article className="project-card" key={project.slug} data-reveal>
            <div className="card-media">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? `${project.title} screenshot`}
                  fill
                  sizes="(max-width: 900px) 100vw, 520px"
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
              <h3>{project.title}</h3>
              <p className="card-subtitle">{project.subtitle}</p>
              <p className="card-desc">{project.solution}</p>
              <div className="card-stack">{project.stack.slice(0, 5).join(" · ")}</div>
              <div className="card-links">
                <Link href={`/projects/${project.slug}`} className="btn btn-primary">
                  View Case Study <ArrowUpRight size={14} aria-hidden="true" />
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
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink size={14} aria-hidden="true" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
