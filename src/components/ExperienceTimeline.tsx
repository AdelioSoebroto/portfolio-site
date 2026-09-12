import { experience, education } from "@/content/experience";
import { FadeIn } from "@/components/motion/FadeIn";
import { TimelineTrack } from "@/components/motion/TimelineTrack";
import { ExperienceAccordionItem } from "@/components/ExperienceAccordionItem";

export function ExperienceTimeline() {
  return (
    <TimelineTrack>
      {experience.map((entry, i) => (
        <div key={`${entry.company}-${entry.dateRange}`} className="relative">
          <span className="absolute -left-8 top-6 w-2 h-2 rounded-full bg-accent" />
          <FadeIn delay={Math.min(i * 0.06, 0.3)}>
            <ExperienceAccordionItem entry={entry} defaultOpen={i === 0} />
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
