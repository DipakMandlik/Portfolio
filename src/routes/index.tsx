import { createFileRoute } from "@tanstack/react-router";
import { LenisProvider } from "@/components/LenisProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { StickyNav } from "@/components/nav/StickyNav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Awards } from "@/components/sections/Awards";
import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dipak Mandlik — Software Engineer · AI & Data" },
      {
        name: "description",
        content:
          "Portfolio of Dipak Mandlik, a software engineer working at the intersection of full-stack web, data, and applied AI.",
      },
      { property: "og:title", content: "Dipak Mandlik — Software Engineer" },
      {
        property: "og:description",
        content:
          "Calm, fast products at the intersection of software, data, and machine intelligence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <LenisProvider />
      <ScrollProgress />
      <CustomCursor />
      <StickyNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Awards />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
