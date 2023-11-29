const db = require("../models");

const getAllOrderService = () => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Order.findAll({
            where: {},
            include: [
                {
                    model: db.Status,
                    as: 'statusData',
                    attributes: ['id',
                                'statusName'],
                }
            ]
        });

        resolve({
            data: response
        })
    } catch (error) {
        reject(error)
    }
});

module.exports = { getAllOrderService }
