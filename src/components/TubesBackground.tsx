import { useEffect, useRef, useState, type ReactNode } from "react";

const randomColors = (count: number) =>
  new Array(count)
    .fill(0)
    .map(
      () =>
        "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0"),
    );

interface TubesBackgroundProps {
  children?: ReactNode;
  className?: string;
  enableClickInteraction?: boolean;
}

export function TubesBackground({
  children,
  className,
  enableClickInteraction = true,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tubesRef = useRef<any>(null);
  const [, setIsLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;
    const init = async () => {
      if (!canvasRef.current) return;
      try {
        const url =
          "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";
        // @ts-expect-error - dynamic remote ESM import
        const mod = await import(/* @vite-ignore */ url);
        if (!mounted) return;
        const TubesCursor = (mod as any).default;
        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ["#1a56db", "#2f6bff", "#0b2a6b"],
            lights: {
              intensity: 180,
              colors: ["#2f6bff", "#1a56db", "#83a6ff", "#ffffff"],
            },
          },
        });
        tubesRef.current = app;
        setIsLoaded(true);
      } catch (err) {
        console.error("TubesBackground failed to load", err);
      }
    };
    init();
    return () => {
      mounted = false;
    };
  }, []);

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return;
    try {
      tubesRef.current.tubes.setColors(randomColors(3));
      tubesRef.current.tubes.setLightsColors(randomColors(4));
    } catch {
      /* noop */
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`relative isolate overflow-hidden ${className ?? ""}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10 h-full w-full"
        aria-hidden
      />
      {/* Soft vignette to blend with content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_50%,transparent_0%,rgba(0,0,0,0.55)_100%)]"
      />
      {children}
    </div>
  );
}

export default TubesBackground;
