import { createSlice } from "@reduxjs/toolkit";
const initialState=false;
export const loginslice=createSlice({
    name:"login",
    initialState,
    reducers:{
        login:(state)=>{
            console.log("login");
            
          return  state=true

        },
        logout:(state)=>{
            console.log("logout");
           return state=false
        }
    }

})

export const {login,logout}=loginslice.actions;
export default loginslice.reducer;