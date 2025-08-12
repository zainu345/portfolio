import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaMobileAlt, FaCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiNestjs, SiNextdotjs } from "react-icons/si";
import { MdSupervisorAccount } from "react-icons/md";
import { BsCodeSquare } from "react-icons/bs";




export const experiencesData = [
  {
    id: 1,
    title: "Senior Developer and Project Manager",
    location: "Arbisoft Technologies , Lahore, Pakistan",
    description:
      "Collaborated with cross-functional teams in a hybrid full-time role to build FinTech platforms, focusing on backend solutions using the MERN stack and Next.js. Designed and implemented scalable AI-driven features with LangChain and LangGraph, and managed secure deployments for systems incorporating integrated payment workflows and automation capabilities across multiple platforms.",
    icon: React.createElement(MdSupervisorAccount),
    date: "Jan 2023 - Present",
    type: "fulltime",
    skills: [
      "MERN Stack",
      "Next.js",
      "DevOps",
      "LangChain",
      "LangGraph",
      "LLM Integration",
      "AWS",
      "Docker",
      "Stripe",
      "CI/CD",
      "Team Leadership",
      "MongoDB Atlas",
      "Project Management",
      "Agile Methodologies",
      "Payment Systems",
      "Blockchain APIs",
    ],
    details: [
      "Architected and deployed scalable backend solutions in FinTech projects",
      "Integrated LangChain-based AI models into transaction monitoring systems",
      "Led and mentored a team of engineers across multiple platforms",
      "Developed automated CI/CD pipelines for microservices architecture",
      "Oversaw secure cloud deployments and infrastructure with AWS and Docker",
      "Managed secure payment systems with Stripe and blockchain APIs"
    ]
  },
  {
    id: 2,
    title: "Software  Engineer",
    location: "Devsinc , Lahore, Pakistan",
    description:
      "Developed robust EdTech platforms from the ground up using modern JavaScript frameworks and Python-based backends. Implemented AI-driven recommendation engines and performance tracking dashboards to personalize student learning experiences.",
    icon: React.createElement(BsCodeSquare),
    date: "March 2019 - Dec 2022",
    type: "fulltime",
    skills: [
      "Next.js",
      "MERN Stack",
      "Python",
      "Django",
      "FastAPI",      
      "React Hooks",
      "LangChain",
      "OpenAI API",
      "AWS",
      "MongoDB",
      "Vercel",
      "Git"
    ],
    details: [
      "Built interactive EdTech dashboards using React and Zustand",
      "Designed and deployed RESTful APIs using Django and FastAPI",
      "Used LangChain for developing AI tutors and adaptive assessments",
      "Managed deployments with AWS and Vercel",
      "Integrated OpenAI APIs to generate dynamic quizzes and feedback",
      "Implemented Git workflows and CI pipelines for smooth development"
    ]
  },
  {
    id: 3,
    title: "Software Engineer",
    location: "Firotolo , Remote",
    description:
      "Engineered FinTech platforms with an emphasis on intuitive user interfaces and robust data security. Built and integrated smart contracts with blockchain-backed dashboards for real-time financial analytics and reporting.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2020 - Dec 2021",
    type: "fulltime",
    skills: ["React", "Node.js", "Solidity", "Ethereum", "Web3.js", "MongoDB"],
    details: [
      "Engineered real-time financial dashboards using React and Node.js for transaction insights and portfolio management",
      "Developed and deployed Solidity smart contracts to enable core DeFi functionalities",
      "Integrated blockchain wallet support for seamless Ethereum-based transactions using Web3 technologies",
      "Optimized MongoDB queries for large data analytics",
      "Partnered with UI/UX designers to craft user-centric, performance-optimized interfaces for financial applications"
    ]
  },
  {
    id: 4,
    title: "Bachelor of Science in Computer Science",
    location: "Punjab University  Lahore, Pakistan",
    description:
      "Graduated with a CGPA of 3.73, with specialization in AI, software engineering, and full-stack development. Completed projects in blockchain attendance and survey systems, educational AI chatbots, and secure web applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
    type: "education",
    skills: ["Programming", "Algorithms", "Artificial Intelligence", "OOP", "DSA"],
    details: [
      "Graduated with a CGPA of 3.73",
      "Conducted academic research in BlockChain applications",
      "Built a blockchain-based attendance and survey  as final year project",
      "Created AI-powered tutor and survey to assist students",
      "Participated in multiple hackathons and developer meetups around the globe"
    ]
  }
] as const;

