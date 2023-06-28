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
    },
    logout: {
        isFetching: false,
        error:false,
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
            state.login.currentUser = action.payload;
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

        //LOGOUT
        logoutStart: (state) => {
            state.logout.isFetching = true;
        },
        
        logoutSuccess: (state, action) => {
            state.logout.isFetching = false;
            state.login.currentUser = null;
            state.logout.error = false;
        },

        logoutFail: (state) => {
            state.logout.isFetching = false;
            state.logout.error = true;
        },
    }
})

export const { loginStart, loginSuccess, loginFail, registerStart, registerSuccess, registerFail, logoutStart, logoutSuccess, logoutFail } = authSlice.actions;

export default authSlice.reducer;