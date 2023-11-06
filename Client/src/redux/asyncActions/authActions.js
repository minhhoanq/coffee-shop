import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from '../../api/authApi';
import * as userApi from '../../api/userApi';

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
        const { userId } = data;
        const res = await authApi.logoutUser(userId);
        console.log(res);
        return res.data;
    } catch (err) {
        console.log(err)
        return rejectWithValue(err);
    }
})

export const getProfileActions = createAsyncThunk('user/getProfile', async(data, { rejectWithValue }) => {
    try {
        const res = await userApi.getUserProfile(data);
        return res.data;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const updateUserbyUserAction = createAsyncThunk('user/updateUser', async(data, { rejectWithValue }) => {
    try {
        const res = await userApi.updateUserbyUser(data);
        return res;
    } catch (error) {
        return rejectWithValue(error);
    }
})