import { AccentText } from "@/components/ui/accent-text";
import { BentoBoxElement } from "../timeline-items/types";

const AdaptabilityTitle = () => {
    return (
        <div> 
            Adaptability
        </div>
    )
}

const AdaptabilityDescription = () => {
    return (
        <div>
            I am a <AccentText text="quick learner"/> and I am always ready to adapt to new environments and challenges. 
        </div>
    )
}

const Adaptability: BentoBoxElement = {
    title: <AdaptabilityTitle />,
    description: <AdaptabilityDescription />,
    id: 30001
}

export default Adaptability