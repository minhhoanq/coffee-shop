import request from '../utils/request';

export const getAllPaymentMethos = async() => {
    const response = await request.get('/api/v1/paymentmethods');

    return response.data;
}