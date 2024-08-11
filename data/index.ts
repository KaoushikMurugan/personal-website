import Connect4 from "./timeline-items/Connect4"
import CSTutoring from "./timeline-items/CSTutoring"
import DeepCubeX from "./timeline-items/DeepCubeX"
import F1Tenth from "./timeline-items/F1Tenth"
import timelineItem from "./timeline-items/types"
import YABOB from "./timeline-items/YABOB"

export const gridItems = [
    { title: "Title1", description: "Descr1", id: 1 },
    { title: "Title2", description: "Descr2", id: 2 },
    { title: "Title3", description: "Descr3", id: 3 },
]


export const timelineItems : timelineItem[] = [
    DeepCubeX,
    YABOB,
    F1Tenth,
    CSTutoring,
    Connect4,
]