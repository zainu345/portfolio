'use client';

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaTools, FaLaptopCode, FaPeopleCarry } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

// Icon mapping based on categories
const iconMapping = {
  "Frontend Development": <FaLaptopCode className="text-4xl text-blue-500" />,
  "Backend Development": <FaDatabase className="text-4xl text-green-500" />,
  "Programming Languages": <MdComputer className="text-4xl text-orange-500" />,
  "Tools & Technologies": <FaTools className="text-4xl text-yellow-500" />,
  "Professional Skills": <FaPeopleCarry className="text-4xl text-pink-500" />,
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[62rem] scroll-mt-28 px-4 sm:px-8 mx-auto text-center"
    >
      <SectionHeading>My Skills</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
        {skillsData.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="relative bg-gray-100 border border-black/5 rounded-lg p-6 shadow-lg hover:shadow-xl transition dark:bg-white/10 dark:hover:bg-white/20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, scale: 0.9 },
              animate: {
                opacity: 1,
                scale: 1,
                transition: { delay: 0.1 * categoryIndex },
              },
            }}
          >
            {/* Skill Icon */}
            <div className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-4 rounded-full shadow-md">
              {iconMapping[category.category] || <FaTools className="text-4xl text-gray-500" />}
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-4 text-gray-800 dark:text-gray-200 underline">
              {category.category}
            </h3>

            {/* Skills with circular progress bars */}
            <div className="flex flex-wrap justify-center gap-6">
              {category.skills.map((skill, index) => {
                const proficiency =  skill.proficiency; // For illustration, use random proficiency

                return (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-2"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <div className="w-20 h-20">
                      <CircularProgressbar
                        value={proficiency}
                        text={`${proficiency}%`}
                        styles={buildStyles({
                          textColor: "#4a5568", // Tailwind gray-700
                          pathColor: "#3182ce", // Tailwind blue-500
                          trailColor: "#cbd5e0", // Tailwind gray-300
                        })}
                      />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
