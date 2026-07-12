import superstarAward from "@/assets/superstar_training_award.png";
import sumagoLogo from "@/assets/sumago.png";

export type Role = {
  company: string;
  title: string;
  dates: string;
  location?: string;
  bullets: string[];
  logo?: string;
  award?: { image: string; caption: string };
};

export const experience: Role[] = [
  {
    company: "PibyThree",
    title: "Associate Software Engineer",
    dates: "Oct 2025 — Present",
    location: "Mahape, Navi Mumbai",
    bullets: [
      "Building scalable data solutions on Snowflake with DBT, SQL, and Python.",
      "Designing modern ELT pipelines, data models, and warehouse layers for enterprise clients.",
      "Bringing AI automation into delivery workflows using Claude Code, Codex, and GitHub Copilot.",
    ],
  },
  {
    company: "AIByDM",
    title: "Founder · Open Source Developer",
    dates: "Jan 2022 — Jul 2025",
    location: "Freelance · Remote",
    bullets: [
      "Founded AIByDM — a community and learning platform around practical AI.",
      "Shipped AI-focused educational content, GenAI applications, and automation projects.",
      "Drove open-source initiatives and developer enablement around AI agents and workflow automation.",
    ],
  },
  {
    company: "Amrutvahini College of Engineering (AVCOE)",
    title: "Representative & Coordinator — Training and Placement Cell",
    dates: "Jun 2024 — Jun 2025",
    location: "Sangamner, Maharashtra",
    bullets: [
      "Coordinated with industry partners for campus recruitment and training programs.",
      "Mentored students on interview prep, projects, and career direction.",
      "Managed end-to-end placement support and training logistics.",
    ],
  },
  {
    company: "Sumago Infotech Pvt. Ltd.",
    title: "MERN Stack Intern",
    dates: "Jan 2024 — Feb 2024",
    location: "Nashik, Maharashtra",
    bullets: [
      "Built full-stack features across React, Node.js, Express, and MongoDB.",
      "Shipped frontend UI and REST APIs for internal web applications.",
      'Recognized as "Superstar of the Training Program" for best performance in the internship.',
    ],
    logo: sumagoLogo,
    award: { image: superstarAward, caption: "Superstar of the Training Program" },
  },
];
