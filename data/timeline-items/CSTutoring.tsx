import React from 'react'
import { TimelineElement } from './types'
import { AccentText } from "@/components/ui/accent-text"
import { TextBox } from '@/components/ui/text-box'
import TextBoxList from '@/components/ui/text-box-list'

const CSTutoringTitle = () => {
  return (
    <div className="text-3xl text-purple"> 
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
            <i className="font-normal text-xl">
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
                <p><AccentText text="Lead and mentored a group of undergraduates"/> on SWE projects such as YABOB (see above) and building a website with useful tools for tutors to view their tutoring history, and other useful tools for tutors to use.</p>
                <p><AccentText text="Tutored over 200 undergraduates"/> on both lower-division and upper division CS topics such as object-oriented programming, data structures, algorithms, and computer architecture.</p>
                <p>Conducted <AccentText text="code reviews"/> for students taking introductory CS courses in C and C++.</p>
            </div>

            <div className="font-semibold text-sm mt-4 flex flex-wrap gap-1 justify-center">
                <TextBoxList items={[
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