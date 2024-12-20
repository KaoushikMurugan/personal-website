import React from 'react'
import { TimelineElement } from './types'
import { AccentText } from "@/components/ui/accent-text"
import TagList from '@/components/ui/tag-list'
import CSTutoringLogo from "../../public/CSTutoringLogo.svg"
import Image from 'next/image'

const CSTutoringTitle = () => {
  return (
    <div> 
        CSTutoring
    </div>
  )
}

const CSTutoringDescription = () => {
    return (
        <div className="">
            <div className="flex justify-center align-middle">
                <a href="https://cstutoringatdavis.com/" target="_blank" rel="noopener noreferrer">
                <Image
                    src={CSTutoringLogo}
                    alt="CSTutoring Logo"
                    className="rounded-lg w-full max-w-[300px] object-contain"
                /></a>
            </div>
        </div>
    )
}

const CSTutoringSupportTitle = () => {
    return (
        <div>
            <div className="font-medium text-3xl">
                VP of Software Engineering and Tutor
            </div>
            <i className="font-normal text-xl text-cyan-500">
                March 2022 - June 2024
            </i> 
            <br />
        </div>
    )
}

const CSTutoringSupportDescription = () => {
    return (
        <div>
            <div className="font-light text-lg space-y-2">
                <p><AccentText text="Led and mentored a team of undergraduates"/> on SWE projects such as YABOB (see above) and a dashboard website for tutors and professors.</p>
                <p><AccentText text="Tutored over 200 undergraduates"/> on both lower-division and upper-division CS topics such as OOP, data structures, algorithms, and computer architecture.</p>
                <p>Conducted <AccentText text="code reviews"/> for students taking introductory CS courses in C and C++.</p>
            </div>

            <div className="font-semibold text-sm mt-4 flex flex-wrap gap-1 justify-center">
                <TagList items={[
                    "Leadership",
                    "Communication",
                    "Mentoring",
                    ]} />
            </div>
        </div>
    )
}

const CSTutoring: TimelineElement = {
    title: <CSTutoringTitle />,
    description: <CSTutoringDescription />,
    id: 4,
    supportTitle: <CSTutoringSupportTitle />,
    supportDescription: <CSTutoringSupportDescription />,
    supportId: 104,
}

export default CSTutoring