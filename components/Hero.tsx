import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { Spotlight } from './ui/spotlight'
import MagicButton from './buttons/magic-button'
import { FaLocationArrow } from 'react-icons/fa6'
import { SocialIcon } from './ui/social-icons'
import { WavyBackground } from './ui/wavy-background'
import ScrollDownIndicator from './ui/scroll-indicator'

const Hero = () => {
  return (
    <div className="pb-18 pt-20">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#04b8ff"
        />
        <Spotlight 
            className="left-80 top-28 h-[80vh] w-[50vw]" 
            fill="#8adeff"
        />
      </div>
      <WavyBackground 
        backgroundFill="#001923" // get color from tailwind.config.ts cyan-999. can't find a way to import it yet
        speed="slow" 
        waveWidth={50} 
        blur={10} 
        waveOpacity={1} 
        colors={[
          "#FF7EE2", // pink
          "#604CC3", // purple
          "#8FD14F", // green
          "#E62031", // red
          "#FB773C", // orange
        ]}
      >

        <div className="flex justify-center relative my-[8rem] z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            {/* <h2 className="uppercase tracking-widest text-xs text-center dark:text-blue-100 text-purple-900 max-w-80">
            </h2> */}
            {/* bg-[radial-gradient] adds the shadow/bluring behind the name text */}
            {/* TODO: try to make the transition in the gradient less noticible */}
            <TextGenerateEffect 
              className = "text-center text-[40px] p-12 md:text-5xl lg:text-7xl bg-[radial-gradient(closest-side,_theme(colors.cyan.999)88,_theme(colors.cyan.999)88,transparent)]"
              words = "Kaoushik Murugan"
              duration = {1.0}
              colorGradient = {[
                "from-cyan-400 to-teal-300",
                "from-teal-300 to-cyan-400"]}
            />
            <p className = "text-center text-xl text-cyan-100">
              Welcome to my portfolio website!
            </p>

            <div className="h-4"/>
            <a href="#timeline">
              <MagicButton 
                title="Show My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <div className="h-10"/>
            <div className="flex flex-col sm:flex-row relative justify-center items-center gap-10 text-5xl dark:text-amber-400">
              <span className="text-3xl">Connect with me!</span>
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
        <ScrollDownIndicator />
      </WavyBackground>
    </div>
  )
}

export default Hero