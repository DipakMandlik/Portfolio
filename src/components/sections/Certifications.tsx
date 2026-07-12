import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import {
  certifications,
  certCategories,
  certStats,
  type Certification,
  type CertCategory,
} from "@/data/certifications";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;
type FilterValue = "All" | CertCategory;
const FILTERS: FilterValue[] = ["All", ...certCategories];

type CarouselItem =
  | { type: "cert"; key: string; cert: Certification }
  | { type: "divider"; key: string; label: string };

function buildCarouselItems(filter: FilterValue): CarouselItem[] {
  if (filter !== "All") {
    return certifications
      .filter((c) => c.category === filter)
      .map((cert) => ({ type: "cert" as const, key: cert.id, cert }));
  }
  const items: CarouselItem[] = [];
  certCategories.forEach((cat) => {
    const group = certifications.filter((c) => c.category === cat);
    if (!group.length) return;
    items.push({ type: "divider", key: `divider-${cat}`, label: cat });
    group.forEach((cert) => items.push({ type: "cert", key: cert.id, cert }));
  });
  return items;
}

function AnimatedCount({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const duration = 1200;
        function step(now: number) {
          const t = Math.min(1, (now - start) / duration);
          setDisplay(Math.round(value * (1 - Math.pow(1 - t, 3))));
          if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        observer.disconnect();
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, reduce]);

  return <span ref={ref}>{display}</span>;
}

const PARTICLES = [
  { top: "8%", left: "6%", size: 6 },
  { top: "18%", left: "90%", size: 5 },
  { top: "72%", left: "4%", size: 5 },
  { top: "82%", left: "94%", size: 6 },
  { top: "46%", left: "50%", size: 4 },
];

function FloatingBackground() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-blue/10 blur-3xl" />
      <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-blue/[0.07] blur-3xl" />
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-blue/30"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
          animate={reduce ? undefined : { y: [0, -14, 0], opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}
    </div>
  );
}

function CategoryDivider({ label }: { label: string }) {
  return (
    <div className="flex w-[110px] shrink-0 snap-start flex-col items-center justify-center gap-3 px-2 text-center">
      <span
        aria-hidden
        className="h-14 w-px bg-gradient-to-b from-transparent via-line to-transparent"
      />
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">{label}</p>
      <span
        aria-hidden
        className="h-14 w-px bg-gradient-to-b from-transparent via-line to-transparent"
      />
    </div>
  );
}

function CertCard({
  cert,
  onOpen,
}: {
  cert: Certification;
  onOpen: (c: Certification) => void;
}) {
  const Logo = cert.issuerLogo;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="group relative w-[290px] shrink-0 snap-start select-none overflow-hidden rounded-[24px] border border-line/70 bg-white/85 shadow-[0_20px_50px_-30px_rgba(26,86,219,0.25)] backdrop-blur-md transition-shadow duration-300 hover:border-blue/25 hover:shadow-[0_35px_70px_-28px_rgba(26,86,219,0.4)]"
    >
      <button
        type="button"
        onClick={() => onOpen(cert)}
        className="block w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/50"
        aria-label={`View ${cert.title} certificate`}
      >
        <div className="aspect-[4/3] w-full overflow-hidden bg-bg-porcelain">
          <img
            src={cert.image}
            alt={cert.title}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      </button>

      <div className="p-5">
        <div className="flex items-center gap-2">
          <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-blue/10">
            <Logo className="size-4.5" />
          </div>
          <span className="text-xs font-medium uppercase tracking-[0.1em] text-ink-soft">
            {cert.issuer}
          </span>
        </div>
        <h3 className="mt-3 font-display text-base leading-snug text-ink">{cert.title}</h3>
        <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{cert.description}</p>

        {cert.verifyUrl ? (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn mt-4 inline-flex items-center gap-1.5 rounded-full border border-blue/20 bg-blue/5 px-3.5 py-2 text-xs font-medium text-blue transition-colors duration-300 hover:bg-blue hover:text-white"
          >
            Verify Credential
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </a>
        ) : (
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-line bg-bg-porcelain px-3.5 py-2 text-xs font-medium text-ink-soft">
            Verification Pending
          </span>
        )}
      </div>
    </motion.div>
  );
}

