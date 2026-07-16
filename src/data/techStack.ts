import type { ReactElement } from "react";
import {
  SnowflakeLogo,
  DatabricksLogo,
  DbtLogo,
  PythonLogo,
  ClaudeLogo,
  OpenAiLogo,
  LangChainLogo,
  CopilotLogo,
  AzureLogo,
  AwsLogo,
} from "@/components/icons/TechIcons";

export type TechStackItem = {
  name: string;
  icon: (props: { className?: string }) => ReactElement;
};

// Data platform first, then the agentic/AI tooling, then cloud.
export const techStack: TechStackItem[] = [
  { name: "Snowflake", icon: SnowflakeLogo },
  { name: "Databricks", icon: DatabricksLogo },
  { name: "dbt", icon: DbtLogo },
  { name: "Python", icon: PythonLogo },
  { name: "Claude", icon: ClaudeLogo },
  { name: "OpenAI", icon: OpenAiLogo },
  { name: "LangChain", icon: LangChainLogo },
  { name: "GitHub Copilot", icon: CopilotLogo },
  { name: "AWS", icon: AwsLogo },
  { name: "Azure", icon: AzureLogo },
];
