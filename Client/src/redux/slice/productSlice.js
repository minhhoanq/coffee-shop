import { createSlice } from "@reduxjs/toolkit";
import { createProductAction, getProductsAction, postRatingAction } from "../../redux/asyncActions/productActions";

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

        //Create product
        builder.addCase(createProductAction.pending, (state) => {
                state.isPending = true;
                state.isError = false;
            })

        builder.addCase(createProductAction.fulfilled, (state) => {
            state.isPending = false;
            state.isError = false;
        })

        builder.addCase(createProductAction.rejected, (state) => {
            state.isPending = false;
            state.isError = true;
        })

        // Rating

        builder
            .addCase(postRatingAction.pending, (state) => {
                state.isPending = true;
                state.isError = false;
            })
            
        builder.addCase(postRatingAction.fulfilled, (state, action) => {
                state.isPending = false;
                state.isError = false;
                // state.isCurrent = action.payload;
            })
            
        builder.addCase(postRatingAction.rejected, (state) => {
                state.isPending = false;
                state.isError = true;
                // state.isCurrent = [];
            });
    }
})

export const { } = productSlice.actions;

export default productSlice.reducer;