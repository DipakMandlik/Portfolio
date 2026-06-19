import { ArrowUpRight, Mail, MousePointer2 } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/motion/Reveal";
import { TubesBackground } from "@/components/TubesBackground";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink">
      <TubesBackground className="min-h-[100svh]">
        <div className="container-x section-pad relative z-10 text-white">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">
              — Let's talk
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 max-w-4xl font-display text-5xl text-balance text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Let's build something{" "}
              <span className="bg-gradient-to-r from-[#83a6ff] via-[#2f6bff] to-[#83a6ff] bg-clip-text text-transparent">
                worth making.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-xl text-lg text-white/70">
              Have a project, a role, or just a half-formed idea? I read every
              message and reply within a day or two.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={`mailto:${profile.email}`}
                onClick={(e) => e.stopPropagation()}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-base font-medium text-ink transition-colors hover:bg-[#83a6ff] hover:text-white"
              >
                <Mail className="size-4" />
                {profile.email}
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-4 text-base font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                LinkedIn
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-16 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs text-white/70 backdrop-blur">
              <MousePointer2 className="size-3.5" />
              Move your cursor — click to randomize the neon
            </div>
          </Reveal>
        </div>
      </TubesBackground>
    </section>
  );
}
