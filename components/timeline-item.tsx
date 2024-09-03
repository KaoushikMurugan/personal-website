import { cn } from "@/lib/utils";

interface TimelineItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  height?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  height,
}) => {
  return (
    <div
      style={{ height }} // Apply height style
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-indigo-950 bg-indigo-300 justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 text-center text-2xl md:text-3xl mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-semibold text-neutral-600 text-lg dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

  interface TimelineSupportProps {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id?: number;
    height?: string;
  }

  export const TimelineSupport: React.FC<TimelineSupportProps> = ({
    className,
    title,
    description,
    header,
    icon,
    id,
    height, // New prop
  }) => {
    return (
      <div
        style={{ height }} // Apply height style
        className={cn(
          "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black bg-white justify-between flex flex-col space-y-4 dark:border-white/[0.2] border-red-500 border border-transparent",
          className
        )}
      >
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
      </div>
    );
  };