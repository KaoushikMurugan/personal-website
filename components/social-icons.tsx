import { cn } from '@/lib/utils';
import React from 'react';

interface SocialIconProps {
  platform: 'github' | 'linkedin' | 'youtube'; // Add more platforms as needed
  link: string;
  className?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ platform, link, className }) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <i className="bi bi-github"></i>;
      case 'linkedin':
        return <i className="bi bi-linkedin"></i>;
      case 'youtube':
        return <i className="bi bi-youtube"></i>;
      default:
        return null;
    }
  };

  const getHoverColor = (platform: string) => {
    switch (platform) {
      case 'github':
        return 'hover:text-social-github dark:hover:text-white';
        case 'linkedin':
        return 'hover:text-social-linkedin';
      case 'youtube':
        return 'hover:text-social-youtube';
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