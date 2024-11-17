import React from 'react';

interface BackgroundProps {
  dotScaling?: number; // Size of the dots (default: 208px)
  dotRadius?: number; // Radius of the dots (default: 4px)
  dotColor?: string; // Color of the dots (default: white)
}

const Background: React.FC<BackgroundProps> = ({ dotScaling: dotScaling = 256, dotRadius: dotRadius = 8, dotColor = '#ffffff' }) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-cyan-999">
      <div
        className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-cyan-990 to-transparent"
        style={{ zIndex: 10 }}
      ></div>

      <div
        className="absolute inset-y-0 left-1/4 w-1/2 bg-cyan-999"
        style={{ zIndex: 5 }}
      ></div>

      <div
        className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-cyan-990 to-transparent"
        style={{ zIndex: 10 }}
      ></div>

      {/* Dots */}
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' fill='none'%3E%3Ccircle cx='21' cy='39' r='${dotRadius}' fill='${encodeURIComponent(
            dotColor
          )}'/%3E%3Ccircle cx='85' cy='103' r='${dotRadius}' fill='${encodeURIComponent(
            dotColor
          )}'/%3E%3Ccircle cx='149' cy='167' r='${dotRadius}' fill='${encodeURIComponent(
            dotColor
          )}'/%3E%3Ccircle cx='213' cy='231' r='${dotRadius}' fill='${encodeURIComponent(
            dotColor
          )}'/%3E%3Ccircle cx='21' cy='167' r='${dotRadius}' fill='${encodeURIComponent(
            dotColor
          )}'/%3E%3Ccircle cx='85' cy='231' r='${dotRadius}' fill='${encodeURIComponent(
            dotColor
          )}'/%3E%3Ccircle cx='149' cy='39' r='${dotRadius}' fill='${encodeURIComponent(
            dotColor
          )}'/%3E%3Ccircle cx='213' cy='103' r='${dotRadius}' fill='${encodeURIComponent(
            dotColor
          )}'/%3E%3C/svg%3E")`,
          backgroundSize: `${dotScaling}px ${dotScaling}px`,
          filter: `blur(1px)`,
          zIndex: 20,
        }}
      ></div>
    </div>
  );
};

export default Background;