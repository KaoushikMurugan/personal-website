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
            I am passionate about a wide range of low-level and high-level topics in Computer Science, from <AccentText text=" Machine Learning "/> to <AccentText text=" Game Development"/> to <AccentText text="Embedded Systems"/>.
        </div>
    )
}

const Interests: BentoBoxElement = {
    title: <InterestsTitle />,
    description: <InterestsDescription />,
    id: 30001
}

export default Interests