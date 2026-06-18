import { awards } from "@/data/awards";
import { Reveal, RevealStagger, revealItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Awards() {
  return (
    <section id="awards" className="section-pad bg-bg-porcelain">
      <div className="container-x">
        <SectionHeading
          eyebrow="Recognition"
          title={<>Some moments worth marking.</>}
        />

        <RevealStagger className="mt-16 divide-y divide-line border-y border-line">
          {awards.map((a, i) => (
            <motion.div
              key={i}
              variants={revealItem}
              className="group grid grid-cols-12 items-baseline gap-4 py-7 transition-colors hover:bg-bg-base/60"
            >
              <span className="col-span-2 font-display text-2xl text-blue sm:text-3xl">
                {a.year}
              </span>
              <span className="col-span-7 text-base text-ink sm:col-span-7 sm:text-lg">
                {a.title}
              </span>
              <span className="col-span-3 text-right text-sm text-ink-soft">
                {a.detail}
              </span>
            </motion.div>
          ))}
        </RevealStagger>

        <Reveal className="mt-12 flex items-center gap-2 text-sm text-ink-soft">
          <Sparkles className="size-4 text-blue" />
          And quite a few that didn't make the list.
        </Reveal>
      </div>
    </section>
  );
}
