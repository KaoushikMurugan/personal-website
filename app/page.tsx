import Grid from "@/components/grid";
import Hero from "@/components/hero";
import ProgrammingIconsRibbon from "@/components/programming-icons-ribbon";
import SectionTitle from "@/components/ui/section-title";
import Timeline from "@/components/ui/timeline";
import { timelineElements } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-cyan-100 dark:bg-cyan-999 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid/>
        <ProgrammingIconsRibbon />
        <Timeline timelineItems={timelineElements} lineClassName="bg-amber-400 dark:bg-amber-600"/>
      </div>
    </main>
  );
}
