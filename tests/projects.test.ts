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

  it("keeps each case study proof-ready with 3 to 5 labelled screenshot slots", () => {
    for (const project of projects) {
      expect(project.screenshots.length).toBeGreaterThanOrEqual(3);
      expect(project.screenshots.length).toBeLessThanOrEqual(5);

      for (const screenshot of project.screenshots) {
        expect(screenshot.alt.length).toBeGreaterThan(0);
        expect(screenshot.caption.length).toBeGreaterThan(0);
      }
    }
  });

  it("orders the Flowboard proof sequence and maps its real screenshot accurately", () => {
    const flowboard = findProjectBySlug("flowboard");

    expect(flowboard?.screenshots.map(({ caption }) => caption)).toEqual([
      "Private dashboard",
      "Project / task workspace",
      "Drag-and-drop board",
      "Deadline calendar",
      "Workspace assistant",
    ]);
    expect(flowboard?.screenshots.filter(({ src }) => src)).toEqual([
      expect.objectContaining({
        src: "/flowboard-photo.png",
        caption: "Workspace assistant",
      }),
    ]);
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
