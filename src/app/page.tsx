import Link from "next/link";
import { projects } from "@/content/projects";
import { getAllPosts } from "@/lib/posts";
import StatusBadge from "@/components/StatusBadge";

export default function Home() {
  const featured = projects.slice(0, 3);
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">
          Hi, I&apos;m Your Name.
        </h1>
        <p className="mt-4 text-black/70 dark:text-white/70 leading-relaxed">
          I&apos;m spending six months building one real project a month —
          from a basic CRUD app to a realtime board, a Stripe-backed order
          system, an AI-powered document assistant, and a multi-tenant SaaS
          capstone. Everything ships on GitHub, and I write about what broke
          and what I learned as I go.
        </p>
      </section>

      <section className="mt-12">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-semibold">Featured projects</h2>
          <Link href="/projects" className="text-sm underline">
            View all
          </Link>
        </div>
        <ul className="mt-4 space-y-4">
          {featured.map((project) => (
            <li
              key={project.slug}
              className="rounded-lg border border-black/10 dark:border-white/10 p-4"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-medium">{project.title}</h3>
                <StatusBadge status={project.status} />
              </div>
              <p className="mt-1 text-sm text-black/60 dark:text-white/60">
                {project.summary}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-semibold">Latest posts</h2>
          <Link href="/blog" className="text-sm underline">
            View all
          </Link>
        </div>
        {posts.length === 0 ? (
          <p className="mt-4 text-sm text-black/50 dark:text-white/50">
            No posts yet — the first write-up is coming soon.
          </p>
        ) : (
          <ul className="mt-4 space-y-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="font-medium underline">
                  {post.title}
                </Link>
                <p className="text-sm text-black/60 dark:text-white/60">
                  {post.summary}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
