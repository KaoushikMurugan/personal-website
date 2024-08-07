import Grid from "@/components/grid";
import Hero from "@/components/hero";
import Timeline from "@/components/timeline";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={[
            {name: 'Home', link: '/', icon: <FaHome />}
          ]}
        />
        <Hero />
        <Grid />
        {/* add some padding to the bottom */}
        <div className="h-20" />
        <Timeline />
      </div>
    </main>
  );
}
