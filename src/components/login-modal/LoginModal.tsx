'use client'
import { FormEvent, useState } from "react";
import { IoClose } from "react-icons/io5";
import InputForm from "../input-form/InputForm";
import { types } from "../input-form/interfaces/InputFormProps";

import { useDispatch, useSelector } from "react-redux";
import { logIn } from "@/store/auth/authSlice";

export default function LoginModal() {
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")

    const [opened, setOpened] = useState(false)
    const { auth } = useSelector((state: any) => state)
    const dispatch = useDispatch()

    function handleLogin(e: FormEvent) {
        e.preventDefault()

        dispatch(logIn({
            email: inputEmail,
            password: inputPassword
        }))
    }

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
                onSubmit={(e) => { handleLogin(e) }}
            >
                <IoClose
                    size={20}
                    className="absolute top-3 right-3"
                />
                <InputForm
                    title="Email"
                    placeholder="mariasilva@email.com"
                    type={types.email}
                    input={inputEmail}
                    setInput={setInputEmail}
                />
                <InputForm
                    title="Password"
                    placeholder="Maria Silva"
                    type={types.text}
                    input={inputPassword}
                    setInput={setInputPassword}
                />
                <button
                    type="submit"
                    className="
                    h-10
                    text-[15px]
                    rounded-md
                    bg-primary
                    text-white
                    font-bold
                    cursor-pointer
                    "
                >
                    Fazer login
                </button>
            </form>
        </div>
    )
}