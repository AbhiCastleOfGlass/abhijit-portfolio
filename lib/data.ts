// Portfolio data for Abhijit Ghosh - Geometrical Assurance Engineer

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  tags: string[];
  color?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  category: string;
  link?: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  category: 'core' | 'ai';
}

export interface Education {
  id: number;
  degree: string;
  field: string;
  school: string;
  location?: string;
  graduationDate: string;
  gpa?: string;
}

export interface Stat {
  label: string;
  value: string | number;
  suffix?: string;
}

export const experience: Experience[] = [
  {
    id: 1,
    title: "Engineer — Geometrical Assurance Engineering",
    company: "Infosys Limited (Stellantis Program)",
    location: "Mysuru, India",
    startDate: "May 2025",
    endDate: "Present",
    achievements: [
      "Improved assembly yield from 54.34% to 99.90% per million units via 3D tolerance stack-up analysis using CETOL integrated with Siemens NX across BIW and interior assemblies",
      "Ensured zero critical clashes across 15+ interface zones through Teamcenter Visualization Mockup reviews and virtual clearance analysis",
      "Executed design modifications directly in Siemens NX, maintaining datum integrity and assembly-level dimensional accuracy (3-2-1 principle)",
      "Reduced project management cycle time by ~40% through Power Automate workflows for dimensional convergence tracking",
      "Achieved 90%+ first-pass design approval by applying GD&T callouts (ASME Y14.5) with proper datum strategy"
    ]
  },
  {
    id: 2,
    title: "Systems Engineer Trainee",
    company: "Infosys Limited",
    location: "Mysuru, India",
    startDate: "October 2024",
    endDate: "April 2025",
    achievements: [
      "Validated component fit for 10+ design change orders through 1D and 3D tolerance stack-up calculations with GD&T principles",
      "Executed 3D model modifications in Siemens NX and added PMI annotations in CATIA V5 for BIW and interior components",
      "Validated assembly clearances using Teamcenter Visualization Mockup for clash-free design review sign-offs",
      "Identified 3 critical stress concentration zones via FEA in Ansys Workbench before physical prototyping"
    ]
  },
  {
    id: 3,
    title: "Subject Matter Expert — Mechanical Engineering",
    company: "Vaidik Eduservices Pvt. Ltd",
    location: "Remote, India",
    startDate: "July 2023",
    endDate: "September 2024",
    achievements: [
      "Supported 500+ students with structured problem-solving guides covering GD&T, tolerance analysis, and manufacturing processes"
    ]
  },
  {
    id: 4,
    title: "Research Intern — Metallurgical & Materials Engineering",
    company: "IIT Jodhpur",
    location: "India",
    startDate: "March 2023",
    endDate: "June 2023",
    achievements: [
      "Contributed to research on novel lithium-ion battery electrodes, performing material characterization and statistical data analysis"
    ]
  }
];

