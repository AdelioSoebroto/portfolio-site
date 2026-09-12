export type ExperienceEntry = {
  company: string;
  role: string;
  dateRange: string;
  location: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Telkomsel",
    role: "Ad Tech Project Management",
    dateRange: "Sep 2024 – Dec 2024",
    location: "South Jakarta, Indonesia",
    bullets: [
      "Led the rollout of header bidding for programmatic ads, coordinating tasks and timelines across internal teams and external partners.",
      "Drafted business requirements for PStudio enhancements to align stakeholders on scope, acceptance criteria, and impact.",
      "Configured PStudio for 12 publishers and coordinated 5 key partners to ensure reliable placements and performance.",
      "Proposed a lightweight project-management cycle to standardize future platform improvements and reduce rework.",
    ],
  },
  {
    company: "Telkomsel",
    role: "Business Solution Management (Postpaid, Roaming & Interconnect)",
    dateRange: "Aug 2023 – Aug 2024",
    location: "South Jakarta, Indonesia",
    bullets: [
      "Triaged and validated roaming product change requests, ensuring accurate execution so international connectivity stayed stable for subscribers.",
      "Executed 200+ third-party payment configurations in the MyTelkomsel app (e.g. OVO, GoPay), expanding options and reducing checkout friction.",
      "Operated MassTools and DigiCore to implement configuration updates and keep parameters consistent across systems.",
      "Managed 34+ DigiPos requests end-to-end (intake → update), keeping retail product data aligned with back-end changes.",
    ],
  },
  {
    company: "Indonesia Mengajar",
    role: "Collaboration Project",
    dateRange: "Feb 2024 – Jun 2024",
    location: "Jakarta, Indonesia",
    bullets: [
      "Ran structured market and competitor research to inform partnership strategy and positioning.",
      "Identified 4 CSR-aligned partners and designed 2 program concepts aligned to mission and stakeholder needs.",
      "Completed a grant proposal enabling collaboration with the U.S. Embassy, clarifying objectives, fit, and expected outcomes.",
    ],
  },
  {
    company: "DASPRO Laboratory",
    role: "Programming Algorithms Practicum Assistant",
    dateRange: "Feb 2023 – Jun 2023",
    location: "Bandung, Indonesia",
    bullets: [
      "Led 10+ practicum sessions, guiding labs and ensuring smooth execution against lesson plans.",
      "Delivered concise explanations of algorithms and programming fundamentals to accelerate student comprehension.",
      "Coordinated with lecturers and lab staff to refine materials and improve the learning experience.",
    ],
  },
];

export const education = {
  school: "Telkom University",
  degree: "Bachelor of Information Systems",
  location: "Bandung, Indonesia",
  dateRange: "Sep 2021 – Aug 2025",
  detail: "GPA 3.96/4.00 · Summa Cum Laude · Telkomsel Service Bond Scholarship Awardee",
};
