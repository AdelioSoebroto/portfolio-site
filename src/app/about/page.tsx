import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { ScrollRevealText } from "@/components/motion/ScrollRevealText";
import { AnimatedStat } from "@/components/motion/AnimatedStat";
import { StickySection } from "@/components/StickySection";
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

      <ScrollRevealText text="I spent two years inside SAP, ERP, and ad-tech platforms — configuring the systems other people built. Now I'm learning to build the systems myself." />

      <StickySection index="01" label="Background">
        <div className="space-y-5 text-[17px] leading-relaxed">
          <p>
            I&apos;m an Information Systems graduate from Telkom University,
            currently a TEC Associate on Telkomsel&apos;s IT Digital
            Advertisement Management team. Before this role, I spent two
            years across Business Solution Management (postpaid, roaming,
            interconnect) and Ad Tech Project Management at Telkomsel —
            validating product change requests, configuring platforms like
            SAP, MassTools, and PStudio, and coordinating cross-functional
            teams to keep systems consistent end to end.
          </p>
          <p>
            Most of that experience was operating and specifying systems, not
            building them myself — mapping processes, configuring platforms,
            translating requirements between stakeholders. The business
            background isn&apos;t incidental, though: process mapping, ERP/SAP
            concepts, and coordinating cross-functional requirements are
            exactly the skills that make the difference between code that
            compiles and a system that actually holds up in the real world.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl bg-surface p-6">
          <AnimatedStat value={3.96} decimals={2} label="GPA, Summa Cum Laude" />
          <AnimatedStat value={2} suffix="+" label="Years at Telkomsel" />
          <AnimatedStat value={3} label="Award-winning projects" />
        </div>
      </StickySection>

      <StickySection index="02" label="Experience">
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
