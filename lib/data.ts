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
    title: "Senior Software Engineer & Team Lead",
    location: "Developer Tag, Lahore, Pakistan",
    description: "Leading development teams in a full-time hybrid role. Specializing in MERN/Next.js backend architecture, advanced DevOps solutions, and AI integration with LangChain/LangGraph. Implementing containerized deployments, payment gateways, and managing cloud databases across multiple projects.",
    icon: React.createElement(MdSupervisorAccount),
    date: "Jan 2025 - Present",
    type: "fulltime",
    skills: [
      "MERN Stack",
      "Next.js",
      "DevOps",
      "LangChain",
      "LangGraph",
      "LLM Integration",
      "AWS",
      "Railway",
      "Docker",
      "Stripe",
      "MongoDB Atlas",
      "CI/CD",
      "Team Leadership",
      "Git Workflow",
      "Project Management"
    ],
    details: [
      "Leading backend architecture decisions and development teams",
      "Building scalable MERN/Next.js backend systems",
      "Developing AI solutions with LangChain and LangGraph",
      "Implementing advanced DevOps pipelines with AWS and Railway",
      "Setting up Docker containerization for consistent deployments",
      "Optimizing Git workflows and deployment strategies",
      "Stripe payment gateway integration for e-commerce solutions",
      "MongoDB Atlas configuration and performance optimization",
      "Managing multiple projects simultaneously",
      "Mentoring junior developers on best practices",
      "Establishing efficient workflows and coding standards"
    ]
  },
  {
    id: 2,
    title: "Software Engineer",
    location: "DiveScale, Lahore, Pakistan",
    description: "Working as a Full Stack & AI Developer with expertise in Next.js, MERN stack, and AI technologies. Building applications from scratch following clean and DRY code principles. Implementing state management with Zustand and React Hooks while developing scalable backend services.",
    icon: React.createElement(BsCodeSquare),
    date: "Jan 2025 - Present",
    type: "fulltime",
    skills: [
      "Next.js", 
      "MERN Stack", 
      "Zustand", 
      "React Hooks", 
      "Node.js", 
      "Express.js", 
      "Nest.js", 
      "Python", 
      "Django", 
      "FastAPI", 
      "LangChain", 
      "OpenAI API", 
      "AWS", 
      "Vercel", 
      "Git"
    ],
    details: [
      "1+ years of experience in full-stack and AI development",
      "Built applications from scratch with clean and DRY code principles",
      "Expertise in Zustand, React Hooks, and optimized state handling",
      "End-to-end development with MongoDB, Express, React, and Node.js",
      "Backend development with best practices for scalable APIs",
      "Experience with LangChain, OpenAI API, LLM integration, and RAGs",
      "Optimizing prompts for efficiency and accuracy in AI applications",
      "Hands-on experience with AWS, Vercel, and CI/CD pipelines",
      "Strong understanding of Git workflows, PR reviews, and code quality"
    ]
  },
  {
    id: 3,
    title: "Bachelor of Science in Computer Science",
    location: "Punjab University College Of Information Technology, Lahore, Pakistan",
    description: "Graduated with a CGPA of 3.53, gained a solid foundation in computer science concepts including programming, algorithms, and artificial intelligence.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
    type: "education",
    skills: ["Programming", "Algorithms", "Artificial Intelligence", "OOP", "DSA"],
    details: [
      "Graduated with a CGPA of 3.53",
      "Specialized in computer science fundamentals",
      "Studied advanced algorithms and data structures",
      "Conducted research in artificial intelligence",
      "Completed multiple practical programming projects"
    ]
  },
  {
    id: 4,
    title: "Associate Software Engineer",
    location: "Kwanso, Lahore, Pakistan",
    description: "Specialized in backend optimization, bug fixing, clean and DRY coding, and efficient Git collaboration as a Full Stack Developer with expertise in MERN, Next.js, and Nest.js.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2024 - Dec 2024",
    type: "fulltime",
    skills: ["MERN Stack", "Next.js", "Nest.js", "Backend Optimization", "Git"],
    details: [
      "Specialized in backend optimization and performance tuning",
      "Implemented bug fixes across multiple applications",
      "Followed clean and DRY coding principles",
      "Collaborated efficiently using Git workflows",
      "Worked extensively with MERN stack, Next.js, and Nest.js"
    ]
  },
  {
    id: 5,
    title: "Trainee Engineer",
    location: "Pyflow Labs, Lahore, Pakistan",
    description: "Worked part-time as a trainee, creating responsive apps with clean code, collaborating on design and performance, and contributing to the full development lifecycle.",
    icon: React.createElement(FaReact),
    date: "March 2024 - June 2024",
    type: "internship",
    skills: ["React", "Responsive Design", "Clean Code", "Frontend Development"],
    details: [
      "Created responsive applications using React",
      "Practiced clean code principles in real-world projects",
      "Collaborated with design teams for optimal UI/UX",
      "Contributed to performance optimization",
      "Participated in the full development lifecycle"
    ]
  },
  {
    id: 6,
    title: "Teacher Assistant",
    location: "PUCIT, Lahore, Pakistan",
    description: "Assisted students in programming labs, evaluated quizzes and assignments, and provided support in courses like ITC, PF, OOP, DSA, AI, and WEB.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
    type: "parttime",
    skills: ["Teaching", "Assessment", "Programming", "Mentoring"],
    details: [
      "Assisted students in programming laboratory sessions",
      "Evaluated quizzes and programming assignments",
      "Provided support in various computer science courses",
      "Mentored students on programming concepts and best practices",
      "Helped develop course materials and exercises"
    ]
  },
] as const;

