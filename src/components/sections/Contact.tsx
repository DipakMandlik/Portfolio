import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/motion/Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-bg-base">
      <div className="container-x section-pad">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">
            — Let's talk
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-6 max-w-4xl font-display text-5xl text-balance text-ink sm:text-6xl md:text-7xl lg:text-8xl">
            Let's build something{" "}
            <span className="text-blue">worth making.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-xl text-lg text-ink-soft">
            Have a project, a role, or just a half-formed idea? I read every
            message and reply within a day or two.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 text-base font-medium text-white transition-colors hover:bg-blue"
            >
              <Mail className="size-4" />
              {profile.email}
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-4 text-base font-medium text-ink transition-colors hover:bg-bg-porcelain"
            >
              LinkedIn
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
