import { useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

type Rect = { top: number; left: number; width: number; height: number };

export function useSectionHighlight() {
  const [rect, setRect] = useState<Rect | null>(null);
  const reduce = useReducedMotion();
  const timeoutRef = useRef<number | null>(null);

  const trigger = useCallback(
    (sectionId: string) => {
      if (typeof window === "undefined") return;
      const el = document.getElementById(sectionId);
      if (!el) return;

      const box = el.getBoundingClientRect();
      setRect({
        top: box.top + window.scrollY,
        left: box.left + window.scrollX,
        width: box.width,
        height: box.height,
      });

      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setRect(null), reduce ? 400 : 1800);
    },
    [reduce],
  );

  const overlay =
    typeof document === "undefined"
      ? null
      : createPortal(
          <AnimatePresence>
            {rect && (
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute z-[80] rounded-2xl"
                style={{
                  top: rect.top - 12,
                  left: rect.left - 12,
                  width: rect.width + 24,
                  height: rect.height + 24,
                  boxShadow: "0 0 0 2px var(--blue-bright), 0 0 60px 12px var(--glow)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduce ? 0.2 : 0.5, ease: EASE }}
              />
            )}
          </AnimatePresence>,
          document.body,
        );

  return { trigger, overlay };
}
