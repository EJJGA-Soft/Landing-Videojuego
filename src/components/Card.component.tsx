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
        className={`bg-gradient-to-b from-red-950/40 via-black to-black mt-10 rounded-lg shadow-md overflow-hidden ${sizeClassName} border-2 border-red-900/60 shadow-2xl shadow-red-900/40 hover:shadow-red-900/60 hover:border-red-800/80 transition-all duration-300 hover:scale-[1.02]`}
      >
        <p
          className={`${
            props.titlecenter ? "text-center" : ""
          } text-red-100 px-4 font-semibold text-xl py-3 drop-shadow-[0_0_8px_rgba(220,38,38,0.6)] bg-black/30`}
        >
          {props.title}
        </p>
        {props.imageUrl && (
          <div className="relative overflow-hidden bg-black/50">
            <img
              src={props.imageUrl}
              alt={props.title}
              className="w-full h-48 object-cover opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-500"
            />
          </div>
        )}
        <hr className="border-red-900/60" />
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
    </>
  );
}
