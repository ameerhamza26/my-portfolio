import React from 'react';
import { Github, Linkedin, Youtube } from 'lucide-react';
import { profile } from '../../data/profile';

const MediumIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <ellipse cx="6.5" cy="12" rx="5.5" ry="6" />
    <ellipse cx="16.5" cy="12" rx="2.75" ry="5.6" />
    <ellipse cx="21.5" cy="12" rx="1" ry="5" />
  </svg>
);

const links = [
  { label: 'GitHub', href: profile.socials.github, icon: <Github size={20} /> },
  { label: 'LinkedIn', href: profile.socials.linkedin, icon: <Linkedin size={20} /> },
  { label: 'Medium', href: profile.socials.medium, icon: <MediumIcon /> },
  { label: 'YouTube', href: profile.socials.youtube, icon: <Youtube size={20} /> },
];

type Props = { variant?: 'dark' | 'light' };

export const SocialLinks: React.FC<Props> = ({ variant = 'dark' }) => (
  <div className="flex gap-3">
    {links.map((l) => (
      <a
        key={l.label}
        href={l.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={l.label}
        title={l.label}
        className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
          variant === 'dark'
            ? 'bg-gray-800 text-white hover:bg-blue-600'
            : 'bg-white text-gray-700 shadow hover:text-white hover:bg-blue-600'
        }`}
      >
        {l.icon}
      </a>
    ))}
  </div>
);
