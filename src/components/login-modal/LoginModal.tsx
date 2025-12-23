'use client'
import { FormEvent, useState } from "react";
import { IoClose } from "react-icons/io5";
import InputForm from "../input-form/InputForm";
import { types } from "../input-form/interfaces/InputFormProps";

import { useDispatch, useSelector } from "react-redux";
import { alternModal, logIn } from "@/store/auth/authSlice";
import { login } from "@/lib/service/auth.service";

export default function LoginModal() {
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")

    const { auth } = useSelector((state: any) => state)
    const dispatch = useDispatch()

    async function handleLogin(e: FormEvent) {
        e.preventDefault()

        if(inputEmail === "") {
            return alert("Digite seu e-mail")
        }
        if(inputPassword === "") {
            return alert("Digite sua senha")
        }

        const email = inputEmail
        const password = inputPassword

        const user = await login({email, password})

        if (!user) {
            return alert("email ou senha incorretos")
        }

        dispatch(logIn(user))
        handleCloseModal()
        console.log(auth.user)
    }

    function handleCloseModal() {
        dispatch(alternModal(false))
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
                    className="absolute top-3 right-3 cursor-pointer"
                    onClick={() => { handleCloseModal() }}
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