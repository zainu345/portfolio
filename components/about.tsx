"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-5 text-lg text-gray-700 dark:text-gray-300">
        🚀 I'm a passionate Full Stack Developer with expertise in{" "}
        <span className="font-medium">MERN</span>, ReactJS, NodeJS, and TypeScript. 
        A recent graduate from PUCIT, Lahore, I achieved a 4.0 CGPA in core programming subjects.
      </p>
      
      <p className="mb-5 text-lg text-gray-700 dark:text-gray-300">
        💼 Currently, I'm an Associate Software Engineer (MERN Stack) at Kwanso, where I focus on ReactJS, NodeJS, and TypeScript. 
        I gained practical experience during my summer internships at DevTown and Pyflow, enhancing my MERN Stack skills.
      </p>

      <p className="mb-5 text-lg text-gray-700 dark:text-gray-300">
        🔧 My skill set includes Full Stack Development (MERN), ReactJS, NodeJS, TypeScript, Vue.js, AWS, Git & GitHub, 
        and problem-solving, showcased through my achievements on LeetCode.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300">
        🌟 Career highlights include ranking in the Top 10 at the ICPC Asia Online Preliminary Programming Contest 2023, 
        being named "Student of the Year" at Akhuwat College Kasur in 2017, and achieving Rank 1 in the Quick Mind Game.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300">
        Explore my GitHub for web development projects. I'm excited to take on new challenges and collaborate in the dynamic world of technology!
      </p>
    </motion.section>
  );
}
