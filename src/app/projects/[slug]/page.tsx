import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { priorProjects } from "@/content/priorProjects";
import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInItem } from "@/components/motion/FadeInItem";

export function generateStaticParams() {
  return priorProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = priorProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 pt-20 pb-24">
      <FadeIn>
        <Link href="/projects" className="text-[14px] text-accent">
          ← All projects
        </Link>
        <div className="mt-6 flex items-baseline justify-between gap-4 flex-wrap">
          <span className="text-[12px] font-medium text-muted tracking-wide">
            {project.year}
          </span>
          <span className="rounded-md bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] text-accent px-3 py-1 text-[11px] font-medium">
            {project.award}
          </span>
        </div>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          {project.title}
        </h1>
        <p className="mt-1 text-[14px] text-muted">{project.dateRange} · {project.role}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-surface px-3 py-1 text-[12px] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </FadeIn>

      {project.images.length > 0 && (
        <ul className="mt-10 grid sm:grid-cols-2 gap-4">
          {project.images.map((image, i) => (
            <FadeInItem key={image.src} delay={Math.min(i * 0.06, 0.24)}>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeInItem>
          ))}
        </ul>
      )}

      <FadeIn delay={0.1}>
        <div className="mt-10 space-y-5 text-[17px] leading-relaxed">
          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="mt-10 pt-8 border-t border-hairline">
          <h2 className="text-[13px] font-medium text-muted tracking-wide uppercase">
            Team
          </h2>
          <p className="mt-2 text-[15px]">{project.contributors.join(", ")}</p>
        </div>
      </FadeIn>
    </div>
  );
}