export const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", proficiency: 85 },
      { name: "CSS", proficiency: 80 },
      { name: "JavaScript", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
      { name: "React", proficiency: 88 },
      { name: "Next.js", proficiency: 90 },
      { name: "Bootstrap", proficiency: 70 },
      { name: "Tailwind CSS", proficiency: 80 },
      { name: "Styled Components", proficiency: 75 },
      { name: "Material UI", proficiency: 80 },
      { name: "Shadcn UI", proficiency: 75 },
      { name: "Zustand (State Management)", proficiency: 80 },
      { name: "React Hooks & Context API", proficiency: 88 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", proficiency: 90 },
      { name: "Express.js", proficiency: 88 },
      { name: "NestJS", proficiency: 80 },
      { name: "GraphQL", proficiency: 70 },
      { name: "PostgreSQL", proficiency: 85 },
      { name: "MySQL", proficiency: 80 },
      { name: "MongoDB", proficiency: 85 },
      { name: "SQLite", proficiency: 70 },
      { name: "Firebase (Auth, DB, Hosting)", proficiency: 80 },
      { name: "Flask", proficiency: 65 },
      { name: "Django REST Framework", proficiency: 70 },
      { name: "FastAPI", proficiency: 78 },
    ],
  },
  {
    category: "AI & ML Integration",
    skills: [
      { name: "LangChain", proficiency: 80 },
      { name: "OpenAI API", proficiency: 88 },
      { name: "LLM Workflow Integration", proficiency: 90 },
      { name: "Retrieval-Augmented Generation (RAG)", proficiency: 75 },
      { name: "Prompt Engineering", proficiency: 85 },
      { name: "Autonomous AI Agents", proficiency: 88 },
      { name: "Natural Language Processing (NLP)", proficiency: 78 },
    ],
  },
  {
    category: "DevOps & Cloud Services",
    skills: [
      { name: "Amazon Web Services (AWS)", proficiency: 80 },
      { name: "Vercel", proficiency: 85 },
      { name: "Railway Deployment", proficiency: 78 },
      { name: "Docker", proficiency: 85 },
      { name: "CI/CD Pipelines", proficiency: 75 },
      { name: "MongoDB Atlas", proficiency: 80 },
      { name: "Git Version Control", proficiency: 90 },
      { name: "GitHub Actions & Collaboration", proficiency: 85 },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript (ES6+)", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
      { name: "Python", proficiency: 82 },
      { name: "C++", proficiency: 75 },
      { name: "C#", proficiency: 70 },
      { name: "C", proficiency: 75 },
      { name: "Java", proficiency: 65 },
      { name: "Kotlin", proficiency: 70 },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Stripe Payment Integration", proficiency: 78 },
      { name: "AJAX & Axios", proficiency: 80 },
      { name: "JSON & Data Parsing", proficiency: 85 },
      { name: "Global State Management", proficiency: 85 },
      { name: "RESTful API Design", proficiency: 90 },
      { name: "Deployment & Monitoring", proficiency: 82 },
    ],
  },
  {
    category: "Professional Skills",
    skills: [
      { name: "Full Stack Application Development", proficiency: 88 },
      { name: "Agile Development & Scrum", proficiency: 80 },
      { name: "Team Collaboration & Communication", proficiency: 85 },
      { name: "Problem Solving & Debugging", proficiency: 90 },
      { name: "Project Planning & Coordination", proficiency: 78 },
      { name: "Code Quality & Best Practices", proficiency: 85 },
      { name: "Mentorship & Peer Reviews", proficiency: 75 },
    ],
  },
] as const;


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


