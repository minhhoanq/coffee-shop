import request from '../utils/request';

export const getAllIngredient = async() => {
    const response = await request.get('/api/v1/ingredient');

    return response.data;
}