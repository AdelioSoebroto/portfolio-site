import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — Building in Public`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -1 }}>
          {profile.name}
        </div>
        <div style={{ marginTop: 20, fontSize: 32, color: "#a1a1a6" }}>
          {profile.tagline}
        </div>
        <div style={{ marginTop: 48, fontSize: 22, color: "#2997ff" }}>
          Building in public — 6 months, one project a month
        </div>
      </div>
    ),
    { ...size }
  );
}
