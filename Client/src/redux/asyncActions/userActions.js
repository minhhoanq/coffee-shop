import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userApi from '../../api/userApi'

export const getAllUserActions = createAsyncThunk('/user/getAlluser', async(data, { rejectWithValue}) => {
    try {
        const res = userApi.getAllUsers(data);
        return res;
    } catch (error) {
        rejectWithValue(error)
    }
})