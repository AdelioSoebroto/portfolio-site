import { projects } from "@/content/projects";
import StatusBadge from "@/components/StatusBadge";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">
        The 6-month roadmap
      </h1>
      <p className="mt-4 text-black/70 dark:text-white/70">
        One project per month, each building on skills from the last.
      </p>

      <ol className="mt-10 space-y-8">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="rounded-lg border border-black/10 dark:border-white/10 p-5"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-xs font-mono text-black/40 dark:text-white/40">
                Month {project.month}
              </span>
              <StatusBadge status={project.status} />
            </div>
            <h2 className="mt-1 text-lg font-medium">{project.title}</h2>
            <p className="text-sm text-black/50 dark:text-white/50">
              {project.dateRange}
            </p>
            <p className="mt-2 text-black/70 dark:text-white/70">
              {project.summary}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-black/5 dark:bg-white/10 px-2.5 py-0.5 text-xs"
                >
                  {skill}
                </li>
              ))}
            </ul>
            <div className="mt-3 flex gap-4 text-sm">
              {project.repoUrl && (
                <a href={project.repoUrl} className="underline">
                  Repo
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} className="underline">
                  Live
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
