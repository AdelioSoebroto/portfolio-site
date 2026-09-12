import { projects } from "@/content/projects";
import StatusBadge from "@/components/StatusBadge";
import { FadeIn } from "@/components/motion/FadeIn";
import { HoverCard } from "@/components/motion/HoverCard";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-20 pb-24">
      <FadeIn>
        <h1 className="text-4xl font-semibold tracking-tight text-center">
          The 6-month roadmap
        </h1>
        <p className="mt-4 text-lg text-muted text-center max-w-2xl mx-auto">
          One project per month, each building on skills from the last.
        </p>
      </FadeIn>

      <ol className="mt-16 space-y-6">
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
            <h2 className="mt-2 text-xl font-semibold tracking-tight">
              {project.title}
            </h2>
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
    </div>
  );
}
