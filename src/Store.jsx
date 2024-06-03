import { configureStore } from "@reduxjs/toolkit";
import Usereducer from "./Usereducer";

export const store = configureStore({
    reducer:{
        users:Usereducer
    }
})