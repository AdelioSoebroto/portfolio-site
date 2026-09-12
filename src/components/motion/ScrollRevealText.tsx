"use client";

import { motion } from "motion/react";

const APPLE_EASE = [0.16, 1, 0.3, 1] as const;

export function ScrollRevealText({ text }: { text: string }) {
  return (
    <div className="py-24">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: APPLE_EASE }}
        className="mx-auto max-w-3xl px-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-snug text-center"
      >
        {text}
      </motion.p>
    </div>
  );
}
