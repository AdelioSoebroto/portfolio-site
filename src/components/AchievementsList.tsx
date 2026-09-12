import { achievements } from "@/content/skills";
import { FadeIn } from "@/components/motion/FadeIn";

export function AchievementsList() {
  return (
    <FadeIn>
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[15px] text-muted">
        {achievements.map((item) => (
          <li key={item.label} className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-muted">
            {item.label}
            {item.href && (
              <>
                {" "}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent whitespace-nowrap"
                >
                  View certificate ↗
                </a>
              </>
            )}
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}
