import React from 'react'
import timelineItem from './types'
import Image from 'next/image'
import { AccentText } from '@/components/timeline-item'
import ExpandableImage from '@/components/expandable-image'

const DeepCubeXTitle = () => {
  return (
    <div className="text-3xl text-purple"> 
        DeepCubeX
    </div>
  )
}

const DeepCubeXDescription = () => {
    return (
        <div className="flex justify-center align-middle">
            <ExpandableImage
                src="https://cube.rider.biz/visualcube.php?fmt=svg&size=1024&alg=BR2FU2B%27L2B2R2D2LF2D%27U2L2B%27F%27DRUB%27&bg=t"
                alt="Scrambled Rubik's Cube."
                width={10}
                height={10}
                className="rounded-lg w-full max-w-[300px] object-contain"
            />
        </div>
    )
}

const DeepCubeXSupportTitle = () => {
    return (
        <div>
            <div className="font-extralight text-3xl">
                March 2024 - Present
            </div>
            <i className="font-normal text-xl">
                Undergraduate AI/ML Researcher at Davidson Lab, UC Davis
            </i> 
            <br />
        </div>
    )
}

const DeepCubeXSupportDescription = () => {
    return (
        <div>
            <div className="font-light text-lg">
                A research project building upon DeepCubeA, which uses <AccentText text="Deep Q-Learning and IDA*"/> to solve a cube with no prior knowledge. Researching novel techniques to enforce human-like learning for <AccentText text="Explainable AI"/>. Using extensive data analysis and leveraging domain knowledge, solution ergonomics have <AccentText text="improved by 25%"/> so far.
            </div>

            <div className="font-semibold text-lg">
                <br />
                <b>Technologies:</b> Python, C++, PyTorch, Numpy, Pandas
            </div>
        </div>
    )
}

const DeepCubeX: timelineItem = {
    title: <DeepCubeXTitle />,
    description: <DeepCubeXDescription />,
    id: 1,
    supportTitle: <DeepCubeXSupportTitle />,
    supportDescription: <DeepCubeXSupportDescription />,
    supportId: 101,
}

export default DeepCubeX