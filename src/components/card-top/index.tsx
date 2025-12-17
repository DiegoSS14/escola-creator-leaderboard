'use client'

import { FaMedal, FaTrophy, FaCrown } from "react-icons/fa"
import { CardTopProps } from "./interfaces/CardProps"
import { formatValue } from "@/utilities/FormatValue"

export default function CardTop(props: CardTopProps) {

    return (
        <div className={`
        flex 
        flex-col
        w-full
        ${props.position === 1 && "lg:min-w-xs lg:min-h-72"}
        lg:max-w-77
        h-64 
        items-center
        justify-center
        rounded-xl
        p-5
        ${props.position === 1 ? "gap-3" : "gap-2"}
        ${props.position === 1 ? "bg-linear-to-b from-[#D4C200] to-[#D35800]" : "bg-linear-to-b from-primary to-blue-800"}
        shadow-sm
        transition-all
        hover:scale-102
        ${props.position === 1 ? "hover:shadow-2xl shadow-amber-300" : "hover:shadow-lg shadow-blue-400"}
        cursor-pointer
        `}>
            <div className="flex flex-col w-full items-center gap-0.5">
                {props.position === 1 && <FaCrown size={50} color="#fff" />}
                {props.position === 2 && <FaMedal size={40} color="#00F4CA" />}
                {props.position === 3 && <FaTrophy size={40} color="#00F4CA" />}
                <h2 className={props.position === 1 ? "text-[24px] font-bold text-white" : "text-lg font-bold text-white"}>{props.name}</h2>
                <span className="text-[12px] text-white opacity-50">{props.username}</span>
            </div>
            <div className="flex flex-col w-full items-center">
                <h1 className={`
                    text-3xl 
                    ${props.position === 1 ? "text-white" : "text-secondary"}
                    font-bold
                    `}>
                    {formatValue.format(props.value)}
                </h1>
                <span className="text-[12px] text-white opacity-50">Faturamento</span>
            </div>
        </div>
    )
}