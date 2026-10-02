"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Target, PenTool, Database, Gauge, Car, Code2 } from "lucide-react";

// Map string icon names to React components
const getIcon = (iconName: string, colorClass: string) => {
  const props = { size: 20, className: colorClass };
  switch (iconName) {
    case 'target': return <Target {...props} />;
    case 'pen-tool': return <PenTool {...props} />;
    case 'database': return <Database {...props} />;
    case 'gauge': return <Gauge {...props} />;
    case 'car': return <Car {...props} />;
    case 'code-2': return <Code2 {...props} />;
    default: return <Target {...props} />;
  }
};

// Map color names to concrete classes
const getColorClasses = (colorName?: string) => {
  switch (colorName) {
    case 'blue': return {
      bg: 'bg-blue-500/10',
      text: 'text-blue-500',
      border: 'hover:border-blue-500',
      shadow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]',
      tagPrimaryId: 'border-blue-500 bg-blue-500/10 text-blue-500',
      tagHoverId: 'hover:bg-blue-500/10 hover:text-blue-500'
    };
    case 'green': return {
      bg: 'bg-green-500/10',
      text: 'text-green-600 dark:text-green-500',
      border: 'hover:border-green-500',
      shadow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.12)]',
      tagPrimaryId: 'border-green-500 bg-green-500/10 text-green-600 dark:text-green-500',
      tagHoverId: 'hover:bg-green-500/10 hover:text-green-500'
    };
    case 'yellow': return {
      bg: 'bg-yellow-500/10',
      text: 'text-yellow-600 dark:text-yellow-500',
      border: 'hover:border-yellow-500',
      shadow: 'hover:shadow-[0_0_30px_rgba(234,179,8,0.12)]',
      tagPrimaryId: 'border-yellow-500 bg-yellow-500/10 text-yellow-600 dark:text-yellow-500',
      tagHoverId: 'hover:bg-yellow-500/10 hover:text-yellow-500'
    };
    case 'purple': return {
      bg: 'bg-purple-500/10',
      text: 'text-purple-500',
      border: 'hover:border-purple-500',
      shadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]',
      tagPrimaryId: 'border-purple-500 bg-purple-500/10 text-purple-500',
      tagHoverId: 'hover:bg-purple-500/10 hover:text-purple-500'
    };
    case 'gray': return {
      bg: 'bg-zinc-500/10',
      text: 'text-zinc-500',
      border: 'hover:border-zinc-500',
      shadow: 'hover:shadow-[0_0_30px_rgba(113,113,122,0.12)]',
      tagPrimaryId: 'border-zinc-500 bg-zinc-500/10 text-zinc-500',
      tagHoverId: 'hover:bg-zinc-500/10 hover:text-zinc-500'
    };
    case 'orange':
    default: return {
      bg: 'bg-primary/10',
      text: 'text-primary',
      border: 'hover:border-primary',
      shadow: 'hover:shadow-[0_0_30px_rgba(234,88,12,0.15)]',
      tagPrimaryId: 'border-primary bg-primary/10 text-primary',
      tagHoverId: 'hover:bg-primary/10 hover:text-primary'
    };
  }
};

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-sm font-display font-bold text-primary uppercase tracking-[0.2em] mb-3">
            Skills
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-balance">
            Techniques and abilities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => {
            const colors = getColorClasses(skillGroup.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-card border border-border p-7 rounded-xl transition-all duration-300 ${colors.border} ${colors.shadow} group`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors.bg}`}>
                    {getIcon(skillGroup.icon, colors.text)}
                  </div>
                  <h3 className="font-display text-lg font-bold">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.tags.map((tag, tagIndex) => {
                    // Make first 2 tags "primary" style for emphasis
                    const isPrimary = tagIndex < 2 && tagGroupShouldHavePrimaryTags(index);
                    return (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                          isPrimary
                            ? `border border-solid ${colors.tagPrimaryId}`
                            : `bg-muted/80 text-muted-foreground ${colors.tagHoverId} hover:scale-105 cursor-default`
                        }`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function tagGroupShouldHavePrimaryTags(groupIndex: number): boolean {
  // Only highlight primary tags in the core engineering categories (first two)
  return groupIndex < 2;
}