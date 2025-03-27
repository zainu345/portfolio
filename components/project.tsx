'use client';

import { useRef, useState, useEffect } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaTags, FaLaptopCode, FaMobileAlt, FaServer } from "react-icons/fa";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number] & {
  index: number;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
  id,
  index,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Decide if project is even or odd numbered
  const isEven = index % 2 === 1;

  // Get complementary icon for the project based on first tag
  const getProjectIcon = () => {
    const firstTag = tags[0]?.toLowerCase() || '';
    if (firstTag.includes('mobile') || firstTag.includes('app')) {
      return <FaMobileAlt className="text-green-500" />;
    } else if (firstTag.includes('backend') || firstTag.includes('api')) {
      return <FaServer className="text-purple-500" />;
    }
    return <FaLaptopCode className="text-blue-500" />;
  };

  // Get a color theme based on the project index
  const getColorTheme = () => {
    const themes = [
      { 
        accent: "from-blue-400 to-indigo-500", 
        badgeBg: "bg-blue-50 dark:bg-blue-900/20",
        badgeText: "text-blue-600 dark:text-blue-400",
        iconBg: "bg-blue-100 dark:bg-blue-900/30"
      },
      { 
        accent: "from-purple-400 to-pink-500", 
        badgeBg: "bg-purple-50 dark:bg-purple-900/20",
        badgeText: "text-purple-600 dark:text-purple-400",
        iconBg: "bg-purple-100 dark:bg-purple-900/30"
      },
      { 
        accent: "from-green-400 to-teal-500", 
        badgeBg: "bg-green-50 dark:bg-green-900/20",
        badgeText: "text-green-600 dark:text-green-400",
        iconBg: "bg-green-100 dark:bg-green-900/30"
      },
      { 
        accent: "from-amber-400 to-orange-500", 
        badgeBg: "bg-amber-50 dark:bg-amber-900/20",
        badgeText: "text-amber-600 dark:text-amber-400",
        iconBg: "bg-amber-100 dark:bg-amber-900/30"
      },
    ];
    
    return themes[index % themes.length];
  };

  const colorTheme = getColorTheme();

  // Content sections for tabs
  const tabContent = [
    { id: 'overview', label: 'Overview', content: description },
    { id: 'features', label: 'Key Features', content: 'This project includes several key features...' },
    { id: 'tech', label: 'Technologies', content: tags.join(', ') }
  ];

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project number badge */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${colorTheme.accent} text-white font-bold text-xl shadow-lg`}>
          {(index + 1).toString().padStart(2, '0')}
        </div>
      </div>
      
      <motion.section 
        className={`relative bg-white dark:bg-gray-900 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl`}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
      >
        {/* Top accent bar */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${colorTheme.accent}`}></div>
        
        {/* Background elements */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-br from-purple-50/30 to-pink-50/30 dark:from-purple-900/10 dark:to-pink-900/10 rounded-full blur-3xl"></div>
        
        <div className="relative p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Section - Conditionally order based on even/odd */}
            <div className={`relative overflow-hidden rounded-xl shadow-lg h-full ${isEven ? 'lg:order-last' : 'lg:order-first'}`}>
              {/* This container maintains consistent height */}
              <div className="h-full min-h-[320px]">
                <Image
                  src={imageUrl}
                  alt={`Screenshot of ${title} project`}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }}
                  className={`transition-all duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
                />
                
                {/* Overlay with buttons on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end justify-center p-6 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex gap-3">
                    {githubUrl && (
                      <motion.a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white/90 hover:bg-white text-gray-900 rounded-lg font-medium text-sm flex items-center space-x-2 transition-all duration-300"
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="mr-2" />
                        <span>View Code</span>
                      </motion.a>
                    )}
                    
                    {liveUrl && (
                      <motion.a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 bg-gradient-to-r ${colorTheme.accent} text-white rounded-lg font-medium text-sm flex items-center space-x-2 transition-all duration-300`}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="flex flex-col h-full">
              {/* Project type and title */}
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg ${colorTheme.iconBg}`}>
                  {getProjectIcon()}
                </div>
                <div>
                  <div className={`text-xs font-semibold uppercase tracking-wider ${colorTheme.badgeText}`}>
                    {tags[0] || "Project"}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">
                    {title}
                  </h3>
                </div>
              </div>
              
              {/* Tab navigation */}
              <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
                {tabContent.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`py-2 px-4 text-sm font-medium transition-colors relative ${
                      activeTab === idx
                        ? `text-blue-600 dark:text-blue-400`
                        : `text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300`
                    }`}
                  >
                    {tab.label}
                    {activeTab === idx && (
                      <motion.div
                        layoutId={`tab-indicator-${id}`}
                        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${colorTheme.accent}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                ))}
              </div>
              
              {/* Tab content */}
              <div className="flex-grow">
                <AnimatedTabContent
                  activeTab={activeTab}
                  content={tabContent[activeTab].content}
                />
              </div>
              
              {/* Tags grid */}
              <div className="mt-6">
                <div className="flex items-center gap-2 mb-2">
                  <FaTags className={colorTheme.badgeText} />
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">TECHNOLOGIES</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-2.5 py-1 text-xs font-medium rounded-full ${colorTheme.badgeBg} ${colorTheme.badgeText} border border-gray-200 dark:border-gray-700`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* View details button */}
              <Link
                href={`/projects/${id}`}
                className={`mt-6 self-start flex items-center gap-2 px-4 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 rounded-lg ${colorTheme.badgeText} transition-all duration-300 hover:shadow-md group`}
              >
                View Project Details
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

// Animated Tab Content Component
function AnimatedTabContent({ activeTab, content }) {
  return (
    <motion.div
      key={activeTab}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="text-gray-600 dark:text-gray-300 leading-relaxed"
    >
      <p>{content}</p>
    </motion.div>
  );
}