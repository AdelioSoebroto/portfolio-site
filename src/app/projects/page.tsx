import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";
import { priorProjects } from "@/content/priorProjects";
import StatusBadge from "@/components/StatusBadge";
import { FadeIn } from "@/components/motion/FadeIn";
import { HoverCard } from "@/components/motion/HoverCard";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-20 pb-24">
      <FadeIn>
        <h1 className="text-4xl font-semibold tracking-tight text-center">
          Projects
        </h1>
        <p className="mt-4 text-lg text-muted text-center max-w-2xl mx-auto">
          A 6-month roadmap building in public, plus award-winning projects
          from before it.
        </p>
      </FadeIn>

      <section className="mt-16">
        <FadeIn>
          <h2 className="text-xl font-semibold tracking-tight">
            The 6-month roadmap
          </h2>
          <p className="mt-1 text-[15px] text-muted">
            One project per month, each building on skills from the last.
          </p>
        </FadeIn>
        <ol className="mt-6 space-y-6">
          {projects.map((project, i) => (
            <HoverCard
              key={project.slug}
              delay={Math.min(i * 0.08, 0.32)}
              className="rounded-2xl bg-surface p-7"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[12px] font-medium text-muted tracking-wide">
                  MONTH {project.month}
                </span>
                <StatusBadge status={project.status} />
              </div>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="text-[13px] text-muted">{project.dateRange}</p>
              <p className="mt-3 text-[15px] leading-relaxed">{project.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-background px-3 py-1 text-[12px] text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex gap-5 text-[14px]">
                {project.repoUrl && (
                  <a href={project.repoUrl} className="text-accent">
                    Repo
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} className="text-accent">
                    Live
                  </a>
                )}
              </div>
            </HoverCard>
          ))}
        </ol>
      </section>

      <section className="mt-20 pt-16 border-t border-hairline">
        <FadeIn>
          <h2 className="text-xl font-semibold tracking-tight">
            Earlier projects
          </h2>
          <p className="mt-1 text-[15px] text-muted">
            Team projects from university — award-winning healthtech builds
            and a product concept — before this roadmap.
          </p>
        </FadeIn>
        <ul className="mt-6 grid sm:grid-cols-2 gap-6">
          {priorProjects.map((project, i) => (
            <HoverCard
              key={project.slug}
              delay={Math.min(i * 0.08, 0.24)}
              className="rounded-2xl bg-surface overflow-hidden"
            >
              {project.images[0] && (
                <div className="relative w-full h-40">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[12px] font-medium text-muted tracking-wide">
                    {project.year}
                  </span>
                  <span className="rounded-full bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] text-accent px-3 py-1 text-[11px] font-medium">
                    {project.award}
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-[13px] text-muted">{project.role}</p>
                <p className="mt-3 text-[15px] leading-relaxed">{project.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-background px-3 py-1 text-[12px] text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-4 inline-block text-[14px] text-accent"
                >
                  View project →
                </Link>
              </div>
            </HoverCard>
          ))}
        </ul>
      </section>
    </div>
  );
}
