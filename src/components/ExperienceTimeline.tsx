import { experience, education } from "@/content/experience";
import { FadeIn } from "@/components/motion/FadeIn";
import { TimelineTrack } from "@/components/motion/TimelineTrack";

export function ExperienceTimeline() {
  return (
    <TimelineTrack>
      {experience.map((entry, i) => (
        <div key={`${entry.company}-${entry.dateRange}`} className="relative">
          <span className="absolute -left-8 top-6 w-2 h-2 rounded-full bg-accent" />
          <FadeIn delay={Math.min(i * 0.06, 0.3)}>
            <div className="rounded-2xl bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-medium">
                  {entry.role} <span className="text-muted">· {entry.company}</span>
                </h3>
                <span className="text-[12px] text-muted whitespace-nowrap">{entry.dateRange}</span>
              </div>
              <p className="text-[13px] text-muted">{entry.location}</p>
              <ul className="mt-3 space-y-1.5 text-[15px] leading-relaxed">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-muted">
                    {bullet}
                  </li>
                ))}
              </ul>
              {entry.images && entry.images.length > 0 && (
                <div className="mt-4 flex gap-2">
                  {entry.images.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      loading="lazy"
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      ))}

      <div className="relative">
        <span className="absolute -left-8 top-6 w-2 h-2 rounded-full bg-muted" />
        <FadeIn delay={Math.min(experience.length * 0.06, 0.3)}>
          <div className="rounded-2xl bg-surface p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-medium">
                {education.degree} <span className="text-muted">· {education.school}</span>
              </h3>
              <span className="text-[12px] text-muted whitespace-nowrap">{education.dateRange}</span>
            </div>
            <p className="text-[13px] text-muted">{education.location}</p>
            <p className="mt-3 text-[15px] leading-relaxed">{education.detail}</p>
          </div>
        </FadeIn>
      </div>
    </TimelineTrack>
  );
}
