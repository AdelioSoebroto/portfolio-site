import { FadeIn } from "@/components/motion/FadeIn";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillsGrid } from "@/components/SkillsGrid";
import { AchievementsList } from "@/components/AchievementsList";
import { profile } from "@/content/profile";

export default function AboutPage() {
  return (
    <div>
      <div className="mx-auto max-w-2xl px-6 pt-20 pb-4 text-center">
        <FadeIn>
          <h1 className="text-4xl font-semibold tracking-tight">About</h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-8 space-y-6 text-left text-[17px] text-muted leading-relaxed">
            <p>
              I&apos;m an Information Systems graduate (Summa Cum Laude,
              Telkom University), currently a TEC Associate on Telkomsel&apos;s
              IT Digital Advertisement Management team. Before this role, I
              spent two years across Business Solution Management (postpaid,
              roaming, interconnect) and Ad Tech Project Management at
              Telkomsel — validating product change requests, configuring
              platforms like SAP, MassTools, and PStudio, and coordinating
              cross-functional teams to keep systems consistent end to end.
            </p>
            <p>
              Most of that experience was operating and specifying systems,
              not building them myself — mapping processes, configuring
              platforms, translating requirements between stakeholders. This
              roadmap is me closing that gap: six months, one real project a
              month, going from someone who configures and specs systems to
              someone who can build them from scratch.
            </p>
            <p>
              The business background isn&apos;t incidental to that — process
              mapping, working with ERP/SAP concepts, and coordinating
              cross-functional requirements are exactly the skills that make
              the difference between code that compiles and a system that
              actually holds up in the real world. Every project here gets a
              real GitHub repo and a write-up on what worked and what broke.
            </p>
            <p>
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent"
              >
                View my resume →
              </a>
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-16 border-t border-hairline mt-8">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tight text-center">
            Experience
          </h2>
        </FadeIn>
        <div className="mt-8">
          <ExperienceTimeline />
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-16 border-t border-hairline">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tight text-center">
            Skills
          </h2>
        </FadeIn>
        <div className="mt-8">
          <SkillsGrid />
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-16 pb-24 border-t border-hairline">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tight text-center">
            Achievements & Certifications
          </h2>
        </FadeIn>
        <div className="mt-8">
          <AchievementsList />
        </div>
      </div>
    </div>
  );
}
