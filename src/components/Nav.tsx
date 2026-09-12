"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { profile } from "@/content/profile";
import { SearchTrigger } from "@/components/SearchTrigger";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const blurBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(0,0,0,0)", "var(--nav-blur-bg)"]
  );

  return (
    <motion.header
      style={{
        backgroundColor: blurBg,
        borderBottomColor: useTransform(borderOpacity, (o) => `rgba(128,128,128,${o * 0.2})`),
      }}
      className="sticky top-0 z-50 border-b backdrop-blur-xl transition-[backdrop-filter]"
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 h-12">
        <Link href="/" className="text-[15px] font-semibold tracking-tight truncate max-w-[55%]">
          {profile.shortName}
        </Link>
        <div className="flex items-center gap-4">
          <SearchTrigger />
          <ul className="flex gap-6 sm:gap-8 text-[13px]">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:opacity-70 transition-opacity"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}
