import { techStack } from "@/data/techStack";

function MarqueeRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={ariaHidden}>
      {techStack.map((tech, i) => (
        <span key={i} className="flex items-center gap-2.5 whitespace-nowrap">
          <tech.icon className="size-5 shrink-0" style={{ color: tech.color }} strokeWidth={1.75} />
          <span className="text-lg font-medium text-ink-soft sm:text-xl">{tech.name}</span>
        </span>
      ))}
    </div>
  );
}

export function TrustedBy() {
  return (
    <section
      aria-label="Technology stack"
      className="border-y border-line bg-bg-porcelain py-10 sm:py-12"
    >
      <div className="container-x">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-ink-soft">
          Trusted by modern data stack
        </p>
      </div>

      <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <MarqueeRow />
          <MarqueeRow ariaHidden />
        </div>
      </div>
    </section>
  );
}
