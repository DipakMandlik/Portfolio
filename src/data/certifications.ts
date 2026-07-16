import type { ReactElement } from "react";
import {
  ClaudeLogo,
  SnowflakeLogo,
  DatabricksLogo,
  DatadogLogo,
  AwsLogo,
} from "@/components/icons/TechIcons";

import claudeCertifiedArchitect from "@/assets/certifications/claude-certified-architect-foundations.png";
import snowproCore from "@/assets/certifications/snowpro-core.png";
import databricksDataEngineer from "@/assets/certifications/databricks-data-engineer-associate.png";
import datadogFundamentals from "@/assets/certifications/datadog-fundamentals.png";
import awsCloudPractitioner from "@/assets/certifications/aws-cloud-practitioner.png";
import databricksAcademyFundamentals from "@/assets/certifications/databricks-academy-fundamentals.png";
import databricksAiAgentFundamentals from "@/assets/certifications/databricks-ai-agent-fundamentals.png";
import claudeCodeInAction from "@/assets/certifications/claude-code-in-action.png";
import claude101 from "@/assets/certifications/claude-101.png";
import introToClaudeCowork from "@/assets/certifications/introduction-to-claude-cowork.png";
import aiFluencyFramework from "@/assets/certifications/ai-fluency-framework-foundations.png";
import claudeWithAnthropicApi from "@/assets/certifications/claude-with-the-anthropic-api.png";
import introToAgentSkills from "@/assets/certifications/introduction-to-agent-skills.png";
import introToMcp from "@/assets/certifications/introduction-to-model-context-protocol.png";
import claudeCode101 from "@/assets/certifications/claude-code-101.svg";

export type CertCategory = "AI" | "Cloud" | "Data Engineering" | "Observability";

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issuerLogo: (props: { className?: string }) => ReactElement;
  category: CertCategory;
  description: string;
  image: string;
  verifyUrl: string | null;
};

