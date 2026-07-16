import type { ReactElement } from "react";
import {
  SnowflakeLogo,
  DatabricksLogo,
  DatadogLogo,
  PythonLogo,
  ClaudeLogo,
  ReactLogo,
  TypeScriptLogo,
  FastApiLogo,
  PostgreSqlLogo,
  RedisLogo,
  NextJsLogo,
  DockerLogo,
  SparkLogo,
  DeltaLakeLogo,
  ScikitLearnLogo,
  PlotlyLogo,
  SupabaseLogo,
  TailwindCssLogo,
} from "@/components/icons/TechIcons";
import projectFraudDetection from "@/assets/project-fraud-detection.svg";
import projectAiByDm from "@/assets/project-aibydm.svg";
import projectPiqlens from "@/assets/project-piqlens.svg";
import projectLimitless from "@/assets/project-limitless.svg";
import projectBillingSystem from "@/assets/project-billing-system.svg";
import projectDatadog from "@/assets/project-datadog-observability.svg";

export type StackIcon = (props: { className?: string }) => ReactElement;

export type StackItem = {
  name: string;
  icon?: StackIcon;
};

export type Project = {
  title: string;
  role: string;
  description: string;
  stack: StackItem[];
  image: string;
  live?: string;
  repo?: string;
};

// Snowflake-native and Databricks-native platform work leads, then the
// Datadog/Snowflake observability layer, then the rest.
export const projects: Project[] = [
  {
    title: "PiQLens",
    role: "Product engineer · PibyThree accelerator · 2026",
    description:
      "A Snowflake-native data quality, observability, and governance platform built at PibyThree. Profiling, rule-based quality checks, and incremental scans run as native Snowflake Tasks — with full RBAC, key-pair authentication, a live data catalog and lineage explorer, SLA/freshness monitoring, and PDF/Excel reporting. Every check, score, and audit trail lives and runs inside Snowflake itself.",
    stack: [
      { name: "Snowflake", icon: SnowflakeLogo },
      { name: "Snowflake Tasks", icon: SnowflakeLogo },
      { name: "Next.js", icon: NextJsLogo },
      { name: "TypeScript", icon: TypeScriptLogo },
      { name: "Redis", icon: RedisLogo },
      { name: "Docker", icon: DockerLogo },
    ],
    image: projectPiqlens,
  },
  {
    title: "Limitless",
    role: "Solo project · 2025",
    description:
      "An AI-powered global energy analytics platform built entirely on Databricks Free Edition. Ingests OWID, renewable power plant, and World Bank data for 200+ countries through a five-layer Delta Lake pipeline — raw, clean, features, models, dashboards — then trains ML models to predict renewable growth and investment potential, and computes composite sustainability scores and tiers per country. $0 deployment cost.",
    stack: [
      { name: "Databricks", icon: DatabricksLogo },
      { name: "PySpark", icon: SparkLogo },
      { name: "Delta Lake", icon: DeltaLakeLogo },
      { name: "scikit-learn", icon: ScikitLearnLogo },
      { name: "Plotly", icon: PlotlyLogo },
    ],
    image: projectLimitless,
    repo: "https://github.com/DipakMandlik/Limitless",
  },
  {
    title: "Observability Control Plane",
    role: "Solo project · 2026",
    description:
      "A multi-agent Claude Code system that fully automates Datadog observability for a Snowflake Medallion pipeline — zero local artifacts, everything lives in Datadog. A 13-agent roster (orchestrator, planner, governance, intelligence, executor, aggregator, and specialists) turns requests into validated monitors and dashboards, gated by pre/post-execution hooks that enforce naming, tagging, credential safety, and full audit logging. Deploys 6 production monitors and 5 dashboards covering pipeline health, freshness SLAs, data quality, cost, and Gold-layer KPIs.",
    stack: [
      { name: "Claude Code", icon: ClaudeLogo },
      { name: "Datadog", icon: DatadogLogo },
      { name: "Snowflake", icon: SnowflakeLogo },
      { name: "MCP" },
      { name: "Python", icon: PythonLogo },
    ],
    image: projectDatadog,
    repo: "https://github.com/DipakMandlik/DATADOG",
  },
  {
    title: "Fraud Detection Platform",
    role: "Lead engineer · 2026",
    description:
      "Enterprise-grade, real-time transaction monitoring and fraud investigation system for banking/fintech. Every transaction is scored by a live 17-rule engine and an explainable 0–100 AI risk score, routed to approve/review/OTP/block in milliseconds, and streamed to the UI over WebSockets with zero polling. All data is genuinely generated and scored — no mock UI state. Demo login: admin / admin.",
    stack: [
      { name: "React", icon: ReactLogo },
      { name: "TypeScript", icon: TypeScriptLogo },
      { name: "FastAPI", icon: FastApiLogo },
      { name: "PostgreSQL", icon: PostgreSqlLogo },
      { name: "Redis", icon: RedisLogo },
      { name: "WebSockets" },
    ],
    image: projectFraudDetection,
    live: "https://dipakmandlik.github.io/Fraud-transaction-",
  },
  {
    title: "AIByDM",
    role: "Founder · 2022",
    description:
      "A community and learning platform for practical, applied AI — started in my third year of engineering to help builders and learners learn, build, and ship real AI projects. Grown to 1,300+ members worldwide, with educational content, GenAI applications, and open-source initiatives around AI agents and workflow automation.",
    stack: [
      { name: "Community" },
      { name: "AI Education" },
      { name: "Content" },
      { name: "Open Source" },
    ],
    image: projectAiByDm,
    live: "https://dipakmandlik.github.io/AIByDM/",
  },
  {
    title: "Cloth Store Billing System",
    role: "Full-stack developer · 2025",
    description:
      "A real-world POS and billing system built for Dipak Cloth Stores, a family retail business — with a fully Marathi-localized UI. Role-based access (admin/operator) is enforced with Supabase Auth and Postgres row-level security, alongside live cart and discount calculation, printable itemized receipts, and one-tap WhatsApp bill sharing. A sales dashboard tracks daily totals by payment type (cash/online/credit) and product performance.",
    stack: [
      { name: "React", icon: ReactLogo },
      { name: "TypeScript", icon: TypeScriptLogo },
      { name: "Supabase", icon: SupabaseLogo },
      { name: "PostgreSQL", icon: PostgreSqlLogo },
      { name: "Tailwind CSS", icon: TailwindCssLogo },
    ],
    image: projectBillingSystem,
  },
];
