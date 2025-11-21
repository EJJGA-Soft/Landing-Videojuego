import { TYPOGRAPHY, BORDER_CLASSES } from '../../constants/theme.constants';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  gradient?: "redred" | "redWhite" | "redWhite";
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  align = "center",
  gradient = "redWhite" 
}: SectionHeaderProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  }[align];

  const gradientClass = {
    redred: TYPOGRAPHY.gradient.redRed,
    redWhite: TYPOGRAPHY.gradient.redWhite200,
    redWhiteAlt: TYPOGRAPHY.gradient.redWhite300
  }[gradient];

  return (
    <div className={`mb-16 md:mb-20 ${alignClass}`}>
      <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 py-3 ${gradientClass}`}>
        {title}
      </h2>
      <div className={`w-24 h-1 ${BORDER_CLASSES.divider} mx-auto mb-8`}></div>
      {subtitle && (
        <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
