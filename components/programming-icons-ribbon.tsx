"use client";
import React, { useEffect, useState } from 'react'
import CLangIcon from './programming-icons/c'
import CPlusPlusIcon from './programming-icons/cplusplus';
import PythonIcon from './programming-icons/python';
import JavaScriptIcon from './programming-icons/javascript';
import TypescriptIcon from './programming-icons/typescript';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from "@/lib/utils";

export const ProgrammingIconsRibbon = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {

  const iconProps = {
    height: 100,
    width: 100
  };

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
        {
          <>
          <CLangIcon {...iconProps} />
          <CPlusPlusIcon {...iconProps} />
          <PythonIcon {...iconProps} />
          <JavaScriptIcon {...iconProps} />
          <TypescriptIcon {...iconProps} />
          </>
        }
      </ul>
    </div>
  );
};

// const ProgrammingIconsRibbon = ({ dir } : {dir: 'left' | 'right'}) => {
//   const variants = {
//     left: -100,
//     right: 100,
//   };

//   const iconProps = {
//     height: 100,
//     width: 100
//   };

//   return (
//     <>
//       <div className="h-10" /> {/* Spacer */}
//       <AnimatePresence>
//         <motion.div
//           className='relative flex justify-center gap-8'
//           animate={{ x: -100 }}
//           transition={{
//             type: "spring",
//             repeat: Infinity,
//             stiffness: 260,
//             damping: 20
//           }}
//         >
//         </motion.div>
//       </AnimatePresence>
//       <div className="h-10" /> {/* Spacer */}
//     </>
//   )
// }

export default ProgrammingIconsRibbon