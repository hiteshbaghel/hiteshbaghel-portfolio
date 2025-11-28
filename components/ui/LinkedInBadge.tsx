import React from 'react';

// Utility to merge Tailwind classes
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

interface LinkedInBadgeProps {
  theme: 'light' | 'dark';
  className?: string;
}

const LinkedInBadge: React.FC<LinkedInBadgeProps> = ({ theme, className }) => {
  // Use a key on a wrapper div to force React to unmount and remount the badge
  // when the theme changes. This helps ensure the LinkedIn script re-processes
  // the element and applies the correct theme.
  return (
    <div key={theme} className={cn("min-w-[280px] min-h-[363px]", className)}>
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme={theme}
        data-type="VERTICAL"
        data-vanity="hiteshbaghel"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://in.linkedin.com/in/hiteshbaghel?trk=profile-badge"
        >
          Hitesh Baghel
        </a>
      </div>
    </div>
  );
};

export default LinkedInBadge;
