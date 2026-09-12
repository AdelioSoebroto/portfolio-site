"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const APPLE_EASE = [0.16, 1, 0.3, 1] as const;

export function FadeInItem({
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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: APPLE_EASE }}
    >
      {children}
    </motion.li>
  );
}
