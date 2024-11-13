"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  const [expanded, setExpanded] = useState(0);

  // Variants for folded and expanded states
  const foldedVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delayChildren: 0.3, staggerChildren: 0.15 },
    },
    folded: { height: "2rem", overflow: "hidden" },
    expanded: { height: "auto" },
  };

  // Toggle expanded state
  const toggleParagraph = (index: number) => {
    setExpanded(expanded === index ? 0 : index);
  };

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] mx-auto text-center leading-8 sm:mb-40 scroll-mt-28 bg-gray-100 hover:bg-gray-200 p-8 rounded-lg shadow-lg dark:bg-white/10 dark:hover:bg-white/15"
      initial="hidden"
      animate="visible"
      variants={foldedVariants}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      
      {/* Folded paragraphs */}
      {[
        "🚀 I'm a passionate Full Stack Developer with expertise in MERN, ReactJS, NodeJS, and TypeScript. A recent graduate from PUCIT, Lahore, I achieved a 4.0 CGPA in core programming subjects.",
        "💼 Currently, I'm an Associate Software Engineer (MERN Stack) at Kwanso, where I focus on ReactJS, NodeJS, and TypeScript. I gained practical experience during my summer internships at DevTown and Pyflow, enhancing my MERN Stack skills.",
        "🔧 My skill set includes Full Stack Development (MERN), ReactJS, NodeJS, TypeScript, Vue.js, AWS, Git & GitHub, and problem-solving, showcased through my achievements on LeetCode.",
        "🌟 Career highlights include ranking in the Top 10 at the ICPC Asia Online Preliminary Programming Contest 2023, being named 'Student of the Year' at Akhuwat College Kasur in 2017, and achieving Rank 1 in the Quick Mind Game.",
        "Explore my GitHub for web development projects. I'm excited to take on new challenges and collaborate in the dynamic world of technology!"
      ].map((text, index) => (
        <motion.div
          key={index}
          className="mb-5 text-lg text-gray-700 dark:text-gray-300 cursor-pointer"
          onHoverStart={() => toggleParagraph(index)}
          initial="folded"
          animate={expanded === index ? "expanded" : "folded"}
          variants={foldedVariants}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.div>
      ))}
    </motion.section>
  );
}
