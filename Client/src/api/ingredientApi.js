import request from '../utils/request';

export const getAllIngredient = async({page, limit, order, name, unitId}) => {
    const response = await request.get('/api/v1/ingredient', {
        params: {
            page,
            limit,
            order,
            name,
            unitId
        }
    });

    return response.data;
}