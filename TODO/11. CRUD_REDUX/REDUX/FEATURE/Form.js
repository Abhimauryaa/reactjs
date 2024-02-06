import { createSlice } from "@reduxjs/toolkit";



let form = createSlice({
    name: "user",
    initialState: {users: []},
    reducers:{
        findData:(state, action)=>{
            let jsonData = localStorage?.getItem("useArr") || "[]";
            let normalData = JSON?.parse(jsonData)
            state.users =normalData;
        },
        addUser:(state, action)=>{
            state.users.push(action.payload)
            localStorage?.setItem("useArr",JSON?.stringify?.(state.users));
        },
        updateUser: (state, action)=>{
            let {data,index}=action.payload;
            state.users.splice(index,1,data);
            localStorage?.setItem("useArr",JSON?.stringify?.([state.users]));

        }
    }
})

export default form.reducer;
export const {findData, addUser,updateUser}= form.actions;