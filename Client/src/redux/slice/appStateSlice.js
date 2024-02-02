import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    appState: "dashboard.products.create",
}

const appStateSlice = createSlice({
    name: "appState",
    initialState,
    reducers: {
        setAppState: (state, action) => {
            state.appState = action.payload;
        }
    }
})

export const { setAppState } = appStateSlice.actions;

export default appStateSlice.reducer;