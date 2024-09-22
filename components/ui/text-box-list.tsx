import React from 'react'
import { TextBox } from './text-box';

interface TextBoxListProps {
    items: string[];
    className?: string;
  }


const TextBoxList: React.FC<TextBoxListProps> = ({ items, className }) => {
  return (<>
      {items.map((text, index) => (
        <TextBox key={index} text={text} className={className} />
      ))}
    </>);
}

export default TextBoxList