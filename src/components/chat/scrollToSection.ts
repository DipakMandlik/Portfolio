import { getLenis } from "@/components/LenisProvider";

export function scrollToSection(sectionId: string, onArrive?: () => void): boolean {
  if (typeof window === "undefined") return false;

  const el = document.getElementById(sectionId);
  if (!el) return false;

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(el, { offset: -80, duration: 1.15, onComplete: onArrive });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (onArrive) {
      window.setTimeout(onArrive, 400);
    }
  }

  return true;
}
