import Link from "next/link";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { getAllPosts } from "@/lib/posts";
import StatusBadge from "@/components/StatusBadge";
import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInItem } from "@/components/motion/FadeInItem";
import { HoverCard } from "@/components/motion/HoverCard";
import { AnimatedLink } from "@/components/motion/AnimatedLink";
import { HeroParallax } from "@/components/motion/HeroParallax";

export default function Home() {
  const featured = projects.slice(0, 3);
  const posts = getAllPosts().slice(0, 3);

  return (
    <div>
      <HeroParallax>
        <section className="mx-auto max-w-4xl px-6 pt-24 pb-20 text-center">
          <FadeIn>
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">
              Hi, I&apos;m {profile.name.split(" ")[0]}.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 text-xl text-muted">{profile.tagline}</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted leading-relaxed">
              I run enterprise ad-tech systems as an IT Tower at Telkomsel —
              and I&apos;m spending six months building one real project a
              month so I keep growing past that. From a basic CRUD app to a
              realtime board, a Stripe-backed order system, an AI-powered
              document assistant, and a multi-tenant SaaS capstone.
              Everything ships on GitHub, and I write about what broke and
              what I learned as I go.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-8 flex items-center justify-center gap-4 text-[15px]">
              <AnimatedLink
                href="/projects"
                className="rounded-full bg-accent text-white px-5 py-2.5 font-medium block"
              >
                See the roadmap
              </AnimatedLink>
              <AnimatedLink
                href="/blog"
                className="rounded-full px-5 py-2.5 font-medium text-accent block"
              >
                Read the blog →
              </AnimatedLink>
            </div>
          </FadeIn>
        </section>
      </HeroParallax>

      <section className="border-t border-hairline">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <FadeIn>
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-semibold tracking-tight">
                Featured projects
              </h2>
              <Link href="/projects" className="text-sm text-accent">
                View all
              </Link>
            </div>
          </FadeIn>
          <ul className="mt-8 grid gap-4">
            {featured.map((project, i) => (
              <HoverCard
                key={project.slug}
                delay={i * 0.08}
                className="rounded-2xl bg-surface p-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-medium">{project.title}</h3>
                  <StatusBadge status={project.status} />
                </div>
                <p className="mt-2 text-[15px] text-muted leading-relaxed">
                  {project.summary}
                </p>
              </HoverCard>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <FadeIn>
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-semibold tracking-tight">
                Latest posts
              </h2>
              <Link href="/blog" className="text-sm text-accent">
                View all
              </Link>
            </div>
          </FadeIn>
          {posts.length === 0 ? (
            <p className="mt-8 text-[15px] text-muted">
              No posts yet — the first write-up is coming soon.
            </p>
          ) : (
            <ul className="mt-8 space-y-6">
              {posts.map((post, i) => (
                <FadeInItem key={post.slug} delay={i * 0.08}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-lg font-medium hover:text-accent transition-colors"
                  >
                    {post.title}
                  </Link>
                  <p className="mt-1 text-[15px] text-muted leading-relaxed">
                    {post.summary}
                  </p>
                </FadeInItem>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
