import { createSlice } from "@reduxjs/toolkit";
  

let FormSlice = createSlice({
  name: "user",
  initialState:{ name: "", age: "",city: "", gender: "" },
  
  reducers:{
    setName : (name) =>({
    type: "SET_NAME",
    payload: name,
  }),
  setAge: (age) => ({
  type: "SET_AGE",
  payload: age,
}),
     setCity: (city) => ({
    type: "SET_CITY",
    payload: city,
    }),

    setGender: (gender) => ({
    type: "SET_GENDER",
    payload: gender,
    }),

   userReducer: (state = initialState, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
        case "SET_AGE":
          return { ...state, age: action.payload };
        case "SET_CITY":
          return { ...state, city: action.payload };
        case "SET_GENDER":
          return { ...state, gender: action.payload };
        default:
          return state;
      }
    }
  }
  


})


export default FormSlice.reducer;
export const {setName, setAge, setCity, setGender, userReducer}= FormSlice.actions;
