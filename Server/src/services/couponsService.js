const { Op } = require("sequelize");
const db = require('../models');

const getAllBillCouponsService = () => new Promise(async(resolve, reject) => {
    try {

        const getAllBillCoupons = await db.Coupons.findAll();

        resolve({
            err: 0,
            mes: "Check",
            data: getAllBillCoupons
        })
    } catch (error) {
        reject(error)
    }
})

module.exports = { getAllBillCouponsService };