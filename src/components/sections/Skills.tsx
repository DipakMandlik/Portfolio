import { skillGroups } from "@/data/skills";
import { RevealStagger, revealItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-bg-base">
      <div className="container-x">
        <SectionHeading
          eyebrow="Toolkit"
          title={<>The tools, learned over years, chosen on purpose.</>}
        />

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-display text-xl text-ink">{group.label}</h3>
              <div className="mt-2 h-px w-10 bg-blue/60" />
              <RevealStagger className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={revealItem}
                    className="rounded-full border border-line bg-bg-porcelain/60 px-3.5 py-1.5 text-sm text-ink"
                  >
                    {item}
                  </motion.span>
                ))}
              </RevealStagger>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
