import React from 'react';
import { BG_CLASSES, BORDER_CLASSES, SHADOW_CLASSES } from '../../constants/theme.constants';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  gradient?: boolean;
  hover?: boolean;
}

export default function FeatureCard({ 
  title, 
  description, 
  icon,
  gradient = true,
  hover = true 
}: FeatureCardProps) {
  return (
    <div className={`
      group relative 
      ${BG_CLASSES.card} 
      p-6 md:p-8 rounded-xl 
      ${BORDER_CLASSES.default} 
      ${hover ? `${BORDER_CLASSES.hover} ${SHADOW_CLASSES.hover} hover:scale-105` : ''}
      ${SHADOW_CLASSES.base} 
      transition-all duration-300
    `}>
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-600/10 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      )}
      
      <div className="relative">
        {icon && (
          <div className="text-5xl mb-4">{icon}</div>
        )}
        
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-red-200 transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
