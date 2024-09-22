import { AccentText } from "@/components/ui/accent-text";
import { BentoBoxElement } from "../timeline-items/types";

const InterestsTitle = () => {
    return (
        <div> 
            Interests
        </div>
    )
}

const InterestsDescription = () => {
    return (
        <div>
            From <AccentText text="Embedded Systems"/> to <AccentText text=" Machine Learning "/> to <AccentText text=" Game Development"/>, I am passionate about a wide range of low-level and high-level topics in Computer Science.
            {/* For images, include icons for: embeded/hardware, website and game controller */}
        </div>
    )
}

const Interests: BentoBoxElement = {
    title: <InterestsTitle />,
    description: <InterestsDescription />,
    id: 30001
}

export default Interests