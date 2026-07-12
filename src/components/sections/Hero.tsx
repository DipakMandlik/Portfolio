import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/profile";

const EASE = [0.16, 1, 0.3, 1] as const;

function SplitName({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <h1 className="font-display text-[14vw] leading-[0.95] tracking-[-0.03em] text-ink sm:text-[10vw] md:text-[8.5vw] lg:text-[8rem]">
      <span className="sr-only">{text} — Software Engineer</span>
      <span aria-hidden="true">
        {words.map((word, wi) => (
          <span key={wi} className="mr-[0.25em] inline-block whitespace-nowrap">
            {word.split("").map((ch, ci) => (
              <motion.span
                key={ci}
                className="inline-block"
                initial={{ y: reduce ? 0 : "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: EASE,
                  delay: 0.15 + (wi * 0.05 + ci * 0.03),
                }}
              >
                {ch}
              </motion.span>
            ))}
          </span>
        ))}
      </span>
    </h1>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden hero-mesh pt-28"
    >
      {/* Drifting glow */}
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

      <div className="container-x relative flex flex-1 flex-col justify-center">

        <SplitName text={profile.name} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
          className="mt-8 max-w-2xl"
        >
          <p className="font-display text-2xl text-ink sm:text-3xl">
            {profile.headline}
          </p>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            {profile.subline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-all hover:bg-blue"
          >
            View work
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="container-x relative flex items-end justify-between pb-10"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-ink-soft">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <ArrowDown className="size-4 text-ink-soft" />
          </motion.div>
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-ink-soft">
          {new Date().getFullYear()}
        </span>
      </motion.div>
    </section>
  );
}
