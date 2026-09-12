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
    slug: "myoscope-alert",
    title: "MyoScope Alert",
    year: "2023",
    award: "APICTA Hong Kong — Tertiary Student Project",
    summary:
      "A digital stethoscope equipped with machine learning to detect myocardial infarction (heart attack) risk, built with a 5-person team at Telkom University.",
    role: "Team member",
    tags: ["Machine Learning", "IoT Hardware", "Healthtech"],
  },
  {
    slug: "amons",
    title: "Amons — Arrhythmia Monitoring System",
    year: "2022",
    award: "APICTA Pakistan — Tertiary Student Project",
    summary:
      "An IoT-connected heart monitor that lets patients record arrhythmia data at home and gives doctors real-time access to the readings remotely.",
    role: "Team member",
    tags: ["IoT", "Real-time Monitoring", "Healthtech"],
  },
];
