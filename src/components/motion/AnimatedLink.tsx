"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ReactNode } from "react";

const SPRING = { type: "spring" as const, stiffness: 400, damping: 25 };

export function AnimatedLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      className="inline-block"
      whileHover={{ scale: 1.04, transition: SPRING }}
      whileTap={{ scale: 0.96, transition: SPRING }}
    >
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}
