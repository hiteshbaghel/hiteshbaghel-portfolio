
import React from 'react';

// --- ICONS ---
// Using simple SVG components for icons
// These props allow passing className and other SVG attributes
const createIcon = (path: React.ReactNode) => (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {path}
  </svg>
);

export const SunIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m4.93 19.07 1.41-1.41" />
    <path d="m17.66 6.34 1.41-1.41" />
  </>
);

export const MoonIcon = createIcon(<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />);

export const UserIcon = createIcon(
  <>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </>
);

export const CodeIcon = createIcon(
  <>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </>
);

export const FolderKanbanIcon = createIcon(
  <>
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    <path d="M8 10v4" />
    <path d="M12 10v2" />
    <path d="M16 10v6" />
  </>
);

export const GraduationCapIcon = createIcon(
  <>
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.084a1 1 0 0 0 0 1.838l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M22 10v6" />
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
  </>
);

export const PhoneIcon = createIcon(
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
);

export const GithubIcon = createIcon(
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
);

export const ExternalLinkIcon = createIcon(
  <>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </>
);

export const TrophyIcon = createIcon(
  <>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </>
);

export const CertificateIcon = createIcon(
  <>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <circle cx="10" cy="16" r="2" />
    <path d="m10 10-2 3 2 3 2-3-2-3Z" />
  </>
);

export const LeetcodeIcon = createIcon(
  <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.396.702-1.863l4.332-4.364c.467-.467 1.112-.662 1.824-.662s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.853 1.494 3.835l10.1 10.101c.514.515 1.366.497 1.902-.038.535-.536.553-1.387.037-1.901l-2.467-2.503a5.055 5.055 0 0 0 2.445-1.337l2.609 2.636c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901z" />
);

export const MailIcon = createIcon(
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.547z" />
);

export const LinkedinIcon = createIcon(
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
);

export const ChevronDownIcon = createIcon(<path d="m6 9 6 6 6-6" />);

export const DesktopIcon = createIcon(
  <>
    <rect width="18" height="12" x="3" y="4" rx="2" />
    <line x1="12" y1="16" x2="12" y2="20" />
    <line x1="8" y1="20" x2="16" y2="20" />
  </>
);

export const DownloadIcon = createIcon(
  <>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </>
);

export const CheckIcon = createIcon(<path d="M20 6 9 17l-5-5" />);

export const LightbulbIcon = createIcon(
  <>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.7 10.2 18 9 18 7.5a6 6 0 0 0-12 0c0 1.5.3 2.7 1.5 3.5.7.7 1.2 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </>
);

// --- Official Color Technology Icons ---




// --- PORTFOLIO DATA ---

export const portfolioData = {
  name: "Hitesh Baghel",
  title: "Java Backend Developer",
  description: "Backend Engineer skilled in building scalable and efficient applications using Java, Spring Boot, and MySQL. Hands-on experience in API development, database management, and system integration through academic and personal projects. Strong problem-solving abilities with solid understanding of DSA, OOP, and software engineering principles. Enthusiastic about applying technical expertise to impactful projects while continuously learning.",
  about: {
    summary: "Hello! I'm Hitesh Baghel, a backend-focused developer passionate about building scalable and efficient applications. My journey into software engineering is driven by a desire to solve complex problems and create impactful digital solutions using Java, Spring Boot, and MySQL. With hands-on experience in API development, database management, and system integration from academic and personal projects, I have a strong foundation in Object-Oriented Programming, Data Structures, and core software engineering principles. I am enthusiastic about applying my technical expertise to real-world challenges and am committed to continuous learning and growth in the tech industry.",
  },
  contact: {
    email: "hiteshbaghel03@gmail.com",
    github: "https://github.com/hiteshbaghel",
    linkedin: "https://in.linkedin.com/in/hiteshbaghel",
    leetcode: "https://leetcode.com/u/hiteshbaghel/",
  },
  skills: [
    { name: 'Java', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" /> },
    { name: 'Spring Boot', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" /> },
    { name: 'Hibernate', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" alt="Hibernate" /> },
    { name: 'MySQL', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" /> },
    { name: 'React', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /> },
    { name: 'JavaScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /> },
    { name: 'HTML5', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" /> },
    { name: 'CSS3', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" /> },
    { name: 'Tailwind', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" /> },
    { name: 'Git', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" /> },
    { name: 'Docker', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" /> },
    { name: 'C++', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" /> },
    { name: 'Postman', icon: <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" /> },
    { name: 'JUnit', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg" alt="JUnit" /> },
  ],
  projects: [
    {
      title: 'SkillSyncAI – AI Powered Placement Preparation Platform',
      description: 'Designed and implemented a full-stack platform with AI-driven mock interviews, quiz generation, ML-based placement prediction, leaderboard & analytics. Enhanced placement readiness for students.',
      tags: ['AI/ML', 'Full-Stack', 'EdTech'],
      stack: ['React', 'Java', 'Spring Boot', 'MySQL', 'Vercel', 'Render'],
      links: {
        demo: '#', // Add your actual demo link here
        github: 'https://github.com/hiteshbaghel/SkillSyncAI', // Add your actual github link here
      }
    },
    {
      title: 'ByteWise - A Toolkit for Engineering Success',
      description: 'Engineered a comprehensive academic toolkit with semester resources, Razorpay payments, certified course showcase, and admin dashboard with CRUD operations and analytics.',
      tags: ['Full-Stack', 'Academic Tool', 'E-commerce'],
      stack: ['React', 'Java', 'Spring Boot', 'MySQL', 'Vercel', 'Render'],
      links: {
        demo: '#', // Add your actual demo link here
        github: 'https://github.com/hiteshbaghel/ByteWise', // Add your actual github link here
      }
    }
  ],
  education: [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Mahakal Institute of Technology, Ujjain',
      duration: 'Sep 2022 - Jun 2026',
      icon: <DesktopIcon />,
    },
    {
      degree: 'Intermediate (Higher Secondary Education)',
      institution: 'Padmaja Higher Secondary School, Dewas',
      duration: 'Jun 2021 - May 2022',
      icon: <GraduationCapIcon />,
    },
    {
      degree: 'Matriculation (Secondary Education)',
      institution: 'The Guardian High School, Dewas',
      duration: 'Jun 2019 - May 2020',
      icon: <GraduationCapIcon />,
    },
  ],
  achievements: [
    "Google Cloud Arcade Facilitator Cohort 2 (2025) - Selected for facilitator program, mentoring peers in cloud-native application deployment.",
    "ProjectExpo 4.0, MIT Ujjain (2025) - First Place Winner & Cash Prize for innovative project showcasing technical skills and problem-solving.",
    "Codathon, MIT Ujjain – Recognized as Top Performer in competitive coding event demonstrating strong algorithmic thinking.",
  ],
  certifications: [
    "C++ & Java, Database & MySQL - AK Soft",
    "Java, Spring 6 & Spring Boot 3 – Telusko (Udemy)",
    "Java Developer Internship - Codsoft",
  ],
};