import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaMobileAlt, FaCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiNestjs, SiNextdotjs } from "react-icons/si";
import { MdSupervisorAccount } from "react-icons/md";
import { BsCodeSquare } from "react-icons/bs";
import Project from "@/components/project";




export const experiencesData = [
  {
    id: 1,
    title: "Senior Developer and Project Manager",
    location: "Netsol Technologies , Lahore, Pakistan",
    description:
      "Collaborated with cross-functional teams in a hybrid full-time role to build FinTech platforms, focusing on backend solutions using the MERN stack and Next.js. Designed and implemented scalable AI-driven features with LangChain and LangGraph, and managed secure deployments for systems incorporating integrated payment workflows and automation capabilities across multiple platforms.",
    icon: React.createElement(MdSupervisorAccount),
    date: "Jan 2023 - Present",
    type: "fulltime",
    skills: [
      "MERN Stack",
      "Next.js",
      "DevOps",
      "LangChain",
      "LangGraph",
      "LLM Integration",
      "AWS",
      "Docker",
      "Stripe",
      "CI/CD",
      "Team Leadership",
      "MongoDB Atlas",
      "Project Management"
    ],
    details: [
      "Architected and deployed scalable backend solutions in FinTech projects",
      "Integrated LangChain-based AI models into transaction monitoring systems",
      "Led and mentored a team of engineers across multiple platforms",
      "Developed automated CI/CD pipelines for microservices architecture",
      "Oversaw secure cloud deployments and infrastructure with AWS and Docker",
      "Managed secure payment systems with Stripe and blockchain APIs"
    ]
  },
  {
    id: 2,
    title: "Full Stack Web  Engineer",
    location: "Devsinc , Lahore, Pakistan",
    description:
      "Developed robust EdTech platforms from the ground up using modern JavaScript frameworks and Python-based backends. Implemented AI-driven recommendation engines and performance tracking dashboards to personalize student learning experiences.",
    icon: React.createElement(BsCodeSquare),
    date: "March 2019 - Dec 2022",
    type: "fulltime",
    skills: [
      "Next.js",
      "MERN Stack",
      "Python",
      "Django",
      "FastAPI",      
      "React Hooks",
      "LangChain",
      "OpenAI API",
      "AWS",
      "MongoDB",
      "Vercel",
      "Git"
    ],
    details: [
      "Built interactive EdTech dashboards using React and Zustand",
      "Designed and deployed RESTful APIs using Django and FastAPI",
      "Used LangChain for developing AI tutors and adaptive assessments",
      "Managed deployments with AWS and Vercel",
      "Integrated OpenAI APIs to generate dynamic quizzes and feedback",
      "Implemented Git workflows and CI pipelines for smooth development"
    ]
  },
  {
    id: 3,
    title: "Software Engineer",
    location: "Firotolo , Remote",
    description:
      "Engineered FinTech platforms with an emphasis on intuitive user interfaces and robust data security. Built and integrated smart contracts with blockchain-backed dashboards for real-time financial analytics and reporting.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2020 - Dec 2021",
    type: "fulltime",
    skills: ["React", "Node.js", "Solidity", "Ethereum", "Web3.js", "MongoDB"],
    details: [
      "Engineered real-time financial dashboards using React and Node.js for transaction insights and portfolio management",
      "Developed and deployed Solidity smart contracts to enable core DeFi functionalities",
      "Integrated blockchain wallet support for seamless Ethereum-based transactions using Web3 technologies",
      "Optimized MongoDB queries for large data analytics",
      "Partnered with UI/UX designers to craft user-centric, performance-optimized interfaces for financial applications"
    ]
  },
  {
    id: 4,
    title: "Bachelor of Science in Computer Science",
    location: "Punjab University  Lahore, Pakistan",
    description:
      "Graduated with a CGPA of 3.73, with specialization in AI, software engineering, and full-stack development. Completed projects in blockchain attendance and survey systems, educational AI chatbots, and secure web applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
    type: "education",
    skills: ["Programming", "Algorithms", "Artificial Intelligence", "OOP", "DSA"],
    details: [
      "Graduated with a CGPA of 3.73",
      "Conducted academic research in BlockChain applications",
      "Built a blockchain-based attendance and survey  as final year project",
      "Created AI-powered tutor and survey to assist students",
      "Participated in multiple hackathons and developer meetups around the globe"
    ]
  }
] as const;

