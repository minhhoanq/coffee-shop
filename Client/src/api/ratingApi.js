import request from "../utils/request";

export const createRatingProduct = async(accessToken, slug, star, comment) => {
    try {
        const response = await request.post(`/api/v1/product/ratings/${slug}`, 
            {
                star,
                comment
            }, {
                headers: {
                    token: `Bearer ${accessToken}`
                }
            }
        )
        return response;
    } catch (error) {
        return error;
    }
}

export const deleteRatingProduct = async(accessToken, slug) => {
    try {
        const response = await request.delete(`/api/v1/product/ratings/${slug}`,{
                headers: {
                    token: `Bearer ${accessToken}`
                }
            }
        )
        return response;
    } catch (error) {
        return error;
    }
}