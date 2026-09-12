"use client";

import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import type { ReactNode } from "react";

export function TimelineTrack({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });

  return (
    <div ref={ref} className="relative pl-8">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-hairline" />
      <motion.div
        className="absolute left-[7px] top-2 bottom-2 w-px bg-accent origin-top"
        style={{ scaleY: scrollYProgress }}
      />
      <div className="space-y-4">{children}</div>
    </div>
  );
}
