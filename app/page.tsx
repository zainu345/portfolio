'use client';

import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Terminal from "@/components/terminal/Terminal";
import ClientLayout from "@/components/client-layout";
import ChatWidget from "@/components/chat-widget";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, MessageCircle } from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState('portfolio'); // 'portfolio' | 'terminal'
  const [showChatWidget, setShowChatWidget] = useState(false);
  const [loadedSections, setLoadedSections] = useState({
    intro: false,
    about: false,
    projects: false,
    experience: false,
    skills: false,
    contact: false
  });
  
  useEffect(() => {
    // Simulate loading timing for each section
    const loadSections = async () => {
      // Intro loads first
      setTimeout(() => setLoadedSections(prev => ({ ...prev, intro: true })), 400);
      // Then about
      setTimeout(() => setLoadedSections(prev => ({ ...prev, about: true })), 800);
      // Then projects
      setTimeout(() => setLoadedSections(prev => ({ ...prev, projects: true })), 1200);
      // Then experience
      setTimeout(() => setLoadedSections(prev => ({ ...prev, experience: true })), 1600);
      // Then skills
      setTimeout(() => setLoadedSections(prev => ({ ...prev, skills: true })), 2000);
      // Then contact
      setTimeout(() => setLoadedSections(prev => ({ ...prev, contact: true })), 2400);
      
      // Complete loading
      setTimeout(() => setIsLoading(false), 2500);
    };
    
    loadSections();
  }, []);

  // Mode toggle functions
  const handleViewModeChange = (mode: 'portfolio' | 'terminal') => {
    setViewMode(mode);
    if (mode === 'terminal') {
      setShowChatWidget(false);
    }
  };

  const handleChatToggle = () => {
    setShowChatWidget(!showChatWidget);
  };
  
  return (
    <ClientLayout
      viewMode={viewMode}
      onViewModeChange={handleViewModeChange}
      onChatToggle={handleChatToggle}
      showChatWidget={showChatWidget}
    >
      {/* Main Content */}
      <AnimatePresence mode="wait">
        {viewMode === 'terminal' ? (
          <motion.div
            key="terminal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full h-screen"
          >
            <Terminal />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            {/* Intro section with skeleton */}
            {loadedSections.intro ? (
              <Intro />
            ) : (
              <SkeletonIntro />
            )}
            
            <SectionDivider />
            
            {/* About section with skeleton */}
            {loadedSections.about ? (
              <About />
            ) : (
              <SkeletonAbout />
            )}
            
            {/* Projects section with skeleton */}
            {loadedSections.projects ? (
              <Projects />
            ) : (
              <SkeletonProjects />
            )}
            
            {/* Experience section with skeleton */}
            {loadedSections.experience ? (
              <Experience />
            ) : (
              <SkeletonExperience />
            )}
            
            {/* Skills section with skeleton */}
            {loadedSections.skills ? (
              <Skills />
            ) : (
              <SkeletonSkills />
            )}
            
            {/* Interactive Terminal Preview Section */}
            {loadedSections.skills && (
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full max-w-[53rem] scroll-mt-28 mb-28"
                id="terminal-preview"
              >
                <h2 className="text-3xl font-bold text-center mb-8">Interactive Experience</h2>
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-300 text-sm ml-2">Abdul Aziz - Terminal Portfolio</span>
                    </div>
                  </div>
                  <div className="text-green-400 font-mono text-sm space-y-2 mb-6">
                    <div>abdul@aziz:~$ help</div>
                    <div className="text-green-300 text-xs pl-4">
                      Available commands: about | skills | projects | experience | contact | chat
                    </div>
                    <div>abdul@aziz:~$ chat</div>
                    <div className="text-blue-300 text-xs pl-4">
                      🤖 Hi! Ask me anything about Abdul's background and expertise!
                    </div>
                    <div className="flex items-center">
                      <span>chat@abdul:~$ </span>
                      <div className="w-2 h-4 bg-green-400 ml-1 animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-center">
                      <button
                        onClick={() => handleViewModeChange('terminal')}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2 mx-auto mb-2"
                      >
                        <Monitor size={20} />
                        Launch Terminal
                      </button>
                      <p className="text-gray-400 text-xs">Full interactive experience</p>
                    </div>
                    
                    <div className="text-center">
                      <button
                        onClick={handleChatToggle}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2 mx-auto mb-2"
                      >
                        <MessageCircle size={20} />
                        Quick Chat
                      </button>
                      <p className="text-gray-400 text-xs">AI assistant widget</p>
                    </div>
                  </div>
                </div>
              </motion.section>
            )}
            
            {/* Contact section with skeleton */}
            {loadedSections.contact ? (
              <Contact />
            ) : (
              <SkeletonContact />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Functional Chat Widget */}
      <ChatWidget 
        isOpen={showChatWidget && viewMode === 'portfolio'} 
        onToggle={handleChatToggle} 
      />

      {/* Full-page loading overlay that fades out */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="fixed inset-0 bg-white dark:bg-black z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-8">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 dark:border-gray-800 rounded-full"></div>
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full border-4 border-t-indigo-600 border-r-transparent border-b-transparent border-l-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                ></motion.div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 animate-pulse">Loading portfolio...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ClientLayout>
  );
}

// Skeleton components (keeping your existing ones)
function SkeletonIntro() {
  return (
    <section className="max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="w-40 h-40 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
      </div>
      <div className="mt-4 space-y-4">
        <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse mx-auto"></div>
        <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse mx-auto"></div>
        <div className="h-24 w-full bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
        <div className="flex gap-4 justify-center">
          <div className="h-10 w-32 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse"></div>
          <div className="h-10 w-32 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse"></div>
          <div className="h-10 w-32 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

function SkeletonAbout() {
  return (
    <section className="max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
      <div className="h-10 w-64 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse mx-auto mb-8"></div>
      <div className="space-y-4">
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
        <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
      </div>
    </section>
  );
}

function SkeletonProjects() {
  return (
    <section className="w-full max-w-[70rem] scroll-mt-28 mb-28">
      <div className="h-10 w-64 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse mx-auto mb-8"></div>
      <div className="space-y-12">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800/50 rounded-lg animate-pulse p-6 h-80"></div>
        ))}
      </div>
    </section>
  );
}

function SkeletonExperience() {
  return (
    <section className="w-full max-w-[45rem] scroll-mt-28 mb-28">
      <div className="h-10 w-64 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse mx-auto mb-8"></div>
      <div className="space-y-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
            <div className="space-y-2 flex-1">
              <div className="h-6 w-1/3 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
              <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkeletonSkills() {
  return (
    <section className="w-full max-w-[53rem] scroll-mt-28 mb-28">
      <div className="h-10 w-64 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse mx-auto mb-8"></div>
      <div className="flex flex-wrap justify-center gap-2">
        {[...Array(15)].map((_, index) => (
          <div key={index} className="h-10 w-24 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse"></div>
        ))}
      </div>
    </section>
  );
}

function SkeletonContact() {
  return (
    <section className="w-full max-w-[50rem] scroll-mt-28 mb-28">
      <div className="h-10 w-64 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse mx-auto mb-8"></div>
      <div className="bg-gray-100 dark:bg-gray-800/50 rounded-lg animate-pulse p-8 h-80"></div>
    </section>
  );
}