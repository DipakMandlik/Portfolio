import type { ReactElement } from "react";
import {
  SnowflakeLogo,
  DbtLogo,
  PythonLogo,
  AzureLogo,
  AwsLogo,
  ClaudeLogo,
  OpenAiLogo,
} from "@/components/icons/TechIcons";

export type TechStackItem = {
  name: string;
  icon: (props: { className?: string }) => ReactElement;
};

export const techStack: TechStackItem[] = [
  { name: "Snowflake", icon: SnowflakeLogo },
  { name: "dbt", icon: DbtLogo },
  { name: "Python", icon: PythonLogo },
  { name: "Azure", icon: AzureLogo },
  { name: "AWS", icon: AwsLogo },
  { name: "Claude", icon: ClaudeLogo },
  { name: "OpenAI", icon: OpenAiLogo },
];
