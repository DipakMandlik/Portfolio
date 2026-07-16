import projectFraudDetection from "@/assets/project-fraud-detection.svg";

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
    title: "Fraud Detection Platform",
    role: "Lead engineer · 2026",
    description:
      "Enterprise-grade, real-time transaction monitoring and fraud investigation system for banking/fintech. Every transaction is scored by a live 17-rule engine and an explainable 0–100 AI risk score, routed to approve/review/OTP/block in milliseconds, and streamed to the UI over WebSockets with zero polling. All data is genuinely generated and scored — no mock UI state. Demo login: admin / admin.",
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "WebSockets"],
    image: projectFraudDetection,
    live: "https://dipakmandlik.github.io/Fraud-transaction-",
  },
];
