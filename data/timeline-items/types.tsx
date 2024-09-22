export type TimelineElement = {
    title: string | React.ReactNode,
    description: string | React.ReactNode,
    id: number,
    supportTitle: string | React.ReactNode,
    supportDescription: string | React.ReactNode,
    supportId: number,
}

export type BentoBoxElement = {
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    icon?: React.ReactNode;
    id: number;
}