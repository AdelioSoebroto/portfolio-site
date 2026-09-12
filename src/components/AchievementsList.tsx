import { achievements } from "@/content/skills";
import { FadeIn } from "@/components/motion/FadeIn";

export function AchievementsList() {
  return (
    <FadeIn>
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[15px] text-muted">
        {achievements.map((item) => (
          <li key={item} className="pl-4 relative before:content-['✦'] before:absolute before:left-0 before:text-accent before:text-[11px] before:top-1.5">
            {item}
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}
