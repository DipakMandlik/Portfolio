import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Quote } from "lucide-react";
import type { ReactNode } from "react";
import { profile } from "@/data/profile";
import { heroStats } from "@/data/techStack";
import portrait from "@/assets/portrait.jpg";

const EASE = [0.16, 1, 0.3, 1] as const;

function RevealWords({ text, delay = 0 }: { text: string; delay?: number }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.28em] inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: reduce ? 0 : "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: delay + i * 0.05 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  );
}

function MiniBarChart({ bars, color }: { bars: number[]; color: string }) {
  return (
    <div className="flex items-end gap-1">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-1.5 rounded-sm"
          style={{
            height: `${h}px`,
            backgroundColor: color,
            opacity: 0.35 + (i / bars.length) * 0.5,
          }}
        />
      ))}
    </div>
  );
}

function MiniGauge({
  percent,
  color,
  size = 56,
}: {
  percent: number;
  color: string;
  size?: number;
}) {
  const r = (size - 8) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--line)" strokeWidth="5" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

function Sparkline({ points, color }: { points: number[]; color: string }) {
  const w = 100;
  const h = 28;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const norm = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / (max - min || 1)) * h;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden>
      <polyline
        points={norm}
        fill="none"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FloatingCard({
  className,
  rotate = 0,
  delay = 0,
  duration = 7,
  children,
}: {
  className: string;
  rotate?: number;
  delay?: number;
  duration?: number;
  children: ReactNode;
}) {
  return (
    <motion.div
      aria-hidden
      className={
        "absolute rounded-2xl border border-line/70 bg-white/90 p-3.5 shadow-[0_24px_60px_-25px_rgba(10,10,11,0.3)] backdrop-blur-md " +
        className
      }
      style={{ rotate: `${rotate}deg` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 1, delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      {children}
    </motion.div>
  );
}

function GovernanceCard({ className }: { className: string }) {
  return (
    <FloatingCard className={className} rotate={-4} delay={0.2} duration={7.5}>
      <p className="text-[11px] font-semibold text-ink">Governance Dashboard</p>
      <div className="mt-3 flex gap-4">
        <ul className="space-y-1.5 text-[9px] text-ink-soft">
          <li>Overview</li>
          <li>Data Quality</li>
          <li>Assets</li>
          <li>Policies</li>
          <li>Lineage</li>
          <li>Reports</li>
        </ul>
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <MiniGauge percent={92} color="#2f6bff" />
            <span className="absolute inset-0 grid place-items-center text-[11px] font-semibold text-ink">
              92%
            </span>
          </div>
          <span className="mt-1 text-[8px] uppercase tracking-wide text-ink-soft">Excellent</span>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-line pt-2 text-[9px] text-ink-soft">
        <div>
          <p className="text-xs font-semibold text-ink">1,246</p>
          <p>Total Events</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-ink">98.6%</p>
          <p>Policies</p>
        </div>
      </div>
      <div className="mt-2.5">
        <MiniBarChart bars={[8, 14, 10, 18, 12, 20, 16]} color="#2f6bff" />
      </div>
    </FloatingCard>
  );
}

function FraudDetectionCard({ className }: { className: string }) {
  return (
    <FloatingCard className={className} rotate={3} delay={0.7} duration={6.5}>
      <p className="text-[11px] font-semibold text-ink">Fraud Detection Platform</p>
      <p className="mt-2 text-[9px] uppercase tracking-wide text-ink-soft">Live Risk Feed</p>
      <div className="mt-1">
        <Sparkline points={[40, 55, 35, 62, 45, 70, 50, 66, 80, 60]} color="#dc4b4b" />
      </div>
      <div className="mt-2 flex items-center justify-between border-t border-line pt-2">
        <div className="flex gap-3 text-[9px] text-ink-soft">
          <div>
            <p className="text-xs font-semibold text-ink">24</p>
            <p>Alerts</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-ink">17</p>
            <p>Blocked</p>
          </div>
        </div>
        <div className="relative">
          <MiniGauge percent={87} color="#dc4b4b" size={44} />
          <span className="absolute inset-0 grid place-items-center text-[10px] font-semibold text-ink">
            87
          </span>
        </div>
      </div>
      <p className="mt-1 text-right text-[8px] uppercase tracking-wide text-[#dc4b4b]">High risk</p>
    </FloatingCard>
  );
}

function SnowflakeReportingCard({ className }: { className: string }) {
  return (
    <FloatingCard className={className} rotate={-3} delay={1.1} duration={7}>
      <p className="text-[11px] font-semibold text-ink">Snowflake Reporting</p>
      <div className="mt-2.5 grid grid-cols-3 gap-2 text-[9px] text-ink-soft">
        <div>
          <p className="text-xs font-semibold text-ink">1,399</p>
          <p>Total Tables</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-ink">248.7M</p>
          <p>Total Rows</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-ink">98.6%</p>
          <p>Data Quality</p>
        </div>
      </div>
      <div className="mt-2.5">
        <MiniBarChart bars={[10, 16, 8, 20, 14, 22, 12, 18, 24, 16]} color="#29b5e8" />
      </div>
    </FloatingCard>
  );
}

function PipelineBuilderCard({ className }: { className: string }) {
  const nodes = ["Extract", "Transform", "Validate", "Load"];
  return (
    <FloatingCard className={className} rotate={4} delay={1.4} duration={6}>
      <p className="text-[11px] font-semibold text-ink">Pipeline Builder</p>
      <ul className="relative mt-3 space-y-3 pl-4">
        <span className="absolute left-[3px] top-1 bottom-1 w-px bg-line" aria-hidden />
        {nodes.map((n) => (
          <li key={n} className="relative text-[9px] text-ink-soft">
            <span className="absolute -left-4 top-1 size-1.5 rounded-full bg-blue" aria-hidden />
            {n}
          </li>
        ))}
      </ul>
    </FloatingCard>
  );
}

function QuoteCard({ className }: { className: string }) {
  return (
    <motion.div
      aria-hidden
      className={
        "absolute rounded-2xl border border-line/70 bg-white/95 p-4 shadow-[0_24px_60px_-25px_rgba(10,10,11,0.3)] backdrop-blur-md " +
        className
      }
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.6, ease: EASE }}
    >
      <Quote className="size-5 text-blue/40" fill="currentColor" strokeWidth={0} />
      <p className="mt-1 max-w-[220px] text-sm text-ink">
        Turning complex data and AI into simple, powerful solutions.
      </p>
      <p className="mt-2 font-signature text-2xl text-blue">{profile.name}</p>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden hero-mesh pt-32 pb-16 sm:pt-40">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(closest-side, rgba(47,107,255,0.18), transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{ x: ["-50%", "-46%", "-54%", "-50%"], y: [0, 12, -8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-line/70" />

      <div className="container-x relative grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full bg-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue"
          >
            AI Engineer · Data Engineer · Product Builder
          </motion.div>

          <h1 className="mt-6 text-balance font-display text-4xl leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl md:text-6xl lg:text-[3.75rem]">
            <RevealWords text="Building AI Systems That Turn Ideas Into" delay={0.1} />{" "}
            <span className="text-blue">
              <RevealWords text="Real-World Impact." delay={0.55} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 1 }}
            className="mt-6 max-w-xl border-l-2 border-blue py-1 pl-4 text-pretty text-base text-ink-soft sm:text-lg"
          >
            I design and build scalable data platforms, AI solutions, and intelligent automation
            that drive real business value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 1.15 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-blue px-5 py-3 text-sm font-medium text-white transition-all hover:bg-blue-deep"
            >
              View My Work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.cvUrl}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-5 py-3 text-sm font-medium text-ink backdrop-blur transition-colors hover:bg-bg-porcelain"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
            className="relative mx-auto max-w-md lg:max-w-none"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-16 -z-10 rounded-full bg-[radial-gradient(55%_55%_at_50%_40%,rgba(47,107,255,0.2),transparent_75%)] blur-3xl"
            />

            <div
              className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden lg:max-w-md"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent, black 8%, black 88%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent, black 8%, black 88%, transparent)",
              }}
            >
              <img
                src={portrait}
                alt={`Portrait of ${profile.name}`}
                width={1024}
                height={1024}
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>

            <PipelineBuilderCard className="hidden w-36 lg:-left-6 lg:top-16 lg:block" />
            <GovernanceCard className="hidden w-52 lg:-right-4 lg:top-2 lg:block" />
            <FraudDetectionCard className="hidden w-48 lg:-right-8 lg:top-[15rem] lg:block" />
            <SnowflakeReportingCard className="hidden w-52 lg:-bottom-6 lg:-right-4 lg:block" />
            <QuoteCard className="hidden w-56 sm:block sm:bottom-4 sm:left-1/2 sm:-translate-x-1/2 lg:-bottom-6 lg:left-4 lg:translate-x-0" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="container-x relative mt-20 border-t border-line pt-8 sm:mt-24"
      >
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.label}>
              <dt className="text-xs uppercase tracking-[0.14em] text-ink-soft">{s.label}</dt>
              <dd className="mt-1 font-display text-xl text-ink sm:text-2xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}
