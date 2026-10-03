// Portfolio data for Abhijit Ghosh - Geometrical Assurance Engineer

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  logo?: string;
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
    title: "Engineer (Stellantis)",
    logo: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://infosys.com&size=128",
    company: "Infosys Limited",
    location: "Mysuru, India",
    startDate: "May 2025",
    endDate: "Present",
    achievements: [
      "Architected automated workflows utilizing Microsoft Power Automate and Microsoft Lists to streamline project management, minimizing operational clutter and significantly enhancing data transparency with the client.",
      "Carried out tolerance stack-up analysis using CETOL and NX to identify variation risks and improve assembly accuracy.",
      "Recommended critical design and tolerance optimization changes that increased assembly yield from 54.34% to 99.90% per million units.",
      "Reviewed and confirmed clearances between key parts to avoid clashes and ensure smooth assembly.",
      "Used GD&T standards in design reviews to maintain dimensional accuracy and reduce build issues."
    ]
  },
  {
    id: 2,
    title: "Systems Engineer Trainee",
    logo: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://infosys.com&size=128",
    company: "Infosys Limited",
    location: "Mysuru, India",
    startDate: "October 2024",
    endDate: "April 2025",
    achievements: [
      "Applied GD&T and 1D tolerance stack-up to verify alignment and fit of components during design stages.",
      "Worked on 3D modeling and detailing in CATIA and Siemens NX to support design changes and manufacturing readiness.",
      "Performed basic FEA in Ansys to check structural behavior and validate design assumptions."
    ]
  },
  {
    id: 3,
    title: "Subject Matter Expert - Mechanical Engineering",
    logo: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://vaidikedu.com&size=128",
    company: "Vaidik Eduservices Pvt. Ltd",
    location: "Remote, India",
    startDate: "July 2023",
    endDate: "September 2024",
    achievements: [
      "Supported academic content development and problem-solving in core mechanical engineering subjects."
    ]
  },
  {
    id: 4,
    title: "Intern",
    logo: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://iitj.ac.in&size=128",
    company: "IIT Jodhpur - Dept of Metallurgical and Materials Engineering",
    location: "India",
    startDate: "March 2023",
    endDate: "June 2023",
    achievements: [
      "Worked on the project “Novel in-situ volume contractible metal halide negative electrodes for high-performance lithium-ion batteries”, focusing on material characterization and experimental analysis."
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
    title: "1D Stack Up calculation tool",
    description: "Curated collection of GD&T cheat sheets, tolerance analysis guides, DFM references for CNC, sheet metal, and injection molding — built as a one-stop engineering resource for dimensional management.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2000&auto=format&fit=crop",
    tags: ["GD&T", "ASME Y14.5", "Tolerance Analysis", "DFM Guides"],
    category: "GD&T",
    link: "/projects/stackup-analysis"
  },
  {
    id: 2,
    title: "Catia Learning Path",
    description: "Comprehensive visual reference covering all 12 CATIA V5 workbenches — Sketcher, Part Design, Assembly, Drafting, GSD, Wireframe, Sheet Metal, Weld, Mold, DMU Navigator, Analysis, and Electrical Design.",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2000&auto=format&fit=crop",
    tags: ["CATIA V5", "CAD Reference", "All Workbenches"],
    category: "CAD",
    link: "/projects/catia-v5"
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
    title: "Teamcenter 14.1x Visualization Mockup",
    issuer: "Tata Technologies",
    date: "Jan 2026",
    image: "/assets/certificates/linkedin_p3_0.jpeg",
    category: "core"
  },
  {
    id: 6,
    title: "Product & Manufacturing Information (PMI)",
    issuer: "Tata Technologies",
    date: "Dec 2025",
    image: "/assets/certificates/linkedin_p4_0.jpeg",
    category: "core"
  },
  {
    id: 7,
    title: "Fundamentals of Finite Element Analysis",
    issuer: "Tata Technologies",
    date: "Jan 2026",
    image: "/assets/certificates/linkedin_p5_0.jpeg",
    category: "core"
  },
  {
    id: 8,
    title: "SOLIDWORKS Certification",
    issuer: "Academy of Skill Dev",
    date: "Mar 2021",
    image: "/assets/certificates/linkedin_p6_0.jpeg",
    category: "core"
  },
  {
    id: 9,
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
  { label: "Certifications", value: 9 }
];

export const contact = {
  email: "abhijitahoshprem@gmail.com",
  phone: "+91 82938 16687",
  linkedin: "https://linkedin.com/in/abhijitmechie/",
  location: "Mysuru, Karnataka, India"
};