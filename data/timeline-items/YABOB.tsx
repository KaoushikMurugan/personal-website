import React from 'react'
import timelineItem from './types'
import Image from 'next/image'
import { SocialIcon } from '@/components/social-icons' // Correct import for SocialIcon
import { AccentText } from '@/components/timeline-item'
import YABOBFeaturesImage from "../../public/YABOB_Features.png"
import ExpandableImage from '@/components/expandable-image'

const YABOBTitle = () => {
  return (
    <div className="flex justify-center items-center text-3xl text-purple"> 
      <Image 
        width="300" 
        height="100" 
        alt="yet another better office hour bot" 
        src="https://github.com/KaoushikMurugan/yet-another-better-office-hour-bot/assets/60045212/c49faee6-053e-482c-9c52-01549047450a" 
      />
    </div>
  )
}

const YABOBDescription = () => {
    return (
        <div className="flex justify-center align-middle">
            <ExpandableImage
                src={YABOBFeaturesImage}
                alt="Some Features of YABOB."
                width={2156}
                height={1492}
                className="rounded-lg w-full max-w-[475px] object-contain"
            />
        </div>
    )
}

const YABOBSupportTitle = () => {
    return (
        <div>
            <div className="font-extralight text-3xl">
                March 2022 - Present
            </div>
            <i className="font-normal text-xl">
                Lead Developer
            </i> 
            <br />
        </div>
    )
}

const YABOBSupportDescription = () => {
    return (
        <div>
            <div className="font-light text-lg space-y-2">
                <p>Built a <AccentText text="feature-rich Discord bot"/> that automates office hour scheduling for professors and TAs, helping to make seeking guidance more <i>accessible</i> to <AccentText text="thousands"/> of students.</p>
                <p>Using <AccentText text="OOP Design Patterns"/>, and following <AccentText text="good documentation practices"/>. Currently used at UC Davis by faculty and for tutoring services.</p>
            </div>

            <div className="font-semibold text-lg mt-4">
                <b>Technologies:</b> TypeScript, Node.js, Discord.js, Firebase, Google Cloud API, AWS EC2
            </div>

            <div className="flex justify-center gap-10 mt-4">
                <SocialIcon platform="github" link="https://www.github.com/KaoushikMurugan/yet-another-better-office-hour-bot" />
            </div>
        </div>
    )
}

const YABOB: timelineItem = {
    title: <YABOBTitle />,
    description: <YABOBDescription />,
    id: 2,
    supportTitle: <YABOBSupportTitle />,
    supportDescription: <YABOBSupportDescription />,
    supportId: 102,
}

export default YABOB