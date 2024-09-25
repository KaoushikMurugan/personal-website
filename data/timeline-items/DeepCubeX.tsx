import React from 'react'
import { TimelineElement } from './types'
import { AccentText } from "@/components/ui/accent-text"
import ExpandableImage from '@/components/ui/expandable-image'
import TagList from '@/components/ui/tag-list'
import Image from 'next/image'

const DeepCubeXTitle = () => {
  return (
    <div> 
        DeepCubeX
    </div>
  )
}

const deepCubeXExampleSolveLink = "https://cubedb.net/?puzzle=3x3&title=DeepCubeX_Example_Solve_%5BJune_2024_Model%5D&scramble=B_U_D-_F-_D-_R_L_F-_L-_R-_B_F-_R_D_L-_L-_D-_R_B-_D-_L-&alg=%2F%2F_Above_is_the_Scramble%2C_Model_is_in_QTM%0A%2F%2F_DeepCubeX_Example_Solve_%5BJune_2024_Model%5D%0A%2F%2F_Optimized_for_ergonomics%2C_note_minimal_use_of_B_and_D_moves%2C_and_high_use_of_R_and_U_moves.%0AU-_R-_U_R-_U_F_U_R-_U_R_F_U_F-_U-_R_U_R-_U_R_U-_R-_U_U_L_U-_B-_%2F%2F_2x2x2_%2B_pseudo_2x2x3%0AU_F_%2F%2F_EO_complete%0AU_L-_%2F%2F_pseudo_F2L_(minus)_1%0AU-_R_U-_R-_%2F%2F_pseudo_F2L_%2B_COLL_(doing_U2_R_U2_R-_L-_after_this_stage_gives_a_sune_case)%0AU_(R-_U-_R_U-_R-_U-_U-_R)_U_%2F%2F_in_()_is_a_known_algorithm_called_inverse_back_sune_(variation_on_common_algorithm_known_as_sune)._Key_thing_to_notice_here_is_that_only_the_pieces_next_to_the_white_center_changed.%0AR_U_R-_U_L-_%2F%2F_undo_setup_%0A%0A%0A"

const DeepCubeXDescription = () => {
    return (
        <div className="flex justify-center align-middle">
            <a href={deepCubeXExampleSolveLink} target="_blank" rel="noopener noreferrer">
                <Image
                    src="https://cube.rider.biz/visualcube.php?fmt=svg&size=1024&alg=BR2FU2B%27L2B2R2D2LF2D%27U2L2B%27F%27DRUB%27&bg=t"
                    alt="Scrambled Rubik's Cube."
                    width={10}
                    height={10}
                    className="rounded-lg w-full max-w-[300px] object-contain"
                /> </a>
        </div>
    )
}

const DeepCubeXSupportTitle = () => {
    return (
        <div>
            <div className="font-extralight text-3xl">
                March 2024 - Present
            </div>
            <i className="font-normal text-xl text-cyan-500">
                AI/ML Researcher at Davidson Lab, UC Davis
            </i> 
            <br />
        </div>
    )
}

const DeepCubeXSupportDescription = () => {
    return (
        <div>
            <div className="font-light text-lg">
                A <AccentText text="research project"/> building upon DeepCubeA, which uses <AccentText text="Deep Q-Learning and IDA*"/> to solve a cube with no prior knowledge. Researching novel techniques to enforce human-like learning for <AccentText text="Explainable AI"/>. Using extensive data analysis and leveraging domain knowledge, solution ergonomics have <AccentText text="improved by 25%"/> so far.
            </div>

            <div className="font-semibold text-sm mt-4 flex flex-wrap gap-1 justify-center">
                <TagList items={[
                    "Python",
                    "C++",
                    "PyTorch",
                    "Numpy",
                    "Pandas",
                    "Matplotlib",
                ]} />
            </div>
        </div>
    )
}

const DeepCubeX: TimelineElement = {
    title: <DeepCubeXTitle />,
    description: <DeepCubeXDescription />,
    id: 1,
    supportTitle: <DeepCubeXSupportTitle />,
    supportDescription: <DeepCubeXSupportDescription />,
    supportId: 101,
}

export default DeepCubeX