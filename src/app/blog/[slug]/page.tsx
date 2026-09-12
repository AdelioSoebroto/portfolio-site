import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { FadeIn } from "@/components/motion/FadeIn";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl px-6 pt-20 pb-24">
      <FadeIn>
        <h1 className="text-4xl font-semibold tracking-tight">{post.title}</h1>
        <p className="mt-3 text-[13px] text-muted">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.readingTime}
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none prose-headings:tracking-tight prose-a:text-accent">
          <MDXRemote source={post.content} />
        </div>
      </FadeIn>
    </article>
  );
}
