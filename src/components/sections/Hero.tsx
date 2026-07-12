import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Play } from "lucide-react";
import { profile } from "@/data/profile";
import portraitAsset from "@/assets/portrait-dipak.jpg.asset.json";

const EASE = [0.16, 1, 0.3, 1] as const;
const portrait = portraitAsset.url;

const marqueeLogos = [
  "Snowflake", "dbt", "Python", "Azure", "AWS", "Claude",
  "OpenAI", "LangGraph", "FastAPI", "Docker", "GitHub", "Vector DB", "MCP",
];

const floatingCards = [
  { title: "Governance Dashboard", pos: "top-[6%] right-[2%]", w: "w-[260px]" },
  { title: "Fraud Detection", pos: "top-[32%] right-[-6%]", w: "w-[240px]" },
  { title: "Snowflake Reporting", pos: "bottom-[10%] right-[6%]", w: "w-[280px]" },
  { title: "Pipeline Builder", pos: "top-[40%] left-[-8%]", w: "w-[220px]" },
];

function FloatingCard({
  title, pos, w, delay = 0,
}: { title: string; pos: string; w: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className={`absolute ${pos} ${w} rounded-2xl border border-white/60 bg-white/50 p-4 shadow-[0_20px_60px_-20px_rgba(15,42,107,0.25)] backdrop-blur-xl`}
      style={{ opacity: 0.55 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.55, y: 0 }}
      transition={{ duration: 1.2, ease: EASE, delay: 1.2 + delay }}
    >
      <motion.div
        animate={reduce ? {} : { y: [0, -6, 0] }}
        transition={{ duration: 6 + delay * 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-medium uppercase tracking-widest text-blue-deep/70">
            {title}
          </span>
          <span className="size-2 rounded-full bg-blue" />
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 w-3/4 rounded-full bg-gradient-to-r from-blue/60 to-blue-bright/20" />
          <div className="h-1.5 w-1/2 rounded-full bg-slate-200" />
          <div className="h-1.5 w-2/3 rounded-full bg-slate-200" />
        </div>
        <div className="mt-3 flex items-end gap-1">
          {[6, 10, 4, 12, 8, 14, 9, 11].map((h, i) => (
            <div
              key={i}
              className="w-2 rounded-sm bg-gradient-to-t from-blue/40 to-blue-bright/60"
              style={{ height: `${h * 3}px` }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-white pt-28"
    >
      {/* Background: soft radial blue glows */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_70%_20%,rgba(47,107,255,0.10),transparent_70%),radial-gradient(60%_50%_at_10%_60%,rgba(26,86,219,0.06),transparent_75%)]" />
        <motion.div
          className="absolute -top-20 right-[10%] size-[520px] rounded-full bg-blue/10 blur-[120px]"
          animate={reduce ? {} : { x: [0, 30, -20, 0], y: [0, 20, -10, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-[5%] size-[420px] rounded-full bg-blue-bright/10 blur-[120px]"
          animate={reduce ? {} : { x: [0, -20, 15, 0], y: [0, -15, 10, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-x relative">
        <div className="grid grid-cols-1 items-center gap-12 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-32">
          {/* LEFT */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue/20 bg-blue/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-blue-deep"
            >
              <span className="size-1.5 rounded-full bg-blue" />
              AI Engineer · Data Engineer · Product Builder
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.2 }}
              className="mt-8 font-display text-[clamp(2.5rem,6vw,5.25rem)] font-normal leading-[1.02] tracking-[-0.03em] text-ink text-balance"
            >
              Building AI Systems
              <br />
              That Turn Ideas Into
              <br />
              <span className="bg-gradient-to-r from-blue-deep via-blue to-blue-bright bg-clip-text text-transparent">
                Real-World Impact.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
              className="mt-8 max-w-xl border-l-2 border-blue/40 pl-5 text-base text-ink-soft sm:text-lg"
            >
              I design enterprise AI platforms that combine Data Engineering,
              Snowflake, AI Agents, and intelligent automation into products
              companies actually deploy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(26,86,219,0.6)] transition-all hover:-translate-y-0.5 hover:bg-blue-deep hover:shadow-[0_16px_40px_-12px_rgba(26,86,219,0.7)]"
              >
                View My Work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.cvUrl}
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-6 py-3.5 text-sm font-medium text-ink backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-blue/30 hover:bg-white"
              >
                <span className="grid size-6 place-items-center rounded-full bg-blue/10 text-blue">
                  <Play className="size-3 fill-current" />
                </span>
                Watch Intro
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium text-ink-soft transition-colors hover:text-blue"
              >
                <Download className="size-4" />
                Resume
              </a>
            </motion.div>
          </div>

          {/* RIGHT: Portrait */}
          <div className="relative order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[560px]">
              {/* Radial glow behind head */}
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-[radial-gradient(50%_45%_at_50%_35%,rgba(255,255,255,0.9),transparent_70%),radial-gradient(45%_60%_at_50%_60%,rgba(47,107,255,0.22),transparent_75%)]"
              />

              {/* Floating decorative cards */}
              {floatingCards.map((c, i) => (
                <FloatingCard key={c.title} {...c} delay={i * 0.15} />
              ))}

              {/* Portrait */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
                className="relative h-full w-full"
              >
                <motion.img
                  src={portrait}
                  alt={`Portrait of ${profile.name}`}
                  className="relative z-10 h-full w-full object-contain object-bottom"
                  animate={reduce ? {} : { y: [0, -6, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  loading="eager"
                  fetchPriority="high"
                />
                {/* Soft white fade at bottom */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1/3 bg-gradient-to-t from-white via-white/70 to-transparent"
                />
              </motion.div>

              {/* Quote card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 1 }}
                className="absolute bottom-6 left-[-6%] z-30 w-[280px] rounded-2xl border border-white/60 bg-white/70 p-5 shadow-[0_25px_60px_-20px_rgba(15,42,107,0.25)] backdrop-blur-xl sm:w-[320px]"
              >
                <div className="mb-2 text-2xl leading-none text-blue">"</div>
                <p className="text-sm leading-relaxed text-ink">
                  Turning complex data and AI into production-ready enterprise products.
                </p>
                <div className="mt-3 border-t border-line/60 pt-3">
                  <p className="font-display text-base italic text-ink">Dipak Mandlik</p>
                  <p className="text-xs text-ink-soft">Founder — AIByDM</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="relative pb-12"
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-ink-soft">
            Trusted by modern data & AI stack
          </p>
          <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
              {[...marqueeLogos, ...marqueeLogos].map((logo, i) => (
                <div
                  key={i}
                  className="shrink-0 rounded-xl border border-line/70 bg-white/70 px-6 py-3 text-sm font-medium text-ink-soft shadow-[0_4px_20px_-8px_rgba(15,42,107,0.15)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-blue/30 hover:text-blue hover:shadow-[0_8px_24px_-8px_rgba(26,86,219,0.25)]"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="flex flex-col items-center gap-2 pb-10"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-ink-soft">
            Scroll to explore
          </span>
          <motion.div
            className="h-6 w-px bg-gradient-to-b from-blue/60 to-transparent"
            animate={reduce ? {} : { scaleY: [0.4, 1, 0.4], originY: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
