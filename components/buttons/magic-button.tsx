import React from 'react'

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 hover:scale-105 transition duration-200">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a5f3fc_0%,#0891b2_50%,#a5f3fc_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-cyan-950 text-white px-7 text-sm font-medium backdrop-blur-3xl gap-2">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
  </button>
  );
};

export default MagicButton;