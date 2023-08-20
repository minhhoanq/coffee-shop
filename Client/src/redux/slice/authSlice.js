import { createSlice } from "@reduxjs/toolkit";
import { loginActions } from "../asyncActions/authActions";

const initialState = {
    currentUser: null,
    isFetching: false,
    error:false,
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        //LOGIN
        // loginStart: (state) => {
        //     state.login.isFetching = true;
        // },

        // loginSuccess: (state, action) => {
        //     state.login.isFetching = false;
        //     state.login.currentUser = action.payload;
        //     state.login.error = false;
        // },

        // loginFail: (state) => {
        //     state.login.isFetching = false;
        //     state.login.error = true;
        // },

        //REGISTER
        // registerStart: (state) => {
        //     state.register.isFetching = true;
        // },

        // registerSuccess: (state) => {
        //     state.register.isFetching = false;
        //     state.register.error = false;
        //     state.register.success = true;
        // },

        // registerFail: (state) => {
        //     state.register.isFetching = false;
        //     state.register.error = true;
        //     state.register.success = false;
        // },

        // //LOGOUT
        // logoutStart: (state) => {
        //     state.login.isFetching = true;
        // },
        
        // logoutSuccess: (state) => {
        //     state.login.isFetching = false;
        //     state.login.currentUser = null;
        //     state.login.error = false;
        // },

        // logoutFail: (state) => {
        //     state.login.isFetching = false;
        //     state.login.error = true;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(loginActions.pending, (state) => {
            console.log('check pending');
            state.isFetching = true;
            state.error = false;
        })

        builder.addCase(loginActions.fulfilled, (state, action) => {
            console.log('check fulfilled');
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false;
        })

        builder.addCase(loginActions.rejected, (state) => {
            console.log('check rejected');
            state.isFetching = false;
            state.currentUser = null;
            state.error = true;
        })
    }
});

// export const { loginStart, loginSuccess, loginFail, registerStart, registerSuccess, registerFail, logoutStart, logoutSuccess, logoutFail } = authSlice.actions;
export const { } = authSlice.actions;

export default authSlice.reducer;