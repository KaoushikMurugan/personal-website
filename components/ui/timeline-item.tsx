import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

interface TimelineBaseItemProps {
  className?: ClassValue;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  rootClassName?: ClassValue;
  titleClassName?: ClassValue;
  descriptionClassName?: ClassValue;
}

export const TimelineBaseItem: React.FC<TimelineBaseItemProps> = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  rootClassName,
  titleClassName,
  descriptionClassName,
}) => {
  return (
    <div
      key={id}
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl hover:scale-105 transition duration-200 shadow-input dark:shadow-none p-4 justify-between flex flex-col space-y-4",
        rootClassName,
        className
      )}
    >
      <div className="transition duration-200 flex flex-col h-full">
        <div className="flex items-center justify-center space-x-3">
          {icon && <div className="text-4xl text-indigo-600">{icon}</div>}
          <div
            className={cn(
              "font-sans font-bold text-center md:text-3xl transition duration-200",
              titleClassName
            )}
          >
            {title}
          </div>
        </div>
        <div
          className={cn(
            "font-sans text-neutral-600 dark:text-neutral-300 leading-relaxed flex-grow",
            descriptionClassName
          )}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

interface TimelineItemProps {
  className?: ClassValue;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = (timelineItemProps) => {
  return (
    <TimelineBaseItem 
      {...timelineItemProps}
      rootClassName = "dark:bg-indigo-950 bg-indigo-300"
      titleClassName = "text-3xl text-purple"
      descriptionClassName = "font-semibold text-lg space-y-2 flex items-center justify-center align-middle"
    />
  );
};

export const TimelineSupport: React.FC<TimelineItemProps> = (timelineItemProps) => {
  return (
    <TimelineBaseItem 
      {...timelineItemProps}
      rootClassName = "dark:bg-black bg-white dark:border-white/[0.2] border-red-500 border border-transparent"
      titleClassName = "group-hover/bento:text-indigo-600 text-neutral-600 dark:text-neutral-200 text-2xl py-2"
      descriptionClassName = "font-normal text-xs"
    />
  );
};