export interface AccentTextProps {
  text: string;
  className?: string;
}

export const AccentText: React.FC<AccentTextProps> = ({ text, className }) => {
  return (
    <span className={`text-yellow-500 hover:text-orange-500 font-semibold ${className}`}>
      {text}
    </span>
  );
};
