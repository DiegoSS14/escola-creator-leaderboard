'use client'
import ButtonMenuProps from "./interfaces/ButtonMenuProps";

export default function ButtonMenu({ text, active, onClick }: ButtonMenuProps) {

    return (
        <button
            onClick={onClick}
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