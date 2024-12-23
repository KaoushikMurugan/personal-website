"use client";

import SectionTitle from './ui/section-title';
import { IoDocumentText } from "react-icons/io5";
import MagicButton from './buttons/magic-button';
import Timeline from './ui/timeline';
import { timelineElements } from "@/data";

const Experience = () => {
  return (
    <section id="experience">
      <SectionTitle title="Experience" />
      <span className="flex justify-center pt-0 pb-[3.75rem] md:pt-5 md:pb-20">
        <a href="/Kaoushik_Murugan_Resume.pdf" target="_blank" rel="noreferrer">
          <MagicButton 
            title="Get my Resume"
            icon={<IoDocumentText className='text-xl'/>}
            position="right"
          />
        </a>
      </span>
      <Timeline timelineItems={timelineElements} lineClassName="bg-amber-400 dark:bg-amber-600" />
      <div className="h-10" /> {/* Spacer */}
    </section>
  )
}

export default Experience