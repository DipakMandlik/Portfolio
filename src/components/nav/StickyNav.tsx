import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-50% 0px -45% 0px", threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500 " + (scrolled ? "frost" : "")
      }
    >
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-medium tracking-tight"
          aria-label={`${profile.name} — home`}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-blue text-[11px] font-semibold text-ink">
            {profile.monogram}
          </span>
          <span className="hidden sm:inline text-ink-soft">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={
                    "rounded-full px-3.5 py-1.5 text-sm transition-colors " +
                    (isActive ? "text-ink" : "text-ink-soft hover:text-ink")
                  }
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-blue px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-deep"
        >
          Let's Connect
          <ArrowUpRight className="size-4" />
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink"
        >
          <span className="sr-only">Menu</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M2 5h12M2 11h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden frost border-t border-line">
          <ul className="container-x flex flex-col py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block py-3 text-base text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                onClick={() => setOpen(false)}
                href="#contact"
                className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-blue px-4 py-2.5 text-sm font-medium text-white"
              >
                Let's Connect
                <ArrowUpRight className="size-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
