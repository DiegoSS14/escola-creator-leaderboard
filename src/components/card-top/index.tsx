'use client'

import CardTopProps from "./interfaces/CardTopProps"
import { FaMedal } from "react-icons/fa"

export default function CardTop(props: CardTopProps) {

    const formatValue = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
    })

    return (
        <div className={`
        flex 
        flex-col
        w-full 
        max-w-77 
        h-64 
        items-center
        justify-center
        rounded-xl
        p-5
        gap-2
        ${props.position === 1 ? "bg-linear-to-b from-[#D4C200] to-[#D35800]" : "bg-linear-to-b from-primary to-blue-800"}
        `}>
            <div className="flex flex-col w-full items-center gap-0.5">
                <FaMedal size={40} color={props.position === 1 ? "#fff" : "#00F4CA"}/>
                <h2 className="text-lg font-bold text-white">{props.name}</h2>
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