import request from "../utils/request";

export const getAllBillCoupons = async() => {
    const res = await request.get('/api/v1/coupons');

    return res.data;
}