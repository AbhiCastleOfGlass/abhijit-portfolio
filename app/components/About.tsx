"use client";

import { motion } from "framer-motion";
import { Ruler, Box, Car, Workflow } from "lucide-react";

const highlights = [
  {
    title: "Tolerance Engineering",
    description: "1D & 3D stack-up analysis, variation simulation, dimensional convergence",
    icon: <Ruler size={22} className="text-primary" />,
    colorClass: "bg-primary/10 text-primary group-hover:bg-primary/20"
  },
  {
    title: "CAD & Design",
    description: "Siemens NX (daily driver), CATIA V5, Visualization Mockup reviews",
    icon: <Box size={22} className="text-blue-500" />,
    colorClass: "bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20",
    hoverBorder: "hover:border-blue-500 before:bg-blue-500"
  },
  {
    title: "Automotive Domain",
    description: "BIW, Interior/Exterior, sheet metal & plastic, gap & flush analysis",
    icon: <Car size={22} className="text-green-600 dark:text-green-500" />,
    colorClass: "bg-green-500/10 text-green-600 dark:text-green-500 group-hover:bg-green-500/20",
    hoverBorder: "hover:border-green-500 before:bg-green-500"
  },
  {
    title: "Process Automation",
    description: "Power Automate workflows cutting cycle time by 40%",
    icon: <Workflow size={22} className="text-yellow-600 dark:text-yellow-500" />,
    colorClass: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 group-hover:bg-yellow-500/20",
    hoverBorder: "hover:border-yellow-500 before:bg-yellow-500"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-sm font-display font-bold text-primary uppercase tracking-[0.2em] mb-3">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-balance max-w-3xl">
            Precision is not a goal — it&apos;s a discipline
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert text-muted-foreground"
          >
            <p className="mb-6">
              I&apos;m a Geometrical Assurance Engineer at Infosys, working on Stellantis automotive programs. My mission: ensuring every component — from BIW structures to interior trim — achieves its dimensional targets for perfect fit, function, and aesthetics.
            </p>
            <p className="mb-6">
              Daily, I work in <strong className="text-foreground">Siemens NX</strong> for design modifications, run 3D tolerance stack-ups through <strong className="text-foreground">CETOL</strong>, and validate assemblies in <strong className="text-foreground">Teamcenter Visualization Mockup</strong>. I bridge the gap between geometric intent and manufacturing reality.
            </p>
            <p>
              My approach: rigorous GD&T application paired with practical shop-floor knowledge — solutions that work in production, not just on screen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`group glow-card bg-card border border-border p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${highlight.hoverBorder || 'hover:border-primary before:bg-primary'}`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${highlight.colorClass}`}>
                  {highlight.icon}
                </div>
                <h4 className="font-display text-lg font-semibold mb-2 text-foreground">
                  {highlight.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}