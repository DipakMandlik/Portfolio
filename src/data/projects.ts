import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

// [FILL IN] Real projects
export type Project = {
  title: string;
  role: string;
  description: string;
  stack: string[];
  image: string;
  live?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Lumen Analytics",
    role: "Lead engineer · 2024",
    description:
      "An AI analytics workspace that turns plain-English questions into trustworthy dashboards. Designed the query engine, the streaming UI, and every pixel.",
    stack: ["Next.js", "TypeScript", "Python", "DuckDB", "OpenAI"],
    image: project1,
    live: "#",
    repo: "#",
  },
  {
    title: "Ledger",
    role: "Founder · 2023",
    description:
      "A quiet, single-purpose iOS-style personal finance tracker. Local-first, encrypted, no ads. Shipped to 1,200+ private beta users.",
    stack: ["React Native", "SQLite", "Supabase"],
    image: project2,
    live: "#",
  },
  {
    title: "Flow",
    role: "Open source · 2023",
    description:
      "A tiny library for composing async data streams in React. 3 kB gzipped, zero dependencies, full TypeScript inference.",
    stack: ["TypeScript", "React", "Vitest"],
    image: project3,
    repo: "#",
  },
  {
    title: "DevPad",
    role: "Side project · 2022",
    description:
      "A markdown-first scratchpad for engineers with syntax highlighting, command palette, and offline sync.",
    stack: ["React", "CodeMirror", "IndexedDB"],
    image: project4,
    live: "#",
    repo: "#",
  },
];
