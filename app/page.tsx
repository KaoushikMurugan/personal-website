import Grid from "@/components/grid";
import Hero from "@/components/hero";
import ProgrammingIconsRibbon from "@/components/programming-icons-ribbon";
import Timeline from "@/components/ui/timeline";
import { timelineElements } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-cyan-100 dark:bg-cyan-999 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid/>
        <div className="h-20" />
        <ProgrammingIconsRibbon />
        {/* add some padding to the bottom */}
        <Timeline timelineItems={timelineElements}/>
        <div className="h-10" />
      </div>
    </main>
  );
}
