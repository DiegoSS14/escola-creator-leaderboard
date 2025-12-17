'use client'
import { useState } from "react";
import ButtonMenuProps from "./interfaces/ButtonMenuProps";

export default function ButtonMenu({ text }: ButtonMenuProps) {
    const [active, setActive] = useState<boolean>(false)

    function handleActive() {
        console.log("teste")
        setActive(!active)
    }

    return (
        <button 
        onClick={() => { handleActive() }} 
        className={`
        w-full
        max-w-60
        md:w-fit
        ${active ? "bg-blue-600" : "bg-zinc-800"}
        transition-all
        text-white
        py-1 
        px-3 
        rounded-lg
        ${active ? "hover:bg-blue-700" : "hover:bg-zinc-950"}
        cursor-pointer
        `}>
            {text}
        </button>
    )
}