import { AccentText } from "@/components/ui/accent-text";
import { BentoBoxElement } from "../timeline-items/types";

const CollaborationTitle = () => {
    return (
        <div> 
            Collaboration
        </div>
    )
}

const CollaborationDescription = () => {
    return (
        <div>
            Either as a <AccentText text="team member or a leader"/>, I always care about ensuring a <AccentText text="positive and productive environment"/> for everyone involved.
        </div>
    )
}

const Collaboration: BentoBoxElement = {
    title: <CollaborationTitle />,
    description: <CollaborationDescription />,
    id: 30001
}

export default Collaboration