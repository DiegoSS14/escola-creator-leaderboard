import UserProps from "@/lib/service/interfaces/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    modal: boolean
    usersRanking: UserProps[]
    user: UserProps | null
}

const initialState: AuthState = {
    modal: false,
    usersRanking: [],
    user: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<UserProps>) => {
            return {
                ...state,
                user: action.payload
            }
        },
        logOut: (state) => {
            state.user = null;
        },
        alternModal: (state, action: PayloadAction<boolean>) => {
            state.modal = action.payload
        },
        setUsersRanking: (state, action: PayloadAction<UserProps[]>) => {
            state.usersRanking = action.payload
        }
    }
})

export const { logIn } = authSlice.actions
export const { logOut } = authSlice.actions
export const { alternModal } = authSlice.actions
export const { setUsersRanking } = authSlice.actions
export default authSlice.reducer