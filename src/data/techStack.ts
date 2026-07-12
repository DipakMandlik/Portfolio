import {
  Snowflake,
  Workflow,
  Code2,
  Cloud,
  Server,
  Sparkles,
  Bot,
  type LucideIcon,
} from "lucide-react";

export type TechStackItem = {
  name: string;
  icon: LucideIcon;
  color: string;
};

export const techStack: TechStackItem[] = [
  { name: "Snowflake", icon: Snowflake, color: "#29B5E8" },
  { name: "dbt", icon: Workflow, color: "#FF694B" },
  { name: "Python", icon: Code2, color: "#3776AB" },
  { name: "Azure", icon: Cloud, color: "#0078D4" },
  { name: "AWS", icon: Server, color: "#FF9900" },
  { name: "Claude", icon: Sparkles, color: "#D97757" },
  { name: "OpenAI", icon: Bot, color: "#10A37F" },
];

export const heroStats = [
  { value: "3+", label: "Years engineering experience" },
  { value: "Founder", label: "AIByDM" },
  { value: "Snowflake · DBT", label: "Data platform specialty" },
  { value: "AI Automation", label: "Claude Code · Agents · GenAI" },
];
