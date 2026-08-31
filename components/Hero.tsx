"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRight, Code2, Coffee, Download, Github, Linkedin } from "lucide-react";
import {
  siJavascript,
  siNextdotjs,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";

const orbitItems = [
  { icon: Coffee, label: "Coffee" },
  { icon: Code2, label: "Code" },
] as const;

// Official brand marks (filled, not outline). Every icon renders in the same
// currentColor so the row looks consistent; no text needed — hiring managers
// recognize the logos instantly.
const stackItems = [
  { icon: siReact, label: "React" },
  { icon: siNextdotjs, label: "Next.js" },
  { icon: siTypescript, label: "TypeScript" },
  { icon: siJavascript, label: "JavaScript" },
  { icon: siTailwindcss, label: "Tailwind CSS" },
] as const;

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const target = typedRef.current;
    if (!target) return;
    const el = target;
    const lines = profile.heroTerminal;

    // The typewriter is decorative; the static heading and role carry the
    // same information for recruiters and screen readers.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = lines[1] ?? lines[0];
      return;
    }

    let lineIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function typeLoop() {
      const current = lines[lineIndex];
      if (!deleting) {
        charIndex++;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          timer = setTimeout(typeLoop, 2400);
          return;
        }
      } else {
        charIndex--;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          lineIndex = (lineIndex + 1) % lines.length;
        }
      }
      timer = setTimeout(typeLoop, deleting ? 18 : 34);
    }

    typeLoop();
    return () => clearTimeout(timer);
  }, []);
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div className="hero-main">
          <div className="terminal" aria-hidden="true">
            <div className="terminal-bar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-title">~/lawrence — zsh</span>
            </div>
            <div className="terminal-body">
              <span className="prompt">$</span>{" "}
              <span className="out" ref={typedRef}></span>
              <span className="cursor"></span>
            </div>
          </div>

          <p className="hero-kicker">{profile.h1}</p>
          <h1>{profile.role}</h1>
          <p className="lede">{profile.lede}</p>
          <ul className="stack-icons" aria-label="Tech stack">
            {stackItems.map(({ icon, label }) => (
              <li className="stack-chip" key={label}>
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <title>{label}</title>
                  <path d={icon.path} />
                </svg>
              </li>
            ))}
          </ul>
          <div className="btn-row">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={15} aria-hidden="true" />
            </a>
            {contact.cv && (
              <a href={contact.cv} className="btn btn-ghost" download>
                <Download size={15} aria-hidden="true" />
                {contact.buttonText.cv}
              </a>
            )}
            <a
              href={contact.github}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={15} aria-hidden="true" /> GitHub
            </a>
            <a
              href={contact.linkedin}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={15} aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="hero-orbit">
            <span className="hero-orbit-halo" aria-hidden="true" />

            <div className="hero-portrait-shell">
              <div className="hero-portrait-wrap">
                {profile.photo ? (
                  <Image
                    src={profile.photo}
                    alt={profile.photoAlt}
                    width={280}
                    height={280}
                    priority
                    unoptimized={profile.photo.endsWith(".svg")}
                    className="hero-portrait"
                  />
                ) : (
                  <div
                    className="hero-portrait hero-portrait-fallback"
                    aria-hidden="true"
                  >
                    LG
                  </div>
                )}
              </div>
            </div>

            <ul className="hero-orbit-list" aria-label="Daily essentials">
              {orbitItems.map(({ icon: Icon, label }) => (
                <li className="hero-orbit-item" key={label}>
                  <span className="hero-orbit-icon">
                    <Icon aria-hidden="true" />
                    <span className="sr-only">{label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