export const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", proficiency: 85 },
      { name: "CSS", proficiency: 80 },
      { name: "JavaScript", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
      { name: "React", proficiency: 88 },
      { name: "Next.js", proficiency: 90 },
      { name: "Bootstrap", proficiency: 70 },
      { name: "Tailwind CSS", proficiency: 80 },
      { name: "Styled Components", proficiency: 75 },
      { name: "Material UI", proficiency: 80 },
      { name: "Shadcn UI", proficiency: 75 },
      { name: "Zustand (State Management)", proficiency: 80 },
      { name: "React Hooks & Context API", proficiency: 88 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", proficiency: 90 },
      { name: "Express.js", proficiency: 88 },
      { name: "NestJS", proficiency: 80 },
      { name: "GraphQL", proficiency: 70 },
      { name: "PostgreSQL", proficiency: 85 },
      { name: "MySQL", proficiency: 80 },
      { name: "MongoDB", proficiency: 85 },
      { name: "SQLite", proficiency: 70 },
      { name: "Firebase (Auth, DB, Hosting)", proficiency: 80 },
      { name: "Flask", proficiency: 65 },
      { name: "Django REST Framework", proficiency: 70 },
      { name: "FastAPI", proficiency: 78 },
    ],
  },
  {
    category: "AI & ML Integration",
    skills: [
      { name: "LangChain", proficiency: 80 },
      { name: "OpenAI API", proficiency: 88 },
      { name: "LLM Workflow Integration", proficiency: 90 },
      { name: "Retrieval-Augmented Generation (RAG)", proficiency: 75 },
      { name: "Prompt Engineering", proficiency: 85 },
      { name: "Autonomous AI Agents", proficiency: 88 },
      { name: "Natural Language Processing (NLP)", proficiency: 78 },
    ],
  },
  {
    category: "DevOps & Cloud Services",
    skills: [
      { name: "Amazon Web Services (AWS)", proficiency: 80 },
      { name: "Vercel", proficiency: 85 },
      { name: "Railway Deployment", proficiency: 78 },
      { name: "Docker", proficiency: 85 },
      { name: "CI/CD Pipelines", proficiency: 75 },
      { name: "MongoDB Atlas", proficiency: 80 },
      { name: "Git Version Control", proficiency: 90 },
      { name: "GitHub Actions & Collaboration", proficiency: 85 },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript (ES6+)", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
      { name: "Python", proficiency: 82 },
      { name: "C++", proficiency: 75 },
      { name: "C#", proficiency: 70 },
      { name: "C", proficiency: 75 },
      { name: "Java", proficiency: 65 },
      { name: "Kotlin", proficiency: 70 },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Stripe Payment Integration", proficiency: 78 },
      { name: "AJAX & Axios", proficiency: 80 },
      { name: "JSON & Data Parsing", proficiency: 85 },
      { name: "Global State Management", proficiency: 85 },
      { name: "RESTful API Design", proficiency: 90 },
      { name: "Deployment & Monitoring", proficiency: 82 },
    ],
  },
  {
    category: "Professional Skills",
    skills: [
      { name: "Full Stack Application Development", proficiency: 88 },
      { name: "Agile Development & Scrum", proficiency: 80 },
      { name: "Team Collaboration & Communication", proficiency: 85 },
      { name: "Problem Solving & Debugging", proficiency: 90 },
      { name: "Project Planning & Coordination", proficiency: 78 },
      { name: "Code Quality & Best Practices", proficiency: 85 },
      { name: "Mentorship & Peer Reviews", proficiency: 75 },
    ],
  },
] as const;


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


