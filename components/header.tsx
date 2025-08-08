"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import { FaCode } from "react-icons/fa";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check for scroll position to add effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[999]">
      {/* Enhanced colorful top border with multiple blur and glow effects */}
      <div className="h-[3px] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-sm opacity-50 animate-pulse"></div>
      </div>
      
      {/* Main header container - Full width with enhanced background effects */}
      <motion.div 
        className={`w-full ${
          isScrolled 
            ? theme === "light"
              ? "py-3 bg-white/90 backdrop-blur-lg border-b border-gray-200/50 shadow-lg"
              : "py-3 bg-gray-950/90 backdrop-blur-lg border-b border-gray-800/50 shadow-xl"
            : theme === "light"
              ? "py-5 bg-transparent"
              : "py-5 bg-transparent"
        } transition-all duration-300 relative`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Subtle gradient background overlay */}
        {isScrolled && (
          <div className={`absolute inset-0 -z-10 ${
            theme === "light"
              ? "bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-80"
              : "bg-gradient-to-br from-gray-950 via-gray-900 to-black opacity-90"
          }`}></div>
        )}

        {/* Container that fills width with proper padding */}
        <div className="w-full px-4 flex items-center justify-between relative z-10">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className={`flex items-center justify-center h-10 w-10 rounded-full ${
              theme === "light" 
                ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                : "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
            } shadow-lg hover:scale-105 transition-transform`}>
              <FaCode className="text-lg" />
            </div>
            <span className={`text-lg font-bold ${
              theme === "light" ? "text-gray-900" : "text-white"
            } hidden sm:block`}>Zain Rafique</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1">
              {links.map((link, index) => (
                <NavItem 
                  key={link.hash}
                  link={link}
                  index={index}
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                  setTimeOfLastClick={setTimeOfLastClick}
                  theme={theme}
                />
              ))}
            </ul>
          </nav>
          
          {/* Theme toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              className={`p-2 rounded-full transition-all duration-300 ${
                theme === "light"
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-lg"
              }`}
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ?   <RiMoonClearLine className="text-xl" /> :  <RiSunLine className="text-xl" /> }
            </motion.button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme toggle for mobile */}
            <button
              className={`p-2 rounded-full transition-colors ${
                theme === "light"
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ?   <RiMoonClearLine className="text-xl" /> :  <RiSunLine className="text-xl" /> }
            </button>
            
            {/* Hamburger button */}
            <button 
              className={`flex flex-col items-center justify-center w-10 h-10 rounded-md focus:outline-none ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-6 ${theme === "light" ? "bg-gray-900" : "bg-white"} transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`}></span>
              <span className={`block h-0.5 w-6 ${theme === "light" ? "bg-gray-900" : "bg-white"} transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></span>
              <span className={`block h-0.5 w-6 ${theme === "light" ? "bg-gray-900" : "bg-white"} transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>
      </motion.div>
      
      {/* Mobile menu - SOLID background and solid item backgrounds - Full width */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className={`fixed inset-0 pt-24 pb-6 px-4 z-[998] md:hidden flex flex-col ${
              theme === "light"
                ? "bg-white" // Solid white background
                : "bg-gray-950" // Solid dark background
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col items-center justify-center flex-1 w-full">
              <ul className="flex flex-col items-center space-y-6 w-full">
                {links.map((link, index) => (
                  <motion.li 
                    key={link.hash}
                    className="w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.hash}
                      className={`block text-center py-3 text-lg font-medium rounded-md transition-all duration-300 ${
                        activeSection === link.name 
                          ? theme === "light"
                            ? "text-gray-900 bg-gray-100 border border-gray-200"
                            : "text-white bg-gray-800 border border-gray-700"
                          : theme === "light"
                            ? "text-gray-700 bg-gray-50 border border-gray-100 hover:bg-gray-100"
                            : "text-gray-400 bg-gray-900 border border-gray-800 hover:bg-gray-800 hover:text-white"
                      }`}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                        setMobileMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// Nav Item Component
const NavItem = ({ link, index, activeSection, setActiveSection, setTimeOfLastClick, theme }) => {
  return (
    <motion.li 
      className="relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.05 }}
    >
      <Link
        href={link.hash}
        className={`relative px-3 py-2 rounded-full font-medium transition-all duration-300 ${
          activeSection === link.name 
            ? theme === "light" ? "text-gray-900" : "text-white"
            : theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-400 hover:text-gray-200"
        }`}
        onClick={() => {
          setActiveSection(link.name);
          setTimeOfLastClick(Date.now());
        }}
      >
        {activeSection === link.name && (
          <motion.span
            className={`absolute inset-0 -z-10 rounded-full ${
              theme === "light"
                ? "bg-gray-100 border-gray-200/70"
                : "bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20"
            }`}
            layoutId="activeSection"
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
        )}
        {link.name}
      </Link>
    </motion.li>
  );
};
