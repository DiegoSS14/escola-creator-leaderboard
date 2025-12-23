'use client'

import { FaMedal, FaTrophy, FaCrown } from "react-icons/fa"
import { formatValue } from "@/utilities/FormatValue"
import UserProps from "@/lib/service/interfaces/User"

export default function CardTop({ name, avatarUrl, position, revenue }: UserProps) {

    return (
        <div className={`
        flex 
        flex-col
        w-full
        ${position === 1 && "lg:min-w-xs lg:min-h-72"}
        lg:max-w-77
        h-64 
        items-center
        justify-center
        rounded-xl
        p-5
        ${position === 1 ? "gap-3" : "gap-2"}
        ${position === 1 ? "bg-linear-to-b from-[#D4C200] to-[#D35800]" : "bg-linear-to-b from-primary to-blue-800"}
        shadow-sm
        transition-all
        hover:scale-102
        ${position === 1 ? "hover:shadow-2xl shadow-amber-300" : "hover:shadow-lg shadow-blue-400"}
        cursor-pointer
        `}>
            <div className="flex flex-col w-full items-center gap-0.5">
                {position === 1 && <FaCrown size={50} color="#fff" />}
                {position === 2 && <FaMedal size={40} color="#00F4CA" />}
                {position === 3 && <FaTrophy size={40} color="#00F4CA" />}
                <h2 className={position === 1 ? "text-[24px] font-bold text-white" : "text-lg font-bold text-white"}>{name}</h2>
                <span className="text-[12px] text-white opacity-50">@{name}</span>
            </div>
            <div className="flex flex-col w-full items-center">
                <h1 className={`
                    text-3xl 
                    ${position === 1 ? "text-white" : "text-secondary"}
                    font-bold
                    `}>
                    {formatValue.format(revenue)}
                </h1>
                <span className="text-[12px] text-white opacity-50">Faturamento</span>
            </div>
        </div>
    )
}