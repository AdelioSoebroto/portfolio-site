import Link from "next/link";
import { projects } from "@/content/projects";
import { getAllPosts } from "@/lib/posts";
import StatusBadge from "@/components/StatusBadge";

export default function Home() {
  const featured = projects.slice(0, 3);
  const posts = getAllPosts().slice(0, 3);

  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-20 text-center">
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">
          Hi, I&apos;m Your Name.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted leading-relaxed">
          I&apos;m spending six months building one real project a month —
          from a basic CRUD app to a realtime board, a Stripe-backed order
          system, an AI-powered document assistant, and a multi-tenant SaaS
          capstone. Everything ships on GitHub, and I write about what broke
          and what I learned as I go.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 text-[15px]">
          <Link
            href="/projects"
            className="rounded-full bg-accent text-white px-5 py-2.5 font-medium hover:opacity-90 transition-opacity"
          >
            See the roadmap
          </Link>
          <Link
            href="/blog"
            className="rounded-full px-5 py-2.5 font-medium text-accent hover:opacity-70 transition-opacity"
          >
            Read the blog →
          </Link>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              Featured projects
            </h2>
            <Link href="/projects" className="text-sm text-accent">
              View all
            </Link>
          </div>
          <ul className="mt-8 grid gap-4">
            {featured.map((project) => (
              <li
                key={project.slug}
                className="rounded-2xl bg-surface p-6 transition-transform hover:-translate-y-0.5"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-medium">{project.title}</h3>
                  <StatusBadge status={project.status} />
                </div>
                <p className="mt-2 text-[15px] text-muted leading-relaxed">
                  {project.summary}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              Latest posts
            </h2>
            <Link href="/blog" className="text-sm text-accent">
              View all
            </Link>
          </div>
          {posts.length === 0 ? (
            <p className="mt-8 text-[15px] text-muted">
              No posts yet — the first write-up is coming soon.
            </p>
          ) : (
            <ul className="mt-8 space-y-6">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-lg font-medium hover:text-accent transition-colors"
                  >
                    {post.title}
                  </Link>
                  <p className="mt-1 text-[15px] text-muted leading-relaxed">
                    {post.summary}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
