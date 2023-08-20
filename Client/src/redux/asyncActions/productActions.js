import { createAsyncThunk } from "@reduxjs/toolkit";

import * as productApi from '../../api/productApi';

export const getProductsAction = createAsyncThunk('product/getProduts', async(data, { rejectWithValue }) => {
    const response = await productApi.getProducts(data.name, data.order, data.page, data.limit, data.categoryId);
    // console.log(response.productData)
    return response.productData;
})