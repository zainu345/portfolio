'use client';

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-10 p-6 text-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
      <p className="mb-2 text-lg">&copy; 2024 Abdul Aziz. All rights reserved.</p>
      <p>
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS, and more.
      </p>
      <div className="mt-4 text-lg">Follow me:</div>
      <div className="flex justify-center space-x-6 mt-2">
        <a
          href="https://linkedin.com/in/connect2abdulaziz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-2 transition-transform transform hover:scale-110"
        >
          <FaLinkedin className="h-8 w-8 text-gray-600 dark:text-gray-300" />
        </a>
        <a
          href="https://github.com/connect2abdulaziz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-2 transition-transform transform hover:scale-110"
        >
          <FaGithub className="h-8 w-8 text-gray-600 dark:text-gray-300" />
        </a>
      </div>
      <div className="w-full h-1 bg-gray-600 rounded-full my-4"></div>
    </footer>
  );
}
