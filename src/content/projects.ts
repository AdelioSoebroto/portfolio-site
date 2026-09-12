export type ProjectStatus = "planned" | "in-progress" | "done";

export type Project = {
  slug: string;
  month: number;
  title: string;
  status: ProjectStatus;
  dateRange: string;
  summary: string;
  skills: string[];
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "portfolio-site",
    month: 1,
    title: "Personal Site + Blog Engine",
    status: "in-progress",
    dateRange: "Sep 14 – Oct 4, 2026",
    summary:
      "This site. A Next.js + MDX portfolio and blog that documents the whole 6-month build in public.",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "Git/GitHub"],
  },
  {
    slug: "habit-tracker",
    month: 2,
    title: "Habit / Task Tracker",
    status: "planned",
    dateRange: "Oct 5 – Nov 1, 2026",
    summary:
      "Full-stack CRUD app with real authentication and a Postgres database — the foundation every later project builds on.",
    skills: ["Node/Express", "PostgreSQL", "Prisma", "JWT auth", "REST APIs"],
  },
  {
    slug: "realtime-kanban",
    month: 3,
    title: "Realtime Kanban / Chat Board",
    status: "planned",
    dateRange: "Nov 2 – Nov 29, 2026",
    summary:
      "A Trello-style board where every user sees live updates via WebSockets — the systems-thinking project (sync, races, reconnects).",
    skills: ["WebSockets", "Optimistic UI", "State sync", "Concurrency"],
  },
  {
    slug: "order-inventory-system",
    month: 4,
    title: "Order & Inventory System",
    status: "planned",
    dateRange: "Nov 30, 2026 – Jan 3, 2027",
    summary:
      "A small e-commerce backend: products, stock, Stripe checkout, webhooks, and background jobs — the industry-relevant project.",
    skills: ["Stripe", "Webhooks", "Background jobs (queues)", "Transactions"],
  },
  {
    slug: "ai-document-assistant",
    month: 5,
    title: "AI Document Assistant (RAG)",
    status: "planned",
    dateRange: "Jan 4 – Jan 31, 2027",
    summary:
      "Upload documents, ask questions, get grounded answers — chunking, embeddings, vector search, and the Claude API as one feature in a real system.",
    skills: ["Embeddings", "Vector search", "Claude API", "Caching/rate limits"],
  },
  {
    slug: "saas-dashboard",
    month: 6,
    title: "Capstone: Multi-tenant SaaS Dashboard",
    status: "planned",
    dateRange: "Feb 1 – Mar 7, 2027",
    summary:
      "Everything combined into one shippable product: multi-tenant auth, billing, an admin dashboard, CI/CD, and monitoring.",
    skills: ["Multi-tenancy", "Billing", "CI/CD", "Monitoring/logging"],
  },
];
