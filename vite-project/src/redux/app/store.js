import { configureStore } from "@reduxjs/toolkit";
import useReducer  from "../feature/user";

export const store=  configureStore({
    reducer:{
        useReducer
    }
})