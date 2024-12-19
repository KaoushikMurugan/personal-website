import { cn } from '@/lib/utils';
import React from 'react';

interface SocialIconProps {
  platform?: 'github' | 'linkedin' | 'youtube' | 'email';
  link: string;
  className?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ platform, link, className }) => {
  const getIcon = (platform?: string) => {
    switch (platform) {
      case 'github':
        return <i className="bi bi-github"></i>;
      case 'linkedin':
        return <i className="bi bi-linkedin"></i>;
      case 'youtube':
        return <i className="bi bi-youtube"></i>;
      case 'email':
        return <div className="group inline-block">
          <i className="bi bi-envelope group-hover:hidden"></i>
          <i className="bi bi-envelope-open-fill hidden group-hover:inline"></i>
        </div>;
      default:
        return <i className="bi bi-box-arrow-up-right text-4xl"></i>;
    }
  };

  const getHoverColor = (platform?: string) => {
    switch (platform) {
      case 'github':
        return 'hover:text-indigo-400';
        case 'linkedin':
        return 'hover:text-social-linkedin';
      case 'youtube':
        return 'hover:text-social-youtube';
      case 'email':
        return 'hover:text-amber-300';
      default:
        return 'hover:text-social-generic';
    }
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={cn("text-5xl hover:-translate-y-1 transition duration-100", getHoverColor(platform), className)}>
      {getIcon(platform)}
    </a>
  );
};