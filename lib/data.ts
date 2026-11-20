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

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  detailedOverview?: string;
  image?: string;
  tags: string[];
  category: string;
  tools?: string[];
  datumStrategy?: string;
  components?: string[];
  keyMetrics?: ProjectMetric[];
  methodology?: string[];
  failureModesPrevented?: string[];
  link?: string;
  featured?: boolean;
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
    title: "Senior Systems Engineer (Stellantis)",
    logo: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://infosys.com&size=128",
    company: "Infosys Limited",
    location: "Mysuru, India",
    startDate: "Oct 2026",
    endDate: "Present",
    achievements: [
      "Increased powertrain subsystem assembly yield from 54.34% to 99.90% per million units by executing 3D variation simulation in CETOL and reallocating critical GD&T tolerances.",
      "Built automated project tracking workflows using Microsoft Power Automate and Lists, cutting administrative reporting overhead and enabling real-time engineering change tracking with Stellantis stakeholders.",
      "Promoted to Senior Systems Engineer in recognition of consistently high performance and engineering impact on the Stellantis program."
    ]
  },
  {
    id: 2,
    title: "Systems Engineer (Stellantis)",
    logo: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://infosys.com&size=128",
    company: "Infosys Limited",
    location: "Mysuru, India",
    startDate: "May 2025",
    endDate: "Sep 2026",
    achievements: [
      "Conducted 3D tolerance stack-up analysis in CETOL and Siemens NX across engine cooling circuits and air intake packaging, mitigating high-risk assembly variation before tooling freeze.",
      "Performed dynamic clash and gap/flush analyses in Teamcenter Vis Mockup, resolving clearance violations across critical powertrain packaging interfaces.",
      "Applied ASME Y14.5 GD&T standards and 3-2-1 datum strategies in cross-functional design reviews to ensure dimensional repeatability and prevent build defects."
    ]
  },
  {
    id: 3,
    title: "Systems Engineer Trainee",
    logo: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://infosys.com&size=128",
    company: "Infosys Limited",
    location: "Mysuru, India",
    startDate: "October 2024",
    endDate: "April 2025",
    achievements: [
      "Evaluated component fit and alignment across early-stage assemblies using ASME Y14.5 GD&T and 1D tolerance stack-up calculations.",
      "Developed 3D models and manufacturing detail drawings in Siemens NX and CATIA V5 to support design modifications and manufacturing readiness.",
      "Performed structural FEA in Ansys to verify stress distributions and validate design assumptions."
    ]
  },
  {
    id: 4,
    title: "Subject Matter Expert - Mechanical Engineering",
    logo: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://vaidikedu.com&size=128",
    company: "Vaidik Eduservices Pvt. Ltd",
    location: "Remote, India",
    startDate: "July 2023",
    endDate: "September 2024",
    achievements: [
      "Delivered technical problem-solving and rigorous engineering solutions across core mechanical engineering domains (thermodynamics, mechanics of materials, and machine design)."
    ]
  },
  {
    id: 5,
    title: "Intern",
    logo: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://iitj.ac.in&size=128",
    company: "IIT Jodhpur - Dept of Metallurgical and Materials Engineering",
    location: "India",
    startDate: "March 2023",
    endDate: "June 2023",
    achievements: [
      "Investigated novel in-situ volume contractible metal halide negative electrodes for high-performance lithium-ion batteries, executing material characterization and experimental data analysis."
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
    category: "Subsystem Domain",
    icon: "car",
    tags: [
      "Engine Packaging",
      "Cooling Circuits",
      "Air Intake Packaging",
      "Exhaust Systems",
      "Castings & Sheet Metal",
      "Additive Manufacturing"
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
    title: "Engine Packaging & Subsystem Fitment Study",
    subtitle: "Stellantis OEM Powertrain Program · 12+ Component Integration",
    description: "Comprehensive 1D/3D tolerance stack-up and spatial fitment analysis across 12+ engine components in CETOL and Siemens NX, ensuring seal compression and zero bolt cross-threading.",
    detailedOverview: "Conducted rigorous 3D variation analysis across 12+ critical engine subcomponents to validate bolt-hole clearances, gasket compression ratios, and split-face interface sealing. Reallocated critical ASME Y14.5 tolerances across casting and sheet-metal interfaces to guarantee a robust 99.90% assembly yield across full automotive thermal operating cycles (-40°C to 125°C).",
    category: "Powertrain Packaging",
    tools: ["CETOL", "Siemens NX", "ASME Y14.5 GD&T"],
    datumStrategy: "ASME 3-2-1 Datum Reference Frame (Primary A Cylinder Block Deck, Secondary B Dowel Pin, Tertiary C Slot)",
    components: [
      "Intake Manifold",
      "Front Cover",
      "Cylinder Head",
      "Engine Cover",
      "Engine Mounts",
      "Oil Pan",
      "Baffle Plate",
      "Oil Pump",
      "Turbocharger",
      "Coolant Hoses",
      "Cylinder Head Cover",
      "Jet Oil Cooler"
    ],
    keyMetrics: [
      { label: "Assembly Yield", value: "99.90%" },
      { label: "Components Analyzed", value: "12+" },
      { label: "Split-Face Seal Risk", value: "0%" }
    ],
    methodology: [
      "1D/3D RSS (Root-Sum-Square) and worst-case statistical stack-up analysis across all split-face interfaces.",
      "Sensitivity analysis in CETOL isolating top variance contributors to shift tight machining tolerances to standard fastener clearances.",
      "Validation of bolt-hole clearances, dowel pin engagement, and perimeter gasket compression under thermal cycling."
    ],
    failureModesPrevented: [
      "Oil & coolant leakage from under-compressed perimeter gaskets.",
      "Bolt cross-threading due to cumulative hole pattern positional deviation.",
      "Thermal pinch and joint distortion between front cover and cylinder head split surfaces."
    ],
    tags: ["Powertrain", "CETOL", "Siemens NX", "GD&T", "ASME Y14.5", "12+ Components"],
    featured: true
  },
  {
    id: 2,
    title: "Exhaust Hot-End Packaging & Thermal Envelope",
    subtitle: "Catalytic Converter Thermal Expansion (600°C–800°C) & Dynamic Roll Envelope",
    description: "Modeled 3D thermal expansion envelopes (600°C–800°C) and stacked engine roll/vibration vectors in Teamcenter Vis Mockup to ensure safe dynamic clearances to heat shields and wiring harnesses.",
    detailedOverview: "Hot-end exhaust systems experience extreme thermal gradients causing multi-axis thermal expansion vectors. Combined 3D thermal growth modeling with powertrain torque roll and road-vibration envelopes in Teamcenter Vis Mockup, validating clearance margins to sensitive engine bay components.",
    category: "Thermal & Exhaust",
    tools: ["CETOL", "Teamcenter Vis Mockup", "Siemens NX"],
    datumStrategy: "3-2-1 Flange Datum Strategy with Thermal Growth Float Allowance",
    components: [
      "Catalytic Converter",
      "Turbocharger Downpipe",
      "Exhaust Heat Shields",
      "Powertrain Wire Harnesses",
      "Subframe Heat Deflectors"
    ],
    keyMetrics: [
      { label: "Operating Temp", value: "600°C–800°C" },
      { label: "Dynamic Clearance", value: "≥15mm Safe" },
      { label: "Harness Violations", value: "0" }
    ],
    methodology: [
      "Calculated 3D thermal expansion vectors for hot-end exhaust components operating between 600°C and 800°C.",
      "Stacked thermal growth vectors with engine roll, pitch, and torque-reaction vibration envelopes in Teamcenter Vis Mockup.",
      "Verified dynamic clearances to heat shields, adjacent brake lines, and electrical wiring harnesses."
    ],
    failureModesPrevented: [
      "Thermal degradation and insulation melting of adjacent electrical wiring harnesses.",
      "Dynamic contact rattle and heat-shield deformation during full-throttle engine torque roll.",
      "Exhaust manifold flange cracking from unaccommodated thermal expansion growth."
    ],
    tags: ["Thermal Modeling", "Teamcenter Vis Mockup", "CETOL", "DMU Clearance", "NVH"],
    featured: true
  },
  {
    id: 3,
    title: "Exhaust Cold-End Fitment & NVH Clearance Study",
    subtitle: "Underbody Routing, Tailpipes & NVH Dynamic Vibration Packaging",
    description: "Underbody line routing and dynamic clearance validation across downpipes, mufflers, and exhaust tips against strict NVH boundary limits in Siemens NX and Vis Mockup.",
    detailedOverview: "Conducted comprehensive digital mock-up and kinematic variation analysis of cold-end exhaust components underneath the vehicle floorpan. Optimized rubber isolator hanger bracket locations and pin angles for both NVH vibration isolation and ergonomic assembly-line hook-in.",
    category: "Thermal & Exhaust",
    tools: ["Siemens NX", "Teamcenter Vis Mockup", "ASME Y14.5"],
    datumStrategy: "Chassis Underbody Hardpoints & Isolator Hanger Reference Coordinates",
    components: [
      "Downpipes",
      "Intermediate Exhaust Pipe",
      "Mufflers",
      "Tail Pipes",
      "Exhaust Tips",
      "Isolator Rubber Hanger Brackets"
    ],
    keyMetrics: [
      { label: "Underbody Clearance", value: "NVH Compliant" },
      { label: "Hanger Ergonomics", value: "Line-Optimized" },
      { label: "Rattle Rejection", value: "100%" }
    ],
    methodology: [
      "Dynamic kinematic sweep analysis of the full underbody exhaust line during severe road load excitations.",
      "Optimized rubber isolator hanger bracket locations and pin angles for both NVH isolation and ergonomic assembly-line hook-in.",
      "Conducted digital DMU clearance reviews with chassis underbody, rear suspension axle travel, and fuel tank heat baffles."
    ],
    failureModesPrevented: [
      "Underbody exhaust contact with chassis rails during rebound and suspension articulation.",
      "Exhaust tip aesthetic misalignment with rear fascia bumper cutouts.",
      "Premature isolator bush tear from excessive installation preload."
    ],
    tags: ["Cold-End Exhaust", "Siemens NX", "Vis Mockup", "Underbody DMU", "Hanger Optimization"],
    featured: true
  },
  {
    id: 4,
    title: "Crank & CAM Timing Gear Interaction Study",
    subtitle: "360° Rotational Cycle Backlash & Center-Distance Tolerance Stack-Up",
    description: "Simulated timing gear mesh interactions, center-distance variations, and backlash throughout 360° rotation cycles in CETOL to prevent gear tooth binding and acoustic NVH whine.",
    detailedOverview: "Evaluated center-to-center distance variation between crankshaft and camshaft bores across cylinder block and cylinder head casting tolerances. Simulated gear tooth mesh backlash, runout stack-ups, and thermal expansion differentials throughout 360° crankshaft rotations in CETOL.",
    category: "Kinematics & Timing",
    tools: ["CETOL", "Siemens NX", "ASME Y14.5 GD&T"],
    datumStrategy: "Cylinder Block Main Bearing Bore (A), Front Deck Face (B), Line Boring Centerline (C)",
    components: [
      "Crankshaft Timing Gear",
      "Camshaft Timing Gear",
      "Cylinder Block Main Bore",
      "Cylinder Head Cam Bores",
      "Timing Chain/Guide Rails"
    ],
    keyMetrics: [
      { label: "Rotation Cycle", value: "360° Verified" },
      { label: "Center-Distance Var", value: "Controlled" },
      { label: "Gear Binding Risk", value: "0%" }
    ],
    methodology: [
      "Evaluated center-to-center distance variation between crankshaft and camshaft bores across cylinder block and head casting tolerances.",
      "Simulated gear tooth mesh backlash, runout stack-ups, and thermal expansion differential throughout 360° crankshaft rotations in CETOL.",
      "Reallocated profile tolerances and journal runout specifications to guarantee smooth mesh under peak thermal loading."
    ],
    failureModesPrevented: [
      "Dynamic gear tooth binding or jamming during engine thermal soak.",
      "Excessive timing gear whine and NVH from high-backlash tooth impact.",
      "Premature timing chain guide rail wear and tooth pitting."
    ],
    tags: ["Timing Gears", "CETOL", "Kinematics", "Backlash Analysis", "Siemens NX"],
    featured: true
  },
  {
    id: 5,
    title: "Powertrain Cooling Packaging & Routing Study",
    subtitle: "Coolant Circuits, Flexible Hoses & Service Tool Clearance Validation",
    description: "Optimized 3D routing envelopes for coolant circuits and flexible hoses, balancing thermal dissipation, tool serviceability clearance, and dynamic belt drive clash avoidance.",
    detailedOverview: "Developed 3D flexible hose routing envelopes accounting for engine shake and hose pressure expansion (bulge). Conducted clash and clearance checks in Teamcenter Vis Mockup against accessory belt drive, alternator, and pulleys, while validating service technician tool access.",
    category: "Powertrain Packaging",
    tools: ["Siemens NX", "Teamcenter Vis Mockup", "PMI"],
    datumStrategy: "Radiator Support Module & Engine Bracket Mounting Locators",
    components: [
      "Radiator In/Out Hoses",
      "Rigid Coolant Tubes",
      "Thermostat Housing",
      "Water Pump Connections",
      "Expansion Tank Lines",
      "Spring Band Clamps"
    ],
    keyMetrics: [
      { label: "Tool Clearance", value: "100% Validated" },
      { label: "DMU Clashes", value: "0" },
      { label: "Abrasion Risk", value: "Eliminated" }
    ],
    methodology: [
      "Developed 3D flexible hose routing envelopes accounting for engine shake and hose pressure expansion (bulge).",
      "Conducted clash and clearance checks in Teamcenter Vis Mockup against accessory belt drive, alternator, and pulleys.",
      "Evaluated serviceability tool clearance for spring band clamp pliers and bleeding access."
    ],
    failureModesPrevented: [
      "Coolant hose chafing against accessory drive belts and sharp bracket edges.",
      "Kinking and flow restriction during engine installation into chassis.",
      "Service technician inability to access hose clamps for field maintenance."
    ],
    tags: ["Cooling Circuits", "Hose Routing", "Siemens NX", "Vis Mockup", "Service Tool Access"],
    featured: true
  },
  {
    id: 6,
    title: "Engineering Workflow Automation Platform",
    subtitle: "Microsoft Power Automate & Lists Dimensional Deviation Platform",
    description: "Automated dimensional change-management and deviation workflows across engineering stakeholders, cutting tracking overhead and earning the Infosys Insta Award in Feb 2026.",
    detailedOverview: "Architected an end-to-end cloud automated notification and approval system linking engineering change requests with CAD markups and tolerance deviation sign-offs. Automated revision logging across Stellantis and Infosys cross-functional engineering teams, eliminating email-based tracking bottlenecks.",
    category: "Automation & Tools",
    tools: ["Power Automate", "Microsoft Lists", "Power Platform", "MS 365"],
    datumStrategy: "Cloud ECO & Dimensional Deviation Structured Records",
    components: [
      "Engineering Change Orders (ECO)",
      "Tolerance Deviation Requests",
      "CAD Revision Tracker",
      "Supplier Capability Metrics"
    ],
    keyMetrics: [
      { label: "Award", value: "Infosys Insta 2026" },
      { label: "Cycle-Time Reduction", value: "40%+" },
      { label: "Tracking Latency", value: "Zero" }
    ],
    methodology: [
      "Architected an end-to-end cloud automated notification and approval system linking engineering change requests with CAD markups.",
      "Automated revision logging across Stellantis and Infosys cross-functional engineering teams.",
      "Eliminated multi-day email routing lags with instant adaptive cards and digital audit trails."
    ],
    failureModesPrevented: [
      "Out-of-sync drawing versions reaching tooling suppliers.",
      "Delayed sign-offs on critical dimensional deviation requests.",
      "Missed stakeholder approvals prior to tooling milestone releases."
    ],
    tags: ["Automation", "Power Automate", "Insta Award", "Process Optimization", "ECO"],
    featured: true
  },
  {
    id: 7,
    title: "1D Stack Up Calculation Tool & GD&T Guide",
    subtitle: "ASME Y14.5 Cheat Sheets, Tolerance Stack-Up Calculators & DFM References",
    description: "Interactive engineering web tool for 1D linear tolerance stack-ups (RSS & Worst-Case), ASME Y14.5 GD&T reference charts, and manufacturing guideline calculators.",
    detailedOverview: "Curated collection of interactive tolerance stack-up calculators, ASME Y14.5 GD&T cheat sheets, and DFM references for CNC machining, sheet metal fabrication, and injection molding. Built as an open engineering resource for dimensional management professionals.",
    image: "/assets/projects/gdt-cover.png",
    category: "Automation & Tools",
    tools: ["ASME Y14.5", "1D RSS / Worst-Case", "DFM", "React"],
    datumStrategy: "ASME Y14.5 Standard Datum Feature Simulator Decision Trees",
    components: [
      "Linear Tolerance Loops",
      "Geometric Modifiers (MMC/LMC)",
      "Feature Control Frames",
      "Bonus Tolerance Engine"
    ],
    keyMetrics: [
      { label: "Standard", value: "ASME Y14.5" },
      { label: "Analysis Modes", value: "RSS & Worst-Case" },
      { label: "DFM Rules", value: "CNC & Sheet Metal" }
    ],
    methodology: [
      "Created interactive web calculators for 1D linear stack-ups with worst-case and RSS statistical formulas.",
      "Compiled ASME Y14.5 GD&T reference charts, datum selection decision trees, and MMC/LMC modifier explanations."
    ],
    failureModesPrevented: [
      "Calculation errors in manual loop equations.",
      "Misapplication of MMC material condition modifiers on non-size features."
    ],
    tags: ["GD&T", "ASME Y14.5", "Tolerance Analysis", "Interactive Tool", "DFM"],
    link: "/projects/stackup-analysis",
    featured: true
  },
  {
    id: 8,
    title: "CATIA V5 Comprehensive Workbench System",
    subtitle: "Interactive Visual Reference Covering 12 Industrial Workbenches",
    description: "Comprehensive visual and technical reference covering 12 CATIA V5 engineering workbenches, from Part Design and Assembly to GSD Surfacing and DMU Navigator.",
    detailedOverview: "Visual reference covering 12 CATIA V5 workbenches — Sketcher, Part Design, Assembly, Drafting, Generative Shape Design (GSD), Wireframe, Sheet Metal, Weld, Mold Tooling, DMU Navigator, Structural Analysis, and Electrical Harness Design.",
    image: "/assets/projects/catia-poster.jpeg",
    category: "Automation & Tools",
    tools: ["CATIA V5", "DMU Navigator", "GSD", "Part & Assembly"],
    datumStrategy: "Catia Tree Master Modeling & Skeleton Datum Methodologies",
    components: [
      "12 CATIA Workbenches",
      "Parametric Sketcher",
      "GSD Surfacing",
      "DMU Kinematics & Clash"
    ],
    keyMetrics: [
      { label: "Workbenches", value: "12 Systems" },
      { label: "Domains", value: "Surfacing, DMU, BiW" },
      { label: "Visual Maps", value: "Complete" }
    ],
    methodology: [
      "Structured multi-workbench visual guide from Part Design & Assembly to Generative Shape Design (GSD) and DMU Kinematics.",
      "Documented best practices for parametric modeling, parent-child stability, and large assembly management."
    ],
    failureModesPrevented: [
      "Feature tree corruption from external reference circular dependencies.",
      "Assembly load performance degradation in complex CAD models."
    ],
    tags: ["CATIA V5", "CAD Architecture", "12 Workbenches", "DMU Navigator", "GSD"],
    link: "/projects/catia-v5",
    featured: true
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
  email: "abhijitghoshprem@gmail.com",
  phone: "+91 82938 16687",
  linkedin: "https://linkedin.com/in/abhijitmechie/",
  location: "Mysuru, Karnataka, India - 570016",
  resumeUrl: "/resume.pdf",
  portfolioUrl: "https://abhijittorq.vercel.app/"
};