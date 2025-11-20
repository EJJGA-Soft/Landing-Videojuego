import React from 'react';

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
      bg-gradient-to-br from-purple-950/40 via-black/60 to-black/80 
      p-6 md:p-8 rounded-xl 
      border border-purple-900/30 
      ${hover ? 'hover:border-purple-500/50 hover:shadow-purple-600/30 hover:scale-105' : ''}
      shadow-lg shadow-purple-900/20 
      transition-all duration-300
    `}>
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-purple-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      )}
      
      <div className="relative">
        {icon && (
          <div className="text-5xl mb-4">{icon}</div>
        )}
        
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
