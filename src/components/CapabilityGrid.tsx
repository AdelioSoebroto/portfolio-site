import { capabilities } from "@/content/capabilities";
import { FadeIn } from "@/components/motion/FadeIn";

export function CapabilityGrid() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {capabilities.map((capability, i) => (
        <FadeIn key={capability.title} delay={Math.min(i * 0.08, 0.24)}>
          <div className="rounded-2xl bg-surface p-6 h-full">
            <span className="text-[12px] font-mono text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-medium">{capability.title}</h3>
            <p className="mt-2 text-[14px] text-muted leading-relaxed">
              {capability.description}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
