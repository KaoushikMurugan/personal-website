import React from 'react'
import { TimelineElement } from './types'
import GameplayImage from "../../public/Connect4GameplayImage.png"
import { SocialIcon } from '@/components/ui/social-icons'
import { AccentText } from "@/components/ui/accent-text"
import ExpandableImage from '@/components/ui/expandable-image'
import TagList from '@/components/ui/tag-list'

const Connect4Title = () => {
  return (
    <div> 
        Connect4 on Embedded Systems
    </div>
  )
}

const Connect4Description = () => {
    return (
        <div className="flex justify-center align-middle">
            <ExpandableImage
                src={GameplayImage}
                alt="Gameplay of Connect4 on Embedded Systems."
                width={3456}
                height={1944}
                className="rounded-lg w-full max-w-[550px] object-contain"
            />
        </div>
    )
}

const Connect4SupportTitle = () => {
    return (
        <div>
            <div className="font-medium text-3xl">
                Developer [Course Project]
            </div>
            <i className="font-normal text-xl text-cyan-500">
                June 2023
            </i> 
            <br />
        </div>
    )
}

const Connect4SupportDescription = () => {
    return (
        <div>
            <div className="font-light text-lg space-y-2">
                <p>Built an online multiplayer Connect-4 game on <AccentText text="TI CC3200 (32-bit ARM)"/> boards with an <AccentText text="AWS EC2"/> server managing game state.</p>
                <p>Designed <AccentText text="GPIO"/> input circuits using IR sensors and <AccentText text="SPI"/> for OLED display. Used <AccentText text="AWS IoT"/> for board communication via <AccentText text="MQTT and REST"/>. Programmed clients in <AccentText text="Embedded C"/> and the server in TypeScript.</p>
            </div>

            <div className="font-semibold text-sm mt-4 flex flex-wrap gap-1 justify-center">
                <TagList items={[
                    "Embedded C",
                    "TypeScript",
                    "ARM",
                    "Node.js",
                    "AWS IoT",
                    "AWS EC2",
                    "TI CC3200",
                    "Embedded Systems",
                    "Networking",
                ]} />
            </div>

            <div className="flex justify-center mt-4 gap-10">
                <SocialIcon platform="github" link="https://github.com/KaoushikMurugan/Connect-4-on-Embedded-Systems" />
                <SocialIcon platform="youtube" link="https://www.youtube.com/watch?v=_yJF8NcShj4" />
            </div>
        </div>
    )
}

const Connect4: TimelineElement = {
    title: <Connect4Title />,
    description: <Connect4Description />,
    id: 5,
    supportTitle: <Connect4SupportTitle />,
    supportDescription: <Connect4SupportDescription />,
    supportId: 105,
}

export default Connect4