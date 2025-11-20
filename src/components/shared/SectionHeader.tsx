
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  gradient?: "redPurple" | "purpleWhite" | "redWhite";
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  align = "center",
  gradient = "purpleWhite" 
}: SectionHeaderProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  }[align];

  const gradientClass = {
    redPurple: "bg-gradient-to-r from-red-400 via-purple-400 to-purple-600 bg-clip-text text-transparent",
    purpleWhite: "bg-gradient-to-r from-purple-200 via-white to-purple-200 bg-clip-text text-transparent",
    redWhite: "bg-gradient-to-r from-red-300 via-white to-red-300 bg-clip-text text-transparent"
  }[gradient];

  return (
    <div className={`mb-16 md:mb-20 ${alignClass}`}>
      <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 py-3 ${gradientClass}`}>
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"></div>
      {subtitle && (
        <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
