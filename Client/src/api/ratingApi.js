import request from "../utils/request";

export const createRatingProduct = async(slug, star, comment) => {
    try {
        const response = await request.post(`/api/v1/product/ratings/${slug}`, 
            {
                star,
                comment
            }
        )
        return response;
    } catch (error) {
        return error;
    }
}

export const deleteRatingProduct = async(slug) => {
    try {
        const response = await request.delete(`/api/v1/product/ratings/${slug}`)
        return response;
    } catch (error) {
        return error;
    }
}