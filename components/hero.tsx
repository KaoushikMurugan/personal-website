"use client";

import React, { useRef } from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './buttons/magic-button'
import { FaLocationArrow } from 'react-icons/fa6'
import { SocialIcon } from './ui/social-icons'
import ScrollDownIndicator from './ui/scroll-indicator'
import CircleIcon from './ui/circle-image-icon'
import PFP from '../public/pfp.png'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={heroRef} className="relative flex flex-col items-center justify-center min-h-screen pb-18 md:pt-20">
      <div className="flex justify-center relative pt-[2rem] pb-[6rem] z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* <h2 className="uppercase tracking-widest text-xs text-center dark:text-blue-100 text-purple-900 max-w-80">
          </h2> */}
          {/* bg-[radial-gradient] adds the shadow/bluring behind the name text */}
          {/* TODO: try to make the transition in the gradient less noticible */}
          <CircleIcon
            src = {PFP}
            alt = "Kaoushik Murugan"
            radius={{ base: '50px', md: '75px' }}
            className="border-cyan-500"
          />
          <TextGenerateEffect 
            className = "text-center p-2 xl:p-8 text-6xl sm:text-7xl bg-[radial-gradient(closest-side,_theme(colors.cyan.999)88,_theme(colors.cyan.999)88,transparent)]"
            words = "Kaoushik Murugan"
            duration = {1.0}
            colorGradient = {[
              "from-cyan-400 to-teal-300",
              "from-teal-300 to-cyan-400"]}
          />
          <p className = "text-center text-base md:text-xl 2xl:text-2xl text-cyan-100">
          AI/ML Researcher and Recent UC Davis Graduate, driven by a passion for critical thinking and exploring innovative ideas
          </p>

          <div className="h-4 md:h-8"/>
          <a href="#experience">
            <MagicButton 
              title="View My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <div className="h-8 md:h-14"/>
          <div className="flex flex-col sm:flex-row relative justify-center items-center gap-4 sm:gap-10 dark:text-amber-400">
            <span className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl">Connect with me!</span>
            <div className="flex sm:flex-row gap-8 dark:text-amber-100">
              <SocialIcon 
                platform="linkedin" 
                link="https://www.linkedin.com/in/kaoushikmurugan/" 
              />
              <SocialIcon 
                platform="github" 
                link="https://github.com/KaoushikMurugan" 
              />
              <SocialIcon 
                platform="email"
                link="mailto:kaoushikmurugan@gmail.com?&subject=Hello%20Kaoushik!"
              />
            </div>
          </div>
        </div>
      </div>
      <ScrollDownIndicator heroRef={heroRef}/>
    </div>
  )
}

export default Hero