'use client'
import { useState } from "react";
import InputForm from "../input-form/InputForm";
import { types } from "../input-form/interfaces/InputFormProps";
import { IoClose } from "react-icons/io5";

export default function LoginModal() {
    const [opened, setOpened] = useState(false)

    return (
        <div className="fixed flex w-full h-full items-center justify-center bg-black/60">
            <form
                className="
                relative
                w-[80%]
                md:w-100
                flex flex-col
                pt-6
                pb-4
                px-4
                rounded-lg
                bg-white
                gap-5
                "
                onSubmit={() => { }}
            >
                <IoClose
                    size={20}
                    className="absolute top-3 right-3"
                />
                <InputForm
                    title="Nome"
                    placeholder="Maria Silva"
                    type={types.text}
                />
                <InputForm
                    title="Email"
                    placeholder="mariasilva@email.com"
                    type={types.email}
                />
                <button
                    className="
                    h-10
                    text-[15px]
                    rounded-md
                    bg-primary
                    text-white
                    font-bold
                    "
                >
                    Fazer login
                </button>
            </form>
        </div>
    )
}