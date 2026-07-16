import snowflakeStreamlitAward from "@/assets/award-snowflake-streamlit-2025.jpg";

export type Award = {
  year: string;
  title: string;
  detail: string;
  story?: string;
  image?: string;
};

export const awards: Award[] = [
  {
    year: "2025",
    title: "1st Place — Snowflake Streamlit Coding Challenge",
    detail: "Built a full healthcare dashboard in 45 minutes, representing PibyThree",
    story:
      "At the Snowflake Data Build event in Pune, I represented PibyThree in the \"Streamlit Evening Bonanza\" coding challenge — 45 minutes to build a fully functional application from scratch. Using Snowflake Cortex and Streamlit, I built a Fully Managed Healthcare Dashboard: patient management, appointment tracking, an AI-based reporting tool, and real-time alerts. Presented it to the judges and took First Prize.",
    image: snowflakeStreamlitAward,
  },
];