export const certifications: Certification[] = [
  {
    id: "claude-certified-architect",
    title: "Claude Certified Architect – Foundations",
    issuer: "Anthropic",
    issuerLogo: ClaudeLogo,
    category: "AI",
    description: "Practical AI engineering with Claude.",
    image: claudeCertifiedArchitect,
    verifyUrl: "https://verify.skilljar.com/c/uun8tyaju9fi",
  },
  {
    id: "snowpro-core",
    title: "SnowPro Core",
    issuer: "Snowflake",
    issuerLogo: SnowflakeLogo,
    category: "Data Engineering",
    description: "Core competencies across the Snowflake Data Cloud.",
    image: snowproCore,
    verifyUrl:
      "https://achieve.snowflake.com/2e2cecc9-74cc-4bed-b588-52ec0ea009da#acc.nTy14q6L",
  },
  {
    id: "databricks-data-engineer-associate",
    title: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    issuerLogo: DatabricksLogo,
    category: "Data Engineering",
    description: "Building and managing data pipelines on Databricks.",
    image: databricksDataEngineer,
    verifyUrl:
      "https://credentials.databricks.com/4a3aeeb3-55f0-4050-8cbd-85bb4f5c9951#acc.5fxeEAdU",
  },
  {
    id: "datadog-fundamentals",
    title: "Datadog Certified: Datadog Fundamentals",
    issuer: "Datadog",
    issuerLogo: DatadogLogo,
    category: "Observability",
    description: "Monitoring, observability, and infrastructure fundamentals.",
    image: datadogFundamentals,
    verifyUrl:
      "https://www.credly.com/badges/63e3881e-0f57-4f9c-8cb0-7e33357e124b/linked_in_profile",
  },
  {
    id: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    issuerLogo: AwsLogo,
    category: "Cloud",
    description: "Foundational AWS cloud concepts and services.",
    image: awsCloudPractitioner,
    verifyUrl:
      "https://www.credly.com/badges/820d99ce-eb45-43f7-809b-b29999d042b9/linked_in_profile",
  },
  {
    id: "databricks-academy-fundamentals",
    title: "Academy Accreditation – Databricks Fundamentals",
    issuer: "Databricks",
    issuerLogo: DatabricksLogo,
    category: "Data Engineering",
    description: "Foundations of the Databricks Lakehouse Platform.",
    image: databricksAcademyFundamentals,
    verifyUrl:
      "https://credentials.databricks.com/84c63d67-1bb1-47af-b8b1-c1e06aef1b38#acc.G5ZQ8vtY",
  },
  {
    id: "databricks-ai-agent-fundamentals",
    title: "Academy Accreditation – AI Agent Fundamentals",
    issuer: "Databricks",
    issuerLogo: DatabricksLogo,
    category: "AI",
    description: "Fundamentals of building AI agents on Databricks.",
    image: databricksAiAgentFundamentals,
    verifyUrl:
      "https://credentials.databricks.com/223838ac-6831-491a-bdfb-70c3a81521c2#acc.ZVOwdvub",
  },
  {
    id: "claude-code-in-action",
    title: "Claude Code in Action",
    issuer: "Anthropic",
    issuerLogo: ClaudeLogo,
    category: "AI",
    description: "Hands-on engineering workflows with Claude Code.",
    image: claudeCodeInAction,
    verifyUrl: "https://verify.skilljar.com/c/ymhimen95a8c",
  },
  {
    id: "claude-101",
    title: "Claude 101",
    issuer: "Anthropic",
    issuerLogo: ClaudeLogo,
    category: "AI",
    description: "Foundations of working with Claude.",
    image: claude101,
    verifyUrl: "https://verify.skilljar.com/c/pueaqjybm47p",
  },
  {
    id: "introduction-to-claude-cowork",
    title: "Introduction to Claude Cowork",
    issuer: "Anthropic",
    issuerLogo: ClaudeLogo,
    category: "AI",
    description: "Collaborative workflows with Claude.",
    image: introToClaudeCowork,
    verifyUrl: "https://verify.skilljar.com/c/3uxuiexur3bv",
  },
  {
    id: "ai-fluency-framework-foundations",
    title: "AI Fluency Framework Foundations",
    issuer: "Anthropic",
    issuerLogo: ClaudeLogo,
    category: "AI",
    description: "A framework for effective, responsible AI collaboration.",
    image: aiFluencyFramework,
    verifyUrl: "https://verify.skilljar.com/c/qbs77efh42j5",
  },
  {
    id: "building-with-the-claude-api",
    title: "Building with the Claude API",
    issuer: "Anthropic",
    issuerLogo: ClaudeLogo,
    category: "AI",
    description: "Developing applications with the Claude API.",
    image: claudeWithAnthropicApi,
    verifyUrl: "https://verify.skilljar.com/c/ikcofwgrxk4j",
  },
  {
    id: "claude-with-the-anthropic-api",
    title: "Claude with the Anthropic API",
    issuer: "Anthropic",
    issuerLogo: ClaudeLogo,
    category: "AI",
    description: "Integrating Claude through the Anthropic API.",
    image: claudeWithAnthropicApi,
    verifyUrl: "https://verify.skilljar.com/c/ikcofwgrxk4j",
  },
  {
    id: "introduction-to-agent-skills",
    title: "Introduction to Agent Skills",
    issuer: "Anthropic",
    issuerLogo: ClaudeLogo,
    category: "AI",
    description: "Extending Claude with custom agent skills.",
    image: introToAgentSkills,
    verifyUrl: "https://verify.skilljar.com/c/3do6pgufiqey",
  },
  {
    id: "introduction-to-model-context-protocol",
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    issuerLogo: ClaudeLogo,
    category: "AI",
    description: "Connecting AI models to tools and data with MCP.",
    image: introToMcp,
    verifyUrl: null,
  },
  {
    id: "claude-code-101",
    title: "Claude Code 101",
    issuer: "Anthropic",
    issuerLogo: ClaudeLogo,
    category: "AI",
    description: "Foundations of working with Claude Code.",
    image: claudeCode101,
    verifyUrl: null,
  },
];

export const certCategories: CertCategory[] = ["AI", "Cloud", "Data Engineering", "Observability"];

export const certStats = {
  total: certifications.length,
  domains: ["Cloud", "AI", "Data Engineering", "Enterprise Platforms"],
};
