import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { experience, type Role } from "@/data/experience";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

function AiByDmMark() {
  return (
    <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue to-blue-deep">
      <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
        <path
          d="M12 12 6 7M12 12 18 7M12 12 6 17M12 12 18 17"
          stroke="#fff"
          strokeWidth="0.9"
          opacity="0.6"
        />
        <circle cx="12" cy="12" r="2.4" fill="#fff" />
        <circle cx="6" cy="7" r="1.3" fill="#fff" opacity="0.85" />
        <circle cx="18" cy="7" r="1.3" fill="#fff" opacity="0.85" />
        <circle cx="6" cy="17" r="1.3" fill="#fff" opacity="0.85" />
        <circle cx="18" cy="17" r="1.3" fill="#fff" opacity="0.85" />
      </svg>
    </div>
  );
}

function ExperienceCard({ role }: { role: Role }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="group rounded-2xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(10,10,11,0.04)] transition-[box-shadow,border-color] duration-300 hover:border-blue/25 hover:shadow-[0_30px_65px_-35px_rgba(26,86,219,0.4)] sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3.5">
          {role.useAiByDmBadge ? (
            <AiByDmMark />
          ) : role.logo ? (
            <img
              src={role.logo}
              alt={`${role.company} logo`}
              className="size-11 shrink-0 rounded-xl border border-line bg-white object-contain p-1.5"
            />
          ) : null}
          <div>
            <p className="font-display text-xl text-ink sm:text-2xl">{role.company}</p>
            <p className="text-sm text-ink-soft">{role.title}</p>
          </div>
        </div>
        <span className="hidden shrink-0 text-xs font-medium uppercase tracking-[0.14em] text-ink-soft md:block">
          {role.dates}
        </span>
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-soft md:hidden">
        <span className="font-medium uppercase tracking-[0.14em]">{role.dates}</span>
      </div>
      {role.location && <p className="mt-1 text-xs text-ink-soft">{role.location}</p>}

      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{role.description}</p>

      <ul className="mt-4 space-y-2">
        {role.achievements.map((item, j) => (
          <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {role.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {role.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-bg-porcelain px-2.5 py-1 text-xs text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {role.tech && role.tech.length > 0 && (
        <div className="mt-4 border-t border-line pt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft/70">
            Technologies
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {role.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-blue/20 bg-blue/5 px-2.5 py-1 text-xs font-medium text-blue"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-blue/5 p-3.5">
        <Sparkles className="mt-0.5 size-4 shrink-0 text-blue" />
        <p className="text-xs leading-relaxed text-ink">
          <span className="font-semibold">Impact — </span>
          {role.impact}
        </p>
      </div>

      {role.award && (
        <div className="mt-5 inline-flex -rotate-1 items-center gap-3 rounded-xl border border-line bg-white p-2 shadow-[0_12px_30px_-20px_rgba(10,10,11,0.3)]">
          <img
            src={role.award.image}
            alt={role.award.caption}
            className="h-24 w-32 rounded-lg object-cover"
            loading="lazy"
          />
          <span className="max-w-[8rem] pr-2 text-xs text-ink-soft">{role.award.caption}</span>
        </div>
      )}
    </motion.div>
  );
}

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
                  <ExperienceCard role={role} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
