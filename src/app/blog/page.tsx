import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">
        Write-ups from each project — what I built, what broke, what I&apos;d
        do differently.
      </p>

      <ul className="mt-10 space-y-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-lg font-medium underline">
              {post.title}
            </Link>
            <p className="text-sm text-black/50 dark:text-white/50">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              · {post.readingTime}
            </p>
            <p className="mt-1 text-black/70 dark:text-white/70">
              {post.summary}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
