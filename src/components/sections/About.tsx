import { motion, useReducedMotion } from "framer-motion";
import { Quote, Rocket, Globe, Zap, Target, Users, Heart, CheckCircle2, Building2 } from "lucide-react";
import { profile } from "@/data/profile";
import { traits, capabilityLabels, journeyMilestones } from "@/data/about";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

function TraitCard({
  icon: Icon,
  title,
  body,
}: {
  icon: (typeof traits)[number]["icon"];
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <div className="grid size-9 place-items-center rounded-xl bg-blue/10">
        <Icon className="size-4.5 text-blue" />
      </div>
      <p className="mt-3 text-sm font-semibold text-ink">{title}</p>
      <p className="mt-1 text-sm text-ink-soft">{body}</p>
    </div>
  );
}

function CapabilityPill({
  icon: Icon,
  label,
  className,
  delay,
}: {
  icon: (typeof capabilityLabels)[number]["icon"];
  label: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={
        "absolute inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-line/70 bg-white/90 px-3 py-2 text-xs font-medium text-ink shadow-[0_16px_40px_-20px_rgba(10,10,11,0.35)] backdrop-blur-md " +
        className
      }
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 1, delay },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <Icon className="size-4 text-blue" />
      {label}
    </motion.div>
  );
}

function NetworkOrb() {
  const reduce = useReducedMotion();
  const nodes = Array.from({ length: 10 }, (_, i) => {
    const angle = (i / 10) * Math.PI * 2;
    return { x: 50 + 42 * Math.cos(angle), y: 50 + 42 * Math.sin(angle) };
  });
  return (
    <div aria-hidden className="absolute inset-0">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(55%_55%_at_50%_45%,rgba(47,107,255,0.24),transparent_75%)] blur-3xl" />
      <motion.svg
        viewBox="0 0 100 100"
        className="relative h-full w-full"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(47,107,255,0.18)" strokeDasharray="1.5 3.5" />
        {nodes.map((n, i) => (
          <g key={i}>
            <line x1="50" y1="50" x2={n.x} y2={n.y} stroke="rgba(47,107,255,0.2)" strokeWidth="0.3" />
            <circle cx={n.x} cy={n.y} r="1.3" fill="#2f6bff" />
          </g>
        ))}
      </motion.svg>
      <motion.div
        className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue to-blue-deep"
        style={{ boxShadow: "0 0 70px rgba(47,107,255,0.5)" }}
        animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function QuoteCard({ className }: { className: string }) {
  return (
    <motion.div
      aria-hidden
      className={
        "absolute rounded-2xl border border-line/70 bg-white/95 p-4 shadow-[0_24px_60px_-25px_rgba(10,10,11,0.3)] backdrop-blur-md " +
        className
      }
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.4, ease: EASE }}
    >
      <Quote className="size-5 text-blue/40" fill="currentColor" strokeWidth={0} />
      <p className="mt-1 max-w-[200px] text-sm text-ink">Build technology that makes a difference.</p>
      <p className="mt-2 font-signature text-2xl text-blue">{profile.name}</p>
    </motion.div>
  );
}

