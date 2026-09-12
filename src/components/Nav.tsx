import Link from "next/link";
import { profile } from "@/content/profile";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline backdrop-blur-xl bg-[var(--nav-blur-bg)]">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 h-12">
        <Link href="/" className="text-[15px] font-semibold tracking-tight truncate max-w-[55%]">
          {profile.shortName}
        </Link>
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
      </nav>
    </header>
  );
}
