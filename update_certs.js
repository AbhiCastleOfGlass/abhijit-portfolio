/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
let data = fs.readFileSync('lib/data.ts', 'utf8');

const newCerts = `export const certifications: Certification[] = [
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
];`;

data = data.replace(/export const certifications: Certification\[\] = \[\s*\{[\s\S]*?\}\s*\];/, newCerts);
data = data.replace(/\{ label: "Certifications", value: 17 \}/, '{ label: "Certifications", value: 9 }');
fs.writeFileSync('lib/data.ts', data);
