import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Code2 } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";

function ProjectBlock({ p, i }: { p: Project; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const reverse = i % 2 === 1;

  return (
    <article
      ref={ref}
      className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16"
    >
      <Reveal
        className={
          "md:col-span-7 " + (reverse ? "md:order-2" : "md:order-1")
        }
      >
        <div className="group relative overflow-hidden rounded-2xl border border-line bg-bg-porcelain">
          <motion.img
            src={p.image}
            alt={`${p.title} preview`}
            style={{ y }}
            width={1280}
            height={896}
            loading="lazy"
            className="aspect-[16/11] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
      </Reveal>

      <Reveal
        className={
          "md:col-span-5 " + (reverse ? "md:order-1" : "md:order-2")
        }
        delay={0.08}
      >
        <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">
          {p.role}
        </p>
        <h3 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
          {p.title}
        </h3>
        <p className="mt-4 text-base text-ink-soft text-pretty">
          {p.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-soft"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink"
            >
              Visit
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
            >
              <Code2 className="size-4" />
              Source
            </a>
          )}
        </div>
      </Reveal>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-pad bg-bg-base">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected work"
          title={<>A few things I'm proud to have shipped.</>}
          intro="Each one started as a hard problem and ended as something real — in production, in the world, or both."
        />

        <div className="mt-20 space-y-28">
          {projects.map((p, i) => (
            <ProjectBlock key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
