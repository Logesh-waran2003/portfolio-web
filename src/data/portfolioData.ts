// Central data file for portfolio content

// Personal Information
export const personalInfo = {
  name: "Logeshwaran T S",
  title: "Full Stack Developer",
  shortBio: "Building thoughtful software solutions with simplicity and purpose.",
  email: "logeshwaransrini@gmail.com",
  phone: "9566866600",
  location: "Chennai, India",
  socialLinks: {
    github: "https://github.com/Logesh-waran2003",
    twitter: "https://x.com/Logesh236",
    linkedin: "https://linkedin.com/in/logeshwaran-t-s",
  }
};

// Project Information
export type BaseProject = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string | null;
  demoUrl?: string | null;
  year: string;
  screenshots?: string[]; // Array of image paths for project screenshots
  futureRoadmap?: string[]; // Future plans for the project
};

export type ProfessionalProject = BaseProject & {
  type: "professional";
  companyName: string;
  role: string;
  impact: string[];
};

export type PersonalProject = BaseProject & {
  type: "personal";
  thought: string;
  problem: string;
  approach: string;
  progress?: string; // Current progress status
  ideation?: string; // Initial ideas and inspiration
};

export type Project = ProfessionalProject | PersonalProject;

// Professional Projects
export const professionalProjects: ProfessionalProject[] = [
  {
    id: "CS",
    type: "professional",
    name: "Cloud Security Product (Clousec)",
    description: "CSPM Tool for AWS compliance and security assessment",
    companyName: "Stigmata Techno Solutions",
    role: "Frontend Developer & Cloud Engineer",
    githubUrl: null,
    demoUrl: null,
    technologies: ["React", "AWS SDK", "CloudFormation", "RTK Query", "Tailwind CSS"],
    year: "2024",
    impact: [
      "Automated cloud infrastructure provisioning using AWS CloudFormation (IaC), ensuring consistent deployments across dev, test, and production environments, reducing manual errors by 100%",
      "Engineered a real-time AWS compliance engine utilizing AWS SDKs, assessing infrastructure against MAS and CIS benchmarks, which reduced critical misconfigurations by 60% and cut audit preparation time by 50%",
      "Built reusable React components standardizing UI/UX and accelerating project timelines by 30% across enterprise deployments",
      "Optimized API efficiency using RTK Query, pagination, and code splitting, improving app load speed by 40% and reducing server costs by 25%"
    ],
    screenshots: [
      "/images/projects/clousec/dashboard.png",
      "/images/projects/clousec/compliance-report.png"
    ]
  },
  {
    id: "EA",
    type: "professional",
    name: "E-auction",
    description: "Next.js/PostgreSQL auction system with role-based access control",
    companyName: "Stigmata Techno Solutions",
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/Logesh-waran2003/e-auction", // Update with actual link when available
    demoUrl: null,
    technologies: ["Next.js", "PostgreSQL", "NextAuth", "Prisma ORM"],
    year: "2025",
    impact: [
      "Built with role-based access control, delivering client POC ahead of schedule",
      "Reduced dev time by 40% with NextAuth integration",
      "Optimized DB operations by 25% using Prisma ORM",
      "Created company-wide starter template now used across multiple projects"
    ],
    screenshots: [
      "/images/projects/e-auction/login.png",
      "/images/projects/e-auction/auction-list.png",
      "/images/projects/e-auction/bidding-interface.png"
    ]
  },
  {
    id: "LT",
    type: "professional",
    name: "EMIS & Loading Tree Projects",
    description: "Enterprise management information system and loading optimization",
    companyName: "L&T",
    role: "Full-Stack Developer",
    githubUrl: null,
    demoUrl: null,
    technologies: ["SQL", "Stored Procedures", "React", "Node.js"],
    year: "2024",
    impact: [
      "Revamped SQL stored procedures for EMIS, reducing data processing latency by 50% for datasets exceeding 1M records",
      "Resolved 20+ high-priority UAT and Production bugs, ensuring system stability and seamless functionality",
      "Collaborated closely with cross-functional teams throughout the end-to-end Software Development Life Cycle (SDLC), ensuring seamless project execution"
    ],
    screenshots: [
      "/images/projects/lt/dashboard.png",
      "/images/projects/lt/data-processing.png"
    ]
  }
  /* Commented out as requested
  {
    id: "WF",
    type: "professional",
    name: "Weather Forecasting App",
    description: "Real-time weather data application with city customization",
    companyName: "Teachnook IIT-Bhuvaneshwar",
    role: "Web Development Intern",
    githubUrl: "https://github.com/Logesh-waran2003/weather-app", // Update with actual link when available
    demoUrl: null,
    technologies: ["JavaScript", "Weather API", "HTML/CSS"],
    year: "2022",
    impact: [
      "Created a Weather Forecasting App integrating live weather data through APIs, providing users with real-time weather conditions and customizable city forecasts",
      "Implemented responsive design principles ensuring optimal user experience across all device types",
      "Utilized modern JavaScript practices to create an efficient and maintainable codebase"
    ],
    screenshots: [
      "/images/projects/weather/main-view.png",
      "/images/projects/weather/city-selection.png"
    ]
  }
  */
];

