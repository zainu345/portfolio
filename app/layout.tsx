import Header from "@/components/header";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      {/* Header with sticky positioning and backdrop blur */}
      <div className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-gray-950/70 border-b border-gray-200/50 dark:border-white/5 shadow-md">
        <Header />
      </div>
      
      {/* Main content sections */}
      <div className="max-w-7xl mx-auto pt-20 pb-20">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
