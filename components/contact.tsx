"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { 
  FaEnvelope, 
  FaPaperPlane, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaExclamationTriangle,
  FaCheck
} from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [formState, setFormState] = useState("idle"); // idle, loading, success, error
  const [characterCount, setCharacterCount] = useState(0);
  const [floatingLabels, setFloatingLabels] = useState({ email: false, message: false });

  useEffect(() => {
    setCharacterCount(message.length);
  }, [message]);

  // Update floating label state based on input content
  useEffect(() => {
    setFloatingLabels({
      email: senderEmail.length > 0,
      message: message.length > 0
    });
  }, [senderEmail, message]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setError("");
    setFormState("loading");

    if (!isValidEmail(senderEmail)) {
      setError("Please enter a valid email address.");
      setFormState("error");
      return;
    }
    
    if (message.length === 0) {
      setError("Message cannot be empty.");
      setFormState("error");
      return;
    }
    
    if (message.length > 50000) {
      setError("Message cannot exceed 50000 characters.");
      setFormState("error");
      return;
    }

    const formData = { senderEmail, message };
    
    try {
      const { error: responseError } = await sendEmail(formData);

      if (responseError) {
        toast.error(responseError);
        setFormState("error");
        return;
      }

      setSenderEmail("");
      setMessage("");
      setCharacterCount(0);
      setFloatingLabels({ email: false, message: false });
      setFormState("success");
      toast.success("Email sent successfully!");
      
      // Reset form state after showing success
      setTimeout(() => {
        setFormState("idle");
      }, 3000);
    } catch (err) {
      console.error("Error sending email:", err);
      setFormState("error");
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="relative mb-20 sm:mb-28 w-full max-w-[95%] md:max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 opacity-60"></div>
        
        {/* Decorative circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30"></div>
        
        {/* Decorative pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.015] dark:opacity-[0.03]"></div>
      </div>

      {/* Content Container */}
      <motion.div 
        className="relative z-10 backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl overflow-hidden"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Colored top bar */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
        
        <div className="p-8 sm:p-10">
          {/* Heading with icon animation */}
          <div className="flex flex-col items-center justify-center mb-8">
            <motion.div
              className="mb-4 p-4 rounded-full bg-blue-100 dark:bg-blue-900/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 10, 0] }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            >
              <FaEnvelope className="text-2xl text-blue-600 dark:text-blue-400" />
            </motion.div>
            <SectionHeading>Get in Touch</SectionHeading>
          </div>

          <motion.p 
            className="text-gray-700 dark:text-gray-300 text-center max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I'm always open to new opportunities and collaborations. Reach out directly at{" "}
            <a 
              className="relative inline-block group text-blue-600 dark:text-blue-400 font-medium" 
              href="mailto:connect2abdulaziz@gmail.com"
            >
              connect2abdulaziz@gmail.com
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 dark:bg-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>{" "}
            or fill out the form below.
          </motion.p>

          {/* Social media links */}
          <motion.div 
            className="flex justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {[
              { icon: <FaLinkedin />, url: "https://linkedin.com/in/connect2abdulaziz", color: "bg-blue-700" },
              { icon: <FaGithub />, url: "https://github.com/connect2abdulaziz", color: "bg-gray-800" },
              { icon: <FaTwitter />, url: "https://twitter.com", color: "bg-blue-400" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full ${social.color} text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Form container with status-based styling */}
          <motion.div
            className="relative rounded-xl overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-700 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* Success overlay */}
            <AnimatePresence>
              {formState === "success" && (
                <motion.div 
                  className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 dark:bg-gray-900/90 z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 8 }}
                    className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4"
                  >
                    <FaCheck className="text-2xl text-green-600 dark:text-green-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400">Thanks for reaching out!</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form 
              className="flex flex-col p-6 bg-white dark:bg-gray-800/50"
              onSubmit={handleSubmit}
            >
              {/* Email input with floating label */}
              <div className="relative mb-6 group">
                <motion.label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none text-gray-500 dark:text-gray-400 ${
                    floatingLabels.email ? "text-xs top-2" : "text-base top-1/2 -translate-y-1/2"
                  }`}
                  animate={{
                    top: floatingLabels.email ? 8 : "50%",
                    y: floatingLabels.email ? 0 : "-50%",
                    fontSize: floatingLabels.email ? "0.75rem" : "1rem"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="flex items-center gap-2">
                    <FaEnvelope className={floatingLabels.email ? "text-xs" : "text-base"} />
                    Your Email
                  </span>
                </motion.label>
                
                <input
                  id="email"
                  className="w-full h-14 px-4 pt-5 pb-2 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-600/50 transition-all"
                  name="senderEmail"
                  type="email"
                  required
                  maxLength={500}
                  value={senderEmail}
                  onChange={(e) => {
                    setSenderEmail(e.target.value);
                    setError("");
                  }}
                  onFocus={() => setFloatingLabels(prev => ({ ...prev, email: true }))}
                  onBlur={() => setFloatingLabels(prev => ({ ...prev, email: senderEmail.length > 0 }))}
                />
              </div>

              {/* Message textarea with floating label and character count */}
              <div className="relative mb-2 group">
                <motion.label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none text-gray-500 dark:text-gray-400 ${
                    floatingLabels.message ? "text-xs top-2" : "text-base top-6"
                  }`}
                  animate={{
                    top: floatingLabels.message ? 8 : 24,
                    fontSize: floatingLabels.message ? "0.75rem" : "1rem"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="flex items-center gap-2">
                    <FaPaperPlane className={floatingLabels.message ? "text-xs" : "text-base"} />
                    Your Message
                  </span>
                </motion.label>
                
                <textarea
                  id="message"
                  className="w-full h-52 px-4 pt-6 pb-2 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-600/50 transition-all resize-none"
                  name="message"
                  required
                  maxLength={50000}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setError("");
                  }}
                  onFocus={() => setFloatingLabels(prev => ({ ...prev, message: true }))}
                  onBlur={() => setFloatingLabels(prev => ({ ...prev, message: message.length > 0 }))}
                />
                
                {/* Character count */}
                <div className="absolute bottom-2 right-3 text-xs text-gray-500 dark:text-gray-400">
                  {characterCount} / 50000
                </div>
              </div>

              {/* Error message with animation */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    className="mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-center gap-2 text-red-700 dark:text-red-400"
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                  >
                    <FaExclamationTriangle />
                    <span>{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button - using your existing component */}
              <div className="mt-2">
                <SubmitBtn />
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}