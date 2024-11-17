"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface BackgroundProps {
  dotScaling?: number; // Size of the dots (default: 256px)
  dotRadius?: number; // Radius of the dots (default: 8px)
  dotColor?: string; // Color of the dots (default: white)
  parallaxSpeed?: number; // Speed of parallax movement (default: 20)
}

const Background: React.FC<BackgroundProps> = ({
  dotScaling = 256,
  dotRadius = 8,
  dotColor = '#ffffff',
  parallaxSpeed = 500,
}) => {
  const { scrollY } = useScroll();
  const [viewportHeight, setViewportHeight] = useState<number>(0);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create an infinite parallax effect
  const parallaxY = useTransform(
    scrollY,
    [0, viewportHeight],
    [0, parallaxSpeed],
    { clamp: false } // Allow values outside the range
  );

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-cyan-999">
      {/* Gradient from 0%-33% */}
      <div
        className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-cyan-990 to-transparent"
        style={{ zIndex: 10 }}
      ></div>

      {/* Solid background from 25%-75% */}
      <div
        className="absolute inset-y-0 left-1/4 w-1/2 bg-cyan-999"
        style={{ zIndex: 5 }}
      ></div>

      {/* Gradient from 66%-100% */}
      <div
        className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-cyan-990 to-transparent"
        style={{ zIndex: 10 }}
      ></div>

      {/* Dots with infinite parallax effect */}
      <motion.div
        className="absolute inset-0 bg-repeat"
        style={{
          y: parallaxY, // Apply infinite parallax motion
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' fill='none'%3E%3Ccircle cx='21' cy='39' r='${dotRadius}' fill='${encodeURIComponent(
            dotColor
          )}'/%3E%3Ccircle cx='85' cy='103' r='${dotRadius}' fill='${encodeURIComponent(
            dotColor
          )}'/%3E%3Ccircle cx='149' cy='167' r='${dotRadius}' fill='${encodeURIComponent(
            dotColor
          )}'/%3E%3Ccircle cx='213' cy='231' r='${dotRadius}' fill='${encodeURIComponent(
            dotColor
          )}'/%3E%3Ccircle cx='21' cy='167' r='${dotRadius}' fill='${encodeURIComponent(
            dotColor
          )}'/%3E%3Ccircle cx='85' cy='231' r='${dotRadius}' fill='${encodeURIComponent(
            dotColor
          )}'/%3E%3Ccircle cx='149' cy='39' r='${dotRadius}' fill='${encodeURIComponent(
            dotColor
          )}'/%3E%3Ccircle cx='213' cy='103' r='${dotRadius}' fill='${encodeURIComponent(
            dotColor
          )}'/%3E%3C/svg%3E")`,
          backgroundSize: `${dotScaling}px ${dotScaling}px`,
          filter: `blur(1px)`,
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
};

export default Background;