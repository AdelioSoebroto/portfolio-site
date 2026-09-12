"use client";

export function SearchTrigger() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
      className="hidden sm:flex items-center gap-1.5 rounded-md bg-surface px-3 py-1 text-[12px] text-muted hover:text-foreground transition-colors"
      aria-label="Open search (Command K)"
    >
      Search
      <span className="font-mono text-[10px] rounded bg-background px-1.5 py-0.5">⌘K</span>
    </button>
  );
}
