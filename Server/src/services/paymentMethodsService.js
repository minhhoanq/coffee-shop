const db = require("../models");

const getAllPaymentMethodsService = () => new Promise(async(resolve, reject) => {
    try {
        const get = await db.PaymentMethods.findAll();

        resolve({
            error: get ? 0 : 1,
            mes: get ? "Lấy thành công" : "Lỗi, hãy thử lại sau!",
            data: get
        })
    } catch (error) {
        reject(error)
    }
})

module.exports = { getAllPaymentMethodsService }