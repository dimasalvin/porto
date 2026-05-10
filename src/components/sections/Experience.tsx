"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer — Frontend Developer",
    company: "PT Ifabula Digital Kreasi",
    period: "2022 — Present",
    description:
      "Building and maintaining modern web and mobile applications with a strong focus on React and React Native. Delivering high-quality, performant user interfaces across multiple platforms.",
    highlights: [
      "Developed and maintained production React applications serving thousands of users",
      "Built cross-platform mobile apps using React Native with native-level performance",
      "Implemented reusable component libraries and design systems for consistent UI/UX",
      "Collaborated with backend and design teams in Agile sprints to ship features on time",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted font-mono text-sm mb-12">// where I&apos;ve worked</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-card-border md:left-[19px]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1.5 w-4 h-4 rounded-full bg-accent/20 border-2 border-accent" />

                <div className="p-6 bg-card-bg border border-card-border rounded-xl hover:border-accent/20 hover:shadow-[0_0_30px_rgba(0,240,255,0.08)] hover:scale-[1.02] transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-accent" />
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                    </div>
                    <span className="text-xs font-mono text-muted mt-1 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-accent/70 font-mono text-sm mb-3">{exp.company}</p>
                  <p className="text-muted text-sm leading-relaxed mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm text-foreground/70 flex items-start gap-2"
                      >
                        <span className="text-accent mt-1.5 text-xs">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-muted text-sm font-mono mt-12"
        >
          For full details, visit my{" "}
          <a
            href="https://www.linkedin.com/in/dimas-alvin-faiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            LinkedIn profile
          </a>
        </motion.p>
      </div>
    </section>
  );
}
