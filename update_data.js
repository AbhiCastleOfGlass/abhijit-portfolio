/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');

let fileContent = fs.readFileSync('lib/data.ts', 'utf-8');

// Update Infosys Engineer (Stellantis)
fileContent = fileContent.replace(
  /title: "Engineer — Geometrical Assurance Engineering",[\s\S]*?achievements: \[[\s\S]*?\]/,
  `title: "Engineer (Stellantis)",
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
    ]`
);

// Update Systems Engineer Trainee
fileContent = fileContent.replace(
  /title: "Systems Engineer Trainee",[\s\S]*?achievements: \[[\s\S]*?\]/,
  `title: "Systems Engineer Trainee",
    logo: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://infosys.com&size=128",
    company: "Infosys Limited",
    location: "Mysuru, India",
    startDate: "October 2024",
    endDate: "April 2025",
    achievements: [
      "Applied GD&T and 1D tolerance stack-up to verify alignment and fit of components during design stages.",
      "Worked on 3D modeling and detailing in CATIA and Siemens NX to support design changes and manufacturing readiness.",
      "Performed basic FEA in Ansys to check structural behavior and validate design assumptions."
    ]`
);

// Update SME
// Wait, user just made a manual change to SME: "Supported 500+ students with structured problem-solving guides covering mechanical engineering basic subjects". The CV says: "Supported academic content development and problem-solving in core mechanical engineering subjects."
// Which is better? The CV is the source of truth now. Let's merge it gracefully or use the CV text.
fileContent = fileContent.replace(
  /title: "Subject Matter Expert — Mechanical Engineering",[\s\S]*?achievements: \[[\s\S]*?\]/,
  `title: "Subject Matter Expert - Mechanical Engineering",
    logo: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://vaidikedu.com&size=128",
    company: "Vaidik Eduservices Pvt. Ltd",
    location: "Remote, India",
    startDate: "July 2023",
    endDate: "September 2024",
    achievements: [
      "Supported academic content development and problem-solving in core mechanical engineering subjects."
    ]`
);

// Update Intern (IIT Jodhpur)
fileContent = fileContent.replace(
  /title: "Project Engineer — Metallurgical & Materials Engineering",[\s\S]*?achievements: \[[\s\S]*?\]/,
  `title: "Intern",
    logo: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://iitj.ac.in&size=128",
    company: "IIT Jodhpur - Dept of Metallurgical and Materials Engineering",
    location: "India",
    startDate: "March 2023",
    endDate: "June 2023",
    achievements: [
      "Worked on the project “Novel in-situ volume contractible metal halide negative electrodes for high-performance lithium-ion batteries”, focusing on material characterization and experimental analysis."
    ]`
);

fs.writeFileSync('lib/data.ts', fileContent);
