import React from 'react'
import { Tag } from './tag';

interface TagListProps {
    items: string[];
    className?: string;
  }


const TagList: React.FC<TagListProps> = ({ items, className }) => {
  return (<>
      {items.map((text, index) => (
        <Tag key={index} text={text} className={className} />
      ))}
    </>);
}

export default TagList