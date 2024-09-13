import Grid from "@/components/grid";
import Hero from "@/components/hero";
import ProgrammingIconsRibbon from "@/components/programming-icons-ribbon";
import Timeline from "@/components/timeline";
import { timelineItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <ProgrammingIconsRibbon />
        <Grid />
        {/* add some padding to the bottom */}
        <div className="h-20" />
        <Timeline timelineItems={timelineItems}/>
      </div>
    </main>
  );
}
