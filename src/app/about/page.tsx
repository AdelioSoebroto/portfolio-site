import { FadeIn } from "@/components/motion/FadeIn";
import { profile } from "@/content/profile";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-20 pb-24 text-center">
      <FadeIn>
        <h1 className="text-4xl font-semibold tracking-tight">About</h1>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="mt-8 space-y-6 text-left text-[17px] text-muted leading-relaxed">
          <p>
            I&apos;m an Information Systems graduate (Summa Cum Laude, Telkom
            University) who spent the past two years on the business side of
            software — at Telkomsel, I worked in Business Solution Management
            across postpaid, roaming, and ad tech, and later led project
            management for a programmatic ad-tech rollout. Day to day that
            meant validating product change requests, configuring platforms
            like SAP, MassTools, and PStudio, and coordinating cross-
            functional teams to keep systems consistent end to end.
          </p>
          <p>
            What I didn&apos;t do in that role was build the systems myself —
            I operated them, mapped their processes, and translated
            requirements between stakeholders. This roadmap is me closing
            that gap: six months, one real project a month, going from
            someone who configures and specs systems to someone who can build
            them from scratch.
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
            <a href={profile.links.resume} target="_blank" rel="noopener noreferrer" className="text-accent">
              View my resume →
            </a>
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