export const skills: SkillCategory[] = [
  {
    category: "GAE / Dimensional Management",
    icon: "target",
    tags: [
      "3D Tolerance Stack-Up",
      "Variation Simulation (VSA)",
      "GD&T (ASME Y14.5)",
      "Gap & Flush Analysis",
      "Datum Strategy (3-2-1)",
      "Dimensional Convergence"
    ],
    color: "orange"
  },
  {
    category: "Core CAD / Simulation",
    icon: "pen-tool",
    tags: [
      "Siemens NX (Primary)",
      "CETOL",
      "Teamcenter Vis Mockup",
      "CATIA V5",
      "SOLIDWORKS",
      "Ansys Workbench",
      "PMI"
    ],
    color: "blue"
  },
  {
    category: "PLM & Data",
    icon: "database",
    tags: [
      "Siemens Teamcenter",
      "NX PLM",
      "SQL"
    ],
    color: "green"
  },
  {
    category: "Measurement & Quality",
    icon: "gauge",
    tags: [
      "CMM Fundamentals",
      "Check Fixtures",
      "Inspection Reports",
      "SPC / Cp / Cpk",
      "DFMEA-MSR"
    ],
    color: "yellow"
  },
  {
    category: "Domain Knowledge",
    icon: "car",
    tags: [
      "BIW",
      "Interior & Exterior",
      "Sheet Metal Manufacturing",
      "Plastic Components",
      "Additive Manufacturing",
      "System Engineering"
    ],
    color: "purple"
  },
  {
    category: "Programming & Tools",
    icon: "code-2",
    tags: [
      "Java",
      "Power Platform",
      "Power Automate",
      "Prompt Engineering",
      "MS Office"
    ],
    color: "gray"
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "StackUp Analysis Reference Kit",
    description: "Curated collection of GD&T cheat sheets, tolerance analysis guides, DFM references for CNC, sheet metal, and injection molding — built as a one-stop engineering resource for dimensional management.",
    image: "/assets/projects/gdt-cover.png",
    tags: ["GD&T", "ASME Y14.5", "Tolerance Analysis", "DFM Guides"],
    category: "GD&T",
    link: "/tolerance-stackup-analysis.html"
  },
  {
    id: 2,
    title: "Li-ion Battery Electrode Research",
    description: "Published research at IIT Jodhpur on novel in-situ volume contractible metal halide negative electrodes for lithium-ion batteries — material characterization and statistical analysis of electrode performance.",
    tags: ["Research Publication", "IIT Jodhpur", "Materials Science"],
    category: "Research"
  },
  {
    id: 3,
    title: "CATIA V5 Tools Reference",
    description: "Comprehensive visual reference covering all 12 CATIA V5 workbenches — Sketcher, Part Design, Assembly, Drafting, GSD, Wireframe, Sheet Metal, Weld, Mold, DMU Navigator, Analysis, and Electrical Design.",
    image: "/assets/projects/catia-poster.jpeg",
    tags: ["CATIA V5", "CAD Reference", "All Workbenches"],
    category: "CAD",
    link: "https://claude.ai/public/artifacts/b0859b0a-51d0-40b7-8c73-f092f2285db8"
  },
  {
    id: 4,
    title: "Automated Dimensional Convergence Tracker",
    description: "Built custom workflows using Microsoft Power Automate and Microsoft Lists to streamline dimensional convergence tracking on the Stellantis program — reduced cycle time by ~40%.",
    tags: ["Power Automate", "Process Automation", "40% Time Saving"],
    category: "Automation"
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Certified Lean Six Sigma AI Yellow Belt",
    issuer: "CSSC (Sparen & Gewinn)",
    date: "Aug 2026",
    image: "/assets/certificates/linkedin_p1_1.jpeg",
    category: "core"
  },
  {
    id: 2,
    title: "DFMEA-MSR: Design FMEA & Monitoring System Response",
    issuer: "SKL-1758",
    date: "Dec 2025",
    image: "/assets/certificates/dfmea_p1_0.jpeg",
    category: "core"
  },
  {
    id: 3,
    title: "Geometric Dimensioning & Tolerancing (GD&T)",
    issuer: "Infosys",
    date: "Mar 2025",
    image: "/assets/certificates/linkedin_p11_0.jpeg",
    category: "core"
  },
  {
    id: 4,
    title: "NX PLM-1 Engineering Author",
    issuer: "Infosys",
    date: "May 2026",
    image: "/assets/certificates/linkedin_p2_0.jpeg",
    category: "core"
  },
  {
    id: 5,
    title: "Introduction to NX",
    issuer: "Infosys",
    date: "May 2025",
    image: "/assets/certificates/linkedin_p10_0.jpeg",
    category: "core"
  },
  {
    id: 6,
    title: "Teamcenter 14.1x Visualization Mockup",
    issuer: "Tata Technologies",
    date: "Jan 2026",
    image: "/assets/certificates/linkedin_p3_0.jpeg",
    category: "core"
  },
  {
    id: 7,
    title: "Product & Manufacturing Information (PMI)",
    issuer: "Tata Technologies",
    date: "Dec 2025",
    image: "/assets/certificates/linkedin_p4_0.jpeg",
    category: "core"
  },
  {
    id: 8,
    title: "Fundamentals of Finite Element Analysis",
    issuer: "Tata Technologies",
    date: "Jan 2026",
    image: "/assets/certificates/linkedin_p5_0.jpeg",
    category: "core"
  },
  {
    id: 9,
    title: "Practical Applications of FEA",
    issuer: "Infosys",
    date: "Feb 2025",
    image: "/assets/certificates/linkedin_p6_0.jpeg",
    category: "core"
  },
  {
    id: 10,
    title: "Fundamentals of System Engineering",
    issuer: "Infosys",
    date: "Dec 2025",
    image: "/assets/certificates/linkedin_p7_0.jpeg",
    category: "core"
  },
  {
    id: 11,
    title: "SOLIDWORKS Certification",
    issuer: "Academy of Skill Dev",
    date: "Mar 2021",
    image: "/assets/certificates/linkedin_p6_0.jpeg",
    category: "core"
  },
  {
    id: 12,
    title: "Ansys Workbench",
    issuer: "Academy of Skill Dev",
    date: "Apr 2021",
    image: "/assets/certificates/linkedin_p6_0.jpeg",
    category: "core"
  },
  {
    id: 13,
    title: "Google AI Tools",
    issuer: "Infosys",
    date: "Jun 2026",
    image: "/assets/certificates/linkedin_p2_0.jpeg",
    category: "ai"
  },
  {
    id: 14,
    title: "Introduction to Agentic AI",
    issuer: "Infosys",
    date: "Jul 2026",
    image: "/assets/certificates/linkedin_p2_0.jpeg",
    category: "ai"
  },
  {
    id: 15,
    title: "Prompt Engineering",
    issuer: "Infosys",
    date: "Dec 2024",
    image: "/assets/certificates/linkedin_p10_0.jpeg",
    category: "ai"
  },
  {
    id: 16,
    title: "Fundamentals of Microsoft Power Platform",
    issuer: "Infosys",
    date: "May 2026",
    image: "/assets/certificates/linkedin_p2_0.jpeg",
    category: "ai"
  },
  {
    id: 17,
    title: "Design for Additive Manufacturing",
    issuer: "Infosys",
    date: "Jul 2025",
    image: "/assets/certificates/linkedin_p8_0.jpeg",
    category: "ai"
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Mechanical Engineering",
    school: "Techno Main Salt Lake",
    graduationDate: "July 2022",
    gpa: "DGPA: 8.55"
  },
  {
    id: 2,
    degree: "Diploma",
    field: "Mechanical Engineering",
    school: "Santiniketan Institute of Polytechnic",
    graduationDate: "June 2019",
    gpa: "DGPA: 7.8"
  }
];

export const stats: Stat[] = [
  { label: "Assembly Yield", value: 99.9, suffix: "%" },
  { label: "Interface Zones", value: 15, suffix: "+" },
  { label: "Certifications", value: 17 }
];

export const contact = {
  email: "abhijitahoshprem@gmail.com",
  phone: "+91 82938 16687",
  linkedin: "https://linkedin.com/in/abhijitmechie/",
  location: "Mysuru, Karnataka, India"
};