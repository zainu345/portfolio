"use client";

import React, { useState } from "react";
import { 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaTwitter, 
  FaHeart, 
  FaCode,
  FaReact, 
  FaNodeJs
} from "react-icons/fa";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [hoveredTech, setHoveredTech] = useState(null);
  
  // Tech stack with icons and names
  const techStack = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <TbBrandNextjs className="text-white dark:text-gray-200" /> },
    { name: "TypeScript", icon: <TbBrandTypescript className="text-blue-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  ];

  // Animation variants
  const hoverAnimation = {
    rest: { scale: 1 },
    hover: { scale: 1.1, y: -5 }
  };
  
  const iconAnimation = {
    rest: { rotate: 0 },
    hover: { rotate: 10, transition: { duration: 0.3 } }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="relative overflow-hidden pt-10 pb-6">
      {/* Decorative wave background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950"></div>
        <svg 
          className="absolute top-0 w-full text-white dark:text-gray-900 transform translate-y-[-50%]" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
        >
          <path 
            fill="currentColor" 
            fillOpacity="1" 
            d="M0,192L48,181.3C96,171,192,149,288,138.7C384,128,480,128,576,149.3C672,171,768,213,864,218.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
      
      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo/Name with animation */}
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-16 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg mb-4">
              <span className="text-2xl font-bold text-white">AA</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Abdul Aziz</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Full Stack Developer</p>
          </motion.div>
          
          {/* Social links */}
          <motion.div 
            className="flex justify-center space-x-4 mt-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            {[
              { icon: <FaLinkedin />, url: "https://linkedin.com/in/connect2abdulaziz", color: "from-blue-500 to-blue-600" },
              { icon: <FaGithub />, url: "https://github.com/connect2abdulaziz", color: "from-gray-700 to-gray-800" },
              { icon: <FaEnvelope />, url: "mailto:connect2abdulaziz@gmail.com", color: "from-red-500 to-red-600" },
              { icon: <FaTwitter />, url: "https://twitter.com", color: "from-blue-400 to-blue-500" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-gradient-to-br ${social.color} rounded-full shadow-lg text-white transform transition-all duration-300`}
                variants={hoverAnimation}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div variants={iconAnimation}>
                  {social.icon}
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
          
          {/* Tech stack display */}
          <motion.div 
            className="mt-10 mb-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
              Built with modern technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredTech(index)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <motion.div 
                    className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center cursor-pointer border border-gray-200 dark:border-gray-700"
                    variants={hoverAnimation}
                    initial="rest"
                    whileHover="hover"
                  >
                    <div className="text-xl">
                      {tech.icon}
                    </div>
                  </motion.div>
                  
                  <AnimatePresence>
                    {hoveredTech === index && (
                      <motion.div
                        className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                      >
                        {tech.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Divider with shine effect */}
          <div className="relative w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent my-8 overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-20 h-full bg-white opacity-30"
              animate={{ 
                x: ["-100%", "100%"],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                repeatDelay: 3 
              }}
            />
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="flex items-center justify-center text-gray-600 dark:text-gray-400">
              <span>Made with</span>
              <motion.div
                className="mx-1 text-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FaHeart />
              </motion.div>
              <span>by Abdul Aziz</span>
            </p>
            <p className="mt-2 text-gray-500 dark:text-gray-500">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}