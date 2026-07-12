import { motion } from "framer-motion";
import {
  Star,
  TrendingUp,
  Code2,
  Bot,
  CircleCheck,
  RefreshCw,
} from "lucide-react";
import { toolkitCategories, toolkitMarquee, type ToolkitCategory } from "@/data/toolkit";
import { Reveal, RevealStagger, revealItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";

function ToolsWithPurpose() {
  return (
    <Reveal delay={0.1} className="relative">
      <div className="rounded-2xl border border-line bg-white/80 p-6 pr-8 shadow-[0_1px_2px_rgba(10,10,11,0.04)] sm:p-7 sm:pr-36">
        <div className="flex size-11 items-center justify-center rounded-xl bg-blue/10 text-blue">
          <TrendingUp className="size-5" />
        </div>
        <h3 className="mt-4 font-display text-xl text-ink">Tools with Purpose</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
          Every tool here is chosen with a purpose — to solve real problems, deliver
          scalable solutions, and create meaningful impact.
        </p>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -right-3 -top-8 hidden w-40 sm:block"
      >
        <div className="relative h-28 w-full rounded-2xl bg-gradient-to-br from-blue/25 via-blue/10 to-transparent shadow-[0_20px_45px_-25px_rgba(26,86,219,0.35)]">
          <div className="absolute inset-x-3 top-3 h-6 rounded-lg bg-white/60" />
        </div>
        <motion.div
          className="absolute -top-6 left-1 flex size-11 -rotate-6 items-center justify-center rounded-xl border border-line bg-white shadow-md"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code2 className="size-5 text-blue" />
        </motion.div>
        <motion.div
          className="absolute -top-9 left-14 flex size-11 rotate-3 items-center justify-center rounded-xl border border-line bg-white shadow-md"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <TrendingUp className="size-5 text-emerald-600" />
        </motion.div>
        <motion.div
          className="absolute -top-5 left-24 flex size-11 -rotate-3 items-center justify-center rounded-xl border border-line bg-white shadow-md"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          <Bot className="size-5 text-violet-600" />
        </motion.div>
      </div>
    </Reveal>
  );
}

function CategoryCard({ category }: { category: ToolkitCategory }) {
  const Icon = category.icon;
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(10,10,11,0.04)] transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className={`flex size-11 items-center justify-center rounded-xl ${category.iconBg}`}>
          <Icon className={`size-5 ${category.iconColor}`} />
        </div>
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${category.badgeBg}`}>
          {category.number}
        </span>
      </div>

      <h3 className="mt-4 font-display text-lg text-ink">{category.label}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{category.description}</p>

      <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft/70">
        Top Tools
      </p>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-3">
        {category.topTools.map((tool) => (
          <div key={tool.name} className="flex w-12 flex-col items-center gap-1.5 text-center">
            <tool.icon className="size-6" />
            <span className="text-[10.5px] leading-tight text-ink-soft">{tool.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-line pt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft/70">
          What I Do
        </p>
        <ul className="mt-3 space-y-2">
          {category.whatIDo.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
              <CircleCheck className="mt-0.5 size-4 shrink-0 text-blue" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MarqueeRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={ariaHidden}>
      {toolkitMarquee.map((tool, i) => (
        <span key={i} className="flex items-center gap-2.5 whitespace-nowrap">
          <tool.icon className="size-6 shrink-0" />
          <span className="text-base font-medium text-ink-soft sm:text-lg">{tool.name}</span>
        </span>
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-bg-base">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Toolkit"
              title={
                <>
                  The toolkit behind everything <span className="text-blue">I build.</span>
                </>
              }
              intro="These are the tools I work with to design, build, automate and scale data platforms, AI solutions and modern applications."
            />
            <Reveal delay={0.15}>
              <div className="mt-7 inline-flex items-start gap-2 rounded-2xl border border-line bg-bg-porcelain/70 px-4 py-2.5 text-sm text-ink-soft sm:rounded-full sm:items-center">
                <Star className="mt-0.5 size-4 shrink-0 text-blue sm:mt-0" fill="currentColor" strokeWidth={0} />
                <span>
                  Always <span className="font-semibold text-ink">learning</span>. Always{" "}
                  <span className="font-semibold text-ink">building</span>. Always{" "}
                  <span className="font-semibold text-ink">shipping impact</span>.
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <ToolsWithPurpose />
          </div>
        </div>

        <RevealStagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {toolkitCategories.map((category) => (
            <motion.div key={category.label} variants={revealItem} className="h-full">
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </RevealStagger>

        <Reveal delay={0.1} className="mt-14">
          <div className="rounded-2xl border border-line bg-bg-porcelain/60 py-8">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
              Tech I Work With
            </p>
            <div className="group relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="flex w-max animate-marquee-slow group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                <MarqueeRow />
                <MarqueeRow ariaHidden />
              </div>
            </div>
            <p className="mt-6 flex items-center justify-center gap-2 text-center text-sm text-ink-soft">
              <RefreshCw className="size-3.5" />
              Tools keep evolving. So do I.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
