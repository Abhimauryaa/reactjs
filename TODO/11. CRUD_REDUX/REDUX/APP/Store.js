import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../FEATURE/Form"





export default configureStore({
    reducer: {
        formReducer,
    }
})