import React from 'react';
import { BG_CLASSES, SHADOW_CLASSES } from '../../constants/theme.constants';

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
    primary: `${BG_CLASSES.button.primary} ${BG_CLASSES.button.primaryHover} text-white ${SHADOW_CLASSES.button.primary}`,
    secondary: `${BG_CLASSES.button.primary} ${BG_CLASSES.button.primaryHover} text-white ${SHADOW_CLASSES.button.primary}`,
    outline: "border-2 border-red-500 text-red-400 hover:bg-red-500/10 hover:border-red-400",
    gradient: `${BG_CLASSES.button.gradient} ${BG_CLASSES.button.gradientHover} text-white ${SHADOW_CLASSES.button.gradient}`
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
