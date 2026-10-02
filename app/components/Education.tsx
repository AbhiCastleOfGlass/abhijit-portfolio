"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { GraduationCap, Trophy, Star } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <div className="text-sm font-display font-bold text-primary uppercase tracking-[0.2em] mb-3">
                Education
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-balance">
                Academic background
              </h2>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border p-6 md:p-8 rounded-xl transition-all duration-300 hover:shadow-md hover:border-primary/50 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 min-w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <div className="text-foreground font-medium mb-1">
                        {edu.field}
                      </div>
                      <div className="text-sm text-muted-foreground mb-4">
                        {edu.school}
                      </div>
                      <div className="flex flex-wrap gap-4 text-xs font-semibold">
                        <span className="text-primary">{edu.graduationDate}</span>
                        {edu.gpa && (
                          <span className="px-2 py-0.5 bg-muted rounded text-muted-foreground">
                            {edu.gpa}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10"
            >
              <div className="text-sm font-display font-bold text-yellow-500 uppercase tracking-[0.2em] mb-3">
                Recognition
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-balance">
                Battle trophies
              </h2>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group relative bg-card border border-border p-6 md:p-8 rounded-xl transition-all duration-300 hover:shadow-md hover:border-yellow-500/50 overflow-hidden"
              >
                {/* Subtle highlight overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex items-start gap-4 flex-col sm:flex-row">
                  <div className="w-12 h-12 min-w-12 rounded-lg flex items-center justify-center bg-yellow-500/10 text-yellow-500">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold mb-2">Infosys Insta Award</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Recognized by leadership for outstanding contributions to project efficiency through custom workflow automation initiatives. <span className="font-semibold text-foreground">(Feb 2026)</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group relative bg-card border border-border p-6 md:p-8 rounded-xl transition-all duration-300 hover:shadow-md hover:border-yellow-500/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex items-start gap-4 flex-col sm:flex-row">
                  <div className="w-12 h-12 min-w-12 rounded-lg flex items-center justify-center bg-yellow-500/10 text-yellow-500">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold mb-2">High Performer</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Recognized as a High Performer in the Infosys Foundation Program for exceptional training performance.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}