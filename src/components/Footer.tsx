import { profile } from "@/content/profile";

const contactLinks = [
  { href: `mailto:${profile.email}`, label: "Email" },
  { href: profile.links.github, label: "GitHub" },
  { href: profile.links.linkedin, label: "LinkedIn" },
  { href: profile.links.instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline mt-24">
      <div className="mx-auto max-w-4xl px-6 py-10 flex flex-col items-center gap-4 text-center">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] text-muted">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-[12px] text-muted">
          Building in public — one project a month, six months, all on GitHub.
        </p>
      </div>
    </footer>
  );
}
