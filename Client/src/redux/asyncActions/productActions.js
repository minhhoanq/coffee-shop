import { createAsyncThunk } from "@reduxjs/toolkit";

import * as productApi from '../../api/productApi';
import * as ratingApi from '../../api/ratingApi';

export const getProductsAction = createAsyncThunk('product/getProduts', async(data, { rejectWithValue }) => {
    const response = await productApi.getProducts(data.name, data.order, data.page, data.limit, data.categoryId);
    // console.log(response.productData)
    return response.productData;
});

export const postRatingAction = createAsyncThunk('product/postRating', async(data, { rejectWithValue }) => {
    try {
        const response = await ratingApi.createRatingProduct(data.comment, data.star);
        // console.log(response.productData)
        return response.productData;
    } catch (error) {
        rejectWithValue(error)
    }
})