import React from 'react'
import timelineItem from './types'
import Image from 'next/image'
import GameplayImage from "../../public/Connect4GameplayImage.png"

const Connect4Title = () => {
  return (
    <div className="text-3xl text-purple"> 
        Connect4 on Embedded Systems
    </div>
  )
}

const Connect4Description = () => {
    return (
        <div className="relative justify-center w-auto">
            <Image
                src={GameplayImage}
                alt="Gameplay of Connect4 on Embedded Systems."
                width={3456}
                height={1944}
                layout="responsive"
                className="rounded-lg"
            />
        </div>
    )
}

const Connect4SupportTitle = () => {
    return (
        <div>
            <div className="font-extralight text-3xl">
                June 2023
            </div>
            <i className="font-normal text-xl">
                Developer [Course Project]
            </i> 
            <br />
        </div>
    )
}

const Connect4SupportDescription = () => {
    return (
        <div>
            <div className="font-light text-lg">
            Built an online multiplayer Connect-4 game on TI CC3200 boards with an AWS EC2 server managing game state. Designed GPIO input circuits using IR sensors and SPI for OLED display. Used AWS IoT services for board communication via MQTT and REST, programming the clients in Embedded C and the server in TypeScript and Node.js.
            </div>

            <div className="font-semibold text-lg">
                <br />
                <b>Technologies:</b> Embedded C, Typescript, node.js, AWS IoT, AWS EC2, TI CC3200, SPI, MQTT, REST
            </div>

            <br />

            <div className="flex relative justify-center gap-10 text-5xl">
                <a href="https://github.com/KaoushikMurugan/Connect-4-on-Embedded-Systems" target="_blank" rel="noopener noreferrer"> 
                    <i className="bi bi-github ">
                    </i>
                </a>
                <a href="https://youtu.be/_yJF8NcShj4" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-youtube"></i>
                </a>
            </div>
        </div>
    )
}

const Connect4: timelineItem = {
    title: <Connect4Title />,
    description: <Connect4Description />,
    id: 1,
    supportTitle: <Connect4SupportTitle />,
    supportDescription: <Connect4SupportDescription />,
    supportId: 1,
}

export default Connect4