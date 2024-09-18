import React from 'react'

interface TextBoxProps {
    text: string;
    className?: string;
  }

export const TextBox: React.FC<TextBoxProps> = ({ text, className }) => {
    return (
        <span className={`p-[3px] min-w-12 flex justify-center align-middle px-2 rounded-2xl bg-indigo-900 border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-300 hover:border-indigo-900 hover:text-indigo-700 ${className}`}>
            {text}
        </span>
    );
};
