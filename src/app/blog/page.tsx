import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInItem } from "@/components/motion/FadeInItem";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-6 pt-20 pb-24">
      <FadeIn>
        <h1 className="text-4xl font-semibold tracking-tight text-center">
          Blog
        </h1>
        <p className="mt-4 text-lg text-muted text-center max-w-2xl mx-auto">
          Write-ups from each project: what I built, what broke, what I&apos;d
          do differently.
        </p>
      </FadeIn>

      <ul className="mt-16 divide-y divide-hairline">
        {posts.map((post, i) => (
          <FadeInItem key={post.slug} delay={i * 0.06} className="py-8 first:pt-0">
            <Link
              href={`/blog/${post.slug}`}
              className="text-xl font-medium tracking-tight hover:text-accent transition-colors"
            >
              {post.title}
            </Link>
            <p className="mt-1 text-[13px] text-muted">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              · {post.readingTime}
            </p>
            <p className="mt-2 text-[15px] text-muted leading-relaxed">
              {post.summary}
            </p>
          </FadeInItem>
        ))}
      </ul>
    </div>
  );
}