export const projectsData = [
  {
    id: 1,
    title: "Bull Street – On-Demand Film Streaming Platform",
    description:
      "Bull Street is a cinematic on-demand streaming platform created to showcase the emotional and historical storytelling of the Bull Street documentary. It offers viewers a smooth, theater-like experience to stream, learn about the cast, read reviews, and securely access the film from anywhere.",
    tags: ["React.js, Tailwind CSS, Stripe API, Vimeo/HTML5 video player, Figma for UI/UX"],
    imageUrl: "./bull.jpg",
    githubUrl: "",
    liveUrl: "",
    type: "",
    icon: React.createElement(FaCode),
    keyFeatures: [
      " High-quality, responsive video player with playback controls",
      " Secure paywall and checkout for on-demand access",
      "Cast and crew listing with profile visuals",
      "Share Your Story” feature to collect audience experiences",
      "User reviews and testimonials section",
      "Clean, modern UI with cinematic design aesthetics",
      "Mobile-friendly and optimized for various screen sizes",
      
    ],
    techDetails: "Built with Nodejs for backend processing, React.js for the frontend interface, and MongoDB for data storage."
  },
  {
    id: 2,
    title: "BlackTokenomics–Tokenomics Design & Consulting App",
    description:
      "BlackTokenomics is a specialized Web3 firm dedicated to designing, auditing, modeling, simulating, and validating tokenomics for blockchain projects, venture capitals, and launchpads. The platform offers comprehensive services to ensure economic stability and attract investors by creating robust tokenomics frameworks.",
    imageUrl: "./token.jpg",
    liveUrl: "",
    githubUrl: "",
    type: "backend",
    icon: React.createElement(SiNestjs),
    keyFeatures: [
      "AI-powered legal document summarization",
      "Tokenomics Design",
      "Tokenomics Audit",
      "Tokenomics Consulting",
      "Tokenomics Calculator",
      "Tokenomics Curation",
     
    ],
    techDetails: "Backend Development: Designed and implemented scalable APIs to support core functionalities such as user authentication, project management, and data analytics.​"
  },
  {
    id: 3,
    title: "PropGrid360–RealEstate Business Management App",
    description:
      "PropGrid360 is an innovative real estate management platform designed to streamline property listings, client relationships, and business operations for real estate professionals. ",
    tags: ["React", "Express", "Nest.js", "PostgreSQL", "led AWS", "JavaScript", "TypeScript"],
    imageUrl: "./popgrid.jpg",
    githubUrl: "",
    liveUrl: "",
    type: "fullstack",
    icon: React.createElement(FaReact),
    keyFeatures: [
      " Built responsive UI components with React.js & Next.js",
      "enhanced performance with lazy loading and Redux",
      "Performance & Security: Implemented caching (Redis, CDN), strengthened security with JWT & RBAC, and led code reviews for quality assurance",
      "Optimized PostgreSQL/MongoDB, led AWS migration, and automated CI/CD pipelines, cutting deployment time by 50%",
      "Responsive design for all devices"
    ],
    techDetails: "Frontend built with React for component-based UI. Backend uses Express and Nest.js for API endpoints. PostgreSQL database with Sequelize ORM for data modeling and migrations. Implemented in both JavaScript and TypeScript for type safety."
  },
  {
    id: 5,
    title: "Healthdesk.ai – AI-Powered Communication Platform",
    description:
      "Healthdesk.ai is an AI-powered communication platform designed to enhance client engagement for health and wellness businesses. Integrated seamlessly with Mindbody, it automates and personalizes interactions across multiple channels, including SMS, web chat, Facebook, and Instagram.",
    tags: ["Python", "JavaScript", "E-commerce", "MongoDB", "JQuery"],
    imageUrl: "./myhealth.jpg",
    githubUrl: "",
    liveUrl: "",
    type: "web",
    icon: React.createElement(FaCode),
    keyFeatures: [
      "Utilized React.js to create dynamic and responsive user interfaces, ensuring a seamless user experience across all devices.",
      "Implemented AI functionalities using Python libraries such as TensorFlow and scikit-learn",
      " Designed and managed databases using MongoDB and PostgreSQL to handle large datasets and ensure data integrity.",
      "Conducted thorough testing and debugging to maintain high performance and reliability of the platform",
      "Payment processing integration"
    ],
    techDetails: "Built with Python for backend logic, JavaScript and jQuery for frontend interactivity. MongoDB for product and   PostgreSQL user data storage. Features responsive design for mobile and desktop shopping experiences."
  },
  {
    id: 4,
    title: "NewsTone Arena – Event Membership & Point Transfer",
    description:
      "NewsTone Arena is a mobile application designed to streamline onboarding, membership registration, and digital point transfers for event attendees. Built with a focus on simplicity and usability, this app offers a seamless experience from sign-up to QR scanning and in-app currency management.",
    tags: ["Next.js", "JavaScript", "TypeScript", "Vercel Deployment"],
    imageUrl: "./newsletter.jpg",
    githubUrl: "",
    liveUrl: "",
    type: "web",
    icon: React.createElement(SiNextdotjs),
    keyFeatures: [
      "Intuitive onboarding and account creation",
      "Form validation for secure and accurate data entry",
      "Personalized welcome and confirmation screens",
      "Point (STONE) transfer system with recipient verification",
      "QR code scanner for location-based check-ins",
      "Clean, modern UI with strong color theming and accessibility",
      "Fully responsive design optimized for mobile use"
    ],
    techDetails: "Next.js, Node.js, MongoDb, AWS."
  },
  {
    id: 6, 
    title: "RevBits – Comprehensive Cybersecurity Solutions",
    description: "RevBits is an advanced cybersecurity platform offering endpoint security, email security, privileged access management, and deception technology to protect organizations from cyber threats.", 
    tags: [" Node.js ", "React.js", "REST APIs", "PostgreSQL","MongoDB"],
    imageUrl: "./Revbits.com",
    githubUrl: "",
    liveUrl: "",
    type: "mobile",
    icon: React.createElement(FaMobileAlt),
    keyFeatures: [
      "Assisted in minor UI/UX improvements and system-wide enhancements based on client feedback",
      "Location-based community suggestions",
      "In-app messaging and networking",
      "Resource directory for newcomers",
      "Event discovery and scheduling"
    ],
    techDetails: " Optimization: Improved performance and security by refactoring existing React.js frontend and Node.js backend code.Bug Fixes & Debugging: Identified and resolved issues affecting platform stability and efficiency.Security Enhancements: Ensured compliance with best cybersecurity practices, improving data encryption and authentication mechanisms.Database Management: Maintained and optimized MongoDB and PostgreSQL databases to ensure smooth data handling.API Maintenance: Updated and tested REST APIs for improved performance and security.Performance Tuning: Conducted load testing and optimization to enhance system reliability."
  },
  {
    id: 7,
    title: "Smart Trainer - AI-Powered Operational Excellence",
    description:
      "Smart Trainer is an AI-powered platform designed to optimize operations in the restaurant and retail sectors. It acts as a virtual manager and data analyst, leveraging real-time insights to improve decision-making while ensuring operational efficiency.",
    imageUrl: "./Smart_20Trainer.jpg",
    githubUrl: "",
    liveUrl: "",
    type: "desktop",
    icon: React.createElement(FaCode),
    keyFeatures: [
      "Front End:React.js (for dynamic user interfaces and interactive dashboards)",
      " AI & Data Processing:Python-based services and libraries (e.g., TensorFlow, scikit-learn) for AI models and analytics",
      "Back End:Node.js/Express (ensuring scalable APIs and seamless communication with AI modules)",
      " Database & Cloud:AWS, MongoDB, PostgreSQL (to manage large datasets and handle real-time data flows)"
    ],
    techDetails: "React.js,Python ,AWS, MongoDB, PostgreSQL "
  }
] as const;



