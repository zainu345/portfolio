'use client';

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-10 p-6 text-center bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.p
        className="relative z-10 mb-2 block text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        &copy; 2024 Abdulaziz. All rights reserved.
      </motion.p>
      <motion.p
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS, and more.
      </motion.p>

      <motion.div
        className="relative z-10 mt-4 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p  className="text-lg">Follow me:</p>
        <div className="flex justify-center space-x-6 mt-2">
          <motion.a
            href="https://linkedin.com/in/connect2abdulaziz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-110"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="h-8 w-8 transition-transform transform hover:rotate-12" />
          </motion.a>
          <motion.a
            href="https://github.com/connect2abdulaziz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-110"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="h-8 w-8 transition-transform transform hover:rotate-12" />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 mt-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-1 bg-gray-600 rounded-full my-4"></div>
      </motion.div>
    </footer>
  );
}
