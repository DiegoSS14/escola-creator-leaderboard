import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLogin } from "./interfaces/UserLogin";

// const initialState: AuthState = {
//     user: {
//         name: "unknown",
//         position: 0,
//         image: "",
//         token: "",
//         username: "",
//         value: 0
//     }
// }

interface AuthState {
    user: UserLogin | null;
}

const initialState: AuthState = {
    user: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<UserLogin>) => {
            state.user = action.payload
        },
        logOut: (state) => {
            state.user = null;
        }
    }
})

export const { logIn } = authSlice.actions
export const { logOut } = authSlice.actions
export default authSlice.reducer