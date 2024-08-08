"use client";
import React, { useEffect, useState } from 'react'
import CLangIcon from './programming-icons/c'
import CPlusPlusIcon from './programming-icons/cplusplus';
import PythonIcon from './programming-icons/python';
import JavaScriptIcon from './programming-icons/javascript';
import TypescriptIcon from './programming-icons/typescript';
import { cn } from "@/lib/utils";
import CSharpIcon from './programming-icons/csharp';
import BashIcon from './programming-icons/bash';
import PyTorchIcon from './programming-icons/pytorch';
import TensorFlowIcon from './programming-icons/tensorflow';
import HTML5Icon from './programming-icons/html5';
import NumPyIcon from './programming-icons/numpy';
import CSS3Icon from './programming-icons/css3';
import PandasIcon from './programming-icons/pandas';
import NodeJSIcon from './programming-icons/nodejs';
import ReactIcon from './programming-icons/react';
import NextJSIcon from './programming-icons/nextjs';
import GoogleCloudIcon from './programming-icons/googlecloud';
import JavaIcon from './programming-icons/java';
import GodotIcon from './programming-icons/godot';
import UnityIcon from './programming-icons/unity';
import LinuxIcon from './programming-icons/linux';
import OpenGLIcon from './programming-icons/opengl';
import ROSIcon from './programming-icons/ros';
import DockerIcon from './programming-icons/docker';
import GitIcon from './programming-icons/git';
import RaspberryPiIcon from './programming-icons/raspberrypi';

export const ProgrammingIconsRibbon = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
  className,
  children,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  children?: React.ReactNode;
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
          " flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]",
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
      <ProgrammingIconsRibbon direction="left" speed="normal">
        <CLangIcon {...iconProps} />
        <JavaScriptIcon {...iconProps} />
        <PythonIcon {...iconProps} />
        <CPlusPlusIcon {...iconProps} />
        <TypescriptIcon {...iconProps} />
        <HTML5Icon {...iconProps} />
        <BashIcon {...iconProps} />
        <CSharpIcon {...iconProps} />
        <JavaIcon {...iconProps} />
        <CSS3Icon {...iconProps} />
      </ProgrammingIconsRibbon>
      <ProgrammingIconsRibbon direction="right" speed="slow">
        <PyTorchIcon {...wideIconProps} />
        <ReactIcon {...iconProps} />
        <NumPyIcon {...wideIconProps} />
        <NodeJSIcon {...iconProps} />
        <TensorFlowIcon {...iconProps} />
        <NextJSIcon {...wideIconProps} />
        <PandasIcon {...iconProps} />
        <OpenGLIcon {...iconProps} />
      </ProgrammingIconsRibbon>
      <ProgrammingIconsRibbon direction="left" speed="normal">
        <GodotIcon {...iconProps} />
        <GoogleCloudIcon {...iconProps} />
        <UnityIcon {...wideIconProps} />
        <LinuxIcon {...iconProps} />
        <DockerIcon {...iconProps} />
        <GitIcon {...iconProps} />
        <RaspberryPiIcon {...iconProps} />
        <ROSIcon {...wideIconProps} />
      </ProgrammingIconsRibbon>
    </>

  )
}

export default ProgrammingIconsRibbonStack;