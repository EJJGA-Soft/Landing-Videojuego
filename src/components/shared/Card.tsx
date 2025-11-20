import type { CardProps } from "../types/Props";

export default function Card({ ...props }: CardProps) {
  const sizeClassName = {
    small: "w-48",
    medium: "w-64",
    large: "w-80",
    extralarge: "w-[920px]",
    full: "w-full",
  }[props.size || "medium"];

  return (
    <>
      <div
        className={`group relative bg-gradient-to-b from-purple-950/40 via-black/60 to-black/80 mt-10 rounded-lg overflow-hidden ${sizeClassName} border border-purple-900/30 hover:border-purple-500/50 shadow-xl shadow-purple-900/20 hover:shadow-purple-600/30 transition-all duration-300 hover:scale-105`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative">
          <p
            className={`${
              props.titlecenter ? "text-center" : ""
            } text-white px-4 font-semibold text-xl py-3 bg-gradient-to-r from-purple-900/50 to-black/50 group-hover:from-purple-800/60 group-hover:to-purple-900/40 transition-all duration-200`}
          >
            {props.title}
          </p>
          {props.imageUrl && (
            <div className="relative overflow-hidden bg-black/60">
              <img
                src={props.imageUrl}
                alt={props.title}
                className="w-full h-48 object-cover opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 to-transparent"></div>
            </div>
          )}
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          <div className="p-4 bg-gradient-to-b from-black/20 to-transparent">
            {props.description && (
              <p className="text-gray-300 leading-relaxed">{props.description}</p>
            )}
            {props.link && (
              <div className="mt-4">
                <a href={props.link} className="text-purple-400 hover:text-purple-300 hover:underline transition-colors inline-flex items-center gap-2">
                  Learn more
                  <span className="text-xs">→</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
