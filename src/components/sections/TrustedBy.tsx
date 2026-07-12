import { techStack } from "@/data/techStack";

function MarqueeRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-10 pr-10"
      aria-hidden={ariaHidden}
    >
      {techStack.map((name, i) => (
        <span key={i} className="flex items-center gap-10 whitespace-nowrap">
          <span className="font-display text-xl italic tracking-wide text-ink-soft sm:text-2xl">
            {name}
          </span>
          <span className="size-1 rounded-full bg-line" aria-hidden />
        </span>
      ))}
    </div>
  );
}

export function TrustedBy() {
  return (
    <section aria-label="Technology stack" className="border-y border-line bg-bg-porcelain py-10 sm:py-12">
      <div className="container-x">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-ink-soft">
          Works with the modern data &amp; AI stack
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
