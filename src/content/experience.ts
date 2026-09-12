export type ExperienceEntry = {
  company: string;
  role: string;
  dateRange: string;
  location: string;
  bullets: string[];
  images?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Telkomsel",
    role: "TEC Associate — IT Digital Advertisement Management",
    dateRange: "Dec 2025 – Present",
    location: "Jakarta, Indonesia",
    bullets: [
      "Contribute to the management and implementation of IT digital advertisement initiatives, enhancing platform functionalities and aligning technology with organizational goals.",
    ],
  },
  {
    company: "Telkomsel",
    role: "Ad Tech Project Management Intern",
    dateRange: "Sep 2024 – Dec 2024",
    location: "Jakarta, Indonesia",
    bullets: [
      "Implemented header bidding integration for Telkomsel's programmatic advertising ecosystem, enhancing monetization efficiency and competitiveness.",
      "Developed detailed business requirements for key enhancements on Telkomsel's PStudio (Supply-Side Platform), aligning platform upgrades with business goals.",
      "Executed and managed bulk configurations on PStudio, overseeing setup and optimization for 12+ major publishers to ensure consistent performance.",
      "Collaborated with five leading publishers, building partnerships that enabled seamless ad placements and improved campaign delivery.",
      "Designed and proposed a structured project management cycle, establishing a repeatable framework for future platform improvements.",
    ],
    images: [
      "/images/experience/telkomsel-adtech/1.jpeg",
      "/images/experience/telkomsel-adtech/2.jpeg",
      "/images/experience/telkomsel-adtech/3.jpeg",
    ],
  },
  {
    company: "Telkomsel",
    role: "Business Solution Management Intern — Postpaid, Roaming & Interconnect",
    dateRange: "Aug 2023 – Aug 2024",
    location: "Jakarta, Indonesia",
    bullets: [
      "Enhanced global roaming services for seamless international subscriber connectivity by accurately handling product change requests.",
      "Implemented 200+ third-party payment method configurations (OVO, GoPay, and others) in the MyTelkomsel App, expanding payment options.",
      "Processed 34+ DigiPos product configuration updates, enabling new sales and service capabilities.",
      "Configured SBP for Bulk Roaming across multiple Telkomsel channels, deploying 20+ Business IDs to improve operational efficiency.",
      "Operated key Telkomsel tools such as MassTools and DigiCore to support accurate, efficient product configuration.",
    ],
    images: [
      "/images/experience/telkomsel-bsm/1.jpeg",
      "/images/experience/telkomsel-bsm/2.jpeg",
    ],
  },
  {
    company: "Gerakan Indonesia Mengajar",
    role: "Collaboration Project Intern",
    dateRange: "Feb 2024 – May 2024",
    location: "Jakarta, Indonesia",
    bullets: [
      "Led market research to analyze trends and competitors, strengthening the organization's strategic positioning.",
      "Identified and engaged 4 CSR partners whose initiatives aligned with the organization's mission, creating new collaboration opportunities.",
      "Designed 2 community-focused programs advancing the organization's educational mission.",
      "Authored a grant proposal that secured a partnership opportunity with the U.S. Embassy.",
    ],
  },
  {
    company: "DASPRO Laboratory",
    role: "Programming Algorithms Practicum Assistant",
    dateRange: "Feb 2023 – Jul 2023",
    location: "Bandung, Indonesia",
    bullets: [
      "Led and supervised 10+ practical lab sessions, providing expert guidance to students.",
      "Delivered clear lectures on algorithms and programming fundamentals, simplifying complex topics.",
      "Collaborated with educators and lab staff to enhance curriculum quality and student proficiency.",
    ],
  },
  {
    company: "AIESEC in Bandung",
    role: "Probation Staff & Organizing Committee — iGreen 2022",
    dateRange: "Oct 2021 – Aug 2022",
    location: "Bandung, Indonesia",
    bullets: [
      "Contributed to virtual brand activation and marketing communications across Incoming and Outgoing Global Volunteer divisions.",
      "Led a 5-member team organizing iGreen 2022, a 3-day environmental initiative attended by 200+ participants, coordinating partnerships with 4 organizations.",
    ],
    images: [
      "/images/experience/aiesec/1.jpeg",
      "/images/experience/aiesec/3.jpeg",
    ],
  },
  {
    company: "AIESEC Indonesia",
    role: "Tribe Leader (Head of Event) & Speaker",
    dateRange: "Nov 2021",
    location: "Indonesia",
    bullets: [
      "Led a 10-member team executing \"Youth Rising SDGs,\" a youth engagement event on SDG-4 and SDG-13, within a 3-week timeframe.",
      "Delivered keynote speeches introducing the SDGs to 100+ students, raising awareness and providing actionable insights.",
    ],
  },
];

export const education = {
  school: "Telkom University",
  degree: "Bachelor of Information Systems (Management Information Systems)",
  location: "Bandung, Indonesia",
  dateRange: "2021 – 2025",
  detail: "GPA 3.96/4.00 · Graduated Summa Cum Laude · Telkomsel Service Bond Scholarship Awardee",
};
