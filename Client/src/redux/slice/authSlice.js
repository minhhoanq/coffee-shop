import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: {
        currentUser: null,
        isFetching: false,
        error:false,
    },
    register: {
        isFetching: false,
        error:false,
        success: false,
    }
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        //LOGIN
        loginStart: (state) => {
            state.login.isFetching = true;
        },

        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.currentUser = action.payload;
            state.login.error = false;
        },

        loginFail: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },

        //REGISTER
        registerStart: (state) => {
            state.register.isFetching = true;
        },

        registerSuccess: (state) => {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = true;
        },

        registerFail: (state) => {
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = false;
        },
    }
})

export const { loginStart, loginSuccess, loginFail, registerStart, registerSuccess, registerFail } = authSlice.actions;

export default authSlice.reducer;