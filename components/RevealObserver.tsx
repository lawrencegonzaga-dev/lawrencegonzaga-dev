"use client";

import { useEffect } from "react";

// Adds the `reveal-ready` class (enabling scroll-reveal CSS) and reveals
// [data-reveal] elements once as they enter the viewport. Without JS, or
// with prefers-reduced-motion, everything stays visible — content is never
// hidden behind an animation requirement.
export default function RevealObserver() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window) || elements.length === 0) {
      return;
    }

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
