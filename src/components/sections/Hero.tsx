import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Quote } from "lucide-react";
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

function PortraitHalo() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(55%_55%_at_50%_45%,rgba(47,107,255,0.22),transparent_75%)] blur-3xl" />
      <motion.div
        className="absolute inset-[-6%] rounded-full border border-blue/25"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/70" />
      </motion.div>
      <motion.div
        className="absolute inset-[-13%] rounded-full border border-dashed border-blue/15"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/50" />
        <span className="absolute bottom-0 left-1/2 size-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue/50" />
      </motion.div>
    </div>
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
      transition={{ duration: 1, delay: 1.2, ease: EASE }}
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
            className="relative mx-auto max-w-lg lg:max-w-none lg:min-h-[600px]"
          >
            <div className="relative mx-auto aspect-square w-full max-w-lg lg:absolute lg:left-1/2 lg:top-1/2 lg:max-w-[480px] lg:-translate-x-1/2 lg:-translate-y-1/2">
              <PortraitHalo />

              <div
                className="relative h-full w-full overflow-hidden"
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

              <QuoteCard className="hidden w-56 sm:block sm:top-full sm:mt-6 sm:left-1/2 sm:-translate-x-1/2 sm:bottom-auto lg:mt-8" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="container-x relative mt-20 border-t border-line pt-8 sm:mt-24 lg:mt-40"
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
