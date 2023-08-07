import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import authSlice from "./slice/authSlice";
import userSlice from "./slice/userSlice";
import productSlice from "./slice/productSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage"; 

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const rootReducer = combineReducers({ auth: authSlice, cart: cartSlice, user: userSlice, product: productSlice});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER],
            },
        }),
});

export let persistor = persistStore(store);

export default store;