import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import authSlice from "./slice/authSlice";
import productSlice from "./slice/productSlice";

import {
    persistStore,
    persistReducer
} from "redux-persist";

import storage from "redux-persist/lib/storage"; 

const rootPersistConfig = {
    key: "shop/user",
    version: 1,
    storage,
}

const authPersistConfig = {
    ...rootPersistConfig,
    whitelist: ['currentUser', 'token']
}

const store = configureStore({
    reducer: {

        cart: cartSlice,
        product: productSlice,
        auth: persistReducer(authPersistConfig, authSlice)
    }
});

export const persistor = persistStore(store);

export default store;