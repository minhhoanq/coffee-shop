import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userApi from '../../api/userApi';

export const updateUserbyUserAction = createAsyncThunk('user/updateUser', async(data, { rejectWithValue }) => {
    try {
        const res = await userApi.updateUserbyUser(data.accessToken, data.values);
        return res;
    } catch (error) {
        return rejectWithValue(error);
    }
})