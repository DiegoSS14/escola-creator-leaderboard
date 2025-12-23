import { SetStateAction, Dispatch } from "react"

export default interface InputFormsProps {
    title: string
    placeholder: string
    type: types
    input: string,
    setInput: Dispatch<SetStateAction<string>>
}

export enum types {
    text = "text",
    email = "email"
}