import React from 'react'
import { TimelineItem, TimelineSupport } from './timeline-item'
import { cn } from '@/lib/utils';
import timelineItem from '@/data/timeline-items/types';

const Timeline = ({
  className,
  timelineItems
}: {
  className?: string;
  timelineItems: timelineItem[]
}) => {

  const line_color = 'bg-violet-400'
  const rowHeight = 25
  const rowGap = 7

  // You have to manually change this for now:
  //                                V = rowGap          V = rowHeight
  const timelineCustomClass = `gap-[7rem] md:auto-rows-[25rem]`

  //      both = rowHeight/2            V              V
  const timelineItemCustomClass = `top-[12.5rem] bottom-[12.5rem]`

  return (

    <section id="timeline">
      <div className="h-10" /> {/* Spacer */}
      <div
        className={cn(
          `relative grid ${timelineCustomClass} grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto`,
          className
        )}
      >
        {
          timelineItems.map((item, index) => {
            if (index % 2 === 0) {
              return LeftIndentItem(item)
            } else {
              return RightIntentItem(item)
            }
          })
        }
        <div className={`absolute inset-0 w-1 ${line_color} left-1/2 transform -translate-x-1/2 z-0 ${timelineItemCustomClass}`}></div>
        {
          timelineItems.map((item, index) => {
            const topPosition = 0.5*rowHeight + index * (rowHeight + rowGap); // 0.5*height of div + index * (height of div + gap)
            if (index % 2 === 0) {
              return (
                <div
                  key={`right-${index}`}
                  className={`hidden md:block absolute right-1/2 w-1/2 h-1 ${line_color} z-0`}
                  style={{ top: `${topPosition}rem` }}
                />
              )
            } else {
              return (
                <div
                  key={`right-${index}`}
                  className={`hidden md:block absolute left-1/2 w-1/2 h-1 ${line_color} z-0`}
                  style={{ top: `${topPosition}rem` }}
                />
              )
            }
          })
        }
      </div>
      <div className="h-10" /> {/* Spacer */}
    </section>
  )
}

function LeftIndentItem(item: any) {
  return <>
    <TimelineItem
      key={item.id}
      title={item.title}
      description={item.description}
      id={item.id}
      className='z-10'
    />
    <TimelineSupport
      key={item.supportId}
      title={item.supportTitle}
      description={item.supportDescription}
      id={item.supportId}
      className='z-10'
    />
  </>
}

function RightIntentItem(item: any) {
  return <>
    <TimelineSupport
      key={item.supportId}
      title={item.supportTitle}
      description={item.supportDescription}
      id={item.supportId}
      className='z-10'
    />
    <TimelineItem
      key={item.id}
      title={item.title}
      description={item.description}
      id={item.id}
      className='z-10'
    />
  </>
}

export default Timeline