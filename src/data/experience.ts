import superstarAward from "@/assets/superstar_training_award.png";
import sumagoLogo from "@/assets/sumago.png";
import pibythreeLogo from "@/assets/pibythree.png";
import amrutvahiniLogo from "@/assets/amrutvahini.jpeg";

export type Role = {
  company: string;
  title: string;
  dates: string;
  location?: string;
  description: string;
  achievements: string[];
  tags: string[];
  tech?: string[];
  impact: string;
  logo?: string;
  useAiByDmBadge?: true;
  award?: { image: string; caption: string };
};

export const experience: Role[] = [
  {
    company: "PibyThree",
    title: "Associate Software Engineer",
    dates: "Oct 2025 — Present",
    location: "Mahape, Navi Mumbai",
    description:
      "Building enterprise-grade data platforms and bringing AI-powered product engineering into delivery.",
    achievements: [
      "Building scalable data solutions on Snowflake with DBT, SQL, and Python.",
      "Designing modern ELT pipelines, data models, and warehouse layers for enterprise clients.",
      "Bringing AI automation into delivery workflows using Claude Code, Codex, and GitHub Copilot.",
    ],
    tags: ["Enterprise AI", "Data Engineering", "AI Platforms", "Product Engineering", "Production Systems"],
    tech: ["Snowflake", "DBT", "SQL", "Python"],
    impact: "Helping enterprise clients modernize their data stack and adopt AI-driven engineering workflows.",
    logo: pibythreeLogo,
  },
  {
    company: "AIByDM",
    title: "Founder · Community Builder",
    dates: "Jan 2022 — Jul 2025",
    location: "Freelance · Remote",
    description:
      "Founded and grew a community and learning platform around practical, applied AI.",
    achievements: [
      "Founded AIByDM — a community and learning platform around practical AI.",
      "Shipped AI-focused educational content, GenAI applications, and automation projects.",
      "Drove open-source initiatives and developer enablement around AI agents and workflow automation.",
    ],
    tags: ["AI Education", "LinkedIn Growth", "AI Content", "Builders Community", "Open Source", "Product Development"],
    impact: "Grew a community of 1,300+ builders and learners around practical AI.",
    useAiByDmBadge: true,
  },
  {
    company: "Amrutvahini College of Engineering (AVCOE)",
    title: "Representative & Coordinator — Training and Placement Cell",
    dates: "Jun 2024 — Jun 2025",
    location: "Sangamner, Maharashtra",
    description:
      "Coordinated campus recruitment and training programs while mentoring students through the placement process.",
    achievements: [
      "Coordinated with industry partners for campus recruitment and training programs.",
      "Mentored students on interview prep, projects, and career direction.",
      "Managed end-to-end placement support and training logistics.",
    ],
    tags: ["Academic Excellence", "College Leadership", "Scholarships", "Hackathons"],
    impact: "Strengthened industry-student pipelines through structured placement programs.",
    logo: amrutvahiniLogo,
  },
  {
    company: "Sumago Infotech Pvt. Ltd.",
    title: "MERN Stack Intern",
    dates: "Jan 2024 — Feb 2024",
    location: "Nashik, Maharashtra",
    description: "Shipped full-stack features and REST APIs for internal web applications.",
    achievements: [
      "Built full-stack features across React, Node.js, Express, and MongoDB.",
      "Shipped frontend UI and REST APIs for internal web applications.",
      'Recognized as "Superstar of the Training Program" for best performance in the internship.',
    ],
    tags: ["MERN Stack", "Internship"],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    impact: 'Recognized as "Superstar of the Training Program" for best performance in the internship.',
    logo: sumagoLogo,
    award: { image: superstarAward, caption: "Superstar of the Training Program" },
  },
];
