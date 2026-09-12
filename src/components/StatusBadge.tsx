import type { ProjectStatus } from "@/content/projects";

const styles: Record<ProjectStatus, string> = {
  planned: "bg-surface text-muted",
  "in-progress": "bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] text-accent",
  done: "bg-[color-mix(in_srgb,#30d158_18%,transparent)] text-[#248a3d] dark:text-[#30d158]",
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`shrink-0 rounded-md px-3 py-1 text-[11px] font-medium tracking-wide ${styles[status]}`}
    >
      {status}
    </span>
  );
}
