"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const APPLE_EASE = [0.16, 1, 0.3, 1] as const;
const SPRING = { type: "spring" as const, stiffness: 400, damping: 28 };

export function HoverCard({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.li
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: APPLE_EASE } }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -4, transition: SPRING }}
      whileTap={{ scale: 0.98, transition: SPRING }}
    >
      {children}
    </motion.li>
  );
}