function JourneyTile({ milestone }: { milestone: (typeof journeyMilestones)[number] }) {
  return (
    <div className="w-64 shrink-0 snap-start rounded-2xl border border-line bg-white p-5">
      <p className="text-xs uppercase tracking-[0.14em] text-ink-soft">
        {milestone.year} · {milestone.tag}
      </p>
      <p className="mt-3 font-display text-lg text-ink">{milestone.title}</p>
      <p className="mt-2 text-sm text-ink-soft">{milestone.body}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {milestone.chips.map((chip) => (
          <span key={chip} className="rounded-full bg-bg-porcelain px-2.5 py-1 text-xs text-ink-soft">
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

function StatChip({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Rocket;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-start gap-2">
      <Icon className="mt-0.5 size-4 shrink-0 text-blue" />
      <div>
        <p className="text-sm font-semibold text-ink">{value}</p>
        <p className="text-xs text-ink-soft">{label}</p>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section-pad bg-bg-base">
      <div className="container-x">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              From curiosity to creating <span className="text-blue">real impact.</span>
            </>
          }
          intro="A builder, learner and engineer — passionate about turning cutting-edge technology into real products that solve meaningful problems and create lasting value."
        />

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {traits.map((t) => (
                <TraitCard key={t.title} icon={t.icon} title={t.title} body={t.body} />
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.15}>
            <div className="relative mx-auto max-w-md lg:max-w-none lg:min-h-[420px]">
              <div className="relative mx-auto aspect-square w-full max-w-xs lg:absolute lg:left-1/2 lg:top-1/2 lg:max-w-[260px] lg:-translate-x-1/2 lg:-translate-y-1/2">
                <NetworkOrb />
              </div>

              <CapabilityPill
                icon={capabilityLabels[0].icon}
                label={capabilityLabels[0].label}
                className="hidden lg:left-0 lg:top-2 lg:block"
                delay={0.2}
              />
              <CapabilityPill
                icon={capabilityLabels[1].icon}
                label={capabilityLabels[1].label}
                className="hidden lg:right-0 lg:top-0 lg:block"
                delay={0.5}
              />
              <CapabilityPill
                icon={capabilityLabels[2].icon}
                label={capabilityLabels[2].label}
                className="hidden lg:-left-4 lg:top-1/2 lg:block lg:-translate-y-1/2"
                delay={0.8}
              />
              <CapabilityPill
                icon={capabilityLabels[3].icon}
                label={capabilityLabels[3].label}
                className="hidden lg:-right-4 lg:top-1/2 lg:block lg:-translate-y-1/2"
                delay={1.1}
              />
              <CapabilityPill
                icon={capabilityLabels[4].icon}
                label={capabilityLabels[4].label}
                className="hidden lg:bottom-0 lg:left-4 lg:block"
                delay={1.4}
              />
              <QuoteCard className="hidden w-56 sm:block sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 lg:-bottom-20 lg:top-auto" />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-24" delay={0.05}>
          <h3 className="font-display text-3xl text-ink">
            My <span className="text-blue">Journey</span>
          </h3>
          <div className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
            {journeyMilestones.map((m) => (
              <JourneyTile key={`${m.year}-${m.title}`} milestone={m} />
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl border border-line bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-blue/10">
                  <Users className="size-5 text-blue" />
                </div>
                <div>
                  <p className="font-display text-lg text-ink">AIByDM</p>
                  <p className="text-xs text-ink-soft">Community for Builders, Learners & Doers</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-ink-soft">
                Started AIByDM in my third year of engineering to help learners and builders learn,
                build and ship AI at scale.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-4">
                <StatChip icon={Users} value="1,300+" label="Community Members" />
                <StatChip icon={Rocket} value="Growing" label="AI Learning Platform" />
                <StatChip icon={Globe} value="Global" label="Reach & Impact" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-line bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-blue/10">
                  <Building2 className="size-5 text-blue" />
                </div>
                <div>
                  <p className="font-display text-lg text-ink">PibyThree</p>
                  <p className="text-xs text-ink-soft">Shaping the Future with Data & AI</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-ink-soft">
                Since joining PibyThree, we've been building enterprise-grade Data & AI solutions
                that move the needle — growing, innovating, and creating impact at scale.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-4">
                <StatChip icon={Zap} value="Rapid Growth" label="Scaling Fast" />
                <StatChip icon={Target} value="Market Impact" label="Solutions That Matter" />
                <StatChip icon={Users} value="Enterprise" label="Client Focused" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-full rounded-2xl border border-line bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-blue/10">
                  <Heart className="size-5 text-blue" />
                </div>
                <p className="font-display text-lg text-ink">What Drives Me</p>
              </div>
              <p className="mt-4 text-sm text-ink-soft">
                I believe in continuous learning, building with purpose, and lifting others as I
                grow. My goal is to build intelligent products that solve real-world problems and
                create lasting impact.
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-2 border-t border-line pt-4 sm:grid-cols-2">
                {[
                  "Solve meaningful problems",
                  "Empower through knowledge",
                  "Build at scale",
                  "Create lasting impact",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-ink-soft">
                    <CheckCircle2 className="size-3.5 shrink-0 text-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
