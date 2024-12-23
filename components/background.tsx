"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Due to forced discrete scrolling in Safari when input is not a trackpad/touch device, disabling parallax effect for Safari.
 */
const isSafari = (): boolean => {
  if (typeof navigator === "undefined") return false; // Return false on the server
  const ua = navigator.userAgent;
  return (
    ua.includes("Safari") &&
    !ua.includes("Chrome") && // Exclude Chrome (also includes "Safari")
    !ua.includes("Android") // Exclude Android WebView
  );
};

interface BackgroundProps {
  dotScaling?: number; // Size of the dots (default: 256px)
  dotRadius?: number; // Radius of the dots (default: 8px)
  dotColor?: string; // Color of the dots (default: white)
  parallaxSpeed?: number; // Speed of parallax movement (default: 20)
}

const Background: React.FC<BackgroundProps> = ({
  dotScaling = 256,
  dotRadius = 8,
  dotColor = "#ffffff",
  parallaxSpeed = 500,
}) => {
  const { scrollY } = useScroll();
  const [viewportHeight, setViewportHeight] = useState<number>(0);
  const [isGPUAvailable, setIsGPUAvailable] = useState<boolean>(true);
  const [isSafariBrowser, setIsSafariBrowser] = useState<boolean>(false);

  useEffect(() => {
    // GPU check using WebGL
    const checkGPU = () => {
      try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        return !!gl;
      } catch {
        return false;
      }
    };

    setIsGPUAvailable(checkGPU());

    // Set the Safari browser detection
    setIsSafariBrowser(isSafari());

    // Set viewport height and handle resize
    const updateViewportHeight = () => setViewportHeight(window.innerHeight);
    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight);
    return () => window.removeEventListener("resize", updateViewportHeight);
  }, []);

  // Infinite parallax effect
  const parallaxY = useTransform(scrollY, [0, viewportHeight], [0, parallaxSpeed], {
    clamp: false,
  });

  // Background dot SVG
  const backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' fill='none'%3E%3Ccircle cx='21' cy='39' r='${dotRadius}' fill='${encodeURIComponent(
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
  )}'/%3E%3C/svg%3E")`;

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

      {/* Dots - Conditional: Parallax Motion or Static */}
      {!isSafariBrowser && isGPUAvailable ? (
        // GPU available and not Safari: Render parallax dots
        <motion.div
          className="absolute inset-0 bg-repeat"
          style={{
            y: parallaxY, // Infinite parallax motion
            backgroundImage: backgroundImage,
            backgroundSize: `${dotScaling}px ${dotScaling}px`,
            filter: "blur(1px)",
            zIndex: 20,
            willChange: "transform",
          }}
        />
      ) : (
        // GPU not available or Safari: Render static background
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: backgroundImage,
            backgroundSize: `${dotScaling}px ${dotScaling}px`,
            filter: "blur(1px)",
            zIndex: 20,
          }}
        />
      )}
    </div>
  );
};

export default Background;