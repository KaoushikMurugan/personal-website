import React from 'react'

interface TextBoxProps {
    text: string;
    className?: string;
  }

export const TextBox: React.FC<TextBoxProps> = ({ text, className }) => {
    return (
        <span className={`p-[3px] min-w-12 flex justify-center align-middle px-2 rounded-2xl bg-cyan-900 border-2 border-cyan-500 text-cyan-300 hover:bg-cyan-400 hover:border-cyan-900 hover:text-cyan-900 ${className}`}>
            {text}
        </span>
    );
};
