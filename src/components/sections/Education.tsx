import { education } from "@/data/education";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-pad bg-bg-porcelain">
      <div className="container-x">
        <SectionHeading eyebrow="Education" title={<>Foundations.</>} />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-line bg-bg-base p-8 transition-colors hover:border-ink/20">
                <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">{e.dates}</p>
                <h3 className="mt-3 font-display text-2xl text-ink">{e.degree}</h3>
                <p className="mt-1 text-base text-ink-soft">{e.school}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{e.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
