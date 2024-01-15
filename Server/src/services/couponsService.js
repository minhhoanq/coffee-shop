const { Op } = require("sequelize");
const db = require('../models');
const getPrice = require("../services/coupons");

const getAllBillCouponsService = () => new Promise(async(resolve, reject) => {
    try {

        const getAllBillCoupons = await db.Coupons.findAll();

        resolve({
            err: getPrice(60000, "don60k10p"),
            mes: "Check",
            data: getAllBillCoupons
        })
    } catch (error) {
        reject(error)
    }
});


module.exports = { getAllBillCouponsService };