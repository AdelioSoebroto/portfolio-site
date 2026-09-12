import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { ScrollRevealText } from "@/components/motion/ScrollRevealText";
import { AnimatedStat } from "@/components/motion/AnimatedStat";
import { StickySection } from "@/components/StickySection";
import { CapabilityGrid } from "@/components/CapabilityGrid";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillsGrid } from "@/components/SkillsGrid";
import { AchievementsList } from "@/components/AchievementsList";
import { profile } from "@/content/profile";

export default function AboutPage() {
  return (
    <div>
      <div className="mx-auto max-w-2xl px-6 pt-20 text-center">
        <FadeIn>
          <h1 className="text-4xl font-semibold tracking-tight">About</h1>
        </FadeIn>
      </div>

      <ScrollRevealText text="One year out of school, I already own enterprise systems end-to-end at Telkomsel. I'm not doing this roadmap because I'm behind — I'm doing it so I never stand still." />

      <StickySection index="01" label="Background">
        <p className="text-[17px] leading-relaxed">
          A year out of Telkom University, I&apos;m a TEC (Telkomsel Early
          Career) Associate on the IT Digital Advertisement Management team —
          one of four people acting as the <strong>IT Tower</strong> for five
          enterprise ad-tech systems. Here&apos;s what that actually means:
        </p>

        <div className="mt-6">
          <CapabilityGrid />
        </div>

        <p className="mt-6 text-[17px] leading-relaxed">
          None of that makes me a software engineer, though — it makes me the
          person who keeps these systems running and decides what gets built
          next. A year in, I don&apos;t want to plateau at &quot;manages
          systems.&quot; This roadmap is how I close that gap on my own
          terms: staying current with modern tools instead of just the stack
          I inherited.
        </p>

        <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl bg-surface p-6">
          <AnimatedStat value={3.96} decimals={2} label="GPA, Summa Cum Laude" />
          <AnimatedStat value={5} label="Systems owned (IT Tower)" />
          <AnimatedStat value={3} label="Award-winning projects" />
        </div>
      </StickySection>

      <StickySection index="02" label="Experience">
        <p className="text-[13px] text-muted mb-6">Tap a role to expand it.</p>
        <ExperienceTimeline />
      </StickySection>

      <StickySection index="03" label="Skills">
        <SkillsGrid />
      </StickySection>

      <StickySection index="04" label="Recognition">
        <AchievementsList />
      </StickySection>

      <div className="mx-auto max-w-2xl px-6 py-24 border-t border-hairline text-center">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tight">
            That&apos;s the background. Here&apos;s what I&apos;m building now.
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4 text-[15px]">
            <Link
              href="/projects"
              className="rounded-full bg-accent text-white px-5 py-2.5 font-medium"
            >
              See the roadmap
            </Link>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-5 py-2.5 font-medium text-accent"
            >
              View my resume →
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
