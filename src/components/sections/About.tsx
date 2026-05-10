"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users } from "lucide-react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted font-mono text-sm mb-12">// who I am</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center md:justify-start"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-80 rounded-xl overflow-hidden border-2 border-card-border hover:border-accent/30 transition-colors duration-300 glow-accent"
            >
              <Image
                src="/profile.jpeg"
                alt="Dimas Alvin Faiz"
                fill
                sizes="(max-width: 768px) 256px, 256px"
                className="object-cover object-top"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsMDhEQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAABv/EAB4QAAICAgIDAAAAAAAAAAAAAAECAAMEIQUSEzFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADEUH/2gAMAwEAAhEDEEQA/9oADAMBAAIRAxEAPwCp4vkMrHxlrybrEUaLMSQP2IiJFbsdhMmf/9k="
                priority
              />
            </motion.div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-foreground/80 leading-relaxed text-lg">
              I&apos;m a <span className="text-accent font-medium">Software Engineer</span> and{" "}
              <span className="text-accent font-medium">Frontend Developer</span> with a passion
              for building elegant, high-performance web and mobile applications that deliver exceptional
              user experiences.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              I specialize in modern JavaScript/TypeScript ecosystems, with deep expertise in
              React, Next.js, and the broader frontend landscape. I believe in writing clean,
              maintainable code that scales — and I&apos;m always exploring new technologies
              to push the boundaries of what&apos;s possible on the web.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new frameworks,
              contributing to open-source, or diving deep into system design and architecture
              patterns.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid gap-4"
          >
            <div className="p-6 bg-card-bg border border-card-border rounded-xl hover:border-accent/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.08)] hover:scale-[1.02] transition-all duration-300">
              <Code2 className="text-accent mb-3" size={28} />
              <h3 className="font-semibold text-lg mb-1">Clean Code Advocate</h3>
              <p className="text-muted text-sm">
                Writing readable, testable, and maintainable code is not optional — it&apos;s the standard.
              </p>
            </div>
            <div className="p-6 bg-card-bg border border-card-border rounded-xl hover:border-accent/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.08)] hover:scale-[1.02] transition-all duration-300">
              <Rocket className="text-accent-secondary mb-3" size={28} />
              <h3 className="font-semibold text-lg mb-1">Performance Obsessed</h3>
              <p className="text-muted text-sm">
                Every millisecond counts. I optimize for speed, accessibility, and seamless UX.
              </p>
            </div>
            <div className="p-6 bg-card-bg border border-card-border rounded-xl hover:border-accent/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.08)] hover:scale-[1.02] transition-all duration-300">
              <Users className="text-accent mb-3" size={28} />
              <h3 className="font-semibold text-lg mb-1">Team Player</h3>
              <p className="text-muted text-sm">
                Collaboration, code reviews, and knowledge sharing drive better outcomes for everyone.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
