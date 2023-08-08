import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../redux/slice/asyncActions";

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
            .addCase(getProducts.pending, (state) => {
                state.isPending = true;
                state.isError = false;
            })
            
        builder.addCase(getProducts.fulfilled, (state, action) => {
                state.isPending = false;
                state.isError = false;
                state.isCurrent = action.payload;
            })
            
        builder.addCase(getProducts.rejected, (state) => {
                state.isPending = false;
                state.isError = true;
                state.isCurrent = [];
            });
    }
})

export const { } = productSlice.actions;

export default productSlice.reducer;