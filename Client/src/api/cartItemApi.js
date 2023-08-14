import request from "../utils/request"

export const createCartItem = async(accessToken, {productSizeId, quantity, price, note})=> {
    try {
        const response = await request.post('/api/v1/cart-item' ,
        {
            productSizeId, 
            quantity, 
            price,
            note,
        }, {
            headers:({
                token: `Bearer ${accessToken}`
            })
        });
        return response.data; 
    } catch (error) {
        return error;
    }
}

export const deleteCartItem = async(accessToken, productSizeId) => {
    try {
        const response = await request.delete('/api/v1/cart-item', {
            headers:({
                token: `Bearer ${accessToken}`
            }),
            data: {
                productSizeId
            }
        });
        return response.data; 
    } catch (error) {
        return error;
    }
}

export const deleteAllCartItem = async(accessToken) => {
    try {
        const response = await request.delete('/api/v1/cart-item/delete-all', {
            headers:({
                token: `Bearer ${accessToken}`
            }),
        });
        return response.data; 
    } catch (error) {
        return error;
    }
}