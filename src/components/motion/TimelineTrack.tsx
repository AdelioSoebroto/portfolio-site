"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export function TimelineTrack({ children }: { children: ReactNode }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-hairline" />
      <motion.div
        className="absolute left-[7px] top-2 bottom-2 w-px bg-accent origin-top"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="space-y-4">{children}</div>
    </div>
  );
}
