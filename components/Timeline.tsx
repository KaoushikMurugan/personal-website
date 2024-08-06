import { timelineItems } from '@/data'
import React from 'react'
import { TimelineItem, TimelineSupport } from './TimelineItem'
import { cn } from '@/lib/utils';

const Timeline = ({
  className,
}: {
  className?: string;
}) => {

  const line_color = 'bg-violet-400'

  return (
    <section id="timeline">
      <div
        className={cn(
          "relative grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 gap-28 max-w-7xl mx-auto ",
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
        <div className={`absolute inset-0 w-1 ${line_color} left-1/2 transform -translate-x-1/2 z-0 top-36 bottom-36`}></div>
        {
          timelineItems.map((item, index) => {
            const topPosition = 9 + index * 25; // 9 = 0.5*height of div + index * (height of div + gap)
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