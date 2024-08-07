"use client";
import React, { useEffect, useState } from 'react'
import CLangIcon from './programming-icons/c'
import CPlusPlusIcon from './programming-icons/cplusplus';
import PythonIcon from './programming-icons/python';
import JavaScriptIcon from './programming-icons/javascript';
import TypescriptIcon from './programming-icons/typescript';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import CSharpIcon from './programming-icons/csharp';
import BashIcon from './programming-icons/bash';
import PyTorchIcon from './programming-icons/pytorch';
import TensorFlowIcon from './programming-icons/tensorflow';

export const ProgrammingIconsRibbon = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        <ProgrammingIcons />
      </ul>
      <div className="h-10" /> {/* Spacer */}
    </div>
  );
};

const ProgrammingIcons = (): JSX.Element => {
  const iconProps = {
    height: 80,
    width: 80
  };
  const wideIconProps = {
    height: iconProps.height,
    width: iconProps.width * 2
  }

  return (
    <>
      <CLangIcon {...iconProps} />
      <JavaScriptIcon {...iconProps} />
      <PythonIcon {...iconProps} />
      <CPlusPlusIcon {...iconProps} />
      <TypescriptIcon {...iconProps} />
      <BashIcon {...iconProps} />
      <CSharpIcon {...iconProps} />
      <PyTorchIcon {...wideIconProps} />
      <TensorFlowIcon {...iconProps} /> 
    </>
  )
}

export default ProgrammingIconsRibbon