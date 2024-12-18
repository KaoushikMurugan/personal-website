import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  title,
  description,
  header,
  icon,
  id,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl hover:scale-105 transition duration-200 shadow-input dark:shadow-none px-4 py-2 dark:bg-cyan-995 dark:border-cyan-200/[0.25] bg-white border border-transparent justify-between flex flex-col border-red-500",
        className
      )}
    >
      {header}
      <div className=" transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-cyan-300 mb-2 mt-2 text-2xl">
          {title}
        </div>
        <div className="font-sans font-normal text-lg text-neutral-600 dark:text-cyan-200/[0.8]">
          {description}
        </div>
      </div>
    </div>
  );
};
