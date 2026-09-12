import { skillGroups } from "@/content/skills";
import { FadeIn } from "@/components/motion/FadeIn";

export function SkillsGrid() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {skillGroups.map((group, i) => (
        <FadeIn key={group.label} delay={Math.min(i * 0.06, 0.24)}>
          <div className="rounded-2xl bg-surface p-6 h-full">
            <h3 className="text-[13px] font-medium text-muted tracking-wide uppercase">
              {group.label}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md bg-background px-3 py-1 text-[13px]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
