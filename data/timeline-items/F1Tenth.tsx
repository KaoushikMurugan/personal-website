import React, { useState } from 'react'
import timelineItem from './types'
import Image from 'next/image'
import ArchitectureDiagram from "../../public/F1Tenth_Architecture_darkmode.png"

const F1TenthTitle = () => {
  return (
    <div className="text-3xl text-purple"> 
        1:10th Scale Autonomous Car
    </div>
  )
}

const F1TenthDescription = () => {
    return (
        <div className="flex justify-center">
            <Image
                src={ArchitectureDiagram}
                alt="Architecture Diagram for F1Tenth Computer Vision."
                width={1000}
                height={1000}
                layout="responsive"
                className="rounded-lg w-5 h-5"
            />
        </div>
    )
}

const F1TenthSupportTitle = () => {
    return (
        <div>
            <div className="font-extralight text-3xl">
                January 2024 - June 2024
            </div>
            <i className="font-normal text-xl">
                Developer [Senior Capstone]
            </i> 
            <br />
        </div>
    )
}

const F1TenthSupportDescription = () => {
    return (
        <div>
            <div className="font-light text-lg">
                Developer on UC Davis F1Tenth&apos;s Computer Vision Team, as part of Senior Capstone Project. Researched and incorporated mapping (SLAM), race-line optimzation, path following (pure-pursuit) and obstacle avoidance algorithms in Python and C++, on ROS2. Utilized Docker for simulations and testing with PyTest and Google Test. Presented at UC Davis End of Year Engineering Showcase.
            </div>

            <div className="font-semibold text-lg">
                <br />
                <b>Technologies:</b> ROS2, Docker, Python, C++, PyTest, Google Test
            </div>

            <br />

            <div className="flex relative justify-center gap-10 text-5xl">
                <a href="https://github.com/ian-chuang/f1tenth_gym_ros" target="_blank" rel="noopener noreferrer"> 
                    <i className="bi bi-github ">
                    </i>
                </a>
                <a href="https://www.youtube.com/watch?v=IEvM3ufXBYI" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-youtube"></i>
                </a>
                <a href="https://www.linkedin.com/posts/erikc1_teamwork-makes-the-dreamwork-we-had-a-activity-7207041546095874049-zK1V?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                </a>
            </div>
        </div>
    )
}

const F1Tenth: timelineItem = {
    title: <F1TenthTitle />,
    description: <F1TenthDescription />,
    id: 1,
    supportTitle: <F1TenthSupportTitle />,
    supportDescription: <F1TenthSupportDescription />,
    supportId: 1,
}

export default F1Tenth