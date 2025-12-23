import UserProps from "./User";

export type LoginInput = {
    email: string;
    password: string;
};

export type LoginResponse = {
    token: string;
    user: UserProps
};