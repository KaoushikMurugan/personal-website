import { timelineItems } from '@/data'
import React from 'react'
import { TimelineItem, TimelineSupport } from './TimelineItem'
import { cn } from '@/lib/utils';

const Timeline = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <section id="timeline">
      <div
        className={cn(
          "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 gap-32 max-w-7xl mx-auto ",
          className
        )}
      >
        {
          timelineItems.map((item, index) => {
            if (index % 2 === 0) {
              return <>
                <TimelineItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  id={item.id}
                />
                <TimelineSupport
                  key={item.supportId}
                  title={item.supportTitle}
                  description={item.supportDescription}
                  id={item.supportId}
                />
              </>
            } else {
              return <>
                <TimelineSupport
                  key={item.supportId}
                  title={item.supportTitle}
                  description={item.supportDescription}
                  id={item.supportId}
                />
                <TimelineItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  id={item.id}
                />
              </>
            }
          })
        }
      </div>
    </section>
  )
}

export default Timeline