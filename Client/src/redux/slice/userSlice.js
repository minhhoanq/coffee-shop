import { createSlice } from "@reduxjs/toolkit";
import { updateUserbyUserAction } from "../asyncActions/userActions";

const initialState = {
    // softDelete: {
    //     isFetching: false,
    //     error: false,
    // }

    isFetching: false,
    error: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // softDeleteStart: (state) => {
        //     state.softDelete.isFetching = true;
        // },

        // softDeleteSuccess: (state) => {
        //     state.softDelete.isFetching = false;
        //     state.softDelete.error = false;
        // },

        // softDeleteError: (state) => {
        //     state.softDelete.isFetching = false;
        //     state.softDelete.error = true;
        // }
    },

    extraReducers: (builder) => {
        builder.addCase(updateUserbyUserAction.pending, (state) => {
            state.isFetching = true;
            state.error = false;
        })

        builder.addCase(updateUserbyUserAction.fulfilled, (state, action) => {
            state.isFetching = false;
            state.error = false;
        })

        builder.addCase(updateUserbyUserAction.rejected, (state) => {
            state.isFetching = false;
            state.error = true;
        })
    }
});

export const { } = userSlice.actions;


export default userSlice.reducer;