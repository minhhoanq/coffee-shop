import request from "../utils/request"


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
        return response; 
    } catch (error) {
        return error;
    }
}