import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import portrait from "@/assets/portrait.jpg";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="about" className="section-pad bg-bg-base">
      <div className="container-x">
        <SectionHeading
          eyebrow="About"
          title={<>Calm software, made with care.</>}
        />

        <div ref={ref} className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-7" delay={0.05}>
            <p className="font-display text-2xl leading-[1.25] text-ink text-balance sm:text-3xl md:text-4xl">
              "{profile.bio}"
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-y-8 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-ink-soft">Based in</dt>
                <dd className="mt-2 text-base text-ink">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-ink-soft">Experience</dt>
                <dd className="mt-2 text-base text-ink">{profile.yearsExperience} years</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-ink-soft">Focus</dt>
                <dd className="mt-2 text-base text-ink">{profile.focus}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="md:col-span-5" delay={0.15}>
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_50%_at_50%_40%,rgba(47,107,255,0.18),transparent_75%)] blur-2xl"
              />
              <div className="relative overflow-hidden rounded-2xl border border-line bg-ink shadow-[0_30px_80px_-30px_rgba(10,10,11,0.45)]">
                <motion.img
                  src={portrait}
                  alt={`Portrait of ${profile.name}`}
                  style={{ y }}
                  width={1024}
                  height={1024}
                  className="h-[460px] w-full object-cover object-center sm:h-[600px]"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
