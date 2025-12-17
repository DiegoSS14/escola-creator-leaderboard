
export default interface InputFormsProps {
    title: string
    placeholder: string
    type: types
}

export enum types {
    text = "text",
    email = "email"
}