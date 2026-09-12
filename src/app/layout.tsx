import type { Metadata } from "next";
import { MotionConfig } from "motion/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { PageTransition } from "@/components/motion/PageTransition";
import { ChatWidget } from "@/components/ChatWidget";
import { profile } from "@/content/profile";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — Building in Public`,
  description:
    "A 6-month, one-project-a-month journey from web fundamentals to full-stack and AI-integrated systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <MotionConfig reducedMotion="user">
          <Nav />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <ChatWidget />
        </MotionConfig>
      </body>
    </html>
  );
}
