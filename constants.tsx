
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

const JavaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" {...props}>
    <path fill="#5382A1" d="M193.32,185.45c5.32,11.32,1.32,16.65-4,19.32c-10.65,5.32-26.62,2.66-29.28-3.32c-2-4-1.32-8,2-12.65c3.32-4,8-6.65,14-8.65S189.32,178.78,193.32,185.45z" />
    <path fill="#F89917" d="M128.53,142.13c-12-10-25.3-15.31-38.59-15.31c-10,0-17.31,2-23.29,6.65c-6,4-8.65,10-8.65,17.31c0,8,4,14.65,10.65,18.65c6.65,4.66,16.64,6.66,28.62,4.66c7.32-1.33,14-3.33,20-6c6.66-2.67,12-6,14.65-8.66c4-4.67,4.66-8.67,1.32-13.32C135.85,142.79,132.53,142.13,128.53,142.13z M112.55,176.12c-4,2-8.65,3.33-14,4c-10,1.33-18-2-21.29-6c-3.33-4-3.33-9.32,0-14c3.33-4,8.65-6,14.65-6s12,2,16.65,5.32c4,2.67,6,6.66,6.65,10.66C116.54,176.12,114.55,176.12,112.55,176.12z" />
    <path fill="#F89917" d="M188.66,67.5c-6.66-2-14-2.67-22-1.33c-10,1.33-18,6-23.29,12.65c-4.66,6-6.66,13.32-5.32,21.29c1.33,8.66,6,16,13.31,19.97c8,4,16.65,4,24.63,1.33c10-3.33,16.65-9.32,20-18.64c2.66-6.66,2.66-13.31,0-20C193.98,72.16,191.32,68.83,188.66,67.5z M180,111.53c-2,4.66-6,8-10.65,9.32c-5.33,1.33-10.66,0-15.32-3.33c-4-2.66-6.66-6.66-8-11.31c-1.33-5.33,0-11.32,4-16c3.33-4,8.65-6.66,14.65-7.32c5.33-.67,10,0,13.32,2.66c4,2,6.66,5.33,8,9.32C182.65,99.53,182,106.87,180,111.53z" />
    <path fill="#5382A1" d="M136.53,73.51c-2-8.66-8-14.65-16.65-17.31c-8-2-16,.67-21.29,6.66c-5.33,6-6.66,14-4,22c2,6.66,7.32,12,14.65,14.65c8.66,3.33,18,.67,24-5.33c6-6,8.65-14,6.65-22.67C140.52,75.51,138.53,73.51,136.53,73.51z M115.22,99.53c-1.33,4-4.66,6.66-8.65,7.32c-4,.67-8,0-10.66-2.66s-4.66-6.66-4-10.66c.67-4.66,4-8,8-9.32c4-1.33,8,0,10.66,2.66c2.67,2.67,4.66,6.66,4.66,10.66C115.22,98.2,115.22,98.86,115.22,99.53z" />
  </svg>
);
const SpringIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="#6DB33F" d="M12.001 2C6.478 2 2.001 6.477 2.001 12c0 2.91 1.24 5.548 3.25 7.424.328.303.85.068.85-.349V17.5c0-1.03.68-1.93 1.66-2.31 1.3-.5 2.68-.8 4.1-.8s2.81.3 4.1.8c.98.4 1.66 1.3 1.66 2.31v1.575c0 .417.522.652.85.349 2.01-1.876 3.25-4.514 3.25-7.424 0-5.523-4.477-10-10-10zM12.001 4c1.61 0 3.1.5 4.39 1.38-1.11.7-2.43 1.2-3.89 1.48-.48.09-.5.78 0 .87 1.46.28 2.78.78 3.89 1.48C15.1 10.1 13.61 10.6 12.001 10.6s-3.1-.5-4.39-1.38c1.11-.7 2.43-1.2 3.89-1.48.48-.09.5-.78 0-.87-1.46-.28-2.78-.78-3.89-1.48C8.9 4.5 10.39 4 12.001 4z" />
  </svg>
);
const MySqlIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 128" {...props}>
    <path fill="#00758F" d="M103.11,36.33c0,16.2-7.53,30.3-19.14,40.3l-2.61,2.44c-1.89,1.77-3.66,3.43-5.27,4.94c-1.8,1.69-3.48,3.23-4.96,4.55c-1.74-1.61-3.69-3.41-5.91-5.44l-2.44-2.23c-11.23-10.29-18.4-24.08-18.4-39.75c0-21.78,16.89-35.17,38.36-35.17S103.11,14.55,103.11,36.33z" />
    <path fill="#F29111" d="M72.3,95.53v11.75c0,1.93-1.57,3.5-3.5,3.5h-9.84c-1.93,0-3.5-1.57-3.5-3.5V95.53c-15-5-26.69-17.65-26.69-33.15c0-19.34,15.73-35.07,35.07-35.07s35.07,15.73,35.07,35.07C101.9,76,89.5,90.53,72.3,95.53z" />
    <path fill="#FFF" d="M65.41,74.52c-2.78,0-5.04-2.26-5.04-5.04V48.11c0-2.78,2.26-5.04,5.04-5.04c2.78,0,5.04,2.26,5.04,5.04V69.48C70.45,72.26,68.19,74.52,65.41,74.52z" />
    <path fill="#FFF" d="M84.28,38.7c0,10.6-5.83,19.66-14.24,24.16l-3.32,1.81V41.3c0-2.78-2.26-5.04-5.04-5.04c-2.78,0-5.04,2.26-5.04,5.04V70.9l-1.8-0.98c-9.08-4.95-15.34-14.65-15.34-25.99c0-15.69,12.78-28.47,28.47-28.47S84.28,23.01,84.28,38.7z" />
  </svg>
);
const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" {...props}>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);
const JavascriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 128" {...props}>
    <path fill="#F7DF1E" d="M0 0h128v128H0z" />
    <path d="M41.43 98.38c1.86 3.1 4.6 5.53 8.1 7.03 3.5 1.5 7.42.92 10.63-1.12 3.2-2.03 5.3-5.26 5.3-9.17 0-2.72-.94-5.04-2.8-6.9-1.88-1.88-4.3-3.1-7.25-4.22-2.95-1.1-6.1-2.1-9.45-3.52-3.36-1.4-6.3-3.3-8.8-5.7-2.5-2.4-3.75-5.4-3.75-8.98 0-3.6 1.2-6.7 3.6-9.3 2.4-2.6 5.6-4.5 9.6-5.7s8.6-.9 13.2 1.4c4.6 2.3 8.3 6.1 10.4 11.2l-10.8 6.5c-.8-1.8-2.1-3.2-3.9-4.3-1.8-1.1-3.9-1.3-6.2-1-2.3.3-4.3 1.2-5.9 2.7s-2.4 3.4-2.4 5.7c0 2.5.8 4.6 2.4 6.2 1.6 1.6 3.8 2.8 6.5 3.8 2.7 1 5.9 2 9.4 3.3 3.5 1.3 6.5 2.9 8.9 4.9 2.4 2 3.6 4.6 3.6 7.7 0 4.1-1.3 7.6-3.9 10.4-2.6 2.8-6.1 4.8-10.3 5.9-4.2 1.1-8.8.4-13.1-1.9s-7.6-5.8-9.8-10.4l10.9-6.5z" />
  </svg>
);
const TailwindCssIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" {...props}>
    <path fill="#38BDF8" d="M16 4.25c-6.49 0-11.75 5.26-11.75 11.75S9.51 27.75 16 27.75 27.75 22.49 27.75 16 22.49 4.25 16 4.25zm0 2.5c5.1 0 9.25 4.15 9.25 9.25s-4.15 9.25-9.25 9.25S6.75 21.1 6.75 16 10.9 6.75 16 6.75z" />
    <path fill="#38BDF8" d="M12.16 11.23c0-1.82 1.48-3.3 3.3-3.3s3.3 1.48 3.3 3.3c0 1.82-1.48 3.3-3.3 3.3s-3.3-1.48-3.3-3.3zM21.34 11.23c0-1.82 1.48-3.3 3.3-3.3s3.3 1.48 3.3 3.3c0 1.82-1.48 3.3-3.3 3.3s-3.3-1.48-3.3-3.3z" />
  </svg>
);
const CppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 128" {...props}>
    <path fill="#00599C" d="M64 0A64 64 0 1064 128 64 64 0 0064 0z" />
    <g fill="#FFF">
      <path d="M51.2 71.1h-6.2v6.2h-5.2V71.1H33.6v-5.2h6.2v-6.2h5.2v6.2h6.2v5.2z" />
      <path d="M72.4 71.1h-6.2v6.2H61v-6.2h-6.2v-5.2h6.2v-6.2H61v6.2h6.2v5.2z" />
      <path d="M57.6 44.2C44.7 44.2 34 55 34 67.8s10.7 23.6 23.6 23.6S81.2 80.7 81.2 67.8 70.4 44.2 57.6 44.2zm0 40.8c-9.5 0-17.2-7.7-17.2-17.2s7.7-17.2 17.2-17.2S74.8 58.3 74.8 67.8s-7.7 17.2-17.2 17.2z" />
    </g>
  </svg>
);
export const HibernateIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="#59666C" d="M5.365 0L9.98 7.994h8.95L14.31 0H5.366zm-.431.248L.46 7.994l4.613 8.008L9.55 8.24 4.934.248zm13.992 7.75l-4.475 7.76 4.617 7.992 4.471-7.744-4.613-8.008zm-4.905 8.006l-8.95.002L9.688 24h8.946l-4.615-7.994.001-.002Z" />
  </svg>
);
const PostmanIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 128" {...props}>
    <path fill="#FF6C37" d="M125.1,62.8L71.5,9.2c-2.3-2.3-6.1-2.3-8.5,0L5.3,66.9c-2.3,2.3-2.3,6.1,0,8.5L21,91.1l39.9,34.5c2.1,1.8,5.2,1.5,6.9-0.6 c0.2-0.2,0.3-0.4,0.5-0.6l57.2-57.2C127.4,68.9,127.4,65.1,125.1,62.8z M80.9,45.3c0,9.9-8,17.9-17.9,17.9s-17.9-8-17.9-17.9 c0-9.9,8-17.9,17.9-17.9S80.9,35.4,80.9,45.3z" />
  </svg>
);
export const JUnitIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="#25A162" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12zm8.118-2.955V8.163h2.62c.968 0 1.543.204 1.83.612.286.408.382.99.306 1.745-.076.755-.382 1.347-.918 1.77-.535.422-1.306.633-2.31.633H8.118v-4.99zm-1.633 6.94c.05 1.58 1.132 2.653 3.246 3.224 2.114.57 4.542.495 7.284-.225l-2.038-2.038c-1.396.347-2.673.49-3.83.43-1.157-.06-1.928-.485-2.313-1.277-.384-.792-.308-1.745.224-2.858.535-1.112 1.58-1.96 3.136-2.545 1.556-.585 3.327-.806 5.313-.663l-2.184-2.184c-2.484-.347-4.708-.184-6.674.48-1.966.663-3.327 1.704-4.082 3.122-.755 1.418-.842 3.03-.255 4.832zM12.001 9.388h1.867c.755 0 1.25.077 1.48.23.23.154.347.45.347.887 0 .438-.133.74-.4.908-.266.168-.782.252-1.547.252h-1.747V9.388z" />
  </svg>
);
const HtmlIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 128" {...props}>
    <path fill="#E44D26" d="M14.61,114.3,2,1.71H126l-12.6,112.58L64.12,126.3Z" />
    <path fill="#F16529" d="M64.12,117.2V10.82h50.17L104.9,106.8Z" />
    <path fill="#EBEBEB" d="M64.12,56.54v23.3h22.7l-2.22,24.81,22.25-6.14.73-8.2-14-3.79.46-5.1,14.47-3.8.9-10.12h-45.3Zm0-36.6v23.29h47.36l.4-4.52.48-5.3.49-5.38.48-5.31Z" />
    <path fill="#FFF" d="M64.12,79.84v23.3L41.81,97.13l-1.46-16.33H53.5l.72,8.08,9.9,2.65v-24.4H31.54l.24,2.65,2.4,26.77L64.12,117.2v-23.29H43.2l-2-22.36h22.92Zm0-49.5v23.29h-24l-.49-5.3-.48-5.31-.49-5.3L37.8,12.24h26.32Z" />
  </svg>
);
const CssIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 128" {...props}>
    <path fill="#1572B6" d="M14.61,114.3,2,1.71H126l-12.6,112.58L64.12,126.3Z" />
    <path fill="#33A9DC" d="M64.12,117.2V10.82h50.17L104.9,106.8Z" />
    <path fill="#FFF" d="m53.4,30.24h21.43l-1.5,17.3H54.91Zm2.24,29.9h16.14l-1.12,12.5-12.78,3.8-12.79-3.8.84-9.39h11.94l-1.23,4.4,4,1.1.06-.01,4-1.1.33-4.3h-12.4Z" />
    <path fill="#EBEBEB" d="M64.12,47.54v-17.3h22.9l.48,5.39.49,5.38.48,5.3H64.12Zm0,44.7v-29.9h12.4l1.23-4.4h-11.94l-.84,9.39,12.79,3.8.06.01V88.94l-12.84,3.8Z" />
  </svg>
);
const GitIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="#F05033" d="M22.04 10.74a1.73 1.73 0 00-1.48-1.48l-6.1-1.1-2.73-5.5a1.73 1.73 0 00-3.08 0l-2.73 5.5-6.1 1.1A1.73 1.73 0 00.3 12.4l4.42 4.3-1.04 6.08a1.73 1.73 0 002.51 1.82L12 21.43l5.46 2.87a1.73 1.73 0 002.5-1.82l-1.03-6.08 4.42-4.3c.63-.6.44-1.65-.3-1.74z" />
  </svg>
);
const DockerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="#2496ED" d="M22.42 12.75c-.24-.1-.58-.04-.8.15L21 13.5v-3.32c0-.3-.15-.58-.4-.75l-2.3-1.53c-.2-.14-.46-.17-.7-.06l-4.5 2.05v.2c0 .42-.16.82-.44 1.13-.28.31-.67.5-1.08.5H8.75v-2.88H11.5c.34 0 .66-.13.9-.35.24-.22.38-.52.4-.84l.02-1.04c0-.3-.15-.58-.4-.75l-2.3-1.53c-.2-.14-.46-.17-.7-.06L5.02 5.86c-.3.14-.52.43-.52.78v8.2c-.1.32-.4.56-.75.56H2c-.44 0-.8-.36-.8-.8V8.4c0-.44.36-.8.8-.8h1.2v-1.c0-.44.36-.8.8-.8h.28c.3-.14.52-.43.52-.78V4.1c0-.44.36-.8.8-.8h3.8c.24 0 .47.07.66.2l3.4 2.28c.18.12.3.33.3.55v.6c.02.16.1.3.24.4.14.1.3.15.46.12l4.8-2.2c.24-.1.58-.04.8.15l2.76 2.08c.22.17.38.43.38.72v5.1zM5.3 16.5h2.1v2.1h-2.1zM8.1 16.5h2.1v2.1H8.1zM10.9 16.5h2.1v2.1h-2.1zM13.6 16.5h2.1v2.1h-2.1zM16.4 16.5h2.1v2.1h-2.1z" />
  </svg>
);


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
    { name: 'Java', icon: <JavaIcon className="w-full h-full" /> },
    { name: 'Spring Boot', icon: <SpringIcon className="w-full h-full" /> },
    { name: 'Hibernate', icon: <HibernateIcon className="w-full h-full" /> },
    { name: 'MySQL', icon: <MySqlIcon className="w-full h-full" /> },
    { name: 'React', icon: <ReactIcon className="w-full h-full" /> },
    { name: 'JavaScript', icon: <JavascriptIcon className="w-full h-full" /> },
    { name: 'HTML5', icon: <HtmlIcon className="w-full h-full" /> },
    { name: 'CSS3', icon: <CssIcon className="w-full h-full" /> },
    { name: 'Tailwind', icon: <TailwindCssIcon className="w-full h-full" /> },
    { name: 'Git', icon: <GitIcon className="w-full h-full" /> },
    { name: 'Docker', icon: <DockerIcon className="w-full h-full" /> },
    { name: 'C++', icon: <CppIcon className="w-full h-full" /> },
    { name: 'Postman', icon: <PostmanIcon className="w-full h-full" /> },
    { name: 'JUnit', icon: <JUnitIcon className="w-full h-full" /> },
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
