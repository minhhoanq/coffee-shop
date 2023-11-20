import request from "../utils/request";

export const getAllProduct = async () => {
    try {
        const res = await request.get('/api/v1/product');
        return res.data;
    } catch (error) {
        return error;
    }
}

export const getProducts = async (name, order, page, limit, categoryId, price, id, sold) => {
    try {
        const res = await request.get('/api/v1/product', {
            params: {
                name,
                order,
                page,
                limit,
                categoryId,
                price,
                // id,
                // sold
            }
        });
        return res.data;
    } catch (error) {
        return error;
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

export const getProductDetailBySlug = async (slug) => {
    try {
        const res = await request.get(`/api/v1/product/${slug}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getToCartItem = async (accessToken) => {
    try {
        const res = await request.get('/api/v1/cart-item',
        {
            headers:({
                token: `Bearer ${accessToken}`
            })
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getAllRatingsProduct = async (slug) => {
    try {
        const res = await request.get(`/api/v1/product/ratings/${slug}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export const getAllProductRecommend = async () => {
    const res = await request.get('/api/v1/product/recommended-system')
    return res.data;
}