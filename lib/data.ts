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


export const projectsData = [
  {
    id: 1,
    title: "- FYP",
    description: ".",
    tags: ["Python", "React.js", "MongoDB", "Machine Learning", "NLP"],
    imageUrl: "",
    githubUrl: "",
    liveUrl: "",
    type: "",
    icon: React.createElement(FaCode),
    keyFeatures: [
      "Voice replication using advanced AI algorithms",
      "Natural language processing for authentic speech patterns",
      "Cross-platform integration capabilities",
      "Real-time voice synthesis and modification",
      "User-friendly interface for easy voice management"
    ],
    techDetails:
      "Built with Python for backend processing, React.js for the frontend interface, and MongoDB for data storage. Utilizes machine learning models and NLP techniques to analyze and replicate voice patterns."
  },
  {
    id: 2,
    title: "",
    description: "",
    tags: ["Nest.js", "GraphQL", "React.js", "PostgreSQL", "AI"],
    imageUrl: "",
    githubUrl: "",
    liveUrl: "",
    type: "backend",
    icon: React.createElement(SiNestjs),
    keyFeatures: [
      "AI-powered legal document summarization",
      "PDF processing with detailed reference preservation",
      "GraphQL API for flexible data querying",
      "Advanced prompt engineering for accurate results",
      "Integration with legal databases"
    ],
    techDetails:
      "Developed using Nest.js for the backend architecture, with GraphQL for API queries. PostgreSQL database with TypeORM for data modeling. React.js frontend for user interface. Implements advanced prompt engineering techniques for AI-based text summarization."
  },
  {
    id: 3,
    title: ",",
    description:
      "A full-featured blog website with nested comments, pagination, search optimization, and frontend scrolling. Built with Sequelize for model associations and database migrations.",
    tags: [
      "React",
      "Express",
      "Nest.js",
      "PostgreSQL",
      "Sequelize",
      "JavaScript",
      "TypeScript"
    ],
    imageUrl: "https://i.imgur.com/rma7zRk.png",
    githubUrl: "https://github.com/connect2abdulaziz/blog-backend",
    liveUrl: "https://blog-frontend-three-nu.vercel.app/",
    type: "fullstack",
    icon: React.createElement(FaReact),
    keyFeatures: [
      "Rich text editor for blog creation",
      "Threaded comment system with nesting",
      "Advanced search functionality",
      "Pagination for optimized performance",
      "Responsive design for all devices"
    ],
    techDetails:
      "Frontend built with React for component-based UI. Backend uses Express and Nest.js for API endpoints. PostgreSQL database with Sequelize ORM for data modeling and migrations. Implemented in both JavaScript and TypeScript for type safety."
  },
  {
    id: 4,
    title: "Invoice Management System",
    description:
      "A comprehensive invoice management platform developed with Next.js. Includes features for managing clients, invoices, and payments efficiently.",
    tags: ["Next.js", "JavaScript", "TypeScript", "Vercel Deployment"],
    imageUrl: "https://i.imgur.com/OBBMqZc.png",
    githubUrl:
      "https://github.com/connect2abdulaziz/nextjs-invoice-management-system",
    liveUrl: "https://invoice-management-system-olive.vercel.app/dashboard",
    type: "web",
    icon: React.createElement(SiNextdotjs),
    keyFeatures: [
      "Client management dashboard",
      "Invoice generation and templating",
      "Payment tracking and reminders",
      "Financial reporting tools",
      "Export functionality for documents"
    ],
    techDetails:
      "Built with Next.js for server-side rendering and optimal performance. Uses JavaScript and TypeScript for type safety. Deployed on Vercel for reliable hosting. Features a responsive dashboard interface for desktop and mobile use."
  },
  {
    id: 5,
    title: "StitchXcel - E-commerce Website",
    description:
      "An e-commerce platform designed for seamless shopping experience, developed with Python and JavaScript.",
    tags: ["Python", "JavaScript", "E-commerce", "MongoDB", "JQuery"],
    imageUrl: "https://i.imgur.com/2R6AbrY.png",
    githubUrl: "https://github.com/connect2abdulaziz/StitchXcel",
    liveUrl: "",
    type: "web",
    icon: React.createElement(FaCode),
    keyFeatures: [
      "Product catalog with filtering options",
      "Shopping cart and checkout system",
      "User authentication and profiles",
      "Order tracking functionality",
      "Payment processing integration"
    ],
    techDetails:
      "Built with Python for backend logic, JavaScript and jQuery for frontend interactivity. MongoDB for product and user data storage. Features responsive design for mobile and desktop shopping experiences."
  },
  {
    id: 6,
    title: "",
    description: "",
    tags: ["Kotlin", "Android SDK", "Firebase", "Mobile Development"],
    imageUrl: "",
    githubUrl: "",
    liveUrl: "",
    type: "mobile",
    icon: React.createElement(FaMobileAlt),
    keyFeatures: [
      "User matching based on shared interests",
      "Location-based community suggestions",
      "In-app messaging and networking",
      "Resource directory for newcomers",
      "Event discovery and scheduling"
    ],
    techDetails:
      "Developed with Kotlin for Android platform. Utilizes Firebase for backend services including authentication, real-time database, and cloud messaging. Implements Android SDK features for responsive UI and location services."
  },
  {
    id: 7,
    title: "",
    description: "",
    tags: ["C++", "OOP", "Console App", "Data Structures"],
    imageUrl: "",
    githubUrl: "",
    liveUrl: "",
    type: "desktop",
    icon: React.createElement(FaCode),
    keyFeatures: [
      "Hospital patient and staff management",
      "School enrollment and grade tracking",
      "Banking transactions and account management",
      "Inventory control systems",
      "Data structure implementations"
    ],
    techDetails:
      "Developed in C++ using object-oriented programming principles. Implements various data structures and algorithms for efficient data handling. Console-based interface with text menus and command processing."
  }
]as const;

