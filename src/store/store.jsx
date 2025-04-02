import { configureStore } from "@reduxjs/toolkit";
import loginsatus from './loginSlice'
export const store=configureStore({
    reducer:{
        loginstatus:loginsatus,
    }
})