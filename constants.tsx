
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
  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.16.28-2.28-.28-3.28a3.99 3.99 0 0 0-1.39-.94c-.55-.17-1.12-.23-1.69-.23-1.5 0-3 .5-4.5 1.5-1.5-1-3-1.5-4.5-1.5A5.4 5.4 0 0 0 2 7.52c-.56 1-.56 2.12-.28 3.28-1 1-1.5 2.5-1.5 4C.22 17.5 3 20 6 20c.5 1.5 1 3 1 4.5" />
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
  <>
    <path d="M8 19V5h4v14H8z" />
    <path d="M14 19v-6h4v6h-4z" />
    <path d="M20 19V9h4v10h-4z" />
  </>
);

export const MailIcon = createIcon(
  <>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </>
);

export const LinkedinIcon = createIcon(
  <>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </>
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
