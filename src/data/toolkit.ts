import type { ReactElement } from "react";
import { Database, Sparkles, Code2, Cloud } from "lucide-react";
import {
  SnowflakeLogo,
  DbtLogo,
  SqlLogo,
  ApacheAirflowLogo,
  FivetranLogo,
  OpenAiLogo,
  ClaudeLogo,
  LangChainLogo,
  CursorLogo,
  N8nLogo,
  PythonLogo,
  JavaScriptLogo,
  ReactLogo,
  NodeJsLogo,
  GitHubLogo,
  AwsLogo,
  DockerLogo,
  KubernetesLogo,
  GitHubActionsLogo,
  TerraformLogo,
  DatabricksLogo,
  AzureLogo,
  GoogleCloudLogo,
} from "@/components/icons/TechIcons";

export type ToolIcon = (props: { className?: string }) => ReactElement;

export type ToolkitCategory = {
  number: string;
  label: string;
  description: string;
  icon: ToolIcon;
  iconBg: string;
  iconColor: string;
  badgeBg: string;
  topTools: { name: string; icon: ToolIcon }[];
  whatIDo: string[];
};

export const toolkitCategories: ToolkitCategory[] = [
  {
    number: "01",
    label: "Data Engineering",
    description:
      "Designing scalable data pipelines, modeling data and building reliable data platforms.",
    icon: Database,
    iconBg: "bg-blue/10",
    iconColor: "text-blue",
    badgeBg: "bg-blue/10 text-blue",
    topTools: [
      { name: "Snowflake", icon: SnowflakeLogo },
      { name: "dbt", icon: DbtLogo },
      { name: "SQL", icon: SqlLogo },
      { name: "Apache Airflow", icon: ApacheAirflowLogo },
      { name: "Fivetran", icon: FivetranLogo },
    ],
    whatIDo: [
      "ETL/ELT Pipeline Development",
      "Data Modeling & Architecture",
      "Data Warehousing",
      "Performance Optimization",
    ],
  },
  {
    number: "02",
    label: "AI & Automation",
    description:
      "Building AI-powered solutions and automations that save time and create real value.",
    icon: Sparkles,
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
    badgeBg: "bg-violet-500/10 text-violet-600",
    topTools: [
      { name: "OpenAI", icon: OpenAiLogo },
      { name: "Claude", icon: ClaudeLogo },
      { name: "LangChain", icon: LangChainLogo },
      { name: "Cursor", icon: CursorLogo },
      { name: "n8n", icon: N8nLogo },
    ],
    whatIDo: [
      "AI Workflows & Agents",
      "LLM Integration",
      "Automation & Orchestration",
      "Generative AI Solutions",
    ],
  },
  {
    number: "03",
    label: "Software Development",
    description:
      "Building modern, scalable and user-friendly applications with best practices.",
    icon: Code2,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
    badgeBg: "bg-emerald-500/10 text-emerald-600",
    topTools: [
      { name: "Python", icon: PythonLogo },
      { name: "JavaScript", icon: JavaScriptLogo },
      { name: "React", icon: ReactLogo },
      { name: "Node.js", icon: NodeJsLogo },
      { name: "GitHub", icon: GitHubLogo },
    ],
    whatIDo: [
      "Full Stack Development",
      "RESTful API Design",
      "Clean Code & Architecture",
      "Version Control & Collaboration",
    ],
  },
  {
    number: "04",
    label: "Cloud & DevOps",
    description:
      "Deploying, automating and scaling applications with cloud and DevOps excellence.",
    icon: Cloud,
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-600",
    badgeBg: "bg-orange-500/10 text-orange-600",
    topTools: [
      { name: "AWS", icon: AwsLogo },
      { name: "Docker", icon: DockerLogo },
      { name: "Kubernetes", icon: KubernetesLogo },
      { name: "GitHub Actions", icon: GitHubActionsLogo },
      { name: "Terraform", icon: TerraformLogo },
    ],
    whatIDo: [
      "Cloud Infrastructure",
      "CI/CD Pipelines",
      "Automation Workflows",
      "Monitoring & Optimization",
    ],
  },
];

export const toolkitMarquee: { name: string; icon: ToolIcon }[] = [
  { name: "Snowflake", icon: SnowflakeLogo },
  { name: "Databricks", icon: DatabricksLogo },
  { name: "dbt", icon: DbtLogo },
  { name: "Python", icon: PythonLogo },
  { name: "AWS", icon: AwsLogo },
  { name: "Azure", icon: AzureLogo },
  { name: "Google Cloud", icon: GoogleCloudLogo },
  { name: "OpenAI", icon: OpenAiLogo },
  { name: "Claude", icon: ClaudeLogo },
  { name: "LangChain", icon: LangChainLogo },
  { name: "Kubernetes", icon: KubernetesLogo },
  { name: "GitHub", icon: GitHubLogo },
];
