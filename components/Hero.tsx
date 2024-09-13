import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { Spotlight } from './ui/spotlight'
import MagicButton from './buttons/magic-button'
import { FaLocationArrow } from 'react-icons/fa6'
import { SocialIcon } from './social-icons'

const Hero = () => {
  return (
    <div className="pb-18 pt-20">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight 
            className="left-80 top-28 h-[80vh] w-[50vw]" 
            fill="blue"
        />
      </div>

      {/* Background Grid */}
      <div className="h-screen w-full dark:bg-violet-950 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">

        </p>
      </div>

      <div className="flex justify-center relative my-[8rem] z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center dark:text-blue-100 text-purple-900 max-w-80">
          </h2>
          <TextGenerateEffect 
            className = "text-center text-[40px] md:text-5xl; lg:text-7xl"
            words = "Kaoushik Murugan"
            colorGradient = {[
              "from-cyan-400 to-teal-300",
              "from-teal-300 to-cyan-400"]}
          />
          <p className = "text-center md:text-sm lg:text-xl">
            Welcome to my portfolio website!
          </p>

          <a href="#about">
            <MagicButton 
              title="Show My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <div className="flex justify-center items-center h-10"/>
          <div className="flex relative justify-center items-center gap-10 text-5xl">
            <span className="text-3xl ">Connect with me!</span>
              <SocialIcon 
                platform="github" 
                link="https://github.com/KaoushikMurugan" 
                className="text-neutral-300"
              />
              <SocialIcon 
                platform="linkedin" 
                link="https://www.linkedin.com/in/kaoushikmurugan/" 
                className="text-neutral-300"
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero