import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20"
    >
      {/* Radial gradient background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="hero-rise hero-rise-1">
          <p className="text-accent font-mono text-sm mb-4 tracking-widest uppercase">
            Software Engineer &middot; Frontend Developer
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Dimas Alvin Faiz</span>
        </h1>

        <p className="hero-rise hero-rise-3 text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          I craft <span className="text-foreground font-medium">modern</span>, <span className="text-foreground font-medium">performant</span>, and <span className="text-foreground font-medium">visually compelling</span> web experiences.
          Passionate about clean code, scalable architecture, and pixel-perfect UI.
        </p>

        <div className="hero-rise hero-rise-4 flex items-center justify-center gap-4">
          <Link
            href="#projects"
            className="px-6 py-3 bg-accent/10 border border-accent/30 text-accent rounded-lg font-mono text-sm hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 glow-accent"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 bg-card-bg border border-card-border text-foreground rounded-lg font-mono text-sm hover:border-accent/30 hover:text-accent transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>

        <div className="hero-rise hero-rise-5 flex items-center justify-center gap-4 mt-8">
          <Link
            href="https://github.com/dimasalvin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={22} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/dimas-alvin-faiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={22} />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hero-rise hero-rise-5">
        <div className="hero-bounce">
          <ArrowDown size={20} className="text-muted" />
        </div>
      </div>
    </section>
  );
}
