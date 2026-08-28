"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerTheme(): Theme {
  return "dark";
}

function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  return () => observer.disconnect();
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, getServerTheme);

  function toggle() {
    const html = document.documentElement;
    const next: Theme = html.dataset.theme === "light" ? "dark" : "light";
    html.dataset.theme = next;

    try {
      window.localStorage.setItem("theme", next);
    } catch {
      // Private mode — the theme still applies for this session.
    }
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      role="switch"
      aria-checked={theme === "dark"}
      aria-label="Dark theme"
      onClick={toggle}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-thumb" />
        <Sun className="theme-toggle-sun" />
        <Moon className="theme-toggle-moon" />
      </span>
    </button>
  );
}
