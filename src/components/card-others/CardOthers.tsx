import { formatValue } from "@/utilities/FormatValue"
import { CardOthersProps } from "../card-top/interfaces/CardProps"


export default function CardOthers({ name, image, position, username, value }: CardOthersProps) {
  return (
    <div className="
    flex 
    items-center 
    gap-6 
    outline-1 
    p-4 
    rounded-lg 
    outline-zinc-200
    transition-colors
    duration-300
    hover:outline-primary
    cursor-pointer
    ">
      <h1 className="text-3xl font-bold text-primary">#{position}</h1>
      <div className="w-full flex items-center gap-4">
        <img
          src={image}
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
          <span className="text-[14px] text-zinc-600">{username}</span>
        </div>
      </div>
      <div className="flex flex-col w-full items-end">
        <h1 className="text-[26px] font-bold text-primary transition-all hover:scale-105">
          {formatValue.format(value)}
        </h1>
        <span className="text-[14px] text-zinc-600">Faturamento</span>
      </div>
    </div>
  )
}