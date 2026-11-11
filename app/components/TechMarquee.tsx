"use client";

import { Cpu, Layers, Compass, Ruler, Car, Workflow, ShieldCheck, Database, Zap, Code2, Box, Award } from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const techItems: TechItem[] = [
  { name: "Siemens NX", category: "Primary CAD", icon: <Box size={16} className="text-blue-500" /> },
  { name: "CETOL 6σ", category: "Tolerance Stack-Up", icon: <Ruler size={16} className="text-primary" /> },
  { name: "Teamcenter Vis Mockup", category: "Digital Validation", icon: <Layers size={16} className="text-purple-500" /> },
  { name: "ASME Y14.5 (GD&T)", category: "Standards", icon: <Compass size={16} className="text-emerald-500" /> },
  { name: "CATIA V5", category: "Modeling", icon: <Cpu size={16} className="text-blue-400" /> },
  { name: "Microsoft Power Automate", category: "Automation", icon: <Workflow size={16} className="text-yellow-500" /> },
  { name: "Ansys Workbench", category: "FEA Simulation", icon: <Zap size={16} className="text-orange-500" /> },
  { name: "BIW Structures", category: "Automotive", icon: <Car size={16} className="text-green-500" /> },
  { name: "3-2-1 Datum Strategy", category: "Dimensional", icon: <TargetIcon size={16} className="text-red-500" /> },
  { name: "DFMEA-MSR", category: "Quality", icon: <ShieldCheck size={16} className="text-indigo-500" /> },
  { name: "Lean Six Sigma AI", category: "Certification", icon: <Award size={16} className="text-amber-500" /> },
  { name: "SQL & Data", category: "Analytics", icon: <Database size={16} className="text-cyan-500" /> },
];

function TargetIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export default function TechMarquee() {
  // Duplicate for seamless infinite loop
  const duplicatedItems = [...techItems, ...techItems, ...techItems];

  return (
    <div className="py-12 border-y border-border/60 bg-muted/20 relative overflow-hidden">
      {/* Gradient fade masks on left and right */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="mask-marquee overflow-hidden">
        <div className="animate-marquee flex gap-6 py-2">
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border shadow-xs shrink-0 hover:border-primary/50 hover:shadow-md transition-all duration-300 group cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-wide text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
