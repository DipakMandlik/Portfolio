// [FILL IN] Work experience
export type Role = {
  company: string;
  title: string;
  dates: string;
  location?: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    company: "Independent / Freelance",
    title: "Software Engineer",
    dates: "2024 — Present",
    location: "Remote",
    bullets: [
      "Designed and shipped end-to-end web products for early-stage teams, from data model to deployed UI.",
      "Built retrieval-augmented chat and analytics tooling on top of OpenAI and open-source LLMs.",
      "Owned performance, accessibility, and design quality on every release.",
    ],
  },
  {
    company: "Tech Studio", // [FILL IN]
    title: "Full-Stack Engineer",
    dates: "2022 — 2024",
    location: "Pune, India",
    bullets: [
      "Led the rebuild of the company's core dashboard, cutting time-to-first-render by 62%.",
      "Migrated a legacy data pipeline to a streaming-first architecture handling 4M events/day.",
      "Mentored two junior engineers through code review and pairing.",
    ],
  },
  {
    company: "Early-Stage Startup", // [FILL IN]
    title: "Software Engineering Intern",
    dates: "2021 — 2022",
    bullets: [
      "Shipped the first version of a customer-facing portal used by 3,000+ users in month one.",
      "Wrote internal tooling that automated a previously manual reporting workflow.",
    ],
  },
];
