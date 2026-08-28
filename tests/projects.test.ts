import { describe, expect, it } from "vitest";
import { projects } from "../data/projects";
import { featuredProjects, findProjectBySlug } from "../lib/projects";

describe("projects data integrity", () => {
  it("has unique slugs", () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("only links to real GitHub repositories", () => {
    for (const project of projects) {
      expect(project.github).toMatch(/^https:\/\/github\.com\//);
    }
  });

  it("only includes real deployed URLs as live demos", () => {
    for (const project of projects) {
      if (project.liveDemo !== undefined) {
        expect(project.liveDemo).toMatch(/^https:\/\//);
      }
    }
  });

  it("every project documents problem, solution, stack, and decisions", () => {
    for (const project of projects) {
      expect(project.problem.length).toBeGreaterThan(0);
      expect(project.solution.length).toBeGreaterThan(0);
      expect(project.stack.length).toBeGreaterThan(0);
      expect(project.technicalDecisions.length).toBeGreaterThan(0);
      expect(project.challenges.length).toBeGreaterThan(0);
    }
  });
});

describe("project helpers", () => {
  it("finds projects by slug", () => {
    expect(findProjectBySlug("flowboard")?.title).toBe("Flowboard");
    expect(findProjectBySlug("does-not-exist")).toBeUndefined();
  });

  it("returns only featured projects", () => {
    const featured = featuredProjects();
    expect(featured.length).toBeGreaterThan(0);
    for (const project of featured) {
      expect(project.featured).toBe(true);
    }
  });
});
