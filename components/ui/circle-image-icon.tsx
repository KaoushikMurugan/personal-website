"use client";

import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';

interface CircleIconProps {
  src: StaticImageData;
  alt: string;
  radius?: { base: string; md: string };
  centerX?: number; // Horizontal center point (default: 0.5 for center)
  centerY?: number; // Vertical center point (default: 0.5 for center)
  className: ClassValue;
}

const CircleIcon: React.FC<CircleIconProps> = ({
  src,
  alt,
  radius = { base: '50px', md: '75px' }, // Default radius values
  centerX = 0.5,
  centerY = 0.5,
  className,
}) => {
  const [currentRadius, setCurrentRadius] = useState(radius.base);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth >= 768) {
        // Match Tailwind's `md` breakpoint (768px)
        setCurrentRadius(radius.md);
      } else {
        setCurrentRadius(radius.base);
      }
    };

    updateRadius(); // Set the initial radius
    window.addEventListener('resize', updateRadius); // Update radius on resize
    return () => window.removeEventListener('resize', updateRadius); // Cleanup listener
  }, [radius]);

  return (
    <div
      className={cn('relative rounded-full overflow-hidden border-4 shadow-md', className)}
      style={{
        width: `calc(${currentRadius} * 2)`,
        height: `calc(${currentRadius} * 2)`,
      }}
    >
      <div
        className="absolute"
        style={{
          top: `${centerX * 100}%`,
          left: `${centerY * 100}%`,
          transform: `translate(-${centerX * 100}%, -${centerY * 100}%)`,
          width: '100%',
          height: '100%',
        }}
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default CircleIcon;