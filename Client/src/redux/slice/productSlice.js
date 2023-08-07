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
    extraReducers: builder => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isPending = true;
                // console.log('pending')
            }).addCase(getProducts.fulfilled, (state, action) => {
                state.isPending = false;
                state.isCurrent = action.payload;
                // console.log('fulfilled: ', action.payload)
            }).addCase(getProducts.rejected, (state) => {
                state.isPending = false;
                state.isError = true;
                state.isCurrent = [];
                // console.log('error')
            });
    }
})

export const { } = productSlice.actions;

export default productSlice.reducer;