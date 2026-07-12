import { useMemo, type ReactNode, type CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Quote, Rocket, Globe, Zap, Target, Users, Heart, CheckCircle2, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { traits, orbitalNodes, journeyMilestones, type OrbitalNode } from "@/data/about";
import { Reveal, RevealStagger, revealItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { LinkedInIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import pibythreeLogo from "@/assets/pibythree.png";

const AIBYDM_URL = "https://dipakmandlik.github.io/AIByDM/";
const AIBYDM_LINKEDIN = "https://www.linkedin.com/company/107923947/";
const AIBYDM_INSTAGRAM = "https://www.instagram.com/_aibydm_";

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
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: EASE }}
      className="group flex items-start justify-between gap-4 rounded-2xl border border-line bg-white/80 p-5 backdrop-blur-sm transition-[box-shadow,border-color] duration-300 hover:border-blue/30 hover:shadow-[0_20px_45px_-25px_rgba(26,86,219,0.35)]"
    >
      <div className="flex items-start gap-4">
        <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue/10 text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
          <Icon className="size-5" />
        </div>
        <div>
          <p className="font-display text-lg text-ink">{title}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">{body}</p>
        </div>
      </div>
      <div className="mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-line text-ink-soft transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-blue group-hover:bg-blue group-hover:text-white">
        <ArrowRight className="size-4" />
      </div>
    </motion.div>
  );
}

const ORBITAL_POSITIONS: CSSProperties[] = [
  { top: "3%", left: "21%" },
  { top: "3%", right: "16%" },
  { top: "27%", left: "-2%" },
  { top: "27%", right: "-4%" },
  { top: "51%", left: "-2%" },
  { top: "51%", right: "-4%" },
  { top: "75%", left: "12%" },
  { top: "75%", right: "8%" },
];

