import React from 'react'
import timelineItem from './types'
import Image from 'next/image'

const DeepCubeXTitle = () => {
  return (
    <div className="text-3xl text-purple"> 
        DeepCubeX
    </div>
  )
}

const DeepCubeXDescription = () => {
    return (
        <div className="relative justify-center align-middle size-48 ">
            <Image
                src="https://cube.rider.biz/visualcube.php?fmt=svg&size=1024&alg=BR2FU2B%27L2B2R2D2LF2D%27U2L2B%27F%27DRUB%27&bg=t"
                alt="Scrambled Rubik's Cube."
                width={10}
                height={10}
                layout="responsive"
                className="rounded-lg w-5 h-5"
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
                Undergraduate Researcher at Davidson Lab, UC Davis
            </i> 
            <br />
        </div>
    )
}

const DeepCubeXSupportDescription = () => {
    return (
        <div>
            <div className="font-light text-lg">
                A research project building upon DeepCubeA, which uses Deep Q-Learning and IDA* to solve a cube with no prior knowledge. Research focusing on training the model to learn like a human, and using domain knowledge to improve performance.
            </div>

            <div className="font-semibold text-lg">
                <br />
                <b>Technologies:</b> Python, C++, PyTorch, Numpy
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