import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./root-reducers";

export default configureStore({
    reducer: rootReducers
})