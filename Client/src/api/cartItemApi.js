import request from "../utils/request"

export const getAllCartItem = async() => {
    const response = await request.get('/api/v1/cart-item');
    return response.data;
}

export const createCartItem = async({productSizeId, quantity, price, note})=> {
    try {
        const response = await request.post('/api/v1/cart-item' ,
        {
            productSizeId, 
            quantity, 
            price,
            note,
        });
        return response.data; 
    } catch (error) {
        return error;
    }
}

export const deleteCartItem = async( productSizeId) => {
    try {
        const response = await request.delete('/api/v1/cart-item', {
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