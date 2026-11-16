"use client";
import { useEffect, useRef, useState } from "react";

/** Original signal illustration informed by the flowing-line studies in React Bits. */
export function SignalArt({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(true);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const update = () => setPaused(!visible || motion.matches || document.hidden);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); });
    observer.observe(node);
    motion.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => { observer.disconnect(); motion.removeEventListener("change", update); document.removeEventListener("visibilitychange", update); };
  }, []);
  return <div ref={ref} className={`signal-art ${className}`} data-paused={paused} aria-hidden="true">
    <svg viewBox="0 0 1000 360" preserveAspectRatio="xMidYMid slice" fill="none">
      {Array.from({ length: 38 }, (_, i) => {
        const offset = (i - 19) * 6;
        return <path key={i} className="signal-path" d={`M -80 ${180 + offset * .25} C 150 ${180 + offset * .25}, 200 ${-70 + offset}, 380 ${110 + offset * .5} S 570 ${420 - offset}, 720 ${180 + offset} S 900 ${90 + offset}, 1080 ${160 + offset * .3}`} stroke={i % 6 === 0 ? "#e6b69b" : "#d75134"} strokeWidth={i % 6 === 0 ? "1" : ".7"} opacity={.45 + (i % 5) * .1} style={{ animationDelay: `${i * -.15}s` }} />;
      })}
    </svg>
  </div>;
}