function OrbitalCard({
  node,
  position,
  delay,
}: {
  node: OrbitalNode;
  position: CSSProperties;
  delay: number;
}) {
  const Icon = node.icon;
  return (
    <motion.div
      className="absolute z-10 hidden w-[200px] lg:block"
      style={position}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
        whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.25 } }}
        className="flex items-start gap-3 rounded-2xl border border-line/70 bg-white/90 p-3.5 shadow-[0_20px_45px_-25px_rgba(10,10,11,0.3)] backdrop-blur-md transition-shadow duration-300 hover:border-blue/30 hover:shadow-[0_25px_55px_-20px_rgba(26,86,219,0.4)]"
      >
        <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-blue/10 text-blue">
          <Icon className="size-4.5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{node.title}</p>
          <p className="mt-0.5 text-xs leading-snug text-ink-soft">{node.body}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SpiralVortex() {
  const reduce = useReducedMotion();
  const dots = useMemo(() => {
    const N = 170;
    const ARMS = 4;
    const TURNS = 2.6;
    return Array.from({ length: N }, (_, i) => {
      const t = i / N;
      const arm = i % ARMS;
      const armOffset = (arm / ARMS) * Math.PI * 2;
      const radius = 47 * t;
      const angle = armOffset + (1 - t) * TURNS * Math.PI * 2;
      const x = 50 + radius * Math.cos(angle);
      const y = 50 + radius * Math.sin(angle);
      const size = 0.5 + t * 1.5;
      const edgeFade = t > 0.86 ? Math.max(0, 1 - (t - 0.86) / 0.14) : 1;
      const opacity = Math.max(0.06, Math.min(0.85, t * 1.1)) * edgeFade;
      return { x, y, size, opacity };
    });
  }, []);

  return (
    <div aria-hidden className="absolute inset-0">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(45%_45%_at_50%_50%,rgba(47,107,255,0.16),transparent_75%)] blur-2xl" />

      <motion.div
        className="absolute inset-[8%] rounded-full border border-blue/15"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-[-4%] rounded-full border border-dashed border-blue/10"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 130, repeat: Infinity, ease: "linear" }}
      />

      <motion.svg
        viewBox="0 0 100 100"
        className="relative h-full w-full"
        style={{ willChange: "transform" }}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
      >
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.size / 2} fill="#2f6bff" opacity={d.opacity} />
        ))}
      </motion.svg>

      <motion.div
        className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        style={{ boxShadow: "0 0 40px 12px rgba(255,255,255,0.9), 0 0 70px 30px rgba(47,107,255,0.35)" }}
        animate={reduce ? undefined : { scale: [1, 1.15, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

const PARTICLES = [
  { top: "4%", left: "0%", size: 6, duration: 5 },
  { top: "12%", left: "94%", size: 5, duration: 6.5 },
  { top: "45%", left: "0%", size: 4, duration: 5.8 },
  { top: "90%", left: "4%", size: 5, duration: 6.2 },
  { top: "94%", left: "88%", size: 6, duration: 5.4 },
  { top: "42%", left: "98%", size: 4, duration: 6.8 },
];

function ScatterParticles() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-blue/40"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
          animate={reduce ? undefined : { y: [0, -10, 0], opacity: [0.35, 0.9, 0.35] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}
    </div>
  );
}

function OrbitalVisualization() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none lg:min-h-[600px]">
      <div className="relative mx-auto aspect-square w-full max-w-xs lg:absolute lg:left-1/2 lg:top-[4%] lg:max-w-[300px] lg:-translate-x-1/2">
        <SpiralVortex />
      </div>

      <ScatterParticles />

      {orbitalNodes.map((node, i) => (
        <OrbitalCard key={node.title} node={node} position={ORBITAL_POSITIONS[i]} delay={0.08 * i} />
      ))}

      <div className="mt-8 grid grid-cols-2 gap-3 lg:hidden">
        {orbitalNodes.map((node) => {
          const Icon = node.icon;
          return (
            <div key={node.title} className="rounded-xl border border-line bg-white p-3">
              <div className="grid size-8 place-items-center rounded-lg bg-blue/10 text-blue">
                <Icon className="size-4" />
              </div>
              <p className="mt-2 text-sm font-semibold text-ink">{node.title}</p>
              <p className="mt-0.5 text-xs text-ink-soft">{node.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BigQuoteCard() {
  return (
    <Reveal delay={0.2} className="relative mt-10 lg:mt-16">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-8 shadow-[0_20px_50px_-30px_rgba(10,10,11,0.25)]">
        <Quote className="size-8 text-blue/30" fill="currentColor" strokeWidth={0} />
        <p className="mt-3 max-w-lg text-pretty font-display text-xl text-ink sm:text-2xl">
          Building products that solve meaningful problems.
        </p>
        <p className="mt-3 font-signature text-2xl text-blue">— {profile.name}</p>
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-6 right-8 hidden grid-cols-4 gap-2 opacity-60 sm:grid"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="size-1 rounded-full bg-blue/30" />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function JourneyTile({ milestone }: { milestone: (typeof journeyMilestones)[number] }) {
  return (
    <div className="w-64 shrink-0 rounded-2xl border border-line bg-white p-5">
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

function AiByDmBadge() {
  return (
    <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue to-blue-deep">
      <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
        <path
          d="M12 12 6 7M12 12 18 7M12 12 6 17M12 12 18 17"
          stroke="#fff"
          strokeWidth="0.9"
          opacity="0.6"
        />
        <circle cx="12" cy="12" r="2.4" fill="#fff" />
        <circle cx="6" cy="7" r="1.3" fill="#fff" opacity="0.85" />
        <circle cx="18" cy="7" r="1.3" fill="#fff" opacity="0.85" />
        <circle cx="6" cy="17" r="1.3" fill="#fff" opacity="0.85" />
        <circle cx="18" cy="17" r="1.3" fill="#fff" opacity="0.85" />
      </svg>
    </div>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid size-8 shrink-0 place-items-center overflow-hidden rounded-lg transition-transform hover:scale-105"
    >
      {children}
    </a>
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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="About Me"
              title={
                <>
                  From curiosity to creating <span className="text-blue">real impact.</span>
                </>
              }
              intro="I build intelligent systems, automate workflows, and create products that solve meaningful problems and drive real-world impact."
            />

            <RevealStagger className="mt-8 space-y-4" delay={0.1}>
              {traits.map((t) => (
                <motion.div key={t.title} variants={revealItem}>
                  <TraitCard icon={t.icon} title={t.title} body={t.body} />
                </motion.div>
              ))}
            </RevealStagger>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <OrbitalVisualization />
            </Reveal>
            <BigQuoteCard />
          </div>
        </div>

        <Reveal className="mt-20 lg:mt-24" delay={0.05}>
          <h3 className="font-display text-3xl text-ink">
            My <span className="text-blue">Journey</span>
          </h3>
          <p className="mt-2 text-sm text-ink-soft">Every step so far, one after another.</p>

          <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
            <div className="flex w-max animate-marquee-slow group-hover:[animation-play-state:paused] motion-reduce:animate-none">
              <div className="flex gap-5 pr-5" aria-hidden={false}>
                {journeyMilestones.map((m) => (
                  <JourneyTile key={`${m.year}-${m.title}`} milestone={m} />
                ))}
              </div>
              <div className="flex gap-5 pr-5" aria-hidden>
                {journeyMilestones.map((m) => (
                  <JourneyTile key={`${m.year}-${m.title}-dup`} milestone={m} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl border border-line bg-white p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <AiByDmBadge />
                  <div>
                    <p className="font-display text-lg text-ink">AIByDM</p>
                    <p className="text-xs text-ink-soft">Community for Builders, Learners & Doers</p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <IconLink href={AIBYDM_URL} label="AIByDM website">
                    <div className="grid size-8 place-items-center rounded-lg bg-blue/10">
                      <Globe className="size-4 text-blue" />
                    </div>
                  </IconLink>
                  <IconLink href={AIBYDM_LINKEDIN} label="AIByDM on LinkedIn">
                    <LinkedInIcon className="size-8" />
                  </IconLink>
                  <IconLink href={AIBYDM_INSTAGRAM} label="AIByDM on Instagram">
                    <InstagramIcon className="size-8" />
                  </IconLink>
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
                <img src={pibythreeLogo} alt="PibyThree logo" className="h-9 w-auto" />
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
