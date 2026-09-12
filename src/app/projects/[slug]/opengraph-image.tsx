import { ImageResponse } from "next/og";
import { priorProjects } from "@/content/priorProjects";
import { profile } from "@/content/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return priorProjects.map((project) => ({ slug: project.slug }));
}

export default async function Image(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const project = priorProjects.find((p) => p.slug === slug);
  const title = project?.title ?? "Project";
  const award = project?.award ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          color: "#ffffff",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#2997ff" }}>{profile.name}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 60, fontWeight: 700, letterSpacing: -1, maxWidth: 950 }}>
            {title}
          </div>
          {award && (
            <div style={{ marginTop: 24, fontSize: 26, color: "#a1a1a6" }}>{award}</div>
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
