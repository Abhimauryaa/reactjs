import { createSlice } from "@reduxjs/toolkit";


let userData = JSON.parse(localStorage.getItem("loginUser") || "{}");
let userSlice = createSlice({
    name: "user",
    initialState: {user: userData},
    reducers:{

    }
})

export default userSlice.reducer;