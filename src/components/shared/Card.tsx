import type { CardProps } from "../../types/Props";
import { BG_CLASSES, BORDER_CLASSES, SHADOW_CLASSES } from '../../constants/theme.constants';

export default function Card({ ...props }: CardProps) {
  const sizeClassName = {
    small: "w-full sm:w-48",
    medium: "w-full sm:w-64",
    large: "w-full sm:w-80",
    extralarge: "w-full sm:w-[920px]",
    full: "w-full",
  }[props.size || "medium"];

  return (
    <>
      <div
        className={`group relative ${BG_CLASSES.card} mt-10 rounded-lg overflow-hidden ${sizeClassName} ${BORDER_CLASSES.hover} shadow-xl ${SHADOW_CLASSES.base} ${SHADOW_CLASSES.hover} transition-all duration-300 hover:scale-105`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative">
          <p
            className={`${
              props.titlecenter ? "text-center" : ""
            } text-white px-4 font-semibold text-xl py-3 bg-gradient-to-r from-red-900/50 to-black/50 group-hover:from-red-800/60 group-hover:to-red-900/40 transition-all duration-200`}
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
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/40 to-transparent"></div>
            </div>
          )}
          <div className="h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
          <div className="p-4 bg-gradient-to-b from-black/20 to-transparent">
            {props.description && (
              <p className="text-gray-300 leading-relaxed">{props.description}</p>
            )}
            {props.link && (
              <div className="mt-4">
                <a href={props.link} className="text-red-400 hover:text-red-300 hover:underline transition-colors inline-flex items-center gap-2">
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
