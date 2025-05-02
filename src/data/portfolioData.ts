// Central data file for portfolio content

// Personal Information
export const personalInfo = {
  name: "Logeshwaran",
  title: "Software Developer",
  shortBio: "Building thoughtful software solutions with simplicity and purpose.",
  email: "logeshwaransrini@gmail.com",
  socialLinks: {
    github: "https://github.com/Logesh-waran2003",
    twitter: "https://twitter.com/your-twitter", // Update with your actual Twitter handle
    linkedin: "https://linkedin.com/in/your-linkedin", // Update with your actual LinkedIn profile
  }
};

// Project Information
export const projects = [
  {
    id: "OG",
    name: "Oxygenie",
    description: "Mac app to check air quality at your current location",
    githubUrl: "https://github.com/Logesh-waran2003/oxygenie", // GitHub repository URL
    demoUrl: "https://oxygenie-demo.vercel.app", // Live demo URL (if available)
    blog: "/blog/oxygenie",
    thought: "I built Oxygenie after realizing how air quality affects productivity. The app focuses on delivering essential information without overwhelming the user, reflecting my belief that software should solve specific problems without unnecessary complexity.",
    technologies: ["Swift", "CoreLocation", "AQI API"], // Technologies used
    year: "2023"
  },
  {
    id: "CW",
    name: "Calendar of Wisdom",
    description: "Daily insight and reflections from A Calendar of Wisdom",
    githubUrl: "https://github.com/Logesh-waran2003/calendar-wisdom", // GitHub repository URL
    demoUrl: null, // No demo available
    thought: "This project stemmed from my interest in timeless wisdom. I wanted to create something that delivers value through simplicity - just one meaningful quote each day without distractions or notifications.",
    technologies: ["React Native", "Firebase", "Redux"], // Technologies used
    year: "2022"
  },
  {
    id: "GB",
    name: "Goggins Blocker",
    description: "Goggins inspired content blocking Chrome Extension",
    githubUrl: "https://github.com/Logesh-waran2003/goggins-blocker", // GitHub repository URL
    demoUrl: "https://chrome.google.com/webstore/detail/goggins-blocker/example", // Chrome Web Store URL (if available)
    blog: "/blog/goggins-blocker",
    thought: "Inspired by David Goggins' discipline, I created this extension to help users focus by blocking distracting websites. The minimal UI and straightforward functionality reflect my approach to problem-solving - direct and effective.",
    technologies: ["JavaScript", "Chrome Extensions API", "HTML/CSS"], // Technologies used
    year: "2023"
  },
];

// Skills (keep it minimal, focus on what you want to highlight)
export const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java"] },
  { category: "Frontend", items: ["React", "Next.js", "HTML/CSS", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "Django", "SQL/NoSQL"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "CI/CD"] },
];

// About information - keep it concise
export const about = {
  bio: "I'm a software developer focused on building clean, efficient solutions to real problems. I believe in simplicity over complexity and purpose over features.",
  philosophy: "My approach to development centers on understanding the core problem before writing a single line of code. I value maintainable solutions that solve specific needs without unnecessary complexity.",
  interests: ["Open source contribution", "Minimalist design", "Performance optimization", "User-centered development"]
};
