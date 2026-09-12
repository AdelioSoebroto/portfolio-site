export type PriorProject = {
  slug: string;
  title: string;
  year: string;
  dateRange: string;
  award: string;
  summary: string;
  role: string;
  tags: string[];
  contributors: string[];
  description: string[];
  images: { src: string; alt: string }[];
};

export const priorProjects: PriorProject[] = [
  {
    slug: "growmate",
    title: "GrowMate",
    year: "2024",
    dateRange: "Jun 2024 – Aug 2024",
    award: "IndonesiaNEXT — Hustler Track",
    summary:
      "An AI-driven plant care app concept for urban gardeners — monitors plant health, gives tailored care recommendations, and flags early disease signs. Completed full ideation: UI/UX design and a validated product & business strategy (concept stage, not yet built).",
    role: "Product concept & strategy",
    tags: ["AI Concept", "UI/UX", "Product Strategy"],
    contributors: ["Fadli Nur", "Adelio Ferhan Soebroto"],
    description: [
      "GrowMate is an innovative app concept designed to transform plant care through AI-driven technology. Targeted at urban gardeners and plant enthusiasts, the app enables users to monitor plant health, receive tailored care recommendations, and detect early signs of diseases.",
      "During the IndonesiaNEXT Hustler Track program, the team completed the full ideation phase — developing a comprehensive UI/UX design for a user-friendly, high-impact solution, and crafting a clear product vision and business strategy to guide future development.",
      "While the app is not yet launched, GrowMate is now fully conceptualized, validated, and ready for the next stages of development, positioning it for impactful adoption in the market.",
    ],
    images: [
      { src: "/images/projects/growmate/1.jpeg", alt: "The GrowMate team during the IndonesiaNEXT program" },
    ],
  },
  {
    slug: "myoscope-alert",
    title: "MyoScope Alert",
    year: "2023",
    dateRange: "Jun 2023 – Dec 2023",
    award: "APICTA Hong Kong 2023 — Merit Award",
    summary:
      "A digital stethoscope using PCG (phonocardiogram) sensing and machine learning for early, non-invasive detection of myocardial infarction, streaming real-time data to a mobile/web app for direct consultation with healthcare professionals.",
    role: "Project management, QA & product pitching",
    tags: ["Machine Learning", "PCG Sensing", "Healthtech"],
    contributors: ["Alfara Nafi Dinara", "Ilham Akbar Nursalam", "Muhammad Luthfi Khusyasy", "Bonifasius Tarigan", "Adelio Ferhan Soebroto"],
    description: [
      "MyoScope Alert is an intuitive digital stethoscope designed for early detection of cardiovascular conditions, particularly Myocardial Infarction. Using PCG (phonocardiogram) technology for non-invasive monitoring, the device transmits real-time data to a mobile or web platform, allowing users to consult directly with healthcare professionals.",
      "The project bridges personal health monitoring and medical expertise, offering early detection capabilities for life-threatening cardiovascular issues, convenient home use with seamless data integration to mobile and web apps, and real-time access to health data and expert consultations.",
      "As part of the development team, I contributed to project management, quality assurance, and product pitching — ensuring the device met high technical and usability standards while effectively communicating its market value to an international panel of judges.",
      "The project earned a Merit Award at APICTA Hong Kong 2023, in the Tertiary Student Project category, representing Telkom University and Indonesia.",
    ],
    images: [
      { src: "/images/projects/myoscope/4.jpeg", alt: "3D-printed digital stethoscope attachment for MyoScope Alert" },
      { src: "/images/projects/myoscope/1.jpeg", alt: "MyoScope Alert mobile app — heart recording screen" },
      { src: "/images/projects/myoscope/5.jpeg", alt: "MyoScope Alert web dashboard — patient details and diagnosis history" },
      { src: "/images/projects/myoscope/3.jpeg", alt: "Team at APICTA Hong Kong 2023 with the Merit Award and Telkom University banner" },
      { src: "/images/projects/myoscope/2.jpeg", alt: "APICTA Hong Kong 2023 Merit Award certificate for MyoScope Alert" },
    ],
  },
  {
    slug: "amons",
    title: "AMons — Arrhythmia Monitoring System",
    year: "2022",
    dateRange: "Nov 2022 – Dec 2022",
    award: "APICTA Pakistan 2022 — Merit Award",
    summary:
      "An ECG-based arrhythmia monitoring system enabling real-time, non-invasive cardiac monitoring and detailed analysis for proactive heart health management.",
    role: "Project management, public speaking & QA",
    tags: ["ECG", "IoT", "Real-time Monitoring", "Healthtech"],
    contributors: ["I Putu Bagus Erix Wijaya", "Mar'i Fauzan Rambe", "Michael Fernandito Sanfia", "Adelio Ferhan Soebroto"],
    description: [
      "AMons is a cutting-edge Arrhythmia Monitoring System designed to revolutionize cardiac care through advanced ECG technology. Developed by Telkom University, this innovative solution enables real-time monitoring, early detection, and precise analysis of cardiac irregularities.",
      "The system consists of three parts: a pocket-sized ECG device for in-home or in-hospital data acquisition using IoT (MQTT) to communicate with the server, a cloud-based arrhythmia server capable of handling data from thousands of devices simultaneously, and a client monitoring application (Android and web) that distinguishes between patients, doctors, and caregivers.",
      "As part of the team, I contributed to project management, public speaking, quality assurance, and coordination — ensuring the solution met high technical and usability standards while effectively communicating its value to an international audience.",
      "The project earned a Merit Award at APICTA Pakistan 2022, in the Tertiary Student Project category, representing Telkom University and Indonesia.",
    ],
    images: [
      { src: "/images/projects/amons/4.jpeg", alt: "AMons system overview — ECG device, cloud server, and client monitor" },
      { src: "/images/projects/amons/3.jpeg", alt: "Team photo of the AMons project group" },
      { src: "/images/projects/amons/2.jpeg", alt: "Team receiving the Merit Award on stage at APICTA Pakistan 2022" },
      { src: "/images/projects/amons/1.jpeg", alt: "APICTA Pakistan 2022 Merit Award certificate for AMons" },
    ],
  },
];
