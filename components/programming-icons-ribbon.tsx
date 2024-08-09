"use client";
import React, { useEffect, useState } from 'react'
import { cn } from "@/lib/utils";
import * as Icons from '@/components/programming-icons';

// Modified/Repurposed from https://ui.aceternity.com/components/infinite-moving-cards

export const ProgrammingIconsRibbon = ({
  direction = "left",
  speed = "fast",
  slowOnHover = true,
  className,
  children,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  slowOnHover?: boolean;
  className?: string;
  children?: React.ReactNode;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        "scroller relative z-20  max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        slowOnHover && "translate-x-0 [transition:calc(var(--animation-duration)_*_.1)_ease-out]",
        (slowOnHover && direction === "left") ? "hover:-translate-x-[10%]" : "hover:translate-x-[10%]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        key="scroller" // only cause compiler was complaining about ul requiring a unique key
        className={cn(
          " flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          slowOnHover && "hover:[animation-play-state:paused]",
          // TODO
          // speed === "fast" && "hover:[animation-duration:40s]",
          // speed === "normal" && "hover:[animation-duration:80s]",
          // speed === "slow" && "hover:[animation-duration:160s]",
        )}
      >
        {children}
      </ul>
      <div className="h-10" /> {/* Spacer */}
    </div>
  );
};

const ProgrammingIconsRibbonStack = (): JSX.Element => {
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
      <ProgrammingIconsRibbon direction="left" speed="fast">
        <Icons.CLang {...iconProps} />
        <Icons.JavaScript {...iconProps} />
        <Icons.Python {...iconProps} />
        <Icons.CPlusPlus {...iconProps} />
        <Icons.TypeScript {...iconProps} />
        <Icons.HTML5 {...iconProps} />
        <Icons.Bash {...iconProps} />
        <Icons.CSharp {...iconProps} />
        <Icons.Java {...iconProps} />
        <Icons.CSS3 {...iconProps} />
      </ProgrammingIconsRibbon>
      <ProgrammingIconsRibbon direction="right" speed="normal">
        <Icons.PyTorch {...wideIconProps} />
        <Icons.React {...iconProps} />
        <Icons.Firebase {...iconProps} />
        <Icons.NumPy {...wideIconProps} />
        <Icons.AWS {...iconProps} />
        <Icons.NodeJS {...iconProps} />
        <Icons.TensorFlow {...iconProps} />
        <Icons.NextJS {...wideIconProps} />
        <Icons.Pandas {...iconProps} />
        <Icons.Tailwind {...iconProps} />
      </ProgrammingIconsRibbon>
      <ProgrammingIconsRibbon direction="left" speed="fast">
        <Icons.Godot {...iconProps} />
        <Icons.GitHub {...iconProps} />
        <Icons.GoogleCloud {...iconProps} />
        <Icons.Unity {...wideIconProps} />
        <Icons.Linux {...iconProps} />
        <Icons.Docker {...iconProps} />
        <Icons.Git {...iconProps} />
        <Icons.RaspberryPi {...iconProps} />
        <Icons.ROS {...wideIconProps} />
      </ProgrammingIconsRibbon>
    </>

  )
}

export default ProgrammingIconsRibbonStack;