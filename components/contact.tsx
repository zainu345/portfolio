"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setError("");

    if (!isValidEmail(senderEmail)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (message.length === 0) {
      setError("Message cannot be empty.");
      return;
    }
    if (message.length > 50000) {
      setError("Message cannot exceed 50000 characters.");
      return;
    }

    const formData = { senderEmail, message };
    const { error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }

    setSenderEmail("");
    setMessage("");
    toast.success("Email sent successfully!");
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
<<<<<<< HEAD
      className="bg-gray-100 max-w-[45rem] border border-black/5 dark:border-gray-700 rounded-lg overflow-hidden sm:pr-8 relative sm:h-auto hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 shadow-lg hover:shadow-xl p-12 mx-auto mb-20 sm:mb-28"
=======
      className="bg-gray-100 w-full max-w-[95%] md:max-w-2xl lg:max-w-4xl border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-auto hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 shadow-lg hover:shadow-xl p-6 mx-auto mb-10 md:mb-20"
>>>>>>> feature/PW-6
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-gray-300">
        Please contact me directly at{" "}
        <a className="underline text-blue-500 dark:text-blue-400" href="mailto:connect2abdulaziz@gmail.com">
          connect2abdulaziz@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col" onSubmit={handleSubmit}>
        <input
          className="h-14 px-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-white/5 dark:hover:bg-white/10 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-800 focus:outline-none transition-all"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
          placeholder="Your email"
        />
        {error && <p className="pt-2 text-red-500">{error}</p>}

        <textarea
          className="h-52 my-3 rounded-lg border border-gray-300 dark:border-gray-700 p-4 bg-white dark:bg-white/5 dark:hover:bg-white/10 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-800 focus:outline-none transition-all"
          name="message"
          placeholder="Your message"
          required
          maxLength={50000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <SubmitBtn />
      </form>
    </motion.section>
  );
}
