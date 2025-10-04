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
        className={`bg-gray-400/10 mt-10 rounded-lg shadow-md overflow-hidden ${sizeClassName} border border-white/40 shadow-2xl shadow-white/40`}
      >
        <p
          className={`${
            props.titlecenter ? "text-center" : ""
          } text-white px-4 font-semibold text-xl py-3`}
        >
          {props.title}
        </p>
        {props.imageUrl && (
          <img
            src={props.imageUrl}
            alt={props.title}
            className="w-full h-48 object-cover"
          />
        )}
        <hr className="border-white/40" />
        <div className="p-4">
          {props.description && (
            <p className="text-white">{props.description}</p>
          )}
          {props.link && (
            <div className="mt-4">
              <a href={props.link} className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
