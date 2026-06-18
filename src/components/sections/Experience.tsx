import { useEffect, useRef } from "react";
import { experience } from "@/data/experience";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";

export function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let ctx: { revert: () => void } | null = null;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        if (reduce) {
          gsap.set(lineRef.current, { scaleY: 1 });
          return;
        }
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "bottom 65%",
              scrub: true,
            },
          },
        );
      }, sectionRef);
    })();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-pad bg-bg-porcelain"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Experience"
          title={<>A short, intentional career so far.</>}
          intro="Each role has been a chance to ship something that matters and learn something I didn't know the day before."
        />

        <div className="relative mt-20 grid grid-cols-1 md:grid-cols-[160px_1fr] md:gap-x-16">
          {/* Timeline line */}
          <div className="pointer-events-none absolute left-0 top-0 hidden h-full md:block md:left-[160px]">
            <div className="relative ml-[-1px] h-full w-px bg-line">
              <div
                ref={lineRef}
                className="absolute inset-0 origin-top bg-gradient-to-b from-blue to-blue-deep"
              />
            </div>
          </div>

          <div className="contents">
            {experience.map((role, i) => (
              <div key={i} className="contents">
                <Reveal className="hidden md:block">
                  <div className="sticky top-28 pb-16 pt-1 text-sm font-medium uppercase tracking-[0.18em] text-ink-soft">
                    {role.dates}
                  </div>
                </Reveal>

                <Reveal className="relative pb-16 md:pl-12" delay={0.05}>
                  {/* Node */}
                  <span
                    aria-hidden
                    className="absolute left-[-7px] top-2 hidden h-3 w-3 rounded-full border-2 border-bg-porcelain bg-blue md:block"
                  />

                  <div className="text-xs uppercase tracking-[0.18em] text-ink-soft md:hidden">
                    {role.dates}
                  </div>
                  <h3 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-base text-ink-soft">
                    {role.company}
                    {role.location ? ` · ${role.location}` : ""}
                  </p>
                  <ul className="mt-5 space-y-2.5 text-ink-soft">
                    {role.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 leading-relaxed">
                        <span
                          aria-hidden
                          className="mt-2.5 inline-block h-px w-3 flex-shrink-0 bg-ink-soft/50"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
