const db = require("../models");

const getCartItemByID = ({cartId}) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Cart_Item.findAll({
            where: {cartId: cartId},
            include: [
                {
                    model: db.Product_Size,
                    as: 'productSizeData',
                    attributes: ['id', 'productId', 'sizeId'],
                    include: [
                        {
                            model: db.Product,
                            as: 'productData',
                            attributes: ['id', 'productName', 'price', 'productDescription', 'productImg'],
                        },
                        {
                            model: db.Size,
                            as: 'sizeData',
                            attributes: ['id', 'sizeName'],
                        }
                    ]
                },
                {
                    model: db.Cart,
                    as: 'cartData',
                    attributes: ['id', 'userId'],
                }
            ]
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? "Got" : "Can't found product",
            productData: response   
        })
    } catch (error) {
        reject(error);
    }
})

module.exports = {getCartItemByID};
