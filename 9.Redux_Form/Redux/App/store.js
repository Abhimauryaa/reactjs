import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Feature/formSlice"

export const store = configureStore({
    reducer:{
      userReducer: userReducer,  
    },
})