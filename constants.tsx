
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
  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
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
  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.843 5.843 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
);

export const MailIcon = createIcon(
  <>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </>
);

export const LinkedinIcon = createIcon(
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-1.998 2.002A2 2 0 0 1 4 2z" />
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
