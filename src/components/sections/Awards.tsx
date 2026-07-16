import { awards, type Award } from "@/data/awards";
import { Reveal, RevealStagger, revealItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

function AwardRow({ a }: { a: Award }) {
  return (
    <div className="group grid grid-cols-12 items-baseline gap-4 py-7 transition-colors hover:bg-bg-base/60">
      <span className="col-span-2 font-display text-2xl text-blue sm:text-3xl">
        {a.year}
      </span>
      <span className="col-span-7 text-base text-ink sm:col-span-7 sm:text-lg">
        {a.title}
      </span>
      <span className="col-span-3 text-right text-sm text-ink-soft">
        {a.detail}
      </span>
    </div>
  );
}

function AwardCard({ a }: { a: Award }) {
  return (
    <div className="grid grid-cols-1 gap-6 rounded-2xl border border-line bg-white p-6 sm:grid-cols-12 sm:gap-8 sm:p-8">
      <div className="sm:col-span-5">
        <div className="overflow-hidden rounded-xl border border-line bg-bg-porcelain">
          <img
            src={a.image}
            alt={a.title}
            width={1080}
            height={685}
            loading="lazy"
            className="aspect-[16/11] w-full object-cover"
          />
        </div>
      </div>
      <div className="sm:col-span-7">
        <span className="font-display text-2xl text-blue sm:text-3xl">{a.year}</span>
        <h3 className="mt-2 font-display text-xl text-ink sm:text-2xl">{a.title}</h3>
        <p className="mt-1 text-sm font-medium text-ink-soft">{a.detail}</p>
        {a.story && (
          <p className="mt-4 text-sm leading-relaxed text-ink-soft text-pretty">
            {a.story}
          </p>
        )}
      </div>
    </div>
  );
}

export function Awards() {
  const withImage = awards.filter((a) => a.image);
  const withoutImage = awards.filter((a) => !a.image);

  return (
    <section id="awards" className="section-pad bg-bg-porcelain">
      <div className="container-x">
        <SectionHeading
          eyebrow="Recognition"
          title={<>Some moments worth marking.</>}
        />

        {withImage.length > 0 && (
          <RevealStagger className="mt-16 space-y-6">
            {withImage.map((a, i) => (
              <motion.div key={`${a.year}-${a.title}-${i}`} variants={revealItem}>
                <AwardCard a={a} />
              </motion.div>
            ))}
          </RevealStagger>
        )}

        {withoutImage.length > 0 && (
          <RevealStagger
            className={
              "divide-y divide-line border-y border-line " +
              (withImage.length > 0 ? "mt-10" : "mt-16")
            }
          >
            {withoutImage.map((a, i) => (
              <motion.div key={`${a.year}-${a.title}-${i}`} variants={revealItem}>
                <AwardRow a={a} />
              </motion.div>
            ))}
          </RevealStagger>
        )}

        <Reveal className="mt-12 flex items-center gap-2 text-sm text-ink-soft">
          <Sparkles className="size-4 text-blue" />
          And quite a few that didn't make the list.
        </Reveal>
      </div>
    </section>
  );
}
