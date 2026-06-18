import { ArrowUpRight } from "lucide-react";
import { certifications } from "@/data/certifications";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="section-pad bg-bg-base">
      <div className="container-x">
        <SectionHeading eyebrow="Certifications" title={<>Receipts.</>} />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col justify-between gap-8 bg-bg-base p-7 transition-colors hover:bg-bg-porcelain"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">
                    {c.date}
                  </p>
                  <h3 className="mt-3 font-display text-lg text-ink leading-snug">
                    {c.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between text-sm text-ink-soft">
                  <span>{c.issuer}</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
