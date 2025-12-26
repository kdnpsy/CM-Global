import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-out flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#1C1917] text-[#FDFCF8] hover:bg-[#44403C] hover:scale-105 shadow-lg",
    outline: "border border-[#1C1917] text-[#1C1917] hover:bg-[#1C1917] hover:text-[#FDFCF8]",
    ghost: "text-[#1C1917] hover:bg-[#E7E5E4]"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};