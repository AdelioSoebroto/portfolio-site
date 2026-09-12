import type { ProjectStatus } from "@/content/projects";

const styles: Record<ProjectStatus, string> = {
  planned: "bg-black/5 text-black/60 dark:bg-white/10 dark:text-white/60",
  "in-progress": "bg-amber-500/15 text-amber-700 dark:text-amber-400",
  done: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