function CertModal({
  cert,
  onClose,
}: {
  cert: Certification | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!cert) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cert, onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-ink/40 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={cert.title}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="relative z-10 max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-line bg-white p-6 shadow-[0_50px_100px_-30px_rgba(10,10,11,0.4)] sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 z-10 grid size-9 place-items-center rounded-full border border-line bg-white text-ink-soft transition-colors hover:bg-bg-porcelain"
            >
              <X className="size-4" />
            </button>

            <div className="overflow-hidden rounded-2xl border border-line bg-bg-porcelain">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full object-contain"
                loading="lazy"
              />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue/10">
                <cert.issuerLogo className="size-5" />
              </div>
              <div>
                <p className="font-display text-lg text-ink">{cert.title}</p>
                <p className="text-sm text-ink-soft">Issued by {cert.issuer}</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{cert.description}</p>
            <span className="mt-4 inline-block rounded-full bg-blue/10 px-3 py-1 text-xs font-medium text-blue">
              {cert.category}
            </span>

            <div className="mt-6">
              {cert.verifyUrl ? (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-blue px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-deep"
                >
                  Verify Credential
                  <ArrowUpRight className="size-4" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-porcelain px-5 py-3 text-sm font-medium text-ink-soft">
                  Verification link coming soon
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CertCarousel({ filter }: { filter: FilterValue }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStateRef = useRef({ startX: 0, startScroll: 0, moved: false });
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const reduce = useReducedMotion();
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  const items = useMemo(() => buildCarouselItems(filter), [filter]);
  const loopItems = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    const el = trackRef.current;
    if (el) el.scrollLeft = 0;
  }, [filter]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el || reduce) return;
    let raf: number;
    let last = performance.now();
    function tick(now: number) {
      const dt = now - last;
      last = now;
      if (el && !pausedRef.current && !draggingRef.current) {
        el.scrollLeft += dt * 0.035;
        const half = el.scrollWidth / 2;
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [items, reduce]);

  const pauseTemporarily = useCallback(() => {
    pausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, 1800);
  }, []);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    draggingRef.current = true;
    pausedRef.current = true;
    dragStateRef.current = { startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const el = trackRef.current;
    if (!el) return;
    const dx = e.clientX - dragStateRef.current.startX;
    if (Math.abs(dx) > 3) dragStateRef.current.moved = true;
    el.scrollLeft = dragStateRef.current.startScroll - dx;
  };
  const endDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    pauseTemporarily();
  };

  const onWheel = (e: ReactWheelEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollLeft += e.deltaY;
      pauseTemporarily();
    }
  };

  const onKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    if (e.key === "ArrowRight") {
      el.scrollLeft += 320;
      pauseTemporarily();
    }
    if (e.key === "ArrowLeft") {
      el.scrollLeft -= 320;
      pauseTemporarily();
    }
  };

  return (
    <>
      <div
        ref={trackRef}
        role="region"
        aria-label="Certification carousel"
        tabIndex={0}
        className="flex cursor-grab gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] active:cursor-grabbing focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/40 [&::-webkit-scrollbar]:hidden"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          if (!draggingRef.current) pausedRef.current = false;
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={() => draggingRef.current && endDrag()}
        onWheel={onWheel}
        onKeyDown={onKeyDown}
        onClickCapture={(e) => {
          if (dragStateRef.current.moved) {
            e.stopPropagation();
            e.preventDefault();
            dragStateRef.current.moved = false;
          }
        }}
      >
        {loopItems.map((item, i) =>
          item.type === "divider" ? (
            <CategoryDivider key={`${item.key}-${i}`} label={item.label} />
          ) : (
            <CertCard key={`${item.key}-${i}`} cert={item.cert} onOpen={setActiveCert} />
          ),
        )}
      </div>

      <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </>
  );
}

export function Certifications() {
  const [filter, setFilter] = useState<FilterValue>("All");

  return (
    <section id="certifications" className="section-pad relative overflow-hidden bg-bg-base">
      <FloatingBackground />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Certifications"
          title={
            <>
              Learning Never <span className="text-blue">Stops.</span>
            </>
          }
          intro="Every certification represents practical knowledge applied to real-world engineering, cloud platforms, AI systems and enterprise software."
        />

        <Reveal delay={0.05} className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl border border-line bg-white/70 px-8 py-6 backdrop-blur-sm sm:divide-x sm:divide-line">
            <div className="text-center sm:pr-10">
              <p className="font-display text-3xl text-blue">
                <AnimatedCount value={certStats.total} />+
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-soft">
                Professional Certifications
              </p>
            </div>
            {certStats.domains.map((d) => (
              <div key={d} className="px-2 text-sm font-medium text-ink-soft sm:px-10">
                {d}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`relative rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                filter === f
                  ? "border-transparent text-white"
                  : "border-line text-ink-soft hover:border-blue/30 hover:text-ink"
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="cert-filter-pill"
                  className="absolute inset-0 rounded-full bg-blue"
                  transition={{ duration: 0.35, ease: EASE }}
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="relative mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-base to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-base to-transparent sm:w-24" />
          <CertCarousel filter={filter} />
        </Reveal>
      </div>
    </section>
  );
}
