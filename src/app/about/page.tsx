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

      <ScrollRevealText text="One year out of school, I already own enterprise systems end-to-end at Telkomsel. I'm not doing this roadmap because I'm behind — I'm doing it so I never stand still." />

      <StickySection index="01" label="Background">
        <div className="space-y-5 text-[17px] leading-relaxed">
          <p>
            I&apos;m a TEC (Telkomsel Early Career) Associate on the IT
            Digital Advertisement Management team, about a year removed from
            an Information Systems degree at Telkom University. I&apos;m one
            of four people acting as the IT Tower for our department&apos;s
            systems — PStudio (our Supply-Side Platform), MyAds, Bulk
            Premium, Malena, and LBA (Location-Based Advertising) — which
            means end-to-end ownership: grooming, sprint planning,
            development, testing, release, and monitoring for all of them.
          </p>
          <p>
            Compared to my internship, this is a different level of trust. I
            make my own calls with stakeholders, hold access to
            Telkomsel&apos;s full pre-production and production environments,
            and I&apos;m the one making infrastructure and software-ownership
            decisions, not just observing them. I still write code myself
            when a feature request calls for it — mostly Java on Tomcat with
            Spring Boot for Malena and Bulk Premium — and I work directly
            with engineers, other TEC associates, and external vendors to
            keep projects moving and security findings closed out fast.
          </p>
          <p>
            None of that makes me a software engineer, though — it makes me
            the person who keeps enterprise systems running and specs what
            gets built next. A year in, I don&apos;t want to plateau at
            &quot;manages systems.&quot; This roadmap is how I stay current
            with modern tools and the best practices actually used to build
            and maintain software, instead of just the enterprise stack I
            inherited.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl bg-surface p-6">
          <AnimatedStat value={3.96} decimals={2} label="GPA, Summa Cum Laude" />
          <AnimatedStat value={5} label="Systems owned (IT Tower)" />
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
