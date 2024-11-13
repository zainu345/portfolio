'use client';

import { useRef, useState, useEffect } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number] & {
  githubUrl?: string;
  liveUrl?: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
  id,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Dynamically adjust image height based on text content
  useEffect(() => {
    if (ref.current) {
      const textHeight = ref.current.offsetHeight;
      setImageHeight(textHeight);
    }
  }, [title, description, tags]); // Recalculate whenever text content changes

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 transition-transform duration-500 ease-in-out transform hover:scale-105"
    >
      <section className="bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-auto hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 shadow-lg hover:shadow-xl">
        {/* Text Content Side */}
        <div className="py-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <Link href={`/projects/${id}`} className="hover:text-blue-600 transition-colors">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{title}</h3>
            <p className="my-2 leading-relaxed text-gray-700 dark:text-white/70 line-clamp-2">
              {description}
            </p>

            {/* Dynamic Tag List */}
            <ul className="flex flex-wrap mt-2 line-clamp-2 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-2 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 hover:bg-black/[0.9] transition"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Link>

          {/* Links for GitHub and Live URL */}
          {(githubUrl || liveUrl) && (
            <div className="mt-4 flex space-x-4">
              {githubUrl && (
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition transform hover:scale-105"
                >
                  <FaGithub className="mr-2" />
                  View Code
                </Link>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition transform hover:scale-105"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  View Live
                </a>
              )}
            </div>
          )}
        </div>

        {/* Image Section */}
        <Link href={`/projects/${id}`}>
          <Image
            src={imageUrl}
            alt="Project I worked on"
            width={500}
            height={imageHeight} // Dynamically set height based on text
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[30.25rem] rounded-t-lg shadow-2xl
            transition transform group-hover:scale-105 group-hover:rotate-3
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            group-even:right-[initial] group-even:-left-40"
          />
        </Link>
      </section>
    </motion.div>
  );
}
