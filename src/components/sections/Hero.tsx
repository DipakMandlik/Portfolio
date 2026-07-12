import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { heroProofCards, heroStats } from "@/data/techStack";
import portrait from "@/assets/portrait.jpg";

const EASE = [0.16, 1, 0.3, 1] as const;

function RevealWords({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
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

function FloatingCard({
  label,
  className,
  rotate = 0,
  delay = 0,
  duration = 6,
  bars,
}: {
  label: string;
  className: string;
  rotate?: number;
  delay?: number;
  duration?: number;
  bars: number[];
}) {
  return (
    <motion.div
      aria-hidden
      className={
        "absolute rounded-2xl border border-line/70 bg-white/60 p-3 shadow-[0_20px_50px_-25px_rgba(10,10,11,0.35)] backdrop-blur-md " +
        className
      }
      style={{ rotate: `${rotate}deg` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.85, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 1, delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <span className="mb-2 block truncate text-[10px] uppercase tracking-[0.08em] text-ink-soft/80">
        {label}
      </span>
      <div className="flex items-end gap-1">
        {bars.map((h, i) => (
          <span
            key={i}
            className="w-2 rounded-full bg-blue/25"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function Hero() {
  const [primaryRole] = profile.headline.split(" · ");

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden hero-mesh pt-32 pb-16 sm:pt-40"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(47,107,255,0.18), transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{ x: ["-50%", "-46%", "-54%", "-50%"], y: [0, 12, -8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-line/70" />

      <div className="container-x relative grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-1.5 text-xs font-medium text-ink-soft backdrop-blur"
          >
            <span className="size-1.5 rounded-full bg-blue" aria-hidden />
            {profile.name} · {primaryRole}
          </motion.div>

          <h1 className="mt-6 text-balance font-display text-4xl leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            <RevealWords text="Building AI systems that turn ideas into" delay={0.1} />{" "}
            <span className="text-blue">
              <RevealWords text="real-world impact." delay={0.55} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 1 }}
            className="mt-6 max-w-xl text-pretty text-base text-ink-soft sm:text-lg"
          >
            I design and build scalable data platforms, AI solutions, and
            intelligent automation that drive real business value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 1.15 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-all hover:bg-blue"
            >
              View my work
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

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
            className="relative mx-auto max-w-sm"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-[radial-gradient(60%_50%_at_50%_35%,rgba(47,107,255,0.16),transparent_75%)] blur-2xl"
            />

            <FloatingCard
              label={heroProofCards[0].label}
              className="-left-10 top-4 hidden w-32 sm:block"
              rotate={-7}
              delay={0.2}
              duration={7}
              bars={[10, 18, 12, 22, 15]}
            />
            <FloatingCard
              label={heroProofCards[1].label}
              className="-right-8 top-20 hidden w-36 md:block"
              rotate={6}
              delay={0.7}
              duration={6.5}
              bars={[14, 9, 20, 16, 11]}
            />
            <FloatingCard
              label={heroProofCards[2].label}
              className="-left-6 bottom-28 hidden w-32 lg:block"
              rotate={5}
              delay={1.1}
              duration={7.5}
              bars={[8, 16, 22, 13, 18]}
            />
            <FloatingCard
              label={heroProofCards[3].label}
              className="-right-10 bottom-8 hidden w-32 sm:block"
              rotate={-5}
              delay={1.4}
              duration={6}
              bars={[18, 12, 16, 9, 14]}
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-ink shadow-[0_40px_100px_-40px_rgba(10,10,11,0.5)]">
              <img
                src={portrait}
                alt={`Portrait of ${profile.name}`}
                width={1024}
                height={1024}
                fetchPriority="high"
                className="aspect-square w-full object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
              />
            </div>
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
              <dt className="text-xs uppercase tracking-[0.14em] text-ink-soft">
                {s.label}
              </dt>
              <dd className="mt-1 font-display text-xl text-ink sm:text-2xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}
