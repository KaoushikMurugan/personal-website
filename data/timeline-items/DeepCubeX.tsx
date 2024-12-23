import React from 'react'
import { TimelineElement } from './types'
import { AccentText } from "@/components/ui/accent-text"
import TagList from '@/components/ui/tag-list'
import Image from 'next/image'
import { SocialIcon } from '@/components/ui/social-icons'

const DeepCubeXTitle = () => {
  return (
    <div> 
        DeepCubeX
    </div>
  )
}

// 
/**
 * What's in the link:
 * Scramble: B U D' F' D' R L F' L' R' B F' R D L' L' D' R B' D' L'
 * Solution:
 * Above is the Scramble, Model is in QTM
 * DeepCubeX Example Solve [June 2024 Model]
 * Optimized for ergonomics, note minimal use of B and D moves, and high use of R and U moves.
 * U' R' U R' U F U R' U R F U F' U' R U R' U R U' R' U U L U' B' // 2x2x2 + pseudo 2x2x3
 * U F // EO complete
 * U L' // pseudo F2L (minus) 1
 * U' R U' R' // pseudo F2L + Top Cross (doing U2 R U2 R' L' after this stage gives a sune case)
 * U (R' U' R U' R' U' U' R) U // in () is a known algorithm called inverse back sune (variation on common algorithm known as sune). Key thing to notice here is that only the pieces next to the white center changed.
 * R U R' U L' // undo setup
 * Try: see what happens when you move the "undo setup" moves to the start of the scramble
 */

const deepCubeXExampleSolveLink = "https://cubedb.net/?puzzle=3x3&title=DeepCubeX_Example_Solve_%5BJune_2024_Model%5D&scramble=B_U_D-_F-_D-_R_L_F-_L-_R-_B_F-_R_D_L-_L-_D-_R_B-_D-_L-&alg=%2F%2F_Above_is_the_Scramble%2C_Model_is_in_QTM%0A%2F%2F_DeepCubeX_Example_Solve_%5BJune_2024_Model%5D%0A%2F%2F_Optimized_for_ergonomics%2C_note_minimal_use_of_B_and_D_moves%2C_and_high_use_of_R_and_U_moves.%0AU-_R-_U_R-_U_F_U_R-_U_R_F_U_F-_U-_R_U_R-_U_R_U-_R-_U_U_L_U-_B-_%2F%2F_2x2x2_%2B_pseudo_2x2x3%0AU_F_%2F%2F_EO_complete%0AU_L-_%2F%2F_pseudo_F2L_(minus)_1%0AU-_R_U-_R-_%2F%2F_pseudo_F2L_%2B_Top_Cross_(doing_U2_R_U2_R-_L-_after_this_stage_gives_a_sune_case)%0AU_(R-_U-_R_U-_R-_U-_U-_R)_U_%2F%2F_in_()_is_a_known_algorithm_called_inverse_back_sune_(variation_on_common_algorithm_known_as_sune)._Key_thing_to_notice_here_is_that_only_the_pieces_next_to_the_white_center_changed.%0AR_U_R-_U_L-_%2F%2F_undo_setup_%0A%0A%2F%2F_Try%3A_see_what_happens_when_you_move_the_%22undo_setup%22_moves_to_the_start_of_the_scramble%0A%0A%0A"

const DeepCubeXDescription = () => {
    return (
        <div className="flex justify-center align-middle">
            <a href={deepCubeXExampleSolveLink} target="_blank" rel="noopener noreferrer">
                <Image
                    src="https://cube.rider.biz/visualcube.php?fmt=svg&size=1024&alg=x2BUD%27F%27D%27RLF%27L%27R%27BF%27RDL2D%27RB%27D%27L%27&bg=t"
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
            <div className="font-medium text-3xl">
                AI/ML Researcher at Davidson Lab, UC Davis
            </div>
            <i className="font-normal text-xl text-cyan-500">
                March 2024 - Present
            </i> 
            <br />
        </div>
    )
}

const DeepCubeXSupportDescription = () => {
    return (
        <div>
            <div className="font-light text-lg space-y-2">
                <p>Developing a <AccentText text="Deep Learning"/> model to <AccentText text="solve puzzles"/> like the Rubik&apos;s Cube <AccentText text="from scratch"/>, as well as <AccentText text="create methods that can be taught to humans"/>.</p>
                <p>Genering solutions using <AccentText text="Reinforcement Learning"/> and <AccentText text="A*"/>. Identifying method sub-goals using <AccentText text="Auto-Encoders"/> and <AccentText text="DNNs"/>.</p>
            </div>

            <div className="font-semibold text-sm mt-4 flex flex-wrap gap-1 justify-center">
                <TagList items={[
                    "Python",
                    "C++",
                    "PyTorch",
                    "Numpy",
                    "Pandas",
                    "Matplotlib",
                    "Mathematical Modeling",
                    "Research",
                ]} />
            </div>
            <div className="flex justify-center gap-10 mt-4">
                <SocialIcon link={deepCubeXExampleSolveLink} />
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