export const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", proficiency: 70 },
      { name: "CSS", proficiency: 85 },
      { name: "JavaScript", proficiency: 90 },
      { name: "TypeScript", proficiency: 90 },
      { name: "React", proficiency: 85 },
      { name: "Next.js", proficiency: 95 },
      { name: "Bootstrap", proficiency: 75 },
      { name: "Tailwind", proficiency: 85 },
      { name: "Styled Components", proficiency: 80 },
      { name: "Material UI", proficiency: 85 },
      { name: "Shadcn", proficiency: 80 },
      { name: "Zustand", proficiency: 85 },
      { name: "React Hooks", proficiency: 90 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", proficiency: 95 },
      { name: "Express", proficiency: 95 },
      { name: "Nest.js", proficiency: 80 },
      { name: "GraphQL", proficiency: 65 },
      { name: "PostgreSQL", proficiency: 90 },
      { name: "MySQL", proficiency: 85 },
      { name: "MongoDB", proficiency: 85 },
      { name: "SQLite", proficiency: 75 },
      { name: "Firebase", proficiency: 80 },
      { name: "Flask", proficiency: 70 },
      { name: "Django REST", proficiency: 75 },
      { name: "FastAPI", proficiency: 80 },
    ],
  },
  {
    category: "AI & ML Development",
    skills: [
      { name: "LangChain", proficiency: 75 },
      { name: "OpenAI API", proficiency: 85 },
      { name: "LLM Integration", proficiency: 95 },
      { name: "RAGs", proficiency: 75 },
      { name: "Prompt Engineering", proficiency: 85 },
      { name: "AI Agents", proficiency: 95 },
      { name: "NLP", proficiency: 75 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS", proficiency: 75 },
      { name: "Vercel", proficiency: 85 },
      { name: "Railway", proficiency: 80 },
      { name: "Docker", proficiency: 95 },
      { name: "CI/CD", proficiency: 70 },
      { name: "MongoDB Atlas", proficiency: 85 },
      { name: "Git", proficiency: 95 },
      { name: "GitHub", proficiency: 90 },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", proficiency: 90 },
      { name: "TypeScript", proficiency: 90 },
      { name: "Python", proficiency: 80 },
      { name: "C++", proficiency: 90 },
      { name: "C#", proficiency: 80 },
      { name: "C", proficiency: 90 },
      { name: "Java", proficiency: 60 },
      { name: "Kotlin", proficiency: 70 },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Stripe", proficiency: 80 },
      { name: "AJAX", proficiency: 80 },
      { name: "JSON", proficiency: 85 },
      { name: "State Management", proficiency: 85 },
      { name: "RESTful APIs", proficiency: 90 },
      { name: "Deployment", proficiency: 85 },
    ],
  },
  {
    category: "Professional Skills",
    skills: [
      { name: "Full Stack Development", proficiency: 90 },
      { name: "Team Leadership", proficiency: 85 },
      { name: "Problem Solving", proficiency: 90 },
      { name: "Team Collaboration", proficiency: 85 },
      { name: "Agile Methodologies", proficiency: 80 },
      { name: "Project Management", proficiency: 80 },
      { name: "Code Quality", proficiency: 85 },
      { name: "Mentoring", proficiency: 80 },
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
    title: "Voice Craft - FYP",
    description:
      "Revolutionizing communication and entertainment, this voice clone project uses advanced AI and NLP technology to replicate voices. It has applications in virtual assistants, voiceovers, and personalized interactions across industries like entertainment and gaming.",
    tags: ["Python", "React.js", "MongoDB", "Machine Learning", "NLP"],
    imageUrl: "https://i.imgur.com/28n1ZkZ.png",
    githubUrl: "",
    liveUrl: "",
    type: "ai",
    icon: React.createElement(FaCode),
    keyFeatures: [
      "Voice replication using advanced AI algorithms",
      "Natural language processing for authentic speech patterns",
      "Cross-platform integration capabilities",
      "Real-time voice synthesis and modification",
      "User-friendly interface for easy voice management"
    ],
    techDetails: "Built with Python for backend processing, React.js for the frontend interface, and MongoDB for data storage. Utilizes machine learning models and NLP techniques to analyze and replicate voice patterns."
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
    type: "backend",
    icon: React.createElement(SiNestjs),
    keyFeatures: [
      "AI-powered legal document summarization",
      "PDF processing with detailed reference preservation",
      "GraphQL API for flexible data querying",
      "Advanced prompt engineering for accurate results",
      "Integration with legal databases"
    ],
    techDetails: "Developed using Nest.js for the backend architecture, with GraphQL for API queries. PostgreSQL database with TypeORM for data modeling. React.js frontend for user interface. Implements advanced prompt engineering techniques for AI-based text summarization."
  },
  {
    id: 3,
    title: "Blog Website - Full Stack",
    description:
      "A full-featured blog website with nested comments, pagination, search optimization, and frontend scrolling. Built with Sequelize for model associations and database migrations.",
    tags: ["React", "Express", "Nest.js", "PostgreSQL", "Sequelize", "JavaScript", "TypeScript"],
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
    techDetails: "Frontend built with React for component-based UI. Backend uses Express and Nest.js for API endpoints. PostgreSQL database with Sequelize ORM for data modeling and migrations. Implemented in both JavaScript and TypeScript for type safety."
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
    techDetails: "Built with Python for backend logic, JavaScript and jQuery for frontend interactivity. MongoDB for product and user data storage. Features responsive design for mobile and desktop shopping experiences."
  },
  {
    id: 4,
    title: "Invoice Management System",
    description:
      "A comprehensive invoice management platform developed with Next.js. Includes features for managing clients, invoices, and payments efficiently.",
    tags: ["Next.js", "JavaScript", "TypeScript", "Vercel Deployment"],
    imageUrl: "https://i.imgur.com/OBBMqZc.png",
    githubUrl: "https://github.com/connect2abdulaziz/nextjs-invoice-management-system",
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
    techDetails: "Built with Next.js for server-side rendering and optimal performance. Uses JavaScript and TypeScript for type safety. Deployed on Vercel for reliable hosting. Features a responsive dashboard interface for desktop and mobile use."
  },
  {
    id: 6, 
    title: "SettleEase - Mobile App",
    description: "SettleEase helps newcomers settle into new cities or countries by connecting them with people who share their language, profession, or interests, making it easier to adapt and build a supportive network.", 
    tags: ["Kotlin", "Android SDK", "Firebase", "Mobile Development"],
    imageUrl: "https://i.imgur.com/61fvLSe.png",
    githubUrl: "https://github.com/connect2abdulaziz/SettleEase",
    liveUrl: "https://slideme.org/application/settleease",
    type: "mobile",
    icon: React.createElement(FaMobileAlt),
    keyFeatures: [
      "User matching based on shared interests",
      "Location-based community suggestions",
      "In-app messaging and networking",
      "Resource directory for newcomers",
      "Event discovery and scheduling"
    ],
    techDetails: "Developed with Kotlin for Android platform. Utilizes Firebase for backend services including authentication, real-time database, and cloud messaging. Implements Android SDK features for responsive UI and location services."
  },
  {
    id: 7,
    title: "Console Applications",
    description:
      "Various console applications such as Hospital Management, School Management, and Bank Management systems built with a focus on functionality and data handling.",
    tags: ["C++", "Console Applications", "OOP", "DSA", "ALGO"],
    imageUrl: "https://i.imgur.com/pNCI60X.png",
    githubUrl: "https://github.com/connect2abdulaziz?tab=repositories&q=&type=source&language=c%2B%2B&sort=",
    liveUrl: "https://connect2abdulaziz.github.io/abdulaziz/portfolio.html",
    type: "desktop",
    icon: React.createElement(FaCode),
    keyFeatures: [
      "Hospital patient and staff management",
      "School enrollment and grade tracking",
      "Banking transactions and account management",
      "Inventory control systems",
      "Data structure implementations"
    ],
    techDetails: "Developed in C++ using object-oriented programming principles. Implements various data structures and algorithms for efficient data handling. Console-based interface with text menus and command processing."
  }
] as const;

