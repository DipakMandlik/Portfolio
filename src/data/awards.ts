import snowflakeStreamlitAward from "@/assets/award-snowflake-streamlit-2025.jpg";
import superstarTrainingAward from "@/assets/superstar_training_award.png";
import pibythreeRockstarAward from "@/assets/award-pibythree-rockstar-2025.jpg";
import databricksV4cKahoot from "@/assets/award-databricks-v4c-kahoot-2026.jpg";
import amrutMeritoriousScholarship from "@/assets/award-amrut-meritorious-scholarship-2024.jpg";
import tedxYouthAus from "@/assets/award-tedx-youth-aus-2024.jpg";

export type Award = {
  year: string;
  title: string;
  detail: string;
  story?: string;
  image?: string;
};

export const awards: Award[] = [
  {
    year: "2026",
    title: "2nd Place — Kahoot Quiz, Databricks x V4C.ai Meetup",
    detail: "\"Lakehouse Lagers and Legends\" meetup, Mumbai",
    story:
      "On the fun side, I placed 2nd in the Kahoot quiz at \"Lakehouse Lagers and Legends,\" a meetup hosted by Databricks x V4C.ai in Mumbai — picked up some cool goodies along the way. Competitive learning always hits different, and it left me excited to go deeper into Databricks' AI stack: vector search, LLM tooling, governance, and unified compute for data and ML workloads.",
    image: databricksV4cKahoot,
  },
  {
    year: "2025",
    title: "1st Place — Snowflake Streamlit Coding Challenge",
    detail: "Built a full healthcare dashboard in 45 minutes, representing PibyThree",
    story:
      "At the Snowflake Data Build event in Pune, I represented PibyThree in the \"Streamlit Evening Bonanza\" coding challenge — 45 minutes to build a fully functional application from scratch. Using Snowflake Cortex and Streamlit, I built a Fully Managed Healthcare Dashboard: patient management, appointment tracking, an AI-based reporting tool, and real-time alerts. Presented it to the judges and took First Prize.",
    image: snowflakeStreamlitAward,
  },
  {
    year: "2025",
    title: "Rockstar Award — PibyThree",
    detail: "Recognized for driving impactful PibyThree branding and market visibility",
    story:
      "Received PibyThree's Rockstar Award, presented by founder & CEO Darshan Wakchaure, for driving impactful company branding and effectively showcasing PibyThree's expertise in the market.",
    image: pibythreeRockstarAward,
  },
  {
    year: "2024",
    title: "Superstar of the Training Program",
    detail: "Best-performing intern, MERN Stack internship at Sumago Infotech",
    story:
      "During my MERN Stack internship at Sumago Infotech in Nashik, I was recognized as \"Superstar of the Training Program\" for the best performance across the training batch — building full-stack features and REST APIs across React, Node.js, Express, and MongoDB.",
    image: superstarTrainingAward,
  },
  {
    year: "2024",
    title: "Amrut Meritorious Scholarship",
    detail: "9.86 CGPA, awarded at Amrutvahini College of Engineering's Amrut Expo felicitation",
    story:
      "Achieved a 9.86 CGPA and was honored with the Amrut Meritorious Scholarship at Amrutvahini College of Engineering's Amrut Expo felicitation ceremony, including a cash prize of ₹6,000 — with the support of HOD Dr. Baisa Gunjal and Principal Mr. M.A. Venkatesh. Quality and determination over just the numbers.",
    image: amrutMeritoriousScholarship,
  },
  {
    year: "2024",
    title: "TEDx Youth@AUS Speaker",
    detail: "Represented the IT department and Amrutvahini College of Engineering",
    story:
      "Represented the IT department and Amrutvahini College of Engineering at a TEDx Youth@AUS event organized by Ashoka Group of Schools — an opportunity made possible by the support of HOD Dr. Baisa Gunjal. Shared the stage with eight inspiring speakers, including Richa Shrivastava (Director, Maker's Asylum) and Priyanka Charan (actor, writer, producer, director), among others.",
    image: tedxYouthAus,
  },
];
