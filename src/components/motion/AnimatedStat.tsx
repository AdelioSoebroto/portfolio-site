"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

export function AnimatedStat({
  value,
  decimals = 0,
  suffix = "",
  label,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div ref={ref}>
      <div className="text-3xl font-semibold tracking-tight">
        {display.toFixed(decimals)}
        {suffix}
      </div>
      <div className="mt-1 text-[13px] text-muted">{label}</div>
    </div>
  );
}
