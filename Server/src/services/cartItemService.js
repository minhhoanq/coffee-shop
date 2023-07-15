const db = require("../models");

const postAddToCartItem = ({cartId, productSizeId, quantity, price, note}) => new Promise(async (resolve, reject) => {
    try {
        const existCartId = await db.Cart_Item.findOne({where: cartId});
        const existProductSizeId = await db.Cart_Item.findOne({where: productSizeId});

        if(existCartId && existProductSizeId) {
            reject({
                err: 1,
                msg: "Exist Cart and Product",
            });
            return;
        };

        const newCartItem = {
            cartId,
            productSizeId,
            quantity,
            price,
            note
        };

        const response = await db.Cart_Item.create(newCartItem);

        resolve({
            err: response ? 0 : 1,
            mes: response ? "Got it" : "Can't found product",
            productData: response,
        });
    } catch (error) {
        reject(error);
    }
});

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

module.exports = { postAddToCartItem, getCartItemByID};
