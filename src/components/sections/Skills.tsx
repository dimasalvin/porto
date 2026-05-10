"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "React Native"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST API", "MySQL", "Prisma"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "Vercel", "Railway", "CI/CD", "Linux", "Figma"],
  },
  {
    category: "Practices",
    items: ["Agile/Scrum", "Code Review", "System Design", "Performance Optimization"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Skills & Tech Stack</span>
          </h2>
          <p className="text-muted font-mono text-sm mb-12">// tools of the trade</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + groupIndex * 0.1 }}
              className="p-6 bg-card-bg border border-card-border rounded-xl hover:border-accent/20 hover:shadow-[0_0_30px_rgba(0,240,255,0.08)] hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-accent font-mono text-sm font-semibold mb-4 uppercase tracking-wider">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="px-3 py-1.5 text-xs font-mono bg-background border border-card-border rounded-md text-foreground/80 hover:border-accent/40 hover:text-accent hover:shadow-[0_0_12px_rgba(0,240,255,0.1)] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
