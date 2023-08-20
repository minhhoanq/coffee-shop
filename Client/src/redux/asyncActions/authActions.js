import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from '../../api/authApi';
import { useNavigate } from "react-router-dom";

export const loginActions = createAsyncThunk('auth/login', async(data, { rejectWithValue }) => {
    console.log(data);
    try {
        console.log("check1")
        const res = await authApi.loginUSer(data);
        console.log(res);
        // useNavigate('/');
        return res.data;
    } catch (err) {
        console.log(err)
        return rejectWithValue(err);
    }
})