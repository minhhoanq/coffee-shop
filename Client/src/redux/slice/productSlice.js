import { createSlice } from "@reduxjs/toolkit";
import { getProductsAction } from "../../redux/asyncActions/productActions";

const initialState = {
    isCurrent: [],
    isPending: false,
    isError: false,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductsAction.pending, (state) => {
                state.isPending = true;
                state.isError = false;
            })
            
        builder.addCase(getProductsAction.fulfilled, (state, action) => {
                state.isPending = false;
                state.isError = false;
                state.isCurrent = action.payload;
            })
            
        builder.addCase(getProductsAction.rejected, (state) => {
                state.isPending = false;
                state.isError = true;
                state.isCurrent = [];
            });
    }
})

export const { } = productSlice.actions;

export default productSlice.reducer;