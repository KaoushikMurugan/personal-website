"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollDownIndicatorProps {
  heroRef: React.RefObject<HTMLDivElement>;
}

const ScrollDownIndicator: React.FC<ScrollDownIndicatorProps> = ({ heroRef }) => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.05], ["blur(0px)", "blur(5px)"]);

  useEffect(() => {
    const updateVisibility = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        setIsVisible(heroHeight <= viewportHeight);
      }
    };

    // Cache the current value of the ref
    const observedElement = heroRef.current;

    const observer = new ResizeObserver(() => {
      updateVisibility();
    });

    if (observedElement) {
      observer.observe(observedElement);
    }

    updateVisibility();

    return () => {
      if (observedElement) {
        observer.unobserve(observedElement);
      }
    };
  }, [heroRef]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="absolute bottom-[2rem] w-full text-center"
      style={{ opacity, filter: blur }}
      animate={{
        y: [10, 0, 10],
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        loop: Infinity,
        repeat: Infinity,
        repeatDelay: 0.5,
      }}
    >
      <p className="text-cyan-400 text-lg">
        Scroll Down
        <br />
        <span className="text-3xl">▾</span>
      </p>
    </motion.div>
  );
};

export default ScrollDownIndicator;