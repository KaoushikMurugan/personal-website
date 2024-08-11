import React from 'react'
import timelineItem from './types'
import Image from 'next/image'

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
                VP of Sofware Engineering and Tutor
            </i> 
            <br />
        </div>
    )
}

const CSTutoringSupportDescription = () => {
    return (
        <div>
            <div className="font-light text-lg">
            Lead and mentored a group of undergraduates on SWE projects such as YABOB (see above) and building a website with useful tools for tutors to view their tutoring history, and other useful tools for tutors to use.
            Tutored over 200 undergraduates on both lower-division and upper divison CS topics such as object oriented programming, data structures, algorithms and computer architecture
            Conducted code reviews for students taking introductory CS courses in C and C++
            </div>

            <div className="font-semibold text-lg">
                <br />
                <b>Skills:</b> Leadership, Communication, Mentoring
            </div>
        </div>
    )
}

const CSTutoring: timelineItem = {
    title: <CSTutoringTitle />,
    description: <CSTutoringDescription />,
    id: 1,
    supportTitle: <CSTutoringSupportTitle />,
    supportDescription: <CSTutoringSupportDescription />,
    supportId: 1,
}

export default CSTutoring