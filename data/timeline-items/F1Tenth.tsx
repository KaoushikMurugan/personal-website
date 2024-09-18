import React from 'react'
import timelineItem from './types'
import Image from 'next/image'
import ArchitectureDiagram from "../../public/F1Tenth_Architecture_darkmode.png"
import { SocialIcon } from '@/components/social-icons'
import { AccentText } from '@/components/timeline-item'
import ExpandableImage from '@/components/expandable-image'
import { TextBox } from '@/components/text-box'

const F1TenthTitle = () => {
  return (
    <div className="text-3xl text-purple"> 
        1:10th Scale Autonomous Car
    </div>
  )
}

const F1TenthDescription = () => {
    return (
      <div className="w-full max-w-2xl mx-auto aspect-video rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/IEvM3ufXBYI"
          title="One-Tenth Scale Autonomous Racecar Demo - UC Davis ECS Capstone"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          rel="0"
          
        ></iframe>
      </div>
    );
  };

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
        <div className="align-middle">
            <div className="font-light text-lg space-y-2">
                <p>Developer on <AccentText text="UC Davis F1Tenth&apos;s Computer Vision Team"/> for Senior Capstone.</p>
                <ul className="list-disc list-inside pl-4">
                    <li key="50001">Implemented <AccentText text="SLAM, race-line optimization, and path-following (pure-pursuit)."/></li>
                    <li key="50002">Integrated obstacle avoidance algorithms, <AccentText text="reducing collision rates by 5%."/></li>
                    <li key="50003">Used Docker for simulations and testing with PyTest and Google Test.</li>
                </ul>
            </div>

            <div className="font-semibold text-sm mt-4 flex flex-wrap gap-1 justify-center">
                <TextBox text="ROS2"/>
                <TextBox text="Docker"/>
                <TextBox text="Python"/>
                <TextBox text="C++"/>
                <TextBox text="PyTest"/>
                <TextBox text="Google Test"/>
            </div>
            

            <div className="flex justify-center gap-10 mt-4">
                <SocialIcon platform="github" link="https://github.com/ian-chuang/f1tenth_gym_ros" />
                <SocialIcon platform="youtube" link="https://www.youtube.com/watch?v=IEvM3ufXBYI" />
                <SocialIcon platform="linkedin" link="https://www.linkedin.com/posts/erikc1_teamwork-makes-the-dreamwork-we-had-a-activity-7207041546095874049-zK1V?utm_source=share&utm_medium=member_desktop" />
            </div>
        </div>
    );
};

const F1Tenth: timelineItem = {
    title: <F1TenthTitle />,
    description: <F1TenthDescription />,
    id: 3,
    supportTitle: <F1TenthSupportTitle />,
    supportDescription: <F1TenthSupportDescription />,
    supportId: 103,
}

export default F1Tenth