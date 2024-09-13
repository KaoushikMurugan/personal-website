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

interface TimelineItemProps {
  className?: ClassValue;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
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
    <div key = {id}
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl hover:scale-105 transition duration-200 shadow-input dark:shadow-none p-4 justify-between flex flex-col space-y-4",
        rootClassName,
        className
      )}
    >
      {header && (
        <>
          {header}
          <div className="border-b border-neutral-200 dark:border-neutral-600 my-2"></div>
        </>
      )}
      <div className="transition duration-200">
        <div className="flex items-center justify-center space-x-3">
          {icon && <div className="text-4xl text-indigo-600">{icon}</div>}
          <div className={cn(
            "font-sans font-bold text-neutral-600 dark:text-neutral-200 text-center text-2xl md:text-3xl transition duration-200", 
            titleClassName
          )}>
            {title}
          </div>
        </div>
        <div className="h-2"/> {/* Spacer */}
        <div className={cn(
          "font-sans text-neutral-600 dark:text-neutral-300 leading-relaxed",
          descriptionClassName
        )}>
          {description}
        </div>
      </div>
    </div>
  );
};


export const TimelineItem: React.FC<TimelineItemProps> = (timelineItemProps) => {
  return (
    <TimelineBaseItem 
      {...timelineItemProps}
      rootClassName = "dark:bg-indigo-950 bg-indigo-300"
      titleClassName = ""
      descriptionClassName = "font-semibold text-lg space-y-2"
    />
  );
};

export const TimelineSupport: React.FC<TimelineItemProps> = (timelineItemProps) => {
  return (
    <TimelineBaseItem 
      {...timelineItemProps}
      rootClassName = "dark:bg-black bg-white dark:border-white/[0.2] border-red-500 border border-transparent"
      titleClassName = "group-hover/bento:text-indigo-600"
      descriptionClassName = "font-normal text-xs"
    />
  );
};

interface AccentTextProps {
  text: string;
  className?: string;
}

export const AccentText: React.FC<AccentTextProps> = ({ text, className }) => {
  return (
      <span className={`text-yellow-500 font-semibold ${className}`}>
          {text}
      </span>
  );
};