// Personal Projects
export const personalProjects: PersonalProject[] = [
  {
    id: "MM",
    type: "personal",
    name: "Money Manager",
    description: "Cross-platform financial tracking app with web and mobile sync",
    githubUrl: "https://github.com/Logesh-waran2003/money-manager", // Update with actual link when available
    demoUrl: null,
    technologies: ["Next.js", "React Native", "PostgreSQL", "Regex Parsing"],
    year: "2025",
    problem: "I needed a way to track my finances across devices without manual data entry, while maintaining privacy and having offline access.",
    approach: "I built a system that automatically parses SMS notifications and UPI transactions, stores them locally first for offline access, and syncs to the cloud when connected.",
    thought: "Financial tracking apps often require too much manual input or don't respect privacy. I wanted to create something that would work for me with minimal interaction while giving me complete ownership of my data. The cross-platform approach ensures I can track finances anywhere, and the automation removes the friction that usually causes people to abandon financial tracking.",
    screenshots: [
      "/images/projects/money-manager/dashboard.png",
      "/images/projects/money-manager/transaction-list.png",
      "/images/projects/money-manager/analytics.png"
    ],
    progress: "Currently in active development. Core functionality is complete, working on enhancing the analytics dashboard and improving the sync mechanism.",
    ideation: "The idea came from my frustration with existing financial apps that either required too much manual input or didn't provide the privacy controls I wanted. I sketched the initial concept focusing on automation and cross-platform availability.",
    futureRoadmap: [
      "Add budget planning features",
      "Implement AI-powered spending insights",
      "Create browser extension for desktop transaction tracking"
    ]
  }
];

// Combined projects for convenience
export const allProjects: Project[] = [...professionalProjects, ...personalProjects];

// Skills (keep it minimal, focus on what you want to highlight)
export const skills = [
  { 
    category: "Frontend", 
    items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "TypeScript"] 
  },
  { 
    category: "Backend & Cloud", 
    items: ["Node.js", "WebSocket", "Docker", "AWS", "Monorepo"] 
  },
  { 
    category: "Database", 
    items: ["PostgreSQL", "MSSQL", "Prisma ORM", "SQLite", "Redis"] 
  },
  { 
    category: "Tools & Others", 
    items: ["Git", "React Native", "Linux", "AWS CloudFormation"] 
  },
];

// About information - keep it concise
export const about = {
  bio: "I'm a Full Stack Developer with experience in building web and mobile applications, cloud infrastructure, and database optimization. Currently working at Stigmata Techno Solutions as a Jr. Full Stack Developer.",
  education: {
    degree: "B.E Computer Science and Engineering",
    institution: "St.Joseph's College of Engineering",
    period: "2020 - 2024",
    location: "Chennai, India"
  },
  experience: [
    {
      position: "Jr. Full Stack Developer",
      company: "Stigmata Techno Solutions",
      period: "May 2024 - Present",
      location: "Chennai, India",
      description: "Working on cloud security products and enterprise applications."
    },
    {
      position: "Web Development Internship",
      company: "Teachnook IIT-Bhuvaneshwar",
      period: "Oct 2022 - Dec 2022",
      location: "Remote",
      description: "Created a Weather Forecasting App integrating live weather data through APIs."
    }
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "2024",
      url: "https://www.credly.com/badges/7e0b3907-6467-4dc4-b108-86601677f01d/public_url"
    }
  ],
  achievements: [
    "1st place in the Samhita Hackathon 2024, organized by MIT Chennai",
    "Open-source contributor who successfully completed Hacktoberfest 2024 with 4+ accepted Pull Requests",
    "Awarded Best Employee for exceptional performance",
    "AWS Certified Solutions Architect – Associate certification"
  ]
};
