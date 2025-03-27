// Projects.tsx - Main Projects Container Component
'use client';

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaFilter } from "react-icons/fa";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);

  // Get unique tags from all projects
  const allTags = ["All", ...Array.from(new Set(projectsData.flatMap(project => project.tags)))];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter(project => project.tags.includes(activeFilter));
  
  // Calculate total pages
  const projectsPerPage = 3;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  
  // Get current page's projects
  const currentProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  // Handle pagination
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
      // Scroll back to projects section top
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 px-4 max-w-6xl mx-auto">
      <div className="relative">
        {/* Background decoration */}
        <div className="absolute -top-40 -right-20 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
        <SectionHeading>My Projects</SectionHeading>
        
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore my recent work and personal projects. Each project showcases my technical skills and 
          approach to problem-solving. Click on any project to learn more about the design process, 
          technologies used, and outcomes.
        </motion.p>
        
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <div className="flex items-center mr-2 text-gray-500 dark:text-gray-400">
            <FaFilter className="mr-2" />
            <span className="text-sm font-medium">Filter by:</span>
          </div>
          {allTags.map((tag, index) => (
            <motion.button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${activeFilter === tag 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              onClick={() => {
                setActiveFilter(tag);
                setCurrentPage(0);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.button>
          ))}
        </div>
        
        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-20 mt-4"
        >
          {currentProjects.length > 0 ? (
            currentProjects.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project} index={index} />
              </React.Fragment>
            ))
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 dark:text-gray-400">No projects match the selected filter.</p>
            </div>
          )}
        </motion.div>
        
        {/* Pagination controls */}
        {filteredProjects.length > projectsPerPage && (
          <div className="flex justify-center items-center mt-16">
            <motion.button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 
                ${currentPage === 0 
                  ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed' 
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30'}`}
              whileHover={currentPage !== 0 ? { scale: 1.1 } : {}}
              whileTap={currentPage !== 0 ? { scale: 0.9 } : {}}
            >
              <FaArrowLeft />
            </motion.button>
            
            <div className="flex items-center">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    setCurrentPage(idx);
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-8 h-8 mx-1 rounded-full text-sm font-medium 
                    ${currentPage === idx 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30'}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {idx + 1}
                </motion.button>
              ))}
            </div>
            
            <motion.button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className={`flex items-center justify-center w-10 h-10 rounded-full ml-4 
                ${currentPage === totalPages - 1 
                  ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed' 
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30'}`}
              whileHover={currentPage !== totalPages - 1 ? { scale: 1.1 } : {}}
              whileTap={currentPage !== totalPages - 1 ? { scale: 0.9 } : {}}
            >
              <FaArrowRight />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}