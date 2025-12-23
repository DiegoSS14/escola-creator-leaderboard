import api from "../api/client";
import { LoginInput, LoginResponse } from "./interfaces/Auth";

export async function login(data: LoginInput) {
    // return api<LoginResponse>("/auth/login", {
    //     method: 'POST',
    //     body: JSON.stringify(data)
    // })

    return {
        userId: 1,
        name: "Ana Souza",
        avatarUrl: "https://i.pravatar.cc/150?img=1",
        revenue: 15840,
        salesCount: 132,
        position: 1,
        isCurrentUser: false,
    }
}