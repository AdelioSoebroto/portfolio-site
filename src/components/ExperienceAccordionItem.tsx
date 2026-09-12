"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { ExperienceEntry } from "@/content/experience";

const APPLE_EASE = [0.16, 1, 0.3, 1] as const;

export function ExperienceAccordionItem({
  entry,
  defaultOpen = false,
}: {
  entry: ExperienceEntry;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl bg-surface overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full text-left p-6 flex items-start justify-between gap-4"
      >
        <div>
          <h3 className="font-medium">
            {entry.role} <span className="text-muted">· {entry.company}</span>
          </h3>
          <p className="mt-1 text-[13px] text-muted">
            {entry.dateRange} · {entry.location}
          </p>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: APPLE_EASE }}
          className="shrink-0 mt-1 text-muted"
          aria-hidden
        >
          ⌄
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: APPLE_EASE }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <ul className="space-y-1.5 text-[15px] leading-relaxed">
                {entry.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-muted"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              {entry.images && entry.images.length > 0 && (
                <div className="mt-4 flex gap-2">
                  {entry.images.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      loading="lazy"
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
