import { useEffect, useRef } from "react";
import { experience } from "@/data/experience";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";

export function Experience() {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Build a gently meandering path that fills the track height
  useEffect(() => {
    if (typeof window === "undefined") return;
    const path = pathRef.current;
    const svg = svgRef.current;
    const track = trackRef.current;
    if (!path || !svg || !track) return;

    const buildPath = () => {
      const h = track.offsetHeight;
      const w = 80; // svg width
      const cx = w / 2;
      const amp = 22;
      const segments = Math.max(4, Math.round(h / 220));
      let d = `M ${cx} 0`;
      for (let i = 1; i <= segments; i++) {
        const y1 = (h / segments) * (i - 0.5);
        const y2 = (h / segments) * i;
        const x1 = cx + (i % 2 === 0 ? -amp : amp);
        d += ` Q ${x1} ${y1} ${cx} ${y2}`;
      }
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      svg.setAttribute("height", `${h}`);
      path.setAttribute("d", d);
      const len = path.getTotalLength();
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;
      return len;
    };

    let length = buildPath();

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      path.style.strokeDashoffset = "0";
      return;
    }

    const onScroll = () => {
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh * 0.5;
      const progress = Math.min(1, Math.max(0, (vh * 0.85 - rect.top) / total));
      path.style.strokeDashoffset = `${length * (1 - progress)}`;
    };

    const onResize = () => {
      length = buildPath();
      onScroll();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
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

        <div
          ref={trackRef}
          className="relative mt-20 grid grid-cols-1 md:grid-cols-[160px_1fr] md:gap-x-16"
        >
          {/* Animated SVG journey line */}
          <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-20 md:block md:left-[120px]">
            <svg
              ref={svgRef}
              width="80"
              height="100%"
              className="overflow-visible"
              fill="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="exp-line" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-blue-bright, #3b82f6)" />
                  <stop offset="100%" stopColor="var(--color-blue-deep, #1e3a8a)" />
                </linearGradient>
              </defs>
              <path
                ref={pathRef}
                stroke="url(#exp-line)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
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
                  <span
                    aria-hidden
                    className="absolute left-[-7px] top-2 hidden h-3 w-3 rounded-full border-2 border-bg-porcelain bg-blue shadow-[0_0_0_4px_rgba(59,130,246,0.15)] md:block"
                  />

                  <div className="text-xs uppercase tracking-[0.18em] text-ink-soft md:hidden">
                    {role.dates}
                  </div>
                  <h3 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
                    {role.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-2 text-base text-ink-soft">
                    {role.logo && (
                      <img
                        src={role.logo}
                        alt={`${role.company} logo`}
                        className="h-5 w-auto object-contain"
                      />
                    )}
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
                  {role.award && (
                    <div className="mt-5 inline-flex -rotate-1 items-center gap-3 rounded-xl border border-line bg-white p-2 shadow-[0_12px_30px_-20px_rgba(10,10,11,0.3)]">
                      <img
                        src={role.award.image}
                        alt={role.award.caption}
                        className="h-24 w-32 rounded-lg object-cover"
                        loading="lazy"
                      />
                      <span className="max-w-[8rem] pr-2 text-xs text-ink-soft">
                        {role.award.caption}
                      </span>
                    </div>
                  )}
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
