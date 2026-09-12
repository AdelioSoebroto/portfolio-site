export type PriorProject = {
  slug: string;
  title: string;
  year: string;
  award: string;
  summary: string;
  role: string;
  tags: string[];
};

export const priorProjects: PriorProject[] = [
  {
    slug: "growmate",
    title: "GrowMate",
    year: "2024",
    award: "IndonesiaNEXT — Hustler Track",
    summary:
      "An AI-driven plant care app concept for urban gardeners — monitors plant health, gives tailored care recommendations, and flags early disease signs. Completed full ideation: UI/UX design and a validated product & business strategy (concept stage, not yet built).",
    role: "Product concept & strategy",
    tags: ["AI Concept", "UI/UX", "Product Strategy"],
  },
  {
    slug: "myoscope-alert",
    title: "MyoScope Alert",
    year: "2023",
    award: "APICTA Hong Kong — Merit Award",
    summary:
      "A digital stethoscope using PCG (phonocardiogram) sensing and machine learning for early, non-invasive detection of myocardial infarction, streaming real-time data to a mobile/web app for direct consultation with healthcare professionals.",
    role: "Project management, QA & product pitching",
    tags: ["Machine Learning", "PCG Sensing", "Healthtech"],
  },
  {
    slug: "amons",
    title: "AMons — Arrhythmia Monitoring System",
    year: "2022",
    award: "APICTA Pakistan — Merit Award",
    summary:
      "An ECG-based arrhythmia monitoring system enabling real-time, non-invasive cardiac monitoring and detailed analysis for proactive heart health management.",
    role: "Project management, public speaking & QA",
    tags: ["ECG", "Real-time Monitoring", "Healthtech"],
  },
];
