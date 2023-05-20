import { configureStore } from "@reduxjs/toolkit";
import  userSlice from "./slices/UserSlice";

const store1 = configureStore({
    reducer: {
        usersTx: userSlice,
    },
})

export  default store1;