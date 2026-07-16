import projectFraudDetection from "@/assets/project-fraud-detection.svg";
import projectAiByDm from "@/assets/project-aibydm.svg";
import projectPiqlens from "@/assets/project-piqlens.svg";
import projectLimitless from "@/assets/project-limitless.svg";

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
  {
    title: "AIByDM",
    role: "Founder · 2022",
    description:
      "A community and learning platform for practical, applied AI — started in my third year of engineering to help builders and learners learn, build, and ship real AI projects. Grown to 1,300+ members worldwide, with educational content, GenAI applications, and open-source initiatives around AI agents and workflow automation.",
    stack: ["Community", "AI Education", "Content", "Open Source"],
    image: projectAiByDm,
    live: "https://dipakmandlik.github.io/AIByDM/",
  },
  {
    title: "PiQLens",
    role: "Product engineer · PibyThree accelerator · 2026",
    description:
      "A Snowflake-native data quality, observability, and governance platform built at PibyThree. Profiling, rule-based quality checks, and incremental scans run as native Snowflake Tasks — with full RBAC, key-pair authentication, a live data catalog and lineage explorer, SLA/freshness monitoring, and PDF/Excel reporting. Every check, score, and audit trail lives and runs inside Snowflake itself.",
    stack: ["Snowflake", "Snowflake Tasks", "Next.js", "TypeScript", "Redis", "Docker"],
    image: projectPiqlens,
  },
  {
    title: "Limitless",
    role: "Solo project · 2025",
    description:
      "An AI-powered global energy analytics platform built entirely on Databricks Free Edition. Ingests OWID, renewable power plant, and World Bank data for 200+ countries through a five-layer Delta Lake pipeline — raw, clean, features, models, dashboards — then trains ML models to predict renewable growth and investment potential, and computes composite sustainability scores and tiers per country. $0 deployment cost.",
    stack: ["Databricks", "PySpark", "Delta Lake", "scikit-learn", "Plotly"],
    image: projectLimitless,
    repo: "https://github.com/DipakMandlik/Limitless",
  },
];
