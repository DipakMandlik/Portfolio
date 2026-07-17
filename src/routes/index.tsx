import { createFileRoute } from "@tanstack/react-router";
import { LenisProvider } from "@/components/LenisProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { StickyNav } from "@/components/nav/StickyNav";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
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
import { ChatWidget } from "@/components/chat/ChatWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dipak Mandlik — Data & AI Engineer · Founder @ AIByDM" },
      {
        name: "description",
        content:
          "Portfolio of Dipak Mandlik — Associate Software Engineer at PibyThree, Data & AI engineer, and founder of AIByDM. Snowflake, DBT, AI automation, and full-stack.",
      },
      { property: "og:title", content: "Dipak Mandlik — Data & AI Engineer" },
      {
        property: "og:description",
        content:
          "Building the future with AI, Data Engineering, and Intelligent Automation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dipakmandlik.github.io/Portfolio/" },
      { property: "og:image", content: "https://dipakmandlik.github.io/Portfolio/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dipak Mandlik — Data & AI Engineer" },
      { name: "twitter:description", content: "Building the future with AI, Data Engineering, and Intelligent Automation." },
      { name: "twitter:image", content: "https://dipakmandlik.github.io/Portfolio/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://dipakmandlik.github.io/Portfolio/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Dipak Mandlik",
          jobTitle: "Associate Software Engineer · Data & AI Engineer",
          worksFor: { "@type": "Organization", name: "PibyThree" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Navi Mumbai",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          url: "https://dipakmandlik.github.io/Portfolio/",
          sameAs: ["https://www.linkedin.com/in/dipak-mandlik-4490b5286"],
        }),
      },
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
        <TrustedBy />
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
      <ChatWidget />
    </>
  );
}
