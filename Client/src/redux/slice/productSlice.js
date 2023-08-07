import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../api/productApi";

const initialState = {
    isCurrent: [],
    isPending: false,
    isError: false,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        //
    },

    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            // state.isPending = true
        })

        //
        builder.addCase(getProducts.fulfilled, (state, action) => {
            // state.isPending = false,
            // state.isCurrent = action.payload
        })

        //
        builder.addCase(getProducts.rejected, (state) => {
            // state.isPending = false,
            // state.isError = true,
            // state.isCurrent = []
        })
    }
})

export const cartActions = productSlice.actions;

export default productSlice.reducer;