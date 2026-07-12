import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import { Trophy, Star, Lightbulb, Rocket, BookOpen, Target } from "lucide-react";
import {
  education,
  academicJourney,
  achievementChips,
  type EducationMilestone,
} from "@/data/education";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

const CHIP_ICONS = {
  Trophy,
  Star,
  Lightbulb,
  Rocket,
  BookOpen,
  Target,
} as const;

function AnimatedNumber({
  value,
  decimals = 0,
  suffix = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value.toFixed(decimals));
      return;
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: EASE,
      onUpdate(v) {
        setDisplay(v.toFixed(decimals));
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals, reduce]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function TimelineNode({
  logo,
  alt,
  size = "md",
}: {
  logo: string;
  alt: string;
  size?: "md" | "lg";
}) {
  const reduce = useReducedMotion();
  const dims = size === "lg" ? "size-28 lg:size-32" : "size-20";
  return (
    <div className="relative shrink-0">
      <motion.div
        aria-hidden
        className="absolute inset-[-14%] rounded-full bg-blue/25 blur-xl"
        animate={reduce ? undefined : { opacity: [0.35, 0.75, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        whileHover={{ scale: 1.07 }}
        transition={{ duration: 0.3, ease: EASE }}
        className={`relative ${dims} overflow-hidden rounded-full border-[3px] border-white bg-white shadow-[0_14px_34px_-14px_rgba(26,86,219,0.55)] ring-1 ring-blue/20`}
      >
        <img src={logo} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      </motion.div>
    </div>
  );
}

function MilestoneBody({ m }: { m: EducationMilestone }) {
  return (
    <>
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">{m.dates}</p>
      <h3 className="mt-2 font-display text-xl text-ink">{m.title}</h3>
      {m.subtitle && <p className="text-sm text-ink-soft">{m.subtitle}</p>}
      <p className="mt-1 text-sm text-ink-soft">{m.institution}</p>
      {m.subInstitution && <p className="text-sm text-ink-soft">{m.subInstitution}</p>}
      <p className="mt-2 font-display text-2xl text-blue">
        <AnimatedNumber
          value={m.achievementValue}
          decimals={m.achievementDecimals}
          suffix={m.achievementSuffix}
        />
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{m.supportingText}</p>
    </>
  );
}

function MiniMilestone({ m, delay }: { m: EducationMilestone; delay: number }) {
  return (
    <Reveal delay={delay} className="w-full max-w-[240px] shrink-0">
      <div className="flex h-32 items-center justify-center">
        <TimelineNode logo={m.logo} alt={m.institution} />
      </div>
      <div className="mt-4 rounded-2xl border border-line bg-white p-6 text-center shadow-[0_20px_50px_-32px_rgba(26,86,219,0.3)] transition-shadow duration-300 hover:shadow-[0_24px_55px_-28px_rgba(26,86,219,0.4)]">
        <MilestoneBody m={m} />
        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {m.badges.map((b) => (
            <span
              key={b}
              className="rounded-full bg-blue/10 px-3 py-1 text-xs font-medium text-blue"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function FloatingChips() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="mb-6 hidden flex-wrap gap-2 lg:flex">
      {achievementChips.map((chip, i) => {
        const Icon = CHIP_ICONS[chip.icon];
        return (
          <motion.div
            key={chip.label}
            animate={reduce ? undefined : { y: [0, -5, 0] }}
            transition={{ duration: 4.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
          >
            <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-blue/15 bg-blue/5 px-3 py-1.5 text-xs font-medium text-ink">
              <Icon className="size-3.5 text-blue" />
              {chip.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function MajorMilestone({ m, delay }: { m: EducationMilestone; delay: number }) {
  return (
    <Reveal delay={delay} className="w-full flex-1">
      <div className="flex h-32 items-center justify-center lg:justify-start">
        <TimelineNode logo={m.logo} alt={m.institution} size="lg" />
      </div>

      <div className="relative mt-4 rounded-2xl border border-line bg-white p-6 shadow-[0_24px_60px_-35px_rgba(26,86,219,0.35)] transition-shadow duration-300 hover:shadow-[0_28px_65px_-30px_rgba(26,86,219,0.42)] sm:rounded-3xl sm:p-10">
        <FloatingChips />

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
              {m.dates}
            </p>
            <h3 className="mt-2 font-display text-2xl text-ink sm:text-3xl">{m.title}</h3>
            {m.subtitle && <p className="mt-1 text-base text-ink-soft">{m.subtitle}</p>}
            <p className="mt-3 text-sm text-ink-soft">{m.institution}</p>
            {m.subInstitution && <p className="text-sm text-ink-soft">{m.subInstitution}</p>}
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
              {m.supportingText}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {m.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-line bg-bg-porcelain px-3 py-1.5 text-xs font-medium text-ink-soft"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-blue/15 bg-gradient-to-br from-blue/5 to-transparent p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
              CGPA
            </p>
            <p className="mt-2 font-display text-5xl text-blue">
              <AnimatedNumber
                value={m.achievementValue}
                decimals={m.achievementDecimals}
                suffix=""
              />
            </p>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft">{m.institution}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function AcademicJourneyStrip() {
  return (
    <Reveal delay={0.1} className="mt-16 lg:mt-20">
      <div className="rounded-2xl border border-line bg-white p-8 sm:p-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
          Academic Journey
        </p>
        <div className="mt-7 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-0">
          {academicJourney.map((s, i) => (
            <div key={s.label} className="flex items-center gap-6 sm:gap-0">
              <div className="text-center sm:px-10">
                <p className="font-display text-3xl text-blue sm:text-4xl">
                  <AnimatedNumber value={s.value} decimals={s.decimals} suffix={s.suffix} />
                </p>
                <p className="mt-1.5 text-xs uppercase tracking-[0.14em] text-ink-soft">
                  {s.label}
                </p>
              </div>
              {i < academicJourney.length - 1 && (
                <span
                  aria-hidden
                  className="h-px w-10 shrink-0 bg-gradient-to-r from-blue/40 to-blue/10 sm:w-16"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.55"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [tenth, twelfth, engineering] = education;

  return (
    <section id="education" ref={sectionRef} className="section-pad overflow-hidden bg-bg-porcelain">
      <div className="container-x">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              Building the <span className="text-blue">Foundation.</span>
            </>
          }
          intro="Every milestone shaped how I think, build and solve problems today."
        />

        {/* Desktop / tablet horizontal timeline */}
        <div className="relative mt-24 hidden md:block">
          <motion.div
            aria-hidden
            className="absolute left-0 right-0 top-16 h-[3px] origin-left rounded-full bg-gradient-to-r from-blue/30 via-blue to-blue-deep"
            style={{ scaleX: lineScale }}
          />
          <div className="flex items-start gap-8 lg:gap-12">
            <MiniMilestone m={tenth} delay={0} />
            <MiniMilestone m={twelfth} delay={0.08} />
            <MajorMilestone m={engineering} delay={0.16} />
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="relative mt-16 space-y-12 md:hidden">
          <div
            aria-hidden
            className="absolute left-10 top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-blue/25 via-blue to-blue-deep"
          />
          {[tenth, twelfth].map((m, i) => (
            <Reveal key={m.id} delay={i * 0.08} className="relative pl-24">
              <div className="absolute left-0 top-0">
                <TimelineNode logo={m.logo} alt={m.institution} />
              </div>
              <MilestoneBody m={m} />
              <div className="mt-4 flex flex-wrap gap-1.5">
                {m.badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full bg-blue/10 px-3 py-1 text-xs font-medium text-blue"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.16} className="relative pl-24">
            <div className="absolute left-0 top-0">
              <TimelineNode logo={engineering.logo} alt={engineering.institution} />
            </div>
            <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_25px_60px_-35px_rgba(26,86,219,0.35)]">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
                {engineering.dates}
              </p>
              <h3 className="mt-2 font-display text-xl text-ink">{engineering.title}</h3>
              <p className="text-sm text-ink-soft">{engineering.subtitle}</p>
              <p className="mt-2 text-sm text-ink-soft">{engineering.institution}</p>
              <p className="text-sm text-ink-soft">{engineering.subInstitution}</p>
              <p className="mt-3 font-display text-3xl text-blue">
                <AnimatedNumber value={engineering.achievementValue} decimals={2} suffix=" CGPA" />
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {engineering.supportingText}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {engineering.badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-line bg-bg-porcelain px-2.5 py-1 text-xs font-medium text-ink-soft"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <AcademicJourneyStrip />

        <Reveal delay={0.15} className="mt-14 text-center lg:mt-16">
          <p className="mx-auto max-w-lg text-pretty font-display text-lg italic text-ink-soft sm:text-xl">
            Learning never stopped after graduation. It simply changed classrooms.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
