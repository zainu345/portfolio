"use client";

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-white/10 dark:to-white/20 p-8 text-center rounded-lg shadow-md transition-transform transform border-t border-gray-300 dark:border-gray-700">
      <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">
        &copy; 2024 Abdul Aziz
      </div>
      <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
        All rights reserved.
      </p>
      <p className="mt-2 text-md text-gray-500 dark:text-gray-400">
        Built with{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          React & Next.js
        </span>
        , TypeScript, Tailwind CSS, and more.
      </p>

      {/* Follow Me section with enhanced icons */}
      <div className="mt-6 text-lg text-gray-700 dark:text-gray-300">
        Connect with me:
      </div>
      <div className="flex justify-center space-x-8 mt-4">
        <a
          href="https://linkedin.com/in/connect2abdulaziz"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-200 rounded-full shadow-md transition-transform transform hover:scale-110 dark:bg-white/10 dark:hover:bg-white/20"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="h-7 w-7 text-blue-600 dark:text-blue-400" />
        </a>
        <a
          href="https://github.com/connect2abdulaziz"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-200 rounded-full shadow-md transition-transform transform hover:scale-110 dark:bg-white/10 dark:hover:bg-white/20"
          aria-label="GitHub"
        >
          <FaGithub className="h-7 w-7 text-gray-700 dark:text-gray-300" />
        </a>
      </div>

      {/* Decorative line for separation */}
      <div className="w-full h-[2px] bg-gray-300 dark:bg-gray-600 rounded-full my-6"></div>
    </footer>
  );
}
