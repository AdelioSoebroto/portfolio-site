export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">About</h1>
      <div className="mt-6 space-y-4 text-black/70 dark:text-white/70 leading-relaxed">
        <p>
          I&apos;m learning to build real software by building real software —
          not tutorials. This site tracks a 6-month roadmap: one project a
          month, each one deliberately harder than the last, each one meant to
          teach a specific gap (databases, auth, realtime systems, payments,
          AI integration, and finally a full multi-tenant product).
        </p>
        <p>
          Every project lives in its own GitHub repo with a real README and
          commit history, and gets a short write-up here once it ships. The
          goal isn&apos;t just a portfolio — it&apos;s proof I actually
          understand the systems I built, not just that I copied a tutorial.
        </p>
      </div>
    </div>
  );
}
