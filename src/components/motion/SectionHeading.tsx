import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({ eyebrow, title, intro, align = "left", id }: Props) {
  return (
    <div
      className={
        "max-w-3xl " + (align === "center" ? "mx-auto text-center" : "")
      }
      id={id}
    >
      {eyebrow && (
        <Reveal>
          <div className="mb-5 flex items-center gap-3 text-sm font-medium text-ink-soft">
            <span className="h-px w-8 bg-blue/60" aria-hidden />
            <span className="uppercase tracking-[0.18em] text-ink-soft">{eyebrow}</span>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-4xl font-normal text-balance text-ink sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft text-pretty">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
