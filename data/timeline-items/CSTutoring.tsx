import React from 'react'
import { TimelineElement } from './types'
import { AccentText } from "@/components/ui/accent-text"
import TagList from '@/components/ui/tag-list'

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
            {/* TBD */}
        </div>
    )
}

const CSTutoringSupportTitle = () => {
    return (
        <div>
            <div className="font-extralight text-3xl">
                March 2022 - June 2024
            </div>
            <i className="font-normal text-xl text-cyan-500">
                VP of Software Engineering and Tutor
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