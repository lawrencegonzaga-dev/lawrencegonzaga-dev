// Only technologies that are demonstrated by real projects or work
// experience. Anything that cannot be explained and demonstrated in an
// interview does not belong here.
export interface SkillGroup {
  title: string;
  tags: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    tags: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    tags: ["Node.js", "Express", "REST APIs", "Python", "FastAPI"],
  },
  {
    title: "Data",
    tags: ["PostgreSQL", "Supabase", "SQLite"],
  },
  {
    title: "Engineering",
    tags: ["Git", "GitHub", "Zod", "Vitest"],
  },
  {
    title: "Automation & AI",
    tags: ["Python", "Rasa"],
  },
];
