import { createSlice } from "@reduxjs/toolkit";
import { getProfileActions, loginActions, logoutActions, registerActions, updateUserbyUserAction } from "../asyncActions/authActions";

const initialState = {
    currentUser: null,
    token: null,
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
        //register
        builder.addCase(registerActions.pending, (state) => {
            state.isFetching = true;
            state.error = false;
        })

        builder.addCase(registerActions.fulfilled, (state) => {
            state.isFetching = false;
            state.error = false;
        })

        builder.addCase(registerActions.rejected, (state) => {
            state.isFetching = false;
            state.error = true;
        })

        //login
        builder.addCase(loginActions.pending, (state) => {
            state.isFetching = true;
            state.error = false;
        })

        builder.addCase(loginActions.fulfilled, (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload.dataUser;
            state.token = action.payload.token;
            state.error = false;
        })

        builder.addCase(loginActions.rejected, (state) => {
            state.isFetching = false;
            state.currentUser = null;
            state.error = true;
        })

        //logout
        builder.addCase(logoutActions.pending, (state) => {
            state.isFetching = true;
            state.error = false;
        })

        builder.addCase(logoutActions.fulfilled, (state, action) => {
            state.isFetching = false;
            state.currentUser = null;
            state.token = null;
            state.error = false;
        })

        builder.addCase(logoutActions.rejected, (state) => {
            state.isFetching = false;
            state.error = true;
        })

        //Get Profile

        builder.addCase(getProfileActions.pending, (state) => {
            state.isFetching = true;
            state.error = false;
        })

        builder.addCase(getProfileActions.fulfilled, (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload.dataUser;
            state.token = action.payload.token;
            state.error = false;
        })

        builder.addCase(getProfileActions.rejected, (state) => {
            state.isFetching = false;
            state.error = true;
        })

        //Update User by User 
        builder.addCase(updateUserbyUserAction.pending, (state) => {
            state.isFetching = true;
            state.error = false;
        })

        builder.addCase(updateUserbyUserAction.fulfilled, (state) => {
            state.isFetching = false;
            state.error = false;
        })

        builder.addCase(updateUserbyUserAction.rejected, (state) => {
            state.isFetching = false;
            state.error = true;
        })
            
    }
});

// export const { loginStart, loginSuccess, loginFail, registerStart, registerSuccess, registerFail, logoutStart, logoutSuccess, logoutFail } = authSlice.actions;
export const { } = authSlice.actions;

export default authSlice.reducer;