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
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading >My skills</SectionHeading>
      {skillsData.map((category, categoryIndex) => (
        <div id="skills" ref={ref} key={categoryIndex} className="mb-6">
          <h3 id="skills" ref={ref} className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 underline">{category.category}</h3>
          <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-700 dark:text-gray-300">
            {category.skills.map((skill, index) => (
              <motion.li
                className="bg-white border border-gray-300 rounded-xl px-6 py-3 shadow hover:shadow-lg transition duration-300 ease-in-out dark:bg-gray-700 dark:border-gray-600"
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