"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-sm font-display font-bold text-primary uppercase tracking-[0.2em] mb-3">
            Experience
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-balance">
            The training arc so far
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-border/60 ml-4 md:ml-0 md:pl-0 pl-6 space-y-12">
          {/* Animated gradient line over the border */}
          <motion.div
            className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-primary via-blue-500 to-green-500 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-31px] md:left-[-7px] top-1.5 w-3.5 h-3.5 bg-primary rounded-full border-4 border-background transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_12px_rgba(234,88,12,0.6)] z-10" />

              {/* Special styling for the first (current) item dot */}
              {index === 0 && (
                <div className="absolute left-[-31px] md:left-[-7px] top-1.5 w-3.5 h-3.5 bg-primary rounded-full border-4 border-background shadow-[0_0_0_4px_rgba(234,88,12,0.2)] animate-pulse z-0" />
              )}

              <div className="font-mono text-sm font-medium text-primary mb-3">
                {exp.startDate} — {exp.endDate}
              </div>

              <div className="bg-card border border-border p-6 md:p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-primary/50 group-hover:translate-x-1">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-1">
                  {exp.title}
                </h3>
                <div className="text-primary font-semibold text-sm md:text-base mb-1">
                  {exp.company}
                </div>
                <div className="text-muted-foreground text-sm mb-6 flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  {exp.location}
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="relative pl-5 text-muted-foreground leading-relaxed text-sm md:text-base">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-primary/70 rounded-full group-hover:shadow-[0_0_6px_rgba(234,88,12,0.6)] transition-all"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}