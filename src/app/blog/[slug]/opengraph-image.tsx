import { ImageResponse } from "next/og";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { profile } from "@/content/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function Image(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;

  let title = "Blog post";
  try {
    title = getPostBySlug(slug).title;
  } catch {
    // fall back to default title
  }

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
        <div style={{ fontSize: 28, color: "#2997ff" }}>{`${profile.name} · Blog`}</div>
        <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1, maxWidth: 950 }}>
          {title}
        </div>
      </div>
    ),
    { ...size }
  );
}
