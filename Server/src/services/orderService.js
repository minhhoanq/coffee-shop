const db = require("../models");

const getAllOrderService = () => new Promise(async(resolve, reject) => {
    try {
        const orderData = await db.Order.findAll({
            where: {},
            include: [
                {
                    model: db.Status,
                    as: 'statusData',
                    attributes: ['id',
                                'statusName'],
                },
                {
                    model: db.Cart_Item,
                    // as: 'statusData',
                    attributes: ['id',
                                'cartId', 'productSizeId', 'quantity', 'price'],
                    include: [
                        {
                            model: db.Product_Size,
                            as: 'productSizeData',
                            attributes: ['id',
                                        'productId'],
                            include: [
                                {
                                    model: db.Product,
                                    as: 'productData',
                                    attributes: ['id',
                                                'productName'],
                                },
                                {
                                    model: db.Size,
                                    as: 'sizeData',
                                    attributes: ['id',
                                                'sizeName'],
                                },
                            ]
                        },
                    ]
                },
            ]
        });

        resolve({
            data: orderData,
        })
    } catch (error) {
        reject(error)
    }
});

const createOrder = (data) => new Promise(async (resolve, reject) => {
    try {
        const {couponsId, statusId, price, } = data;

        

        resolve({
            err: 0,
            mes: "Check"
        })
    } catch (error) {
        reject(error)
    }
})

module.exports = { getAllOrderService, createOrder }
