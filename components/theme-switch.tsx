"use client";

import { useTheme } from "@/context/theme-context";
import React, { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="fixed bottom-5 right-5 w-[3rem] h-[3rem] rounded-full flex items-center justify-center transition-all z-50"
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Button background with glass effect */}
      <div className="absolute inset-0 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-[0.5rem] border border-white dark:border-gray-700 border-opacity-40 dark:border-opacity-40 rounded-full shadow-lg"></div>
      
      {/* Decorative ring */}
      <motion.div 
        className="absolute inset-0 rounded-full border-2 border-blue-400 dark:border-blue-500"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon container with animation */}
      <motion.div
        className="relative z-10"
        animate={{
          rotate: theme === "light" ? 0 : 180,
          scale: isHovered ? 1.2 : 1
        }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {/* Sun icon (visible in light mode) */}
        <motion.div
          animate={{ 
            opacity: theme === "light" ? 1 : 0,
            scale: theme === "light" ? 1 : 0.5,
            rotateY: theme === "light" ? 0 : 90
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-500"
        >
          <BsSun className="text-xl" />
        </motion.div>
        
        {/* Moon icon (visible in dark mode) */}
        <motion.div
          animate={{ 
            opacity: theme === "dark" ? 1 : 0,
            scale: theme === "dark" ? 1 : 0.5,
            rotateY: theme === "dark" ? 0 : 90
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-400"
        >
          <BsMoon className="text-xl" />
        </motion.div>
      </motion.div>
    </motion.button>
  );
}