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
            I love <AccentText text="learning new things"/> and am excited about new challenges. I care about understanding the <AccentText text="foundations"/> of a concept and building <AccentText text="intuition"/> around it.
        </div>
    )
}

const Adaptability: BentoBoxElement = {
    title: <AdaptabilityTitle />,
    description: <AdaptabilityDescription />,
    id: 30001
}

export default Adaptability