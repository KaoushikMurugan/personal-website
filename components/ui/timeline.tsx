"use client";

import React, { useEffect, useState } from 'react'
import { TimelineItem, TimelineSupport } from './timeline-item'
import { cn } from '@/lib/utils';
import { TimelineElement } from '@/data/timeline-items/types';

const Timeline = ({
  className,
  timelineItems
}: {
  className?: string;
  timelineItems: TimelineElement[]
}) => {

  const line_color = 'bg-amber-400 dark:bg-amber-600'
  const defaultRowHeight = 28
  const defaultColumnWidth = 36
  const defaultMobileColumnWidth = 56
  const defaultRowGap = 7
  const growthFactor = 0.8

  const [mobile, setMobile] = useState(false);
  const [rowHeight, setBoxHeight] = useState(defaultRowHeight);
  const [boxHeightString, setBoxHeightString] = useState(`${defaultRowHeight}rem`);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMobile = width < 1024;
      // diving by 32 for rem factor
      const deltaW = (1400 - width) / 32;
      const mobileDeltaW = (1024 - width) / 32; 
      // newHeight is a Continuous, inverse function of deltaW, within the domains of isMobile and !isMobile
      const newHeight = isMobile 
        ? defaultRowHeight*(defaultMobileColumnWidth)/(defaultMobileColumnWidth - growthFactor * mobileDeltaW) 
        : width < 1400
          ? defaultRowHeight*(defaultColumnWidth)/(defaultColumnWidth - growthFactor * deltaW)
          : defaultRowHeight;
      setMobile(isMobile);
      setBoxHeight(newHeight);
      setBoxHeightString(`${newHeight}rem`);
    };
  
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial height
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (

    <section id="timeline">
      <div className="h-10" /> {/* Spacer */}
      <div
        style={{ 
          gap: `${defaultRowGap}rem`,
          gridAutoRows: `${rowHeight}rem`
        }}
        className={cn(
          `relative grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto`,
          className
        )}
      >
        {
          mobile
          ? timelineItems.map((item, index) => RightIntentItem(item))
          : (
            timelineItems.map((item, index) => {
              if (index % 2 === 0) {
                return LeftIndentItem(item)
              } else {
                return RightIntentItem(item)
              }
            })
          )
        }
        {/* Timeline Main Line */}
        <div 
          key = 'main-line'
          style={{
            top: `${0.5*rowHeight}rem`,
            bottom: `${0.5*rowHeight - 0.25}rem`,
          }}
          className={`absolute inset-0 w-1 left-1/2 transform -translate-x-1/2 z-0 ${line_color}`}/>

        {
          mobile ? null :
          timelineItems.map((item, index) => {
            const topPosition = 0.5*rowHeight + index * (rowHeight + defaultRowGap); // 0.5*height of div + index * (height of div + gap)
            if (index % 2 === 0) {
              return (
                <div
                  key={`right-${index}`}
                  className={`hidden md:block absolute right-1/2 w-1/2 h-0 md:h-1 ${line_color} z-0`}
                  style={{ top: `${topPosition}rem` }}
                />
              )
            } else {
              return (
                <div
                  key={`left-${index}`}
                  className={`hidden md:block absolute left-1/2 w-1/2 h-0 md:h-1 ${line_color} z-0`}
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

function LeftIndentItem(item: TimelineElement) {
  return <>
    <TimelineItem
      key={item.id}
      title={item.title}
      description={item.description}
      id={item.id}
      className='z-10 align-middle'
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

function RightIntentItem(item: TimelineElement) {
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
      className='z-10 align-middle'
    />
  </>
}

export default Timeline