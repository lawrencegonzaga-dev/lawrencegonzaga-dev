import { projects } from "../data/projects";
import type { Project } from "../data/projects";

export function findProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function featuredProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
