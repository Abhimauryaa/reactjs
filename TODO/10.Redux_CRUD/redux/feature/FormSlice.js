import { createSlice } from "@reduxjs/toolkit";

let FormSlice = createSlice({
  name: "user",
  initialState: { users: [] },
  reducers: {
    intialData: (state, action) => {
      let jsonData = localStorage?.getItem("userArr") || "[]";
      let normalData = JSON?.parse(jsonData);
      state.users = normalData;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      localStorage?.setItem("userArr", JSON?.stringify?.(state.users));
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((e,i) => {
        return i !== action.payload;
      });
      localStorage?.setItem("userArr", JSON?.stringify?.(state.users));

    },
    updateUser:(state,action)=>{
      let {data,index}=action.payload;
     state.users.splice(index,1,data);
      localStorage?.setItem("userArr", JSON?.stringify([state.users]));
      
      }
  },
});

export default FormSlice.reducer;
export const { addUser, intialData, deleteUser, updateUser } = FormSlice.actions;
