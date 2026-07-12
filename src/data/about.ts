import type { ReactElement } from "react";
import { Puzzle, Bot, Users, Sparkles, Brain, Package, Rocket, Cloud, Code2 } from "lucide-react";
import { SnowflakeLogo, GitHubLogo } from "@/components/icons/TechIcons";

export const traits = [
  {
    icon: Puzzle,
    title: "Problem Solver",
    body: "I love turning complex challenges into simple, scalable solutions.",
  },
  {
    icon: Bot,
    title: "AI Builder",
    body: "I build AI-powered systems and automations that create leverage.",
  },
  {
    icon: Users,
    title: "Community Builder",
    body: "I share knowledge and empower builders to learn, build and ship.",
  },
];

export type OrbitalNode = {
  icon: (props: { className?: string }) => ReactElement;
  title: string;
  body: string;
};

export const orbitalNodes: OrbitalNode[] = [
  { icon: Sparkles, title: "AI Agents", body: "Intelligent automation that works for you." },
  { icon: Brain, title: "GenAI", body: "Building next-gen AI experiences." },
  { icon: SnowflakeLogo, title: "Snowflake", body: "Modern data platform for the AI era." },
  { icon: Package, title: "Enterprise Products", body: "Scalable products that solve real problems." },
  { icon: Rocket, title: "Automation", body: "Workflow automation that saves time." },
  { icon: Cloud, title: "Cloud", body: "Building on modern cloud infrastructure." },
  { icon: GitHubLogo, title: "Open Source", body: "Building in public. Giving back." },
  { icon: Code2, title: "System Design", body: "Designing scalable, reliable architectures." },
];

export const journeyMilestones = [
  {
    year: "2016",
    tag: "10th Standard",
    title: "Exploring Creativity",
    body: "Started exploring photography & editing — built creativity and an eye for design.",
    chips: ["Photography"],
  },
  {
    year: "2017",
    tag: "11th Standard",
    title: "First Blog, First Deploy",
    body: "Built and hosted my first WordPress blog — fell in love with building things on the internet.",
    chips: ["WordPress"],
  },
  {
    year: "2021",
    tag: "1st Year Engg.",
    title: "Trading & Systems",
    body: "Started trading & stock market analysis. Built my own trading and stock analysis systems.",
    chips: ["Trading", "Systems"],
  },
  {
    year: "2022",
    tag: "2nd Year Engg.",
    title: "Learning to Think Deep",
    body: "Understood the most critical parts of software engineering — and learned the power of bold decisions.",
    chips: ["Growth"],
  },
  {
    year: "2023",
    tag: "3rd Year Engg.",
    title: "Internship & Recognition",
    body: 'Secured a MERN Stack internship at Sumago Infotech and was awarded "Superstar of the Training Program."',
    chips: ["MERN", "Award"],
  },
  {
    year: "2023",
    tag: "Hackathons & SIH",
    title: "Competing & Growing",
    body: "Participated in several hackathons and was part of the global Smart India Hackathon (SIH).",
    chips: ["Hackathons", "SIH"],
  },
  {
    year: "2024 — Now",
    tag: "Final Year Engg.",
    title: "BERT + GPT Chatbot",
    body: "Working on a dream project — building a custom domain chatbot using BERT & GPT with real-world knowledge.",
    chips: ["BERT", "GPT"],
  },
];
