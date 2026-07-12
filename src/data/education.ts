import hsyLogo from "@/assets/hsy.jpg";
import amrutvahiniLogo from "@/assets/amrutvahini.jpeg";

export type EducationMilestone = {
  id: string;
  kind: "mini" | "major";
  dates: string;
  title: string;
  subtitle?: string;
  institution: string;
  subInstitution?: string;
  achievementValue: number;
  achievementDecimals: number;
  achievementSuffix: string;
  supportingText: string;
  badges: string[];
  logo: string;
};

export const education: EducationMilestone[] = [
  {
    id: "tenth",
    kind: "mini",
    dates: "2017",
    title: "10th Standard",
    institution: "H.S.Y. Vidyalaya, Nimon",
    achievementValue: 89.8,
    achievementDecimals: 2,
    achievementSuffix: "%",
    supportingText:
      "Built strong academic discipline and developed curiosity towards technology and creativity.",
    badges: ["Academic Excellence"],
    logo: hsyLogo,
  },
  {
    id: "twelfth",
    kind: "mini",
    dates: "2017 — 2019",
    title: "Higher Secondary",
    subtitle: "Science (PCM)",
    institution: "H.S.Y. Junior College, Nimon",
    achievementValue: 89.5,
    achievementDecimals: 2,
    achievementSuffix: "%",
    supportingText:
      "Strengthened analytical thinking, mathematics, and problem-solving while preparing for engineering.",
    badges: ["Science • PCM"],
    logo: hsyLogo,
  },
  {
    id: "engineering",
    kind: "major",
    dates: "2019 — 2023",
    title: "Bachelor of Engineering",
    subtitle: "Information Technology",
    institution: "Amrutvahini College of Engineering",
    subInstitution: "Savitribai Phule Pune University",
    achievementValue: 9.87,
    achievementDecimals: 2,
    achievementSuffix: " CGPA",
    supportingText:
      "Built expertise in software engineering, artificial intelligence, data engineering, cloud platforms, product development and enterprise systems while leading projects, hackathons and community initiatives.",
    badges: [
      "AI",
      "Data Engineering",
      "Cloud",
      "Software Engineering",
      "Leadership",
      "Hackathons",
      "Open Source",
    ],
    logo: amrutvahiniLogo,
  },
];

export const academicJourney = [
  { label: "10th", value: 89.8, decimals: 2, suffix: "%" },
  { label: "12th", value: 89.5, decimals: 2, suffix: "%" },
  { label: "Engineering", value: 9.87, decimals: 2, suffix: " CGPA" },
];

export const achievementChips = [
  { icon: "Trophy", label: "College Rank" },
  { icon: "Star", label: "Merit Scholarship" },
  { icon: "Lightbulb", label: "Innovation" },
  { icon: "Rocket", label: "Hackathons" },
  { icon: "BookOpen", label: "AI Research" },
  { icon: "Target", label: "Leadership" },
] as const;
