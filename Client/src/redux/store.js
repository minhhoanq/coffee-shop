import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import authSlice from "./slice/authSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice,
        auth: authSlice,
    }
});

export default store;