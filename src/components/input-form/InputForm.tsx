'use client'
import { useState } from "react";
import InputFormsProps from "./interfaces/InputFormProps";

export default function InputForm({title, placeholder, type}: InputFormsProps) {
    const [input, setInput] = useState('')
    
    return (
        <div className="flex flex-col gap-1">
            <label className="font-medium text-[16px]">{title}</label>
            <input
                className="outline-1 h-8 px-2 rounded-md outline-gray-300"
                type="text"
                placeholder={placeholder}
                value={input}
                onChange={(e) => {setInput(e.target.value)}}
            />
        </div>
    )
}