import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted font-mono">
          &copy; {new Date().getFullYear()} Dimas Alvin Faiz. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/dimasalvin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/dimas-alvin-faiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </Link>
          <Link
            href="mailto:contact@dimasalvin.dev"
            className="text-muted hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
