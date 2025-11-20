import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "gradient";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  icon,
  disabled = false
}: ButtonProps) {
  const baseClass = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClass = {
    primary: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg hover:shadow-red-500/50",
    secondary: "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white shadow-lg hover:shadow-purple-500/50",
    outline: "border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400",
    gradient: "bg-gradient-to-r from-red-500 via-purple-500 to-purple-600 hover:from-red-400 hover:via-purple-400 hover:to-purple-500 text-white shadow-xl hover:shadow-purple-500/50"
  }[variant];

  const sizeClass = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }[size];

  const classes = `${baseClass} ${variantClass} ${sizeClass} ${className} hover:scale-105`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon && <span>{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
