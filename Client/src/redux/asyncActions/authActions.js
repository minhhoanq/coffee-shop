import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from '../../api/authApi';
import { useNavigate } from "react-router-dom";

export const registerActions = createAsyncThunk('auth/register', async(data, { rejectWithValue }) => {
    try {
        const res = await authApi.registerUSer(data);
        console.log(res);
        return res.data;
    } catch (err) {
        console.log(err)
        return rejectWithValue(err);
    }
})

export const loginActions = createAsyncThunk('auth/login', async(data, { rejectWithValue }) => {
    console.log(data);
    try {
        const res = await authApi.loginUSer(data);
        console.log(res);
        return res.data;
    } catch (err) {
        console.log(err)
        return rejectWithValue(err);
    }
})

export const logoutActions = createAsyncThunk('auth/logout', async(data, { rejectWithValue }) => {
    try {
        const res = await authApi.logoutUser(data);
        console.log(res);
        return res.data;
    } catch (err) {
        console.log(err)
        return rejectWithValue(err);
    }
})