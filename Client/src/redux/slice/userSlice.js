import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    softDelete: {
        isFetching: false,
        error: false,
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        softDeleteStart: (state) => {
            state.softDelete.isFetching = true;
        },

        softDeleteSuccess: (state) => {
            state.softDelete.isFetching = false;
            state.softDelete.error = false;
        },

        softDeleteError: (state) => {
            state.softDelete.isFetching = false;
            state.softDelete.error = true;
        }
    }
});

export const { softDeleteStart, softDeleteSuccess, softDeleteError } = userSlice.actions;

export default userSlice.reducer;