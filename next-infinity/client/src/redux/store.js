import {configureStore}from "@reduxjs/toolkit"
import userSlice from "./slices/userSlice"
import todoSlice from "./slices/todoSlice"
export const store  = configureStore({
    reducer:{
        todo:todoSlice,
        user:userSlice
    }
})