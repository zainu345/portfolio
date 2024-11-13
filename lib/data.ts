import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const experiencesData = [
  {
    id: 1,
    title: "Bachelor of Science in Computer Science",
    location: "Punjab University College Of Information Technology, Lahore, Pakistan",
    description: "Graduated with a CGPA of 3.53, gained a solid foundation in computer science concepts including programming, algorithms, and artificial intelligence.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    id: 2,
    title: "Associate Software Engineer",
    location: "Kwanso, Lahore, Pakistan",
    description: "Specialized in backend optimization, bug fixing, clean and DRY coding, and efficient Git collaboration as a Full Stack Developer with expertise in MERN, Next.js, and Nest.js.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2024 - Present",
  },
  {
    id: 3,
    title: "Trainee Engineer",
    location: "Pyflow Labs, Lahore, Pakistan",
    description: "Worked part-time as a trainee, creating responsive apps with clean code, collaborating on design and performance, and contributing to the full development lifecycle.",
    icon: React.createElement(FaReact),
    date: "March 2024 - June 2024",
  },
  
  {
    id: 4,
    title: "Teacher Assistant",
    location: "PUCIT, Lahore, Pakistan",
    description: "Assisted students in programming labs, evaluated quizzes and assignments, and provided support in courses like ITC, PF, OOP, DSA, AI, and WEB.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
] as const;


export const projectsData = [
  {
    id: 1,
    title: "Voice Craft - FYP",
    description:
      "Revolutionizing communication and entertainment, this voice clone project uses advanced AI and NLP technology to replicate voices. It has applications in virtual assistants, voiceovers, and personalized interactions across industries like entertainment and gaming.",
    tags: ["Python", "React.js", "MongoDB", "Machine Learning", "NLP"],
    imageUrl: "https://i.imgur.com/28n1ZkZ.png",
    githubUrl: "",
    liveUrl: ""
    
  },
  {
    id: 2,
    title: "4Corners (Legal GPT)",
    description:
      "A backend project that summarizes court cases from PDFs, optimized to generate PDF summaries with detailed case info, including page and line numbers. Developed with a focus on prompt engineering and performance enhancement.",
    tags: ["Nest.js", "React.js", "GraphQL", "PostgreSQL", "TypeORM", "Prompt Engineering"],
    imageUrl: "https://i.imgur.com/eNTzxaD.png",
    liveUrl:"https://4corners.com/",
    githubUrl: "",

  },
  {
    id: 3,
    title: "Blog Website - Full Stack",
    description:
      "A full-featured blog website with nested comments, pagination, search optimization, and frontend scrolling. Built with Sequelize for model associations and database migrations.",
    tags: ["React", "Express", "Nest.js", "PostgreSQL", "Sequelize", "JavaScript", "TypeScript"],
    imageUrl: "https://i.imgur.com/rma7zRk.png",
    githubUrl: "https://github.com/connect2abdulaziz/blog-backend",
    liveUrl: "https://blog-frontend-three-nu.vercel.app/"
  },
  {
    id: 5,
    title: "StitchXcel - E-commerce Website",
    description:
      "An e-commerce platform designed for seamless shopping experience, developed with Python and JavaScript.",
    tags: ["Python", "JavaScript", "E-commerce", "Mongodb", "JQuery"],
    imageUrl: "https://i.imgur.com/2R6AbrY.png",
    githubUrl: "https://github.com/connect2abdulaziz/StitchXcel",
    liveUrl: ""
  },
  {
    id: 4,
    title: "Invoice Management System",
    description:
      "A comprehensive invoice management platform developed with Next.js. Includes features for managing clients, invoices, and payments efficiently.",
    tags: ["Next.js", "JavaScript", "TypeScript", "Vercel Deployment"],
    imageUrl: "https://i.imgur.com/OBBMqZc.png",
    githubUrl: "https://github.com/connect2abdulaziz/nextjs-invoice-management-system",
    liveUrl: "https://invoice-management-system-olive.vercel.app/dashboard"
  },

  {
    id: 6, 
    title: "SettleEase - Mobile App",
    description: "SettleEase helps newcomers settle into new cities or countries by connecting them with people who share their language, profession, or interests, making it easier to adapt and build a supportive network.", 
    tags: ["Kotlin", "Android SDK", "Firebase", "Mobile Development"],
    imageUrl: "https://i.imgur.com/61fvLSe.png",
    githubUrl: "https://github.com/connect2abdulaziz/SettleEase",
    liveUrl: "https://slideme.org/application/settleease"
  },
  {
    id: 7,
    title: "Console Applications",
    description:
      "Various console applications such as Hospital Management, School Management, and Bank Management systems built with a focus on functionality and data handling.",
    tags: ["C++", "Console Applications", "OOP", "DSA", "ALGO"],
    imageUrl: "https://i.imgur.com/pNCI60X.png",
    githubUrl: "https://github.com/connect2abdulaziz?tab=repositories&q=&type=source&language=c%2B%2B&sort=",
    liveUrl: "https://connect2abdulaziz.github.io/abdulaziz/portfolio.html"
  }
] as const;

export const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      "HTML", "CSS", "JavaScript", "TypeScript",
      "React", "Next.js", "Bootstrap", "Tailwind",
      "Styled Components", "Material UI", "Shadcn",
    ],
  },
  {
    category: "Backend Development",
    skills: [
      "Node.js", "Express", "Nest.js", "GraphQL",
      "PostgreSQL", "MySQL", "MongoDB", "SQLite", "Firebase",
      "Flask",
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      "C++", "C#", "C", "Python", "Java", "Kotlin",
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      "Git", "GitHub", "AJAX", "JSON",
      "Deployment (Vercel, Heroku)", "AWS", "Prompt Engineering",
    ],
  },
  {
    category: "Professional Skills",
    skills: [
      "Full Stack Development", "Problem Solving", "Team Collaboration", "Agile Methodologies",
    ],
  },
] as const;

