import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SectionDivider from "@/components/SectionDivider";

const Skills = dynamic(() => import("@/components/sections/Skills"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
    </>
  );
}
