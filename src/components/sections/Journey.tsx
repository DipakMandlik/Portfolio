import { useEffect, useRef } from "react";
import { journey } from "@/data/journey";
import { SectionHeading } from "@/components/motion/SectionHeading";

export function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    let ctx: { revert: () => void } | null = null;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const track = trackRef.current;
        const section = sectionRef.current;
        if (!track || !section) return;
        const distance = track.scrollWidth - window.innerWidth;
        if (distance <= 0) return;

        gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance + window.innerHeight * 0.4}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }, sectionRef);
    })();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative overflow-hidden bg-ink text-white"
    >
      <div className="container-x pb-12 pt-24 md:pt-32">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3 text-sm font-medium text-white/60">
            <span className="h-px w-8 bg-blue-bright/80" aria-hidden />
            <span className="uppercase tracking-[0.18em]">A life, in chapters</span>
          </div>
          <h2 className="font-display text-4xl text-white sm:text-5xl md:text-6xl">
            Five moments that shaped the work.
          </h2>
          <p className="mt-6 max-w-xl text-white/70">
            Scroll — the timeline moves with you.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Horizontal pinned track (desktop) / vertical stack (mobile) */}
        <div
          ref={trackRef}
          className="flex w-max gap-8 px-6 pb-32 md:pl-[10vw] md:pr-[40vw]"
        >
          {journey.map((j, i) => (
            <article
              key={i}
              className="flex w-[85vw] max-w-[520px] flex-shrink-0 flex-col gap-6 md:w-[520px]"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={j.image}
                  alt={j.title}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                />
                <span className="absolute left-5 top-5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
                  {j.year}
                </span>
              </div>
              <div>
                <h3 className="font-display text-2xl text-white sm:text-3xl">
                  {j.title}
                </h3>
                <p className="mt-3 text-white/70">{j.body}</p>
              </div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/40">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px w-12 bg-white/20" />
                <span>{String(journey.length).padStart(2, "0")}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
