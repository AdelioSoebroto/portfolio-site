import type { Metadata } from "next";
import { MotionConfig } from "motion/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { PageTransition } from "@/components/motion/PageTransition";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name — Building in Public",
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
        </MotionConfig>
      </body>
    </html>
  );
}
