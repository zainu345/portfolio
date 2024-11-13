"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

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
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 px-4 sm:px-0"
    >
      <SectionHeading>My Skills</SectionHeading>
      {skillsData.map((category, categoryIndex) => (
        <div id="skills" ref={ref} key={categoryIndex} className="mb-6">
          <h3 id="skills" ref={ref} className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 underline">
            {category.category}
          </h3>
          <ul id="skills" ref={ref} className="flex flex-wrap justify-center gap-4 text-sm sm:text-lg text-gray-700 dark:text-gray-300">
            {category.skills.map((skill, index) => (
              <motion.li id="skills" ref={ref}
                className="bg-gray-100 border border-black/5 rounded-lg hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 shadow-lg hover:shadow-xl px-4 py-2 sm:px-6 sm:py-3"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}