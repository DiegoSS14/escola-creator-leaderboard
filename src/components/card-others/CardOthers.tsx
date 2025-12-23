import UserProps from "@/lib/service/interfaces/User"
import { formatValue } from "@/utilities/FormatValue"

export default function CardOthers({ name, avatarUrl, position, revenue }: UserProps) {
  return (
    <div className="
    relative
    w-full
    flex
    flex-col
    md:flex-row
    items-center
    gap-6 
    outline-1
    p-6 
    md:p-4
    rounded-lg 
    outline-zinc-200
    transition-colors
    duration-300
    hover:outline-primary
    cursor-pointer
    ">
      <div className="w-full flex items-center gap-6">
        <h1 className="absolute md:relative text-right md:text-left right-6 top-6 md:right-0 md:top-0 w-30 text-4xl md:text-3xl font-bold text-primary">#{position}</h1>
        <div className="w-full flex flex-col justify-center items-start md:flex-row md:items-center md:justify-start gap-4">
          <img
            src={avatarUrl}
            alt=""
            className="
                  h-14 w-14
                  rounded-full 
                  object-cover
                bg-gray-400
                  "
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-zinc-950">{name}</h1>
            <span className="text-[14px] text-zinc-600">@{name}</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col-reverse items:start md:justify-center md:gap-0 md:flex-col md:items-end">
        <h1 className="text-[26px] font-bold text-primary transition-all hover:scale-105">
          {formatValue.format(revenue)}
        </h1>
        <span className="text-[14px] text-zinc-600">Faturamento</span>
      </div>
    </div>
  )
}