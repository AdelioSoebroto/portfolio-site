import { projects } from "@/content/projects";
import { priorProjects } from "@/content/priorProjects";
import { profile } from "@/content/profile";
import { getAllPosts } from "@/lib/posts";

export type SearchItem = {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  group: "Pages" | "Roadmap" | "Case Studies" | "Blog" | "Links";
  external?: boolean;
};

export function buildSearchIndex(): SearchItem[] {
  const pages: SearchItem[] = [
    { id: "home", title: "Home", href: "/", group: "Pages" },
    { id: "about", title: "About", href: "/about", group: "Pages" },
    { id: "projects", title: "Projects", href: "/projects", group: "Pages" },
    { id: "blog", title: "Blog", href: "/blog", group: "Pages" },
  ];

  const roadmap: SearchItem[] = projects.map((p) => ({
    id: `roadmap-${p.slug}`,
    title: p.title,
    subtitle: `Month ${p.month} · ${p.status}`,
    href: "/projects",
    group: "Roadmap",
  }));

  const caseStudies: SearchItem[] = priorProjects.map((p) => ({
    id: `case-${p.slug}`,
    title: p.title,
    subtitle: p.award,
    href: `/projects/${p.slug}`,
    group: "Case Studies",
  }));

  const posts: SearchItem[] = getAllPosts().map((post) => ({
    id: `post-${post.slug}`,
    title: post.title,
    subtitle: post.summary,
    href: `/blog/${post.slug}`,
    group: "Blog",
  }));

  const links: SearchItem[] = [
    { id: "resume", title: "View Resume", href: profile.links.resume, group: "Links", external: true },
    { id: "email", title: "Email Adelio", href: `mailto:${profile.email}`, group: "Links", external: true },
    { id: "github", title: "GitHub", href: profile.links.github, group: "Links", external: true },
    { id: "linkedin", title: "LinkedIn", href: profile.links.linkedin, group: "Links", external: true },
  ];

  return [...pages, ...roadmap, ...caseStudies, ...posts, ...links];
}
