import type { ReactNode } from "react";

export function StickySection({
  index,
  label,
  children,
}: {
  index: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 border-t border-hairline">
      <div className="sm:grid sm:grid-cols-[140px_1fr] sm:gap-12">
        <div className="sm:sticky sm:top-24 sm:self-start mb-8 sm:mb-0">
          <span className="text-[13px] font-mono text-muted">{index}</span>
          <h2 className="mt-1 text-xl font-semibold tracking-tight">{label}</h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
