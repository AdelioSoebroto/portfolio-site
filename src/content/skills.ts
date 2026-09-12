export const skillGroups = [
  {
    label: "Currently building",
    skills: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js", "Git/GitHub"],
  },
  {
    label: "Business & Systems",
    skills: ["Digital Advertisement", "IT Management", "DevSecOps", "Business Process Mapping", "SAP", "ERP Concepts", "Bizagi Modeler", "Pentaho Data Integration", "Visual Paradigm"],
  },
  {
    label: "Programming & Data",
    skills: ["Python", "SQL", "Laravel", "Excel"],
  },
  {
    label: "Working style",
    skills: ["Cross-functional coordination", "Stakeholder communication", "Teamwork", "Organization", "Problem solving", "Public speaking"],
  },
];

export type Achievement = {
  label: string;
  href?: string;
};

export const achievements: Achievement[] = [
  { label: "APICTA Hong Kong 2023 — Merit Award for MyoScope Alert, an ML-powered digital stethoscope for heart attack detection" },
  { label: "APICTA Pakistan 2022 — Merit Award for AMons, an ECG-based real-time arrhythmia monitoring system" },
  { label: "2nd Winner, ERP Research and Project Mini Contest (2023)" },
  { label: "Top 10, JBC Business Plan Competition (2022)" },
  { label: "SAP Certified: SAP01 Fundamentals (2022), SAP010 Business Processes in Financial Accounting (2023), SAP500 Supply Chain Management (2023)" },
  { label: "ITIL 4 Foundation Certification, AXELOS (2024)", href: "/images/certifications/itil-1.jpeg" },
  { label: "Microsoft Office Specialist: Excel Associate (2024)", href: "/images/certifications/mos-excel.png" },
  { label: "TOEFL ITP: 597/677" },
];
