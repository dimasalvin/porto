"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

const projects = [
  {
    title: "POS React",
    description:
      "A modern Point of Sale application built with React. Features include product management, cart system, and transaction history with a clean, responsive UI.",
    tech: ["React", "JavaScript", "Tailwind CSS", "REST API"],
    liveUrl: "https://pos-react-beta.vercel.app",
    githubUrl: "https://github.com/dimasalvin",
  },
  {
    title: "Kuesioner Kepuasan Pasien",
    description:
      "A patient satisfaction survey system for a dental clinic built with Laravel 12. Features multi-step questionnaire, admin/management/user dashboards, real-time notifications, and performance-optimized for 100k+ data with JSON storage and pre-calculated averages.",
    tech: ["Laravel 12", "PHP", "MySQL", "Blade", "JavaScript"],
    liveUrl: null,
    githubUrl: "https://github.com/dimasalvin/kuesioner",
  },
  {
    title: "Portfolio Website",
    description:
      "This very portfolio — a dark futuristic personal site built with Next.js, Tailwind CSS, and Framer Motion. Fully responsive with smooth animations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/dimasalvin",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted font-mono text-sm mb-12">// things I&apos;ve built</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group p-6 bg-card-bg border border-card-border rounded-xl hover:border-accent/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.08)] hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs font-mono bg-background border border-card-border rounded text-accent/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live
                  </Link>
                )}
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                >
                  <GithubIcon size={14} />
                  Code
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
