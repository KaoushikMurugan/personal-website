import React from 'react'
import { TimelineElement } from './types'
import { SocialIcon } from '@/components/ui/social-icons'
import { AccentText } from "@/components/ui/accent-text"
import TextBoxList from '@/components/ui/text-box-list'

const F1TenthTitle = () => {
  return (
    <div> 
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
            <i className="font-normal text-xl text-cyan-500">
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
                    <li key="50001">Implemented <AccentText text="SLAM, race-line optimization, and path-following (pure-pursuit)"/></li>
                    <li key="50002">Integrated obstacle avoidance algorithms, <AccentText text="reducing collision rates by 5%"/></li>
                    <li key="50003">Utilized Docker for simulations and testing</li>
                </ul>
            </div>

            <div className="font-semibold text-sm mt-4 flex flex-wrap gap-1 justify-center">
                <TextBoxList items={[
                    "ROS2",
                    "Docker",
                    "Python",
                    "C++",
                    "PyTest",
                    "Google Test",
                ]} />
            </div>
            

            <div className="flex justify-center gap-10 mt-4">
                <SocialIcon platform="github" link="https://github.com/ian-chuang/f1tenth_gym_ros" />
                <SocialIcon platform="youtube" link="https://www.youtube.com/watch?v=IEvM3ufXBYI" />
                <SocialIcon platform="linkedin" link="https://www.linkedin.com/posts/erikc1_teamwork-makes-the-dreamwork-we-had-a-activity-7207041546095874049-zK1V/" />
            </div>
        </div>
    );
};

const F1Tenth: TimelineElement = {
    title: <F1TenthTitle />,
    description: <F1TenthDescription />,
    id: 3,
    supportTitle: <F1TenthSupportTitle />,
    supportDescription: <F1TenthSupportDescription />,
    supportId: 103,
}

export default F1Tenth