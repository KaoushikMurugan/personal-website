import React from 'react';

import { cn } from '@/lib/utils'; 
export interface IconProps extends React.SVGProps<SVGSVGElement> {} 

const TensorFlowIcon = React.forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => ( 
  <svg ref={ref} {...props} 
    className={cn('', className)} 
    viewBox="0 0 128 128"
    fill='none' 
    xmlns='http://www.w3.org/2000/svg'>
    <path d="m61.55 128-21.84-12.68V40.55L6.81 59.56l.08-28.32L61.55 0zM66.46 0v128l21.84-12.68V79.31l16.49 9.53-.1-24.63-16.39-9.36v-14.3l32.89 19.01-.08-28.32z" fill="#ff6f00"></path>
  </svg>
));

TensorFlowIcon.displayName = 'TensorFlowIcon';

export default TensorFlowIcon;