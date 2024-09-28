import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'
import SectionTitle from './ui/section-title'

const Grid = () => {
  return (
    <section id="abouts">
      <SectionTitle title="About Myself" />
      <BentoGrid>
        {
          gridItems.map((item, index) => (
            <BentoGridItem 
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))
        }
      </BentoGrid>
      <div className="h-10" /> {/* Spacer */}
    </section>
  )
}

export default Grid