export type KnowledgeEntry = {
  id: string;
  keywords: string[];
  answer: string;
};

export const knowledgeBase: KnowledgeEntry[] = [
  {
    id: "identity",
    keywords: ["who are you", "who is adelio", "about you", "introduce", "yourself"],
    answer:
      "I'm Adelio Ferhan Soebroto, a TEC Associate on Telkomsel's IT Digital Advertisement Management team, and I'm spending 6 months building one real software project a month to go from managing systems to building them. Check the About page for the full story.",
  },
  {
    id: "current-job",
    keywords: ["current job", "work at", "telkomsel", "what do you do", "job", "role", "day to day", "day-to-day"],
    answer:
      "I'm a TEC (Telkomsel Early Career) Associate on the IT Digital Advertisement Management team, one of 4 people acting as the IT Tower for 5 enterprise ad-tech systems: PStudio, MyAds, Bulk Premium, Malena, and LBA. That means end-to-end ownership: grooming, sprint planning, development, testing, release, and monitoring. I also write code myself (Java/Spring Boot) when a feature request calls for it, and I handle security pentest remediation.",
  },
  {
    id: "systems",
    keywords: ["systems", "pstudio", "myads", "bulk premium", "malena", "lba", "manage", "own"],
    answer:
      "I own 5 systems end-to-end as part of Telkomsel's IT Tower: PStudio (Supply-Side Platform), MyAds, Bulk Premium (legacy SMS platform), Malena (Bulk Reward), and LBA (Location-Based Advertising).",
  },
  {
    id: "skills",
    keywords: ["skills", "tech stack", "languages", "programming", "know", "technologies", "tools"],
    answer:
      "Currently building with Next.js, TypeScript, React, Tailwind, and Node.js. On the job, I work with Java, Spring Boot, SQL, Python, and Laravel, plus SAP/ERP and business process tools (Bizagi, Pentaho, Visual Paradigm). Full breakdown is on the About page under Skills.",
  },
  {
    id: "roadmap",
    keywords: ["roadmap", "building now", "current project", "6 month", "six month", "what are you building", "projects are you building", "working on", "building right now"],
    answer:
      "I'm running a 6-month, one-project-a-month roadmap: this portfolio site, a habit tracker, a realtime Kanban board, a Stripe-backed order system, an AI document assistant (RAG, using the real Claude API), and a multi-tenant SaaS capstone. See the full breakdown on the Projects page.",
  },
  {
    id: "prior-projects",
    keywords: ["award", "myoscope", "amons", "growmate", "university project", "hackathon", "competition", "apicta"],
    answer:
      "Before this roadmap, I worked on 3 team projects at university: MyoScope Alert (an ML-powered digital stethoscope, Merit Award at APICTA Hong Kong 2023), AMons (an ECG-based arrhythmia monitor, Merit Award at APICTA Pakistan 2022), and GrowMate (an AI plant-care app concept, IndonesiaNEXT). Full case studies are on the Projects page.",
  },
  {
    id: "education",
    keywords: ["study", "university", "school", "degree", "gpa", "education", "graduate"],
    answer:
      "I studied Information Systems at Telkom University (2021-2025), graduating Summa Cum Laude with a 3.96/4.00 GPA as a Telkomsel Service Bond Scholarship awardee.",
  },
  {
    id: "why-roadmap",
    keywords: ["why", "motivation", "learning to code", "coding roadmap", "plateau"],
    answer:
      "A year out of school, I already own enterprise systems end-to-end, but that makes me the person who keeps systems running, not someone who builds from scratch. I don't want to plateau at \"manages systems,\" so this roadmap is how I stay current with modern tools and practices on my own terms.",
  },
  {
    id: "certifications",
    keywords: ["certification", "certificate", "itil", "sap certified", "excel", "toefl"],
    answer:
      "ITIL 4 Foundation (AXELOS), Microsoft Office Specialist: Excel Associate, and SAP certifications (SAP01, SAP010, SAP500). TOEFL ITP score: 597/677. Certificates are linked on the About page under Recognition.",
  },
  {
    id: "contact",
    keywords: ["contact", "email", "reach", "linkedin", "hire", "get in touch"],
    answer:
      "Best way to reach me is email (dhioferhan@gmail.com) or LinkedIn, both linked in the footer of every page. GitHub and Instagram are there too.",
  },
  {
    id: "resume",
    keywords: ["resume", "cv", "download"],
    answer: "You can view/download my resume from the link in the nav bar, or on the About page.",
  },
  {
    id: "bot-meta",
    keywords: ["are you ai", "real ai", "chatgpt", "llm", "how do you work", "are you a bot"],
    answer:
      "I'm a lightweight, rule-based assistant: keyword matching against real portfolio content, running entirely in your browser. No API calls, no cost, no data leaving this page. The real LLM-powered project (RAG with the Claude API) is Month 5 on the roadmap. Check it out on the Projects page.",
  },
];

export const suggestedQuestions = [
  "What do you do at Telkomsel?",
  "What are you building right now?",
  "What awards have you won?",
  "What are your skills?",
];
