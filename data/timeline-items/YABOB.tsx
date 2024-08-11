import React from 'react'
import timelineItem from './types'
import Image from 'next/image'
import { Icon } from 'lucide-react'

const YABOBTitle = () => {
  return (
    <div className="flex justify-center items-center text-3xl text-purple"> 
    <Image width="400" height="100" alt="yet another better office hour bot" src="https://github.com/KaoushikMurugan/yet-another-better-office-hour-bot/assets/60045212/c49faee6-053e-482c-9c52-01549047450a" />
    </div>
  )
}

const YABOBDescription = () => {
    return (
        <div className="size-48">
            TBD
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
            <div className="font-light text-lg">
                An open-source, feature-rich Discord bot that automates the process of scheduling office hours for professors and TAs. Making queueing process more accessible for <span className="font-bold text-yellow-500">hundreds</span> of students to join a queue for a course with the simple press of a button, and having upcoming sessions (from a calendar) displayed in the channel.
                <br/>
            </div>

            <div className="font-semibold text-lg">
                <br />
                <b>Technologies:</b> TypeScript, node.js, Discord.js, Firebase, Google Cloud API, AWS EC2
            </div>

            <br />

            <div className="flex relative justify-center gap-10 text-5xl">
                <a href="https://www.github.com/KaoushikMurugan/yet-another-better-office-hour-bot" target="_blank" rel="noopener noreferrer"> 
                    <i className="bi bi-github ">
                    </i>
                </a>
                <a>
                    <i className="bi bi-youtube"></i>
                </a>
            </div>
        </div>
    )
}

const YABOB: timelineItem = {
    title: <YABOBTitle />,
    description: <YABOBDescription />,
    id: 1,
    supportTitle: <YABOBSupportTitle />,
    supportDescription: <YABOBSupportDescription />,
    supportId: 1,
}

export default YABOB