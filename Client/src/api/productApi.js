import request from "../utils/request";

export const getAllProduct = async () => {
    try {
        const res = await request.get('/api/v1/product');
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getProducts = async (name, order, page, limit, categoryId) => {
    try {
        const res = await request.get('/api/v1/product', {
            params: {
                name,
                order,
                page,
                limit,
                categoryId,
            }
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getProductByCategoryId = async (id) => {
    try {
        const res = await request.post('/api/v1/product/category', {categoryId: id});
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getProductDetailById = async (id) => {
    try {
        const res = await request.post('/api/v1/product/detail', {productId: id});
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getToCartItem = async (cartId) => {
    try {
        const res = await request.get('/api/v1/product/cart-item', {
            params: {
                cartId,
            }
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const addToCartItem = async (cartId, productSizeId, quantity, price, note) => {
    try {
        const res = await request.post('/api/v1/product/cart-item', {
            cartId,
            productSizeId, 
            quantity, 
            price,
            note,
        });
        return res.data;
    } catch (error) {
        return error;
    }